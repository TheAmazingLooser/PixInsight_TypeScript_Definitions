//-------------------------
//--------Constants--------
//-------------------------


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
    outputFileData: Array<any>;
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
    targetItems: Array<any>;
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
    static outputFileData: Array<any>;
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
    static targetItems: Array<any>;
    static useFileThreads: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BGGR;
    BGRG;
    Bilinear;
    GBGR;
    GBRG;
    GRBG;
    GRGB;
    NoiseEvaluation_KSigma;
    NoiseEvaluation_MRS;
    NoiseEvaluation_NStar;
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
    RGBG;
    RGGB;
    SuperPixel;
    VNG;
}
