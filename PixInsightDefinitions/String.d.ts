//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class String {


    //-------------------------
    //-------Properties--------
    //-------------------------
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(value?: any /* ""*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public charAt(index: number): string;

    public charCodeAt(index: number): number;

    public concat(...s: any[]): string;

    public contains(searchValue: string): boolean;
    public contains(searchValue: string, fromIndex?: number): boolean;

    public endsWith(searchValue: string): boolean;
    public endsWith(searchValue: string, length?: number): boolean;

    public indexOf(searchValue: string): number;
    public indexOf(searchValue: string, fromIndex?: number): number;

    public lastIndexOf(searchValue: string): number;
    public lastIndexOf(searchValue: string, fromIndex?: number): number;

    public localeCompare(compareString: string): number;

    public match(exp: RegExp): Array<any>;

    public quote(): string;

    public repeat(n: number): string;

    public replace(RegExp: RegExp  |  string, string: string  |  Function): string;
    public replace(RegExp: RegExp  |  string, string: string  |  Function, flags?: string): string;

    public search(exp: RegExp): number;

    public slice(begin: number): string;
    public slice(begin: number, end?: number): string;

    public split(): Array<any>;
    public split(separator?: string, limit?: number): Array<any>;

    public startsWith(searchValue: string): boolean;
    public startsWith(searchValue: string, fromIndex?: number): boolean;

    public substr(start: number): string;
    public substr(start: number, length?: number): string;

    public substring(startIndex: number): string;
    public substring(startIndex: number, endIndex?: number): string;

    public toBoolean(): boolean;

    public toDouble(): number;

    public toFloat(): number;

    public toInt(): number;
    public toInt(base?: number /* 0 */): number;

    public toLocaleLowerCase(): string;

    public toLocaleUpperCase(): string;

    public toLowerCase(): string;

    public toNumber(): number;

    public toSource(): string;

    public toString(): string;

    public toUInt(): number;
    public toUInt(base?: number /* 0 */): number;

    public toUpperCase(): string;

    public trim(): string;

    public trimLeft(): string;

    public trimRight(): string;

    public tryToBoolean(): boolean | void;

    public tryToDouble(): number | void;

    public tryToFloat(): number | void;

    public tryToInt(): number | void;
    public tryToInt(base?: number /* 0 */): number | void;

    public tryToNumber(): number | void;

    public tryToUInt(): number | void;
    public tryToUInt(base?: number /* 0 */): number | void;

    public unquote(): string;

    public valueOf(): string;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromCharCode(...c: any[]): string;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: string;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
