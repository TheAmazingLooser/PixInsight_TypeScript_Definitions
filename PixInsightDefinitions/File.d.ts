//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class File {


    //-------------------------
    //-------Properties--------
    //-------------------------
    canRead: boolean;
    canWrite: boolean;
    isEOF: boolean;
    isOpen: boolean;
    mode: number;
    path: string;
    position: number;
    size: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(path: string, mode: number /* FileMode_Read|FileMode_Open*/);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public create(path: string): void;


    public createForWriting(path: string): void;




    public open(path: string): void;
    public open(path: string, mode: number /* FileMode_Read|FileMode_Open*/): void;


    public openForReadWrite(path: string): void;


    public openForReading(path: string): void;


    public openOrCreate(path: string): void;


    public outText(text: string): void;
    public outText(text: string, dataType: number /* DataType_String8*/): void;


    public outTextLn(text: string): void;
    public outTextLn(text: string, dataType: number /* DataType_String8*/): void;


    public read(data_type: any): Object;
    public read(data_type: any, count: any /* 1*/): Object;


    public read(DataType_Float32Array: any, length: number): Float32Array;


    public read(DataType_Float64Array: any, length: number): Float64Array;


    public read(DataType_Int32Array: any, length: number): Int32Array;


    public read(DataType_Uint32Array: any, length: number): Uint32Array;


    public read(DataType_Int16Array: any, length: number): Int16Array;


    public read(DataType_Uint16Array: any, length: number): Uint16Array;


    public read(DataType_Int8Array: any, length: number): Int8Array;


    public read(DataType_Uint8Array: any, length: number): Uint8Array;


    public read(DataType_Uint8ClampedArray: any, length: number): Uint8ClampedArray;


    public read(DataType_ByteArray: any, length: number): ByteArray;


    public read(DataType_Vector: any, length: number): Vector;


    public read(DataType_Matrix: any, rows: number, cols: number): Matrix;




    public seek(pos: number): number;
    public seek(pos: number, mode: number /* SeekMode_FromCurrent*/): number;




    public write(obj: Object, dataType: number): void;


    public write(obj: Array<any>): void;


    public write(obj: any /* TypedArray */): void;


    public write(obj: ByteArray): void;


    public write(obj: Vector): void;


    public write(obj: Matrix): void;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public appendToName(filePath: string, postFix: string): string;


    public changeExtension(filePath: string, newExt: string): string;


    public changeSuffix(filePath: string, newExt: string): string;


    public copyFile(targetPath: string, sourcePath: string): void;
    public copyFile(targetPath: string, sourcePath: string, progress: Function): void;
    public copyFile(targetPath: string, sourcePath: string, progress: Function, progressThis: Object /* null*/): void;


    public copyLink(targetPath: string, sourcePath: string): void;


    public copyTimesAndPermissions(targetPath: string, sourcePath: string): void;


    public createDirectory(dirPath: string, createIntermediateDirs: boolean /* true*/): void;


    public createFile(path: string): File;


    public createFileForWriting(path: string): File;


    public directoryExists(dirPath: string): boolean;


    public exists(filePath: string): boolean;


    public extractCompleteSuffix(filePath: string): string;


    public extractDirectory(path: string): string;


    public extractDrive(path: string): string;


    public extractExtension(filePath: string): string;


    public extractName(path: string): string;


    public extractNameAndExtension(filePath: string): string;


    public extractNameAndSuffix(filePath: string): string;


    public extractSuffix(filePath: string): string;


    public fileURI(path: string): string;


    public findCompleteSuffix(filePath: string): number;


    public findDrive(path: string): number;


    public findExtension(filePath: string): number;


    public findName(path: string): number;


    public findSuffix(filePath: string): number;


    public fullPath(path: string): string;


    public getAvailableSpace(directory: string): number;


    public isReadOnly(filePath: string): boolean;


    public move(filePath: string, newPath: string): void;


    public moveFile(targetPath: string, sourcePath: string): void;
    public moveFile(targetPath: string, sourcePath: string, progress: Function): void;
    public moveFile(targetPath: string, sourcePath: string, progress: Function, progressThis: Object /* null*/): void;


    public openFile(path: string): File;


    public openFileForReading(path: string): File;


    public openOrCreateFile(path: string): File;


    public prependToName(filePath: string, preFix: string): string;


    public readFile(filePath: string): ByteArray;


    public readLines(filePath: string): Array<any>;
    public readLines(filePath: string, options: number /* ReadTextOptions_None*/): Array<any>;


    public readTextFile(filePath: string): string;


    public remove(filePath: string): void;


    public removeDirectory(dirPath: string): void;


    public sameDevice(path1: string, path2: string): boolean;


    public sameFile(path1: string, path2: string): boolean;


    public setPermissions(filePath: string, permissions: number): void;


    public setReadOnly(filePath: string): void;
    public setReadOnly(filePath: string, readOnly: boolean /* true*/): void;


    public uniqueFileName(): string;
    public uniqueFileName(directory: string /* ""*/): string;
    public uniqueFileName(directory: string /* ""*/, n: number /* 8*/): string;
    public uniqueFileName(directory: string /* ""*/, n: number /* 8*/, prefix: string /* ""*/): string;
    public uniqueFileName(directory: string /* ""*/, n: number /* 8*/, prefix: string /* ""*/, postfix: string /* */): string;


    public unixPathToWindows(path: string): string;


    public windowsPathToUnix(path: string): string;


    public writeFile(filePath: string, data: ByteArray): void;


    public writeTextFile(filePath: string, text: string): void;




    //-------------------------
    //----static Properties----
    //-------------------------
    static canRead: boolean;
    static canWrite: boolean;
    static isEOF: boolean;
    static isOpen: boolean;
    static mode: number;
    static path: string;
    static position: number;
    static size: number;
}
