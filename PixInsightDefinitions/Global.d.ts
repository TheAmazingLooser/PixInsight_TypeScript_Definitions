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
    public static Number(value: any): number;


    public static Object(value: any): Object;


    public static cerr(text: string): void;




    public static cout(text: string): void;


    public static decodeURI(encodedURI: string): string;


    public static decodeURIComponent(encodedURI: string): string;


    public static encodeURI(URI: string): string;


    public static encodeURIComponent(uriComp: string): string;


    public static eval(s: string): Object;
    public static eval(s: string, object: object): Object;


    public static format(fmt: string): string;
    public static format(...value: any[]): string;


    public static gc(): void;
    public static gc(hardGC: boolean /* true*/): void;




    public static getEnvironmentVariable(varName: string): string;


    public static isFinite(n: number): boolean;


    public static isNaN(value: any): boolean;


    public static loadResource(filePath: string): boolean;
    public static loadResource(filePath: string, rootPath: string): boolean;


    public static matchesWildSpecification(what: string, wildPattern: string): boolean;


    public static msleep(milliseconds: number): void;


    public static parseFloat(s: string): number;


    public static parseInt(s: string): number;
    public static parseInt(s: string, radix: number): number;


    public static processEvents(): void;
    public static processEvents(excludeUserInputEvents: boolean /* false*/): void;
    public static processEvents(excludeUserInputEvents: boolean /* false*/, iterations: number /* 1*/): void;


    public static replaceEnvironmentVariables(s: string): string;


    public static searchDirectory(dirPath: string): Array<any>;
    public static searchDirectory(dirPath: string, recursive: boolean /* false*/): Array<any>;


    public static sleep(seconds: number): void;


    public static systemOffsetFromUTC(): number;
    public static systemOffsetFromUTC(date: Date | string): number;


    public static unloadResource(filePath: string): boolean;
    public static unloadResource(filePath: string, rootPath: string): boolean;




    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
