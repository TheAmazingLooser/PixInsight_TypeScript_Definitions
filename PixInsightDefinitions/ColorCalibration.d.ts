//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh: number;
    backgroundLow: number;
    backgroundROIX0: number;
    backgroundROIX1: number;
    backgroundROIY0: number;
    backgroundROIY1: number;
    backgroundReferenceViewId: string;
    backgroundUseROI: boolean;
    manualBlueFactor: number;
    manualGreenFactor: number;
    manualRedFactor: number;
    manualWhiteBalance: boolean;
    noiseLayers: number;
    outputBackgroundReferenceMask: boolean;
    outputWhiteReferenceMask: boolean;
    structureDetection: boolean;
    structureLayers: number;
    whiteHigh: number;
    whiteLow: number;
    whiteROIX0: number;
    whiteROIX1: number;
    whiteROIY0: number;
    whiteROIY1: number;
    whiteReferenceViewId: string;
    whiteUseROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ColorCalibration?: ColorCalibration);


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
    static backgroundROIX0: number;
    static backgroundROIX1: number;
    static backgroundROIY0: number;
    static backgroundROIY1: number;
    static backgroundReferenceViewId: string;
    static backgroundUseROI: boolean;
    static manualBlueFactor: number;
    static manualGreenFactor: number;
    static manualRedFactor: number;
    static manualWhiteBalance: boolean;
    static noiseLayers: number;
    static outputBackgroundReferenceMask: boolean;
    static outputWhiteReferenceMask: boolean;
    static structureDetection: boolean;
    static structureLayers: number;
    static whiteHigh: number;
    static whiteLow: number;
    static whiteROIX0: number;
    static whiteROIX1: number;
    static whiteROIY0: number;
    static whiteROIY1: number;
    static whiteReferenceViewId: string;
    static whiteUseROI: boolean;
}
