//-------------------------
//--------Constants--------
//-------------------------
/* declare const Auto: Debayer.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BGGR: Debayer.prototype.BGGR;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BGRG: Debayer.prototype.BGRG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: Debayer.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GBGR: Debayer.prototype.GBGR;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GBRG: Debayer.prototype.GBRG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GRBG: Debayer.prototype.GRBG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GRGB: Debayer.prototype.GRGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoiseEvaluation_KSigma: Debayer.prototype.NoiseEvaluation_KSigma;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoiseEvaluation_MRS: Debayer.prototype.NoiseEvaluation_MRS;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoiseEvaluation_NStar: Debayer.prototype.NoiseEvaluation_NStar;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_Abort: Debayer.prototype.OnError_Abort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_AskUser: Debayer.prototype.OnError_AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_Continue: Debayer.prototype.OnError_Continue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Auto: Debayer.prototype.PSFType_Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Gaussian: Debayer.prototype.PSFType_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat15: Debayer.prototype.PSFType_Moffat15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat4: Debayer.prototype.PSFType_Moffat4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat6: Debayer.prototype.PSFType_Moffat6;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_Moffat8: Debayer.prototype.PSFType_Moffat8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSFType_MoffatA: Debayer.prototype.PSFType_MoffatA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGBG: Debayer.prototype.RGBG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGGB: Debayer.prototype.RGGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SuperPixel: Debayer.prototype.SuperPixel;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const VNG: Debayer.prototype.VNG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Debayer extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    BayerPattern: number;
    DebayerMethod: number;
    bayerPattern: number;
    cfaPattern: number;
    cfaSourceFilePath: string;
    debayerMethod: number;
    evaluateNoise: boolean;
    evaluateSignal: boolean;
    fbddNoiseReduction: number;
    fileThreadOverload: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxStars: number;
    memoryLoadControl: boolean;
    memoryLoadLimit: number;
    minStructureSize: number;
    noGUIMessages: boolean;
    noiseAlgorithmB: string;
    noiseAlgorithmG: string;
    noiseAlgorithmR: string;
    noiseEstimateB: number;
    noiseEstimateG: number;
    noiseEstimateR: number;
    noiseEvaluationAlgorithm: number;
    noiseFractionB: number;
    noiseFractionG: number;
    noiseFractionR: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    noiseScaleHighB: number;
    noiseScaleHighG: number;
    noiseScaleHighR: number;
    noiseScaleLowB: number;
    noiseScaleLowG: number;
    noiseScaleLowR: number;
    onError: number;
    outputChannelImageB: string;
    outputChannelImageG: string;
    outputChannelImageR: string;
    outputDirectory: string;
    outputExtension: string;
    outputFileData: Array;
    outputHints: string;
    outputImage: string;
    outputPostfix: string;
    outputPrefix: string;
    outputRGBImages: boolean;
    outputSeparateChannels: boolean;
    overwriteExistingFiles: boolean;
    psfCountB: number;
    psfCountG: number;
    psfCountR: number;
    psfGrowth: number;
    psfMStarEstimateB: number;
    psfMStarEstimateG: number;
    psfMStarEstimateR: number;
    psfNStarEstimateB: number;
    psfNStarEstimateG: number;
    psfNStarEstimateR: number;
    psfTotalFluxEstimateB: number;
    psfTotalFluxEstimateG: number;
    psfTotalFluxEstimateR: number;
    psfTotalMeanFluxEstimateB: number;
    psfTotalMeanFluxEstimateG: number;
    psfTotalMeanFluxEstimateR: number;
    psfTotalMeanPowerFluxEstimateB: number;
    psfTotalMeanPowerFluxEstimateG: number;
    psfTotalMeanPowerFluxEstimateR: number;
    psfTotalPowerFluxEstimateB: number;
    psfTotalPowerFluxEstimateG: number;
    psfTotalPowerFluxEstimateR: number;
    psfType: number;
    saturationRelative: boolean;
    saturationThreshold: number;
    showImages: boolean;
    structureLayers: number;
    targetItems: Array;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Debayer?: Debayer);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static BayerPattern: number;
    static DebayerMethod: number;
    static bayerPattern: number;
    static cfaPattern: number;
    static cfaSourceFilePath: string;
    static debayerMethod: number;
    static evaluateNoise: boolean;
    static evaluateSignal: boolean;
    static fbddNoiseReduction: number;
    static fileThreadOverload: number;
    static hotPixelFilterRadius: number;
    static inputHints: string;
    static maxFileReadThreads: number;
    static maxFileWriteThreads: number;
    static maxStars: number;
    static memoryLoadControl: boolean;
    static memoryLoadLimit: number;
    static minStructureSize: number;
    static noGUIMessages: boolean;
    static noiseAlgorithmB: string;
    static noiseAlgorithmG: string;
    static noiseAlgorithmR: string;
    static noiseEstimateB: number;
    static noiseEstimateG: number;
    static noiseEstimateR: number;
    static noiseEvaluationAlgorithm: number;
    static noiseFractionB: number;
    static noiseFractionG: number;
    static noiseFractionR: number;
    static noiseLayers: number;
    static noiseReductionFilterRadius: number;
    static noiseScaleHighB: number;
    static noiseScaleHighG: number;
    static noiseScaleHighR: number;
    static noiseScaleLowB: number;
    static noiseScaleLowG: number;
    static noiseScaleLowR: number;
    static onError: number;
    static outputChannelImageB: string;
    static outputChannelImageG: string;
    static outputChannelImageR: string;
    static outputDirectory: string;
    static outputExtension: string;
    static outputFileData: Array;
    static outputHints: string;
    static outputImage: string;
    static outputPostfix: string;
    static outputPrefix: string;
    static outputRGBImages: boolean;
    static outputSeparateChannels: boolean;
    static overwriteExistingFiles: boolean;
    static psfCountB: number;
    static psfCountG: number;
    static psfCountR: number;
    static psfGrowth: number;
    static psfMStarEstimateB: number;
    static psfMStarEstimateG: number;
    static psfMStarEstimateR: number;
    static psfNStarEstimateB: number;
    static psfNStarEstimateG: number;
    static psfNStarEstimateR: number;
    static psfTotalFluxEstimateB: number;
    static psfTotalFluxEstimateG: number;
    static psfTotalFluxEstimateR: number;
    static psfTotalMeanFluxEstimateB: number;
    static psfTotalMeanFluxEstimateG: number;
    static psfTotalMeanFluxEstimateR: number;
    static psfTotalMeanPowerFluxEstimateB: number;
    static psfTotalMeanPowerFluxEstimateG: number;
    static psfTotalMeanPowerFluxEstimateR: number;
    static psfTotalPowerFluxEstimateB: number;
    static psfTotalPowerFluxEstimateG: number;
    static psfTotalPowerFluxEstimateR: number;
    static psfType: number;
    static saturationRelative: boolean;
    static saturationThreshold: number;
    static showImages: boolean;
    static structureLayers: number;
    static targetItems: Array;
    static useFileThreads: boolean;
}
