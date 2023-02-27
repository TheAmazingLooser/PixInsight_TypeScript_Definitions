//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoPedestalLimit: number;
    calibrateBias: boolean;
    calibrateDark: boolean;
    calibrateFlat: boolean;
    cfaPattern: number;
    darkCFADetectionMode: number;
    darkOptimizationLow: number;
    darkOptimizationThreshold: number;
    darkOptimizationWindow: number;
    enableCFA: boolean;
    evaluateNoise: boolean;
    evaluateSignal: boolean;
    fileThreadOverload: number;
    flatScaleClippingFactor: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    masterBiasEnabled: boolean;
    masterBiasPath: string;
    masterDarkEnabled: boolean;
    masterDarkPath: string;
    masterFlatEnabled: boolean;
    masterFlatPath: string;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxStars: number;
    minStructureSize: number;
    noGUIMessages: boolean;
    noiseEvaluationAlgorithm: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    onError: number;
    optimizeDarks: boolean;
    outputData: Array<any>;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPedestal: number;
    outputPedestalMode: number;
    outputPostfix: string;
    outputPrefix: string;
    outputSampleFormat: number;
    overscanEnabled: boolean;
    overscanImageX0: number;
    overscanImageX1: number;
    overscanImageY0: number;
    overscanImageY1: number;
    overscanRegions: Array<any>;
    overwriteExistingFiles: boolean;
    pedestal: number;
    pedestalKeyword: string;
    pedestalMode: number;
    psfGrowth: number;
    psfType: number;
    saturationRelative: boolean;
    saturationThreshold: number;
    separateCFAFlatScalingFactors: boolean;
    structureLayers: number;
    targetFrames: Array<any>;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ImageCalibration?: ImageCalibration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static autoPedestalLimit: number;
    static calibrateBias: boolean;
    static calibrateDark: boolean;
    static calibrateFlat: boolean;
    static cfaPattern: number;
    static darkCFADetectionMode: number;
    static darkOptimizationLow: number;
    static darkOptimizationThreshold: number;
    static darkOptimizationWindow: number;
    static enableCFA: boolean;
    static evaluateNoise: boolean;
    static evaluateSignal: boolean;
    static fileThreadOverload: number;
    static flatScaleClippingFactor: number;
    static hotPixelFilterRadius: number;
    static inputHints: string;
    static masterBiasEnabled: boolean;
    static masterBiasPath: string;
    static masterDarkEnabled: boolean;
    static masterDarkPath: string;
    static masterFlatEnabled: boolean;
    static masterFlatPath: string;
    static maxFileReadThreads: number;
    static maxFileWriteThreads: number;
    static maxStars: number;
    static minStructureSize: number;
    static noGUIMessages: boolean;
    static noiseEvaluationAlgorithm: number;
    static noiseLayers: number;
    static noiseReductionFilterRadius: number;
    static onError: number;
    static optimizeDarks: boolean;
    static outputData: Array<any>;
    static outputDirectory: string;
    static outputExtension: string;
    static outputHints: string;
    static outputPedestal: number;
    static outputPedestalMode: number;
    static outputPostfix: string;
    static outputPrefix: string;
    static outputSampleFormat: number;
    static overscanEnabled: boolean;
    static overscanImageX0: number;
    static overscanImageX1: number;
    static overscanImageY0: number;
    static overscanImageY1: number;
    static overscanRegions: Array<any>;
    static overwriteExistingFiles: boolean;
    static pedestal: number;
    static pedestalKeyword: string;
    static pedestalMode: number;
    static psfGrowth: number;
    static psfType: number;
    static saturationRelative: boolean;
    static saturationThreshold: number;
    static separateCFAFlatScalingFactors: boolean;
    static structureLayers: number;
    static targetFrames: Array<any>;
    static useFileThreads: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    AskUser;
    Auto;
    BGGR;
    BGRG;
    Continue;
    CustomKeyword;
    DetectCFA;
    ForceCFA;
    GBGR;
    GBRG;
    GRBG;
    GRGB;
    IgnoreCFA;
    Keyword;
    Literal;
    NoiseEvaluation_KSigma;
    NoiseEvaluation_MRS;
    NoiseEvaluation_NStar;
    OutputPedestal_Auto;
    OutputPedestal_Literal;
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
    RGBG;
    RGGB;
    f32;
    f64;
    i16;
    i32;
}
