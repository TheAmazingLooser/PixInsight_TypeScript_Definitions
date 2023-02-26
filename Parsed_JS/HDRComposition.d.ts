//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class HDRComposition extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoExposures: boolean;
    closePreviousImages: boolean;
    fittingRectX0: number;
    fittingRectX1: number;
    fittingRectY0: number;
    fittingRectY1: number;
    generate64BitResult: boolean;
    images: Array;
    inputHints: string;
    maskBinarizingThreshold: number;
    maskGrowth: number;
    maskSmoothness: number;
    outputMasks: boolean;
    rejectBlack: boolean;
    replaceLargeScales: number;
    useFittingRegion: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(HDRComposition?: HDRComposition);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static autoExposures: boolean;
    static closePreviousImages: boolean;
    static fittingRectX0: number;
    static fittingRectX1: number;
    static fittingRectY0: number;
    static fittingRectY1: number;
    static generate64BitResult: boolean;
    static images: Array;
    static inputHints: string;
    static maskBinarizingThreshold: number;
    static maskGrowth: number;
    static maskSmoothness: number;
    static outputMasks: boolean;
    static rejectBlack: boolean;
    static replaceLargeScales: number;
    static useFittingRegion: boolean;
}
