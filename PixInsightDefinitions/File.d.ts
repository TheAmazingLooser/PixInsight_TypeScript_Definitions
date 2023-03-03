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
    constructor(path?: string, mode?: number /* FileMode_Read|FileMode_Open*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public close(): void;

    public create(path: string): void;

    public createForWriting(path: string): void;

    public flush(): void;

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

    public rewind(): void;

    public seek(pos: number): number;
    public seek(pos: number, mode: number /* SeekMode_FromCurrent*/): number;

    public seekEnd(): number;

    public write(obj: Object, dataType: number): void;

    public write(obj: Array<any>): void;

    public write(obj: any /* TypedArray */): void;

    public write(obj: ByteArray): void;

    public write(obj: Vector): void;

    public write(obj: Matrix): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static appendToName(filePath: string, postFix: string): string;

    public static changeExtension(filePath: string, newExt: string): string;

    public static changeSuffix(filePath: string, newExt: string): string;

    public static copyFile(targetPath: string, sourcePath: string): void;
    public static copyFile(targetPath: string, sourcePath: string, progress: Function): void;
    public static copyFile(targetPath: string, sourcePath: string, progress: Function, progressThis: Object /* null*/): void;

    public static copyLink(targetPath: string, sourcePath: string): void;

    public static copyTimesAndPermissions(targetPath: string, sourcePath: string): void;

    public static createDirectory(dirPath: string, createIntermediateDirs: boolean /* true*/): void;

    public static createFile(path: string): File;

    public static createFileForWriting(path: string): File;

    public static directoryExists(dirPath: string): boolean;

    public static exists(filePath: string): boolean;

    public static extractCompleteSuffix(filePath: string): string;

    public static extractDirectory(path: string): string;

    public static extractDrive(path: string): string;

    public static extractExtension(filePath: string): string;

    public static extractName(path: string): string;

    public static extractNameAndExtension(filePath: string): string;

    public static extractNameAndSuffix(filePath: string): string;

    public static extractSuffix(filePath: string): string;

    public static fileURI(path: string): string;

    public static findCompleteSuffix(filePath: string): number;

    public static findDrive(path: string): number;

    public static findExtension(filePath: string): number;

    public static findName(path: string): number;

    public static findSuffix(filePath: string): number;

    public static fullPath(path: string): string;

    public static getAvailableSpace(directory: string): number;

    public static isReadOnly(filePath: string): boolean;

    public static move(filePath: string, newPath: string): void;

    public static moveFile(targetPath: string, sourcePath: string): void;
    public static moveFile(targetPath: string, sourcePath: string, progress: Function): void;
    public static moveFile(targetPath: string, sourcePath: string, progress: Function, progressThis: Object /* null*/): void;

    public static openFile(path: string): File;

    public static openFileForReading(path: string): File;

    public static openOrCreateFile(path: string): File;

    public static prependToName(filePath: string, preFix: string): string;

    public static readFile(filePath: string): ByteArray;

    public static readLines(filePath: string): Array<any>;
    public static readLines(filePath: string, options: number /* ReadTextOptions_None*/): Array<any>;

    public static readTextFile(filePath: string): string;

    public static remove(filePath: string): void;

    public static removeDirectory(dirPath: string): void;

    public static sameDevice(path1: string, path2: string): boolean;

    public static sameFile(path1: string, path2: string): boolean;

    public static setPermissions(filePath: string, permissions: number): void;

    public static setReadOnly(filePath: string): void;
    public static setReadOnly(filePath: string, readOnly: boolean /* true*/): void;

    public static uniqueFileName(): string;
    public static uniqueFileName(directory: string /* ""*/): string;
    public static uniqueFileName(directory: string /* ""*/, n: number /* 8*/): string;
    public static uniqueFileName(directory: string /* ""*/, n: number /* 8*/, prefix: string /* ""*/): string;
    public static uniqueFileName(directory: string /* ""*/, n: number /* 8*/, prefix: string /* ""*/, postfix: string /* */): string;

    public static unixPathToWindows(path: string): string;

    public static windowsPathToUnix(path: string): string;

    public static writeFile(filePath: string, data: ByteArray): void;

    public static writeTextFile(filePath: string, text: string): void;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: File;
    static systemTempDirectory: string;
    static systemCacheDirectory: string;
    static homeDirectory: string;
    static currentWorkingDirectory: string;
    static rootDirectory: string;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
