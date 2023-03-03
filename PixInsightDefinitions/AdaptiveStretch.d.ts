//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AdaptiveStretch extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    maxCurvePoints: number;
    noiseThreshold: number;
    protection: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    useProtection: boolean;
    useROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AdaptiveStretch?: AdaptiveStretch);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static maxCurvePoints: number;
    static noiseThreshold: number;
    static protection: number;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static useProtection: boolean;
    static useROI: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
