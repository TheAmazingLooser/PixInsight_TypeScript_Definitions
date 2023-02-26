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

    public concat(s2: string, s3: string, s4?: string, s5?: string, s6?: string, s7?: string, s8?: string, s9?: string, s10?: string, s11?: string): string;

    public contains(searchValue: string, fromIndex?: number): boolean;

    public endsWith(searchValue: string, length?: number): boolean;

    public indexOf(searchValue: string, fromIndex?: number): number;

    public lastIndexOf(searchValue: string, fromIndex?: number): number;

    public localeCompare(compareString: string): number;

    public match(exp: RegExp): Array;

    public quote(): string;

    public repeat(n: number): string;

    public replace(param_0: any, param_1: any, flags?: string): string;

    public search(exp: RegExp): number;

    public slice(begin: number, end?: number): string;

    public split(separator?: string, limit?: number): Array;

    public startsWith(searchValue: string, fromIndex?: number): boolean;

    public substr(start: number, length?: number): string;

    public substring(startIndex: number, endIndex?: number): string;

    public toBoolean(): boolean;

    public toDouble(): number;

    public toFloat(): number;

    public toInt(base?: number /* 0*/): number;

    public toLocaleLowerCase(): string;

    public toLocaleUpperCase(): string;

    public toLowerCase(): string;

    public toNumber(): number;

    public toSource(): string;

    public toString(): string;

    public toUInt(base?: number /* 0*/): number;

    public toUpperCase(): string;

    public trim(): string;

    public trimLeft(): string;

    public trimRight(): string;

    public tryToBoolean(): boolean | void;

    public tryToDouble(): number | void;

    public tryToFloat(): number | void;

    public tryToInt(base?: number /* 0*/): number | void;

    public tryToNumber(): number | void;

    public tryToUInt(base?: number /* 0*/): number | void;

    public unquote(): string;

    public valueOf(): string;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromCharCode(c1: number, c2?: number, c3?: number, c4?: number, c5?: number, c6?: number, c7?: number, c8?: number, c9?: number, c10?: number): string;



    //-------------------------
    //----static Properties----
    //-------------------------
    static length: number;
}
