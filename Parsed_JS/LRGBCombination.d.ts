//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LRGBCombination extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array;
    clipHighlights: boolean;
    inheritAstrometricSolution: boolean;
    layersProtected: number;
    layersRemoved: number;
    mL: number;
    mc: number;
    noiseReduction: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LRGBCombination?: LRGBCombination);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static channels: Array;
    static clipHighlights: boolean;
    static inheritAstrometricSolution: boolean;
    static layersProtected: number;
    static layersRemoved: number;
    static mL: number;
    static mc: number;
    static noiseReduction: boolean;
}
