//-------------------------
//--------Constants--------
//-------------------------


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


    //-------------------------
    //--------constants--------
    //-------------------------
    PIP;
    SMI;
}
