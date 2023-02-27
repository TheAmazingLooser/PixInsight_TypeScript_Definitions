//-------------------------
//--------Constants--------
//-------------------------
/* declare const Bit10: LocalHistogramEqualization.prototype.Bit10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bit12: LocalHistogramEqualization.prototype.Bit12;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bit8: LocalHistogramEqualization.prototype.Bit8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class LocalHistogramEqualization extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    circularKernel: boolean;
    histogramBins: number;
    radius: number;
    slopeLimit: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LocalHistogramEqualization: LocalHistogramEqualization);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amount: number;
    static circularKernel: boolean;
    static histogramBins: number;
    static radius: number;
    static slopeLimit: number;
}
