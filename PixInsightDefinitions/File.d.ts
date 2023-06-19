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
    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public close(): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public create(path: string): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public createForWriting(path: string): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public flush(): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public open(path: string): void;
    /**
    DESCRIPTION
    @param path: String
    @param mode: uint32 = FileMode_Read|FileMode_Open

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public open(path: string, mode?: number /* FileMode_Read|FileMode_Open */): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public openForReadWrite(path: string): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public openForReading(path: string): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public openOrCreate(path: string): void;

    /**
    DESCRIPTION
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public outText(text: string): void;
    /**
    DESCRIPTION
    @param text: String
    @param dataType: int = DataType_String8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public outText(text: string, dataType?: number /* DataType_String8 */): void;

    /**
    DESCRIPTION
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public outTextLn(text: string): void;
    /**
    DESCRIPTION
    @param text: String
    @param dataType: int = DataType_String8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public outTextLn(text: string, dataType?: number /* DataType_String8 */): void;

    /**
    DESCRIPTION
    @param data_type: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(data_type: any): Object;
    /**
    DESCRIPTION
    @param data_type: any
    @param count: any = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(data_type: any, count?: any /* 1 */): Object;

    /**
    DESCRIPTION
    @param DataType_Float32Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Float32Array: any, length: number): Float32Array;

    /**
    DESCRIPTION
    @param DataType_Float64Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Float64Array: any, length: number): Float64Array;

    /**
    DESCRIPTION
    @param DataType_Int32Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Int32Array: any, length: number): Int32Array;

    /**
    DESCRIPTION
    @param DataType_Uint32Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Uint32Array: any, length: number): Uint32Array;

    /**
    DESCRIPTION
    @param DataType_Int16Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Int16Array: any, length: number): Int16Array;

    /**
    DESCRIPTION
    @param DataType_Uint16Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Uint16Array: any, length: number): Uint16Array;

    /**
    DESCRIPTION
    @param DataType_Int8Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Int8Array: any, length: number): Int8Array;

    /**
    DESCRIPTION
    @param DataType_Uint8Array: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Uint8Array: any, length: number): Uint8Array;

    /**
    DESCRIPTION
    @param DataType_Uint8ClampedArray: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Uint8ClampedArray: any, length: number): Uint8ClampedArray;

    /**
    DESCRIPTION
    @param DataType_ByteArray: any
    @param length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_ByteArray: any, length: number): ByteArray;

    /**
    DESCRIPTION
    @param DataType_Vector: any
    @param length: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Vector: any, length: number): Vector;

    /**
    DESCRIPTION
    @param DataType_Matrix: any
    @param rows: int
    @param cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public read(DataType_Matrix: any, rows: number, cols: number): Matrix;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rewind(): void;

    /**
    DESCRIPTION
    @param pos: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public seek(pos: number): number;
    /**
    DESCRIPTION
    @param pos: Number
    @param mode: int = SeekMode_FromCurrent

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public seek(pos: number, mode?: number /* SeekMode_FromCurrent */): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public seekEnd(): number;

    /**
    DESCRIPTION
    @param obj: Object
    @param dataType: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public write(obj: Object, dataType: number): void;

    /**
    DESCRIPTION
    @param obj: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public write(obj: Array<any>): void;

    /**
    DESCRIPTION
    @param obj: TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public write(obj: any /* TypedArray */): void;

    /**
    DESCRIPTION
    @param obj: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public write(obj: ByteArray): void;

    /**
    DESCRIPTION
    @param obj: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public write(obj: Vector): void;

    /**
    DESCRIPTION
    @param obj: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public write(obj: Matrix): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param filePath: String
    @param postFix: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static appendToName(filePath: string, postFix: string): string;

    /**
    DESCRIPTION
    @param filePath: String
    @param newExt: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static changeExtension(filePath: string, newExt: string): string;

    /**
    DESCRIPTION
    @param filePath: String
    @param newExt: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static changeSuffix(filePath: string, newExt: string): string;

    /**
    DESCRIPTION
    @param targetPath: String
    @param sourcePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static copyFile(targetPath: string, sourcePath: string): void;
    /**
    DESCRIPTION
    @param targetPath: String
    @param sourcePath: String
    @param progress: Function
    @param progressThis: Object = null

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static copyFile(targetPath: string, sourcePath: string, progress?: Function, progressThis?: Object /* null */): void;

    /**
    DESCRIPTION
    @param targetPath: String
    @param sourcePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static copyLink(targetPath: string, sourcePath: string): void;

    /**
    DESCRIPTION
    @param targetPath: String
    @param sourcePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static copyTimesAndPermissions(targetPath: string, sourcePath: string): void;

    /**
    DESCRIPTION
    @param dirPath: String
    @param createIntermediateDirs: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static createDirectory(dirPath: string, createIntermediateDirs: boolean /* true */): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static createFile(path: string): File;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static createFileForWriting(path: string): File;

    /**
    DESCRIPTION
    @param dirPath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static directoryExists(dirPath: string): boolean;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static exists(filePath: string): boolean;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractCompleteSuffix(filePath: string): string;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractDirectory(path: string): string;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractDrive(path: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractExtension(filePath: string): string;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractName(path: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractNameAndExtension(filePath: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractNameAndSuffix(filePath: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static extractSuffix(filePath: string): string;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static fileURI(path: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static findCompleteSuffix(filePath: string): number;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static findDrive(path: string): number;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static findExtension(filePath: string): number;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static findName(path: string): number;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static findSuffix(filePath: string): number;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static fullPath(path: string): string;

    /**
    DESCRIPTION
    @param directory: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getAvailableSpace(directory: string): number;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static isReadOnly(filePath: string): boolean;

    /**
    DESCRIPTION
    @param filePath: String
    @param newPath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static move(filePath: string, newPath: string): void;

    /**
    DESCRIPTION
    @param targetPath: String
    @param sourcePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static moveFile(targetPath: string, sourcePath: string): void;
    /**
    DESCRIPTION
    @param targetPath: String
    @param sourcePath: String
    @param progress: Function
    @param progressThis: Object = null

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static moveFile(targetPath: string, sourcePath: string, progress?: Function, progressThis?: Object /* null */): void;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static openFile(path: string): File;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static openFileForReading(path: string): File;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static openOrCreateFile(path: string): File;

    /**
    DESCRIPTION
    @param filePath: String
    @param preFix: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static prependToName(filePath: string, preFix: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static readFile(filePath: string): ByteArray;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static readLines(filePath: string): Array<any>;
    /**
    DESCRIPTION
    @param filePath: String
    @param options: int = ReadTextOptions_None

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static readLines(filePath: string, options?: number /* ReadTextOptions_None */): Array<any>;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static readTextFile(filePath: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static remove(filePath: string): void;

    /**
    DESCRIPTION
    @param dirPath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static removeDirectory(dirPath: string): void;

    /**
    DESCRIPTION
    @param path1: String
    @param path2: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sameDevice(path1: string, path2: string): boolean;

    /**
    DESCRIPTION
    @param path1: String
    @param path2: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sameFile(path1: string, path2: string): boolean;

    /**
    DESCRIPTION
    @param filePath: String
    @param permissions: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static setPermissions(filePath: string, permissions: number): void;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static setReadOnly(filePath: string): void;
    /**
    DESCRIPTION
    @param filePath: String
    @param readOnly: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static setReadOnly(filePath: string, readOnly?: boolean /* true */): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uniqueFileName(): string;
    /**
    DESCRIPTION
    @param directory: String = ""
    @param n: int = 8
    @param prefix: String = ""
    @param postfix: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uniqueFileName(directory?: string /* "" */, n?: number /* 8 */, prefix?: string /* "" */, postfix?: string /*  */): string;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static unixPathToWindows(path: string): string;

    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static windowsPathToUnix(path: string): string;

    /**
    DESCRIPTION
    @param filePath: String
    @param data: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static writeFile(filePath: string, data: ByteArray): void;

    /**
    DESCRIPTION
    @param filePath: String
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
