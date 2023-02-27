//-------------------------
//--------Constants--------
//-------------------------
/* declare const Abort: ImageCalibration.prototype.Abort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AskUser: ImageCalibration.prototype.AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Auto: ImageCalibration.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BGGR: ImageCalibration.prototype.BGGR;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BGRG: ImageCalibration.prototype.BGRG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Continue: ImageCalibration.prototype.Continue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CustomKeyword: ImageCalibration.prototype.CustomKeyword;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DetectCFA: ImageCalibration.prototype.DetectCFA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ForceCFA: ImageCalibration.prototype.ForceCFA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GBGR: ImageCalibration.prototype.GBGR;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GBRG: ImageCalibration.prototype.GBRG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GRBG: ImageCalibration.prototype.GRBG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GRGB: ImageCalibration.prototype.GRGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IgnoreCFA: ImageCalibration.prototype.IgnoreCFA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Keyword: ImageCalibration.prototype.Keyword;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Literal: ImageCalibration.prototype.Literal;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoiseEvaluation_KSigma: ImageCalibration.prototype.NoiseEvaluation_KSigma;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoiseEvaluation_MRS: ImageCalibration.prototype.NoiseEvaluation_MRS;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoiseEvaluation_NStar: ImageCalibration.prototype.NoiseEvaluation_NStar;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OutputPedestal_Auto: ImageCalibration.prototype.OutputPedestal_Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OutputPedestal_Literal: ImageCalibration.prototype.OutputPedestal_Literal;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Auto: ImageCalibration.prototype.PSFType_Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Gaussian: ImageCalibration.prototype.PSFType_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat15: ImageCalibration.prototype.PSFType_Moffat15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat4: ImageCalibration.prototype.PSFType_Moffat4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat6: ImageCalibration.prototype.PSFType_Moffat6;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat8: ImageCalibration.prototype.PSFType_Moffat8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_MoffatA: ImageCalibration.prototype.PSFType_MoffatA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGBG: ImageCalibration.prototype.RGBG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGGB: ImageCalibration.prototype.RGGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: ImageCalibration.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: ImageCalibration.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: ImageCalibration.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: ImageCalibration.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(ImageCalibration: ImageCalibration);


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
}
