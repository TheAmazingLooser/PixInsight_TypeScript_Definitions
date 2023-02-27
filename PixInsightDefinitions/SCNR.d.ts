//-------------------------
//--------Constants--------
//-------------------------
/* declare const AdditiveMask: SCNR.prototype.AdditiveMask;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AverageNeutral: SCNR.prototype.AverageNeutral;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Blue: SCNR.prototype.Blue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Green: SCNR.prototype.Green;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MaximumMask: SCNR.prototype.MaximumMask;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MaximumNeutral: SCNR.prototype.MaximumNeutral;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MinimumNeutral: SCNR.prototype.MinimumNeutral;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Red: SCNR.prototype.Red;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class SCNR extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    colorToRemove: number;
    preserveLightness: boolean;
    preserveLuminance: boolean;
    protectionMethod: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SCNR: SCNR);


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
    static colorToRemove: number;
    static preserveLightness: boolean;
    static preserveLuminance: boolean;
    static protectionMethod: number;
}
