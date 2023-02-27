//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarMask extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aggregateStructures: boolean;
    binarizeStructures: boolean;
    growthCompensation: number;
    highlightsClipping: number;
    invert: boolean;
    largeScaleGrowth: number;
    limit: number;
    midtonesBalance: number;
    mode: number;
    noiseThreshold: number;
    shadowsClipping: number;
    smallScaleGrowth: number;
    smoothness: number;
    structureContours: boolean;
    truncation: number;
    waveletLayers: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarMask?: StarMask);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static aggregateStructures: boolean;
    static binarizeStructures: boolean;
    static growthCompensation: number;
    static highlightsClipping: number;
    static invert: boolean;
    static largeScaleGrowth: number;
    static limit: number;
    static midtonesBalance: number;
    static mode: number;
    static noiseThreshold: number;
    static shadowsClipping: number;
    static smallScaleGrowth: number;
    static smoothness: number;
    static structureContours: boolean;
    static truncation: number;
    static waveletLayers: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    StarMask;
    StarMaskOverlay;
    StructureMap;
    StructureMapOverlay;
}
