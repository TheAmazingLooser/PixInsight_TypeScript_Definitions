//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class BackgroundNeutralization extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh: number;
    backgroundLow: number;
    backgroundReferenceViewId: string;
    mode: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    targetBackground: number;
    useROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(BackgroundNeutralization?: BackgroundNeutralization);


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
    static mode: number;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static targetBackground: number;
    static useROI: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    Rescale;
    RescaleAsNeeded;
    TargetBackground;
    Truncate;
}
