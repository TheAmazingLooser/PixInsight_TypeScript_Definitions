//-------------------------
//--------Constants--------
//-------------------------
/* declare const PSFType_Auto: PhotometricColorCalibration.prototype.PSFType_Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Gaussian: PhotometricColorCalibration.prototype.PSFType_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat15: PhotometricColorCalibration.prototype.PSFType_Moffat15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat4: PhotometricColorCalibration.prototype.PSFType_Moffat4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat6: PhotometricColorCalibration.prototype.PSFType_Moffat6;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat8: PhotometricColorCalibration.prototype.PSFType_Moffat8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_MoffatA: PhotometricColorCalibration.prototype.PSFType_MoffatA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class PhotometricColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    applyCalibration: boolean;
    autoCatalog: boolean;
    autoLimitMagnitude: boolean;
    backgroundHigh: number;
    backgroundLow: number;
    backgroundROIX0: number;
    backgroundROIX1: number;
    backgroundROIY0: number;
    backgroundROIY1: number;
    backgroundReferenceViewId: string;
    backgroundUseROI: boolean;
    catalogId: string;
    generateGraphs: boolean;
    generateStarMaps: boolean;
    generateTextFiles: boolean;
    limitMagnitude: number;
    neutralizeBackground: boolean;
    outputDirectory: string;
    psfAllowClusteredSources: boolean;
    psfChannelSearchTolerance: number;
    psfGrowth: number;
    psfHotPixelFilterRadius: number;
    psfMaxStars: number;
    psfMinSNR: number;
    psfMinStructureSize: number;
    psfNoiseLayers: number;
    psfNoiseReductionFilterRadius: number;
    psfSearchTolerance: number;
    psfStructureLayers: number;
    psfType: number;
    saturationRelative: boolean;
    saturationShrinkFactor: number;
    saturationThreshold: number;
    serverURL: string;
    targetSourceCount: number;
    whiteReferenceId: string;
    whiteReferenceJB_JV: number;
    whiteReferenceName: string;
    whiteReferenceSr_JV: number;
    zeroPointJB_JV: number;
    zeroPointSr_JV: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(PhotometricColorCalibration: PhotometricColorCalibration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static applyCalibration: boolean;
    static autoCatalog: boolean;
    static autoLimitMagnitude: boolean;
    static backgroundHigh: number;
    static backgroundLow: number;
    static backgroundROIX0: number;
    static backgroundROIX1: number;
    static backgroundROIY0: number;
    static backgroundROIY1: number;
    static backgroundReferenceViewId: string;
    static backgroundUseROI: boolean;
    static catalogId: string;
    static generateGraphs: boolean;
    static generateStarMaps: boolean;
    static generateTextFiles: boolean;
    static limitMagnitude: number;
    static neutralizeBackground: boolean;
    static outputDirectory: string;
    static psfAllowClusteredSources: boolean;
    static psfChannelSearchTolerance: number;
    static psfGrowth: number;
    static psfHotPixelFilterRadius: number;
    static psfMaxStars: number;
    static psfMinSNR: number;
    static psfMinStructureSize: number;
    static psfNoiseLayers: number;
    static psfNoiseReductionFilterRadius: number;
    static psfSearchTolerance: number;
    static psfStructureLayers: number;
    static psfType: number;
    static saturationRelative: boolean;
    static saturationShrinkFactor: number;
    static saturationThreshold: number;
    static serverURL: string;
    static targetSourceCount: number;
    static whiteReferenceId: string;
    static whiteReferenceJB_JV: number;
    static whiteReferenceName: string;
    static whiteReferenceSr_JV: number;
    static zeroPointJB_JV: number;
    static zeroPointSr_JV: number;
}
