//-------------------------
//--------Constants--------
//-------------------------
/* declare const Custom: Divide.prototype.Custom;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FixedValueZone: Divide.prototype.FixedValueZone;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ImageLinearization: Divide.prototype.ImageLinearization;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Maximum: Divide.prototype.Maximum;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Mean: Divide.prototype.Mean;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Median: Divide.prototype.Median;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Minimum: Divide.prototype.Minimum;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PlainDivision: Divide.prototype.PlainDivision;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const StatisticalValueZone: Divide.prototype.StatisticalValueZone;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Divide extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    customNormalization: number;
    flatId: string;
    highlightsAmount: number;
    highlightsContinuity: number;
    highlightsLimit: number;
    linearization: number;
    method: number;
    normalization: number;
    shadowsAmount: number;
    shadowsContinuity: number;
    shadowsLimit: number;
    statisticalDownLimit: number;
    statisticalUpLimit: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Divide: Divide);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static customNormalization: number;
    static flatId: string;
    static highlightsAmount: number;
    static highlightsContinuity: number;
    static highlightsLimit: number;
    static linearization: number;
    static method: number;
    static normalization: number;
    static shadowsAmount: number;
    static shadowsContinuity: number;
    static shadowsLimit: number;
    static statisticalDownLimit: number;
    static statisticalUpLimit: number;
}
