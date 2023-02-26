//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FITSKeyword {


    //-------------------------
    //-------Properties--------
    //-------------------------
    comment: string;
    isBoolean: boolean;
    isNull: boolean;
    isNumeric: boolean;
    isString: boolean;
    name: string;
    numericValue: number;
    strippedValue: string;
    value: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(name: string, value: string, comment?: string);
    constructor(k: FITSKeyword);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(k: FITSKeyword): void;

    public assign(name: string, value: string, comment?: string): void;

    public toArray(): Array;

    public toString(): string;

    public trim(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static comment: string;
    static isBoolean: boolean;
    static isNull: boolean;
    static isNumeric: boolean;
    static isString: boolean;
    static name: string;
    static numericValue: number;
    static strippedValue: string;
    static value: string;
}
