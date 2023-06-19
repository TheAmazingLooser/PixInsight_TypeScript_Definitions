//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Number {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(value?: any /* 0*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public toExponential(): string;
    public toExponential(fractionalDigits?: number): string;

    public toFixed(): string;
    public toFixed(digits?: number): string;

    public toLocaleString(): string;

    public toPrecision(): string;
    public toPrecision(precision?: number): string;

    public toSource(): string;

    public toString(): string;

    public valueOf(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: number;
    static NaN: number;
    static POSITIVE_INFINITY: number;
    static NEGATIVE_INFINITY: number;
    static MAX_VALUE: number;
    static MIN_VALUE: number;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    MAX_VALUE;
    MIN_VALUE;
    NEGATIVE_INFINITY;
    NaN;
    POSITIVE_INFINITY;
}
