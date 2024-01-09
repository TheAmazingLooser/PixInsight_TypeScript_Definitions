import * as ts from 'typescript';
import { transformClassDeclaration } from './Transformer';
import * as fs from 'fs';
import * as path from 'path';
const glob = require('glob');

function readTsConfig(tsConfigPath: string) {
    const configFileText = fs.readFileSync(tsConfigPath, 'utf8');
    const result = ts.parseConfigFileTextToJson(tsConfigPath, configFileText);

    if (result.error) {
        throw new Error(ts.flattenDiagnosticMessageText(result.error.messageText, '\n'));
    }

    const parsedCommandLine = ts.parseJsonConfigFileContent(result.config, ts.sys, path.dirname(tsConfigPath));

    return parsedCommandLine;
}

function compile(tsConfigPath: string): void {
    const conf = readTsConfig(tsConfigPath);
    const options = conf.options;

    // conf.raw["paths"]["*"] is relative to tsconfig.json
    const paths = conf.raw["paths"]["*"];
    const basePath = path.dirname(tsConfigPath);
    const resolvedPaths = paths.map((p: string) => path.resolve(basePath, p));

    // load all wildcard files from resolvedPaths (which can look like this: 'D:/PI Scripts/Test TypeScript/PixInsightDefinitions/*.d.ts')
    const files = glob.sync(resolvedPaths[0].replace(/\\/g, '/'));

    const program = ts.createProgram(conf.fileNames, options)

    const emitResult = program.emit(
        undefined, 
        undefined, 
        undefined, 
        undefined, 
        {
            before: [transformClassDeclaration],
        }
    );

    const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    allDiagnostics.forEach(diagnostic => {
        if (diagnostic.file) {
            const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
            const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
            console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
        } else {
            console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
        }
    });

    const exitCode = emitResult.emitSkipped ? 1 : 0;
    console.log(`Process exiting with code '${exitCode}'.`);
    process.exit(exitCode);
}

// Lese den Dateipfad aus argv[2] und den optionalen tsconfig-Pfad aus argv[3]
const tsConfigPath = process.argv[2];
compile(tsConfigPath);
