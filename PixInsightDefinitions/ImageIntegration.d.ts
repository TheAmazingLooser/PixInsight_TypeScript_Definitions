//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageIntegration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    adaptiveGridSize: number;
    adaptiveNoScale: boolean;
    autoMemoryLimit: number;
    autoMemorySize: boolean;
    averageSNRIncrementB: number;
    averageSNRIncrementG: number;
    averageSNRIncrementRK: number;
    bufferSizeMB: number;
    ccdGain: number;
    ccdReadNoise: number;
    ccdScaleNoise: number;
    clipHigh: boolean;
    clipLow: boolean;
    closePreviousImages: boolean;
    combination: number;
    csvWeights: string;
    esdAlpha: number;
    esdLowRelaxation: number;
    esdOutliersFraction: number;
    evaluateNoise: boolean;
    evaluateSNR: boolean;
    fileThreadOverload: number;
    finalLocationEstimateB: number;
    finalLocationEstimateG: number;
    finalLocationEstimateRK: number;
    finalNoiseAlgorithmB: string;
    finalNoiseAlgorithmG: string;
    finalNoiseAlgorithmRK: string;
    finalNoiseEstimateB: number;
    finalNoiseEstimateG: number;
    finalNoiseEstimateRK: number;
    finalNoiseScaleEstimateHighB: number;
    finalNoiseScaleEstimateHighG: number;
    finalNoiseScaleEstimateHighRK: number;
    finalNoiseScaleEstimateLowB: number;
    finalNoiseScaleEstimateLowG: number;
    finalNoiseScaleEstimateLowRK: number;
    finalPSFCountB: number;
    finalPSFCountG: number;
    finalPSFCountRK: number;
    finalPSFMStarEstimateB: number;
    finalPSFMStarEstimateG: number;
    finalPSFMStarEstimateRK: number;
    finalPSFNStarEstimateB: number;
    finalPSFNStarEstimateG: number;
    finalPSFNStarEstimateRK: number;
    finalPSFTotalFluxEstimateB: number;
    finalPSFTotalFluxEstimateG: number;
    finalPSFTotalFluxEstimateRK: number;
    finalPSFTotalMeanFluxEstimateB: number;
    finalPSFTotalMeanFluxEstimateG: number;
    finalPSFTotalMeanFluxEstimateRK: number;
    finalPSFTotalMeanPowerFluxEstimateB: number;
    finalPSFTotalMeanPowerFluxEstimateG: number;
    finalPSFTotalMeanPowerFluxEstimateRK: number;
    finalPSFTotalPowerFluxEstimateB: number;
    finalPSFTotalPowerFluxEstimateG: number;
    finalPSFTotalPowerFluxEstimateRK: number;
    finalScaleEstimateB: number;
    finalScaleEstimateG: number;
    finalScaleEstimateRK: number;
    generate64BitResult: boolean;
    generateDrizzleData: boolean;
    generateIntegratedImage: boolean;
    generateRejectionMaps: boolean;
    highRejectionMapImageId: string;
    ignoreNoiseKeywords: boolean;
    imageData: Array<any>;
    images: Array<any>;
    inputHints: string;
    integrationImageId: string;
    largeScaleClipHigh: boolean;
    largeScaleClipHighGrowth: number;
    largeScaleClipHighProtectedLayers: number;
    largeScaleClipLow: boolean;
    largeScaleClipLowGrowth: number;
    largeScaleClipLowProtectedLayers: number;
    linearFitHigh: number;
    linearFitLow: number;
    lowRejectionMapImageId: string;
    mapRangeRejection: boolean;
    maxBufferThreads: number;
    medianNoiseReductionB: number;
    medianNoiseReductionG: number;
    medianNoiseReductionRK: number;
    minMaxHigh: number;
    minMaxLow: number;
    minWeight: number;
    mrsMinDataFraction: number;
    noGUIMessages: boolean;
    noiseEvaluationAlgorithm: number;
    normalization: number;
    numberOfChannels: number;
    numberOfPixels: number;
    outputRangeHigh: number;
    outputRangeLow: number;
    pcClipHigh: number;
    pcClipLow: number;
    psfStructureLayers: number;
    psfType: number;
    rangeClipHigh: boolean;
    rangeClipLow: boolean;
    rangeHigh: number;
    rangeLow: number;
    rcrLimit: number;
    referenceNoiseReductionB: number;
    referenceNoiseReductionG: number;
    referenceNoiseReductionRK: number;
    referenceSNRIncrementB: number;
    referenceSNRIncrementG: number;
    referenceSNRIncrementRK: number;
    rejection: number;
    rejectionNormalization: number;
    reportRangeRejection: boolean;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    showImages: boolean;
    sigmaHigh: number;
    sigmaLow: number;
    slopeMapImageId: string;
    stackSizeMB: number;
    subtractPedestals: boolean;
    totalPixels: number;
    totalRejectedHighB: number;
    totalRejectedHighG: number;
    totalRejectedHighRK: number;
    totalRejectedLowB: number;
    totalRejectedLowG: number;
    totalRejectedLowRK: number;
    truncateOnOutOfRange: boolean;
    useBufferThreads: boolean;
    useCache: boolean;
    useFileThreads: boolean;
    useROI: boolean;
    weightKeyword: string;
    weightMode: number;
    weightScale: number;
    winsorizationCutoff: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ImageIntegration?: ImageIntegration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static adaptiveGridSize: number;
    static adaptiveNoScale: boolean;
    static autoMemoryLimit: number;
    static autoMemorySize: boolean;
    static averageSNRIncrementB: number;
    static averageSNRIncrementG: number;
    static averageSNRIncrementRK: number;
    static bufferSizeMB: number;
    static ccdGain: number;
    static ccdReadNoise: number;
    static ccdScaleNoise: number;
    static clipHigh: boolean;
    static clipLow: boolean;
    static closePreviousImages: boolean;
    static combination: number;
    static csvWeights: string;
    static esdAlpha: number;
    static esdLowRelaxation: number;
    static esdOutliersFraction: number;
    static evaluateNoise: boolean;
    static evaluateSNR: boolean;
    static fileThreadOverload: number;
    static finalLocationEstimateB: number;
    static finalLocationEstimateG: number;
    static finalLocationEstimateRK: number;
    static finalNoiseAlgorithmB: string;
    static finalNoiseAlgorithmG: string;
    static finalNoiseAlgorithmRK: string;
    static finalNoiseEstimateB: number;
    static finalNoiseEstimateG: number;
    static finalNoiseEstimateRK: number;
    static finalNoiseScaleEstimateHighB: number;
    static finalNoiseScaleEstimateHighG: number;
    static finalNoiseScaleEstimateHighRK: number;
    static finalNoiseScaleEstimateLowB: number;
    static finalNoiseScaleEstimateLowG: number;
    static finalNoiseScaleEstimateLowRK: number;
    static finalPSFCountB: number;
    static finalPSFCountG: number;
    static finalPSFCountRK: number;
    static finalPSFMStarEstimateB: number;
    static finalPSFMStarEstimateG: number;
    static finalPSFMStarEstimateRK: number;
    static finalPSFNStarEstimateB: number;
    static finalPSFNStarEstimateG: number;
    static finalPSFNStarEstimateRK: number;
    static finalPSFTotalFluxEstimateB: number;
    static finalPSFTotalFluxEstimateG: number;
    static finalPSFTotalFluxEstimateRK: number;
    static finalPSFTotalMeanFluxEstimateB: number;
    static finalPSFTotalMeanFluxEstimateG: number;
    static finalPSFTotalMeanFluxEstimateRK: number;
    static finalPSFTotalMeanPowerFluxEstimateB: number;
    static finalPSFTotalMeanPowerFluxEstimateG: number;
    static finalPSFTotalMeanPowerFluxEstimateRK: number;
    static finalPSFTotalPowerFluxEstimateB: number;
    static finalPSFTotalPowerFluxEstimateG: number;
    static finalPSFTotalPowerFluxEstimateRK: number;
    static finalScaleEstimateB: number;
    static finalScaleEstimateG: number;
    static finalScaleEstimateRK: number;
    static generate64BitResult: boolean;
    static generateDrizzleData: boolean;
    static generateIntegratedImage: boolean;
    static generateRejectionMaps: boolean;
    static highRejectionMapImageId: string;
    static ignoreNoiseKeywords: boolean;
    static imageData: Array<any>;
    static images: Array<any>;
    static inputHints: string;
    static integrationImageId: string;
    static largeScaleClipHigh: boolean;
    static largeScaleClipHighGrowth: number;
    static largeScaleClipHighProtectedLayers: number;
    static largeScaleClipLow: boolean;
    static largeScaleClipLowGrowth: number;
    static largeScaleClipLowProtectedLayers: number;
    static linearFitHigh: number;
    static linearFitLow: number;
    static lowRejectionMapImageId: string;
    static mapRangeRejection: boolean;
    static maxBufferThreads: number;
    static medianNoiseReductionB: number;
    static medianNoiseReductionG: number;
    static medianNoiseReductionRK: number;
    static minMaxHigh: number;
    static minMaxLow: number;
    static minWeight: number;
    static mrsMinDataFraction: number;
    static noGUIMessages: boolean;
    static noiseEvaluationAlgorithm: number;
    static normalization: number;
    static numberOfChannels: number;
    static numberOfPixels: number;
    static outputRangeHigh: number;
    static outputRangeLow: number;
    static pcClipHigh: number;
    static pcClipLow: number;
    static psfStructureLayers: number;
    static psfType: number;
    static rangeClipHigh: boolean;
    static rangeClipLow: boolean;
    static rangeHigh: number;
    static rangeLow: number;
    static rcrLimit: number;
    static referenceNoiseReductionB: number;
    static referenceNoiseReductionG: number;
    static referenceNoiseReductionRK: number;
    static referenceSNRIncrementB: number;
    static referenceSNRIncrementG: number;
    static referenceSNRIncrementRK: number;
    static rejection: number;
    static rejectionNormalization: number;
    static reportRangeRejection: boolean;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static showImages: boolean;
    static sigmaHigh: number;
    static sigmaLow: number;
    static slopeMapImageId: string;
    static stackSizeMB: number;
    static subtractPedestals: boolean;
    static totalPixels: number;
    static totalRejectedHighB: number;
    static totalRejectedHighG: number;
    static totalRejectedHighRK: number;
    static totalRejectedLowB: number;
    static totalRejectedLowG: number;
    static totalRejectedLowRK: number;
    static truncateOnOutOfRange: boolean;
    static useBufferThreads: boolean;
    static useCache: boolean;
    static useFileThreads: boolean;
    static useROI: boolean;
    static weightKeyword: string;
    static weightMode: number;
    static weightScale: number;
    static winsorizationCutoff: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AdaptiveNormalization;
    AdaptiveRejectionNormalization;
    Additive;
    AdditiveWithScaling;
    Average;
    AverageWeight;
    AveragedSigmaClip;
    CCDClip;
    DontCare;
    EqualizeFluxes;
    ExposureTime;
    KeywordWeight;
    LinearFit;
    LocalNormalization;
    LocalRejectionNormalization;
    Maximum;
    Median;
    MedianWeight;
    MinMax;
    Minimum;
    Multiplicative;
    MultiplicativeWithScaling;
    NoNormalization;
    NoRejection;
    NoRejectionNormalization;
    NoiseEvaluation_KSigma;
    NoiseEvaluation_MRS;
    NoiseEvaluation_NStar;
    PSFSNR;
    PSFScaleSNR;
    PSFSignalWeight;
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
    PercentileClip;
    Rejection_ESD;
    Rejection_RCR;
    SNREstimate;
    Scale;
    SigmaClip;
    SignalWeight;
    WeightScale_AvgDev;
    WeightScale_BWMV;
    WeightScale_IKSS;
    WeightScale_MAD;
    WeightScale_PBMV;
    WeightScale_Qn;
    WeightScale_Sn;
    WinsorizedSigmaClip;
}
