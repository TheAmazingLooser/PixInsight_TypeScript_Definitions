//-------------------------
//--------Constants--------
//-------------------------
/* declare const MAX_VALUE: Number.prototype.MAX_VALUE;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MIN_VALUE: Number.prototype.MIN_VALUE;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NEGATIVE_INFINITY: Number.prototype.NEGATIVE_INFINITY;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NaN: Number.prototype.NaN;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const POSITIVE_INFINITY: Number.prototype.POSITIVE_INFINITY;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    public toExponential(fractionalDigits?: number): string;

    public toFixed(digits?: number): string;

    public toLocaleString(): string;

    public toPrecision(precision?: number): string;

    public toSource(): string;

    public toString(): string;

    public valueOf(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
}
