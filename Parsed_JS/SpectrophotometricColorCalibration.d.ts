//-------------------------
//--------Constants--------
//-------------------------
/* declare const PSFType_Auto: SpectrophotometricColorCalibration.prototype.PSFType_Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Gaussian: SpectrophotometricColorCalibration.prototype.PSFType_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat15: SpectrophotometricColorCalibration.prototype.PSFType_Moffat15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat4: SpectrophotometricColorCalibration.prototype.PSFType_Moffat4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat6: SpectrophotometricColorCalibration.prototype.PSFType_Moffat6;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat8: SpectrophotometricColorCalibration.prototype.PSFType_Moffat8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_MoffatA: SpectrophotometricColorCalibration.prototype.PSFType_MoffatA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class SpectrophotometricColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    applyCalibration: boolean;
    autoLimitMagnitude: boolean;
    backgroundHigh: number;
    backgroundLow: number;
    backgroundROIX0: number;
    backgroundROIX1: number;
    backgroundROIY0: number;
    backgroundROIY1: number;
    backgroundReferenceViewId: string;
    backgroundUseROI: boolean;
    blueFilterBandwidth: number;
    blueFilterName: string;
    blueFilterTrCurve: string;
    blueFilterWavelength: number;
    broadbandIntegrationStepSize: number;
    catalogId: string;
    deviceQECurve: string;
    deviceQECurveName: string;
    generateGraphs: boolean;
    generateStarMaps: boolean;
    generateTextFiles: boolean;
    greenFilterBandwidth: number;
    greenFilterName: string;
    greenFilterTrCurve: string;
    greenFilterWavelength: number;
    limitMagnitude: number;
    narrowbandIntegrationSteps: number;
    narrowbandMode: boolean;
    narrowbandOptimizeStars: boolean;
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
    redFilterBandwidth: number;
    redFilterName: string;
    redFilterTrCurve: string;
    redFilterWavelength: number;
    saturationRelative: boolean;
    saturationShrinkFactor: number;
    saturationThreshold: number;
    targetSourceCount: number;
    whiteReferenceName: string;
    whiteReferenceSpectrum: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SpectrophotometricColorCalibration?: SpectrophotometricColorCalibration);


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
    static autoLimitMagnitude: boolean;
    static backgroundHigh: number;
    static backgroundLow: number;
    static backgroundROIX0: number;
    static backgroundROIX1: number;
    static backgroundROIY0: number;
    static backgroundROIY1: number;
    static backgroundReferenceViewId: string;
    static backgroundUseROI: boolean;
    static blueFilterBandwidth: number;
    static blueFilterName: string;
    static blueFilterTrCurve: string;
    static blueFilterWavelength: number;
    static broadbandIntegrationStepSize: number;
    static catalogId: string;
    static deviceQECurve: string;
    static deviceQECurveName: string;
    static generateGraphs: boolean;
    static generateStarMaps: boolean;
    static generateTextFiles: boolean;
    static greenFilterBandwidth: number;
    static greenFilterName: string;
    static greenFilterTrCurve: string;
    static greenFilterWavelength: number;
    static limitMagnitude: number;
    static narrowbandIntegrationSteps: number;
    static narrowbandMode: boolean;
    static narrowbandOptimizeStars: boolean;
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
    static redFilterBandwidth: number;
    static redFilterName: string;
    static redFilterTrCurve: string;
    static redFilterWavelength: number;
    static saturationRelative: boolean;
    static saturationShrinkFactor: number;
    static saturationThreshold: number;
    static targetSourceCount: number;
    static whiteReferenceName: string;
    static whiteReferenceSpectrum: string;
}
