//-------------------------
//--------Constants--------
//-------------------------
/* declare const PIP: ExponentialTransformation.prototype.PIP;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SMI: ExponentialTransformation.prototype.SMI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ExponentialTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    functionType: number;
    luminanceMask: boolean;
    order: number;
    sigma: number;
    useLightnessMask: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ExponentialTransformation?: ExponentialTransformation);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static functionType: number;
    static luminanceMask: boolean;
    static order: number;
    static sigma: number;
    static useLightnessMask: boolean;
}
