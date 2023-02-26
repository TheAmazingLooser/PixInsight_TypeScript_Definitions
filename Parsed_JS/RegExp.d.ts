//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RegExp {


    //-------------------------
    //-------Properties--------
    //-------------------------
    global: boolean;
    ignoreCase: boolean;
    lastIndex: number;
    multiline: boolean;
    source: string;
    sticky: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(pattern: string, flags?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public exec(str?: string): Array;

    public propertyIsEnumerable(propertyName: string): boolean;

    public test(str?: string): boolean;

    public toLocaleString(): string;

    public toSource(): string;

    public toString(): string;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static global: boolean;
    static ignoreCase: boolean;
    static lastIndex: number;
    static multiline: boolean;
    static source: string;
    static sticky: boolean;
}
