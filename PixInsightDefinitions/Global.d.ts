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
    public Number(value: any): number;


    public Object(value: any): Object;


    public cerr(text: string): void;




    public cout(text: string): void;


    public decodeURI(encodedURI: string): string;


    public decodeURIComponent(encodedURI: string): string;


    public encodeURI(URI: string): string;


    public encodeURIComponent(uriComp: string): string;


    public eval(s: string): Object;
    public eval(s: string, object: object): Object;


    public format(fmt: string): string;
    public format(...value: any[]): string;


    public gc(): void;
    public gc(hardGC: boolean /* true*/): void;




    public getEnvironmentVariable(varName: string): string;


    public isFinite(n: number): boolean;


    public isNaN(value: any): boolean;


    public loadResource(filePath: string): boolean;
    public loadResource(filePath: string, rootPath: string): boolean;


    public matchesWildSpecification(what: string, wildPattern: string): boolean;


    public msleep(milliseconds: number): void;


    public parseFloat(s: string): number;


    public parseInt(s: string): number;
    public parseInt(s: string, radix: number): number;


    public processEvents(): void;
    public processEvents(excludeUserInputEvents: boolean /* false*/): void;
    public processEvents(excludeUserInputEvents: boolean /* false*/, iterations: number /* 1*/): void;


    public replaceEnvironmentVariables(s: string): string;


    public searchDirectory(dirPath: string): Array<any>;
    public searchDirectory(dirPath: string, recursive: boolean /* false*/): Array<any>;


    public sleep(seconds: number): void;


    public systemOffsetFromUTC(): number;
    public systemOffsetFromUTC(date: Date | string): number;


    public unloadResource(filePath: string): boolean;
    public unloadResource(filePath: string, rootPath: string): boolean;




    //-------------------------
    //----static Properties----
    //-------------------------
}
