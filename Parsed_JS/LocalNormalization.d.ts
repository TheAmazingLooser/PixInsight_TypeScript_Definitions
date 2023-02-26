//-------------------------
//--------Constants--------
//-------------------------
/* declare const GenerateNormalizedImages_Always: LocalNormalization.prototype.GenerateNormalizedImages_Always;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GenerateNormalizedImages_GlobalExecutionOnly: LocalNormalization.prototype.GenerateNormalizedImages_GlobalExecutionOnly;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GenerateNormalizedImages_Never: LocalNormalization.prototype.GenerateNormalizedImages_Never;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GenerateNormalizedImages_ViewExecutionOnly: LocalNormalization.prototype.GenerateNormalizedImages_ViewExecutionOnly;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_Abort: LocalNormalization.prototype.OnError_Abort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_AskUser: LocalNormalization.prototype.OnError_AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_Continue: LocalNormalization.prototype.OnError_Continue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Auto: LocalNormalization.prototype.PSFType_Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Gaussian: LocalNormalization.prototype.PSFType_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat15: LocalNormalization.prototype.PSFType_Moffat15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat4: LocalNormalization.prototype.PSFType_Moffat4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat6: LocalNormalization.prototype.PSFType_Moffat6;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat8: LocalNormalization.prototype.PSFType_Moffat8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_MoffatA: LocalNormalization.prototype.PSFType_MoffatA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PlotNormalizationFunctions_DontPlot: LocalNormalization.prototype.PlotNormalizationFunctions_DontPlot;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PlotNormalizationFunctions_Line3D: LocalNormalization.prototype.PlotNormalizationFunctions_Line3D;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PlotNormalizationFunctions_Map3D: LocalNormalization.prototype.PlotNormalizationFunctions_Map3D;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PlotNormalizationFunctions_Palette3D: LocalNormalization.prototype.PlotNormalizationFunctions_Palette3D;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ScaleEvaluationMethod_MultiscaleAnalysis: LocalNormalization.prototype.ScaleEvaluationMethod_MultiscaleAnalysis;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ScaleEvaluationMethod_PSFSignal: LocalNormalization.prototype.ScaleEvaluationMethod_PSFSignal;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class LocalNormalization extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoMemoryLimit: number;
    backgroundSamplingDelta: number;
    fileThreadOverload: number;
    generateInvalidData: boolean;
    generateNormalizationData: boolean;
    generateNormalizedImages: number;
    globalLocationNormalization: boolean;
    graphOutputDirectory: string;
    graphSize: number;
    graphTextSize: number;
    graphTitleSize: number;
    graphTransparent: boolean;
    highClippingLevel: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    localScaleCorrections: boolean;
    lowClippingLevel: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    modelScalingFactor: number;
    noGUIMessages: boolean;
    noScale: boolean;
    noiseReductionFilterRadius: number;
    onError: number;
    outputData: Array;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    overwriteExistingFiles: boolean;
    plotNormalizationFunctions: number;
    psfAllowClusteredSources: boolean;
    psfGrowth: number;
    psfHotPixelFilterRadius: number;
    psfMaxStars: number;
    psfMinSNR: number;
    psfMinStructureSize: number;
    psfNoiseLayers: number;
    psfNoiseReductionFilterRadius: number;
    psfRejectionLimit: number;
    psfStructureLayers: number;
    psfType: number;
    referenceIsView: boolean;
    referencePathOrViewId: string;
    referenceRejection: boolean;
    referenceRejectionThreshold: number;
    rejection: boolean;
    rejectionLimit: number;
    saturationRelative: boolean;
    saturationThreshold: number;
    scale: number;
    scaleEvaluationMethod: number;
    showBackgroundModels: boolean;
    showLocalScaleModels: boolean;
    showRejectionMaps: boolean;
    showStructureMaps: boolean;
    targetItems: Array;
    targetRejectionThreshold: number;
    truncate: boolean;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LocalNormalization?: LocalNormalization);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static autoMemoryLimit: number;
    static backgroundSamplingDelta: number;
    static fileThreadOverload: number;
    static generateInvalidData: boolean;
    static generateNormalizationData: boolean;
    static generateNormalizedImages: number;
    static globalLocationNormalization: boolean;
    static graphOutputDirectory: string;
    static graphSize: number;
    static graphTextSize: number;
    static graphTitleSize: number;
    static graphTransparent: boolean;
    static highClippingLevel: number;
    static hotPixelFilterRadius: number;
    static inputHints: string;
    static localScaleCorrections: boolean;
    static lowClippingLevel: number;
    static maxFileReadThreads: number;
    static maxFileWriteThreads: number;
    static modelScalingFactor: number;
    static noGUIMessages: boolean;
    static noScale: boolean;
    static noiseReductionFilterRadius: number;
    static onError: number;
    static outputData: Array;
    static outputDirectory: string;
    static outputExtension: string;
    static outputHints: string;
    static outputPostfix: string;
    static outputPrefix: string;
    static overwriteExistingFiles: boolean;
    static plotNormalizationFunctions: number;
    static psfAllowClusteredSources: boolean;
    static psfGrowth: number;
    static psfHotPixelFilterRadius: number;
    static psfMaxStars: number;
    static psfMinSNR: number;
    static psfMinStructureSize: number;
    static psfNoiseLayers: number;
    static psfNoiseReductionFilterRadius: number;
    static psfRejectionLimit: number;
    static psfStructureLayers: number;
    static psfType: number;
    static referenceIsView: boolean;
    static referencePathOrViewId: string;
    static referenceRejection: boolean;
    static referenceRejectionThreshold: number;
    static rejection: boolean;
    static rejectionLimit: number;
    static saturationRelative: boolean;
    static saturationThreshold: number;
    static scale: number;
    static scaleEvaluationMethod: number;
    static showBackgroundModels: boolean;
    static showLocalScaleModels: boolean;
    static showRejectionMaps: boolean;
    static showStructureMaps: boolean;
    static targetItems: Array;
    static targetRejectionThreshold: number;
    static truncate: boolean;
    static useFileThreads: boolean;
}
