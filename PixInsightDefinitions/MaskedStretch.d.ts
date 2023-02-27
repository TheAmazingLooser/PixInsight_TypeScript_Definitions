//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class MaskedStretch extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh: number;
    backgroundLow: number;
    backgroundReferenceViewId: string;
    clippingFraction: number;
    maskType: number;
    numberOfIterations: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    targetBackground: number;
    useROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MaskedStretch?: MaskedStretch);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static backgroundHigh: number;
    static backgroundLow: number;
    static backgroundReferenceViewId: string;
    static clippingFraction: number;
    static maskType: number;
    static numberOfIterations: number;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static targetBackground: number;
    static useROI: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    MaskType_Intensity;
    MaskType_Value;
}
