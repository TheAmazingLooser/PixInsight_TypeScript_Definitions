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

    public assign(name: string, value: string): void;
    public assign(name: string, value: string, comment?: string): void;

    public toArray(): Array<any>;

    public toString(): string;

    public trim(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FITSKeyword;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
