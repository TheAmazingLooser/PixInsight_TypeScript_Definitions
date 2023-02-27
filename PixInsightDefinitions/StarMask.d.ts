//-------------------------
//--------Constants--------
//-------------------------
/* declare const StarMask: StarMask.prototype.StarMask;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const StarMaskOverlay: StarMask.prototype.StarMaskOverlay;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const StructureMap: StarMask.prototype.StructureMap;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const StructureMapOverlay: StarMask.prototype.StructureMapOverlay;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(StarMask: StarMask);


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
}
