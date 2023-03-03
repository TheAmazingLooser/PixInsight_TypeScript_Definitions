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
    channels: Array<any>;
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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static channels: Array<any>;
    static clipHighlights: boolean;
    static inheritAstrometricSolution: boolean;
    static layersProtected: number;
    static layersRemoved: number;
    static mL: number;
    static mc: number;
    static noiseReduction: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
