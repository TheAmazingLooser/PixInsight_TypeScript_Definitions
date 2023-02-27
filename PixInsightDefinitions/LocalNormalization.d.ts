//-------------------------
//--------Constants--------
//-------------------------


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
    outputData: Array<any>;
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
    targetItems: Array<any>;
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
    static outputData: Array<any>;
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
    static targetItems: Array<any>;
    static targetRejectionThreshold: number;
    static truncate: boolean;
    static useFileThreads: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    GenerateNormalizedImages_Always;
    GenerateNormalizedImages_GlobalExecutionOnly;
    GenerateNormalizedImages_Never;
    GenerateNormalizedImages_ViewExecutionOnly;
    OnError_Abort;
    OnError_AskUser;
    OnError_Continue;
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
    PlotNormalizationFunctions_DontPlot;
    PlotNormalizationFunctions_Line3D;
    PlotNormalizationFunctions_Map3D;
    PlotNormalizationFunctions_Palette3D;
    ScaleEvaluationMethod_MultiscaleAnalysis;
    ScaleEvaluationMethod_PSFSignal;
}
