import * as ts from 'typescript';

function transformClassDeclaration(context: ts.TransformationContext): ts.Transformer<ts.SourceFile> {
    return (sourceFile: ts.SourceFile): ts.SourceFile => {
        const visitor: ts.Visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
            // Transformiere nur ClassDeclaration Knoten
            if (ts.isClassDeclaration(node)) {
                return transformClass(node);
            }
            return ts.visitEachChild(node, visitor, context);
        };

        const result = ts.visitNode(sourceFile, visitor);
        // Stelle sicher, dass das Ergebnis immer ein SourceFile ist
        return result as ts.SourceFile;
    };
}

function isSuperCall(statement: ts.Statement): boolean {
    // Überprüfe, ob das Statement ein Aufruf von super() ist
    return ts.isExpressionStatement(statement) &&
           ts.isCallExpression(statement.expression) &&
           statement.expression.expression.kind === ts.SyntaxKind.SuperKeyword;
}

function transformClass(classNode: ts.ClassDeclaration): ts.Node[] {
    const className = classNode.name?.text || 'UnnamedClass';

    // Ermittle die Basisklasse
    const baseClass = classNode.heritageClauses
        ?.find(clause => clause.token === ts.SyntaxKind.ExtendsKeyword)
        ?.types[0].expression.getText();

    // Wenn keine Basisklasse vorhanden ist, handle entsprechend
    let bodyStatements: ts.Statement[] = [];
    if (baseClass) {
        bodyStatements = [
            ts.factory.createExpressionStatement(ts.factory.createAssignment(
                ts.factory.createPropertyAccessExpression(ts.factory.createThis(), '__base__'),
                ts.factory.createIdentifier(baseClass)
            )),
            ts.factory.createIfStatement(
                ts.factory.createBinaryExpression(
                    ts.factory.createIdentifier('parent'),
                    ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
                    ts.factory.createIdentifier('undefined')
                ),
                ts.factory.createExpressionStatement(ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(ts.factory.createThis(), '__base__'),
                    undefined,
                    []
                )),
                ts.factory.createExpressionStatement(ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(ts.factory.createThis(), '__base__'),
                    undefined,
                    [ts.factory.createIdentifier('parent')]
                ))
            )
        ];
    }

    // Initialisiere ein Array für die Statements im Funktionskörper
    

    const existingConstructor = classNode.members.find(member => 
        ts.isConstructorDeclaration(member)
    ) as ts.ConstructorDeclaration | undefined;
    if (existingConstructor && existingConstructor.body) {
        const constructorBodyStatements = existingConstructor.body.statements.filter(statement => 
            !isSuperCall(statement)
        );

        // Füge die gefilterten Statements des Konstruktors am Ende des Klassenkörpers ein
        bodyStatements.push(...constructorBodyStatements);
    }

    // Bearbeite jede Methode in der Klasse
    classNode.members.forEach(member => {
        if (ts.isMethodDeclaration(member) && member.name && ts.isIdentifier(member.name)) {
            const methodName = member.name.text;
            const methodFunction = ts.factory.createPropertyAssignment(
                methodName,
                ts.factory.createFunctionExpression(
                    undefined, // Modifizierer
                    undefined, // Asterisk-Token
                    undefined, // Funktionsname
                    undefined, // Typ-Parameter
                    member.parameters, // Parameter
                    undefined, // Rückgabetyp
                    member.body || ts.factory.createBlock([]) // Körper der Methode
                )
            );
            bodyStatements.push(ts.factory.createExpressionStatement(
                ts.factory.createAssignment(
                    ts.factory.createPropertyAccessExpression(ts.factory.createThis(), methodName),
                    methodFunction.initializer
                )
            ));
        } else if (ts.isMethodDeclaration(member) || (ts.isPropertyDeclaration(member) && member.initializer && ts.isArrowFunction(member.initializer))) {
            const methodName = member.name.getText();
            const methodBody = ts.isMethodDeclaration(member) ? member.body : (member.initializer as ts.ArrowFunction).body;
            const parameters = ts.isMethodDeclaration(member) ? member.parameters : (member.initializer as ts.ArrowFunction).parameters;

            // Erstelle die Funktionszuweisung
            const functionAssignment = ts.factory.createAssignment(
                ts.factory.createPropertyAccessExpression(ts.factory.createThis(), methodName),
                ts.factory.createFunctionExpression(
                    undefined, // Modifizierer
                    undefined, // Asterisk-Token
                    undefined, // Funktionsname
                    undefined, // Typ-Parameter
                    parameters, // Parameter
                    undefined, // Rückgabetyp
                    ts.isBlock(methodBody) ? methodBody : ts.factory.createBlock([ts.factory.createReturnStatement(methodBody)])
                )
            );

            // Füge die Funktionszuweisung in die Liste der Statements ein
            bodyStatements.push(ts.factory.createExpressionStatement(functionAssignment));
        }
    });

    // Erstelle eine Funktionserklärung mit dem Klassennamen
    const functionDeclaration = ts.factory.createFunctionDeclaration(
        undefined, // Modifizierer
        undefined, // Asterisk-Token für Generatoren
        className, // Funktionsname
        undefined, // Typ-Parameter
        [ts.factory.createParameterDeclaration(undefined, undefined, 'parent')], // Parameter
        undefined, // Rückgabetyp
        ts.factory.createBlock(bodyStatements, true) // Körper der Funktion
    );

    if (baseClass)
    {
    // Abschließender Code für die Zuweisung
        const assignmentStatement = ts.factory.createExpressionStatement(
            ts.factory.createAssignment(
                ts.factory.createPropertyAccessExpression(
                    ts.factory.createIdentifier(className),
                    'prototype'
                ),
                ts.factory.createNewExpression(
                    ts.factory.createIdentifier(baseClass),
                    undefined,
                    []
                )
            )
        );
        return [functionDeclaration, assignmentStatement];
    }

    return [functionDeclaration];
}

function processClassAsSimpleFunction(classNode: ts.ClassDeclaration): ts.Statement[] {
    let bodyStatements: ts.Statement[] = [];

    // ... (Code zum Verarbeiten der Methoden und Eigenschaften der Klasse als einfache Funktion) ...

    return bodyStatements;
}

export { transformClassDeclaration };