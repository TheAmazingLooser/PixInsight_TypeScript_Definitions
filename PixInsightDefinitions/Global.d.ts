//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Global {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    public static Number(value: void): number;

    public static Object(value: void): Object;

    public static cerr(text: string): void;

    public static cflush(): void;

    public static cout(text: string): void;

    public static decodeURI(encodedURI: string): string;

    public static decodeURIComponent(encodedURI: string): string;

    public static encodeURI(URI: string): string;

    public static encodeURIComponent(uriComp: string): string;

    public static eval(s: string, object?: any): Object;

    public static format(fmt: string, value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any): string;

    public static gc(hardGC?: boolean /* true*/): void;

    public static gcBytes(): number;

    public static getEnvironmentVariable(varName: string): string;

    public static isFinite(n: number): boolean;

    public static isNaN(value: void): boolean;

    public static loadResource(filePath: string, rootPath?: string): boolean;

    public static matchesWildSpecification(what: string, wildPattern: string): boolean;

    public static msleep(milliseconds: number): void;

    public static parseFloat(s: string): number;

    public static parseInt(s: string, radix?: number): number;

    public static processEvents(excludeUserInputEvents?: boolean /* false*/, iterations?: number /* 1*/): void;

    public static replaceEnvironmentVariables(s: string): string;

    public static searchDirectory(dirPath: string, recursive?: boolean /* false*/): Array<any>;

    public static sleep(seconds: number): void;

    public static systemOffsetFromUTC(date?: Date): number;

    public static unloadResource(filePath: string, rootPath?: string): boolean;



    //-------------------------
    //----static Properties----
    //-------------------------
}
