//-------------------------
//--------Constants--------
//-------------------------
/* declare const AllPixelChanges: ATrousWaveletTransform.prototype.AllPixelChanges;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DecreasingPixels: ATrousWaveletTransform.prototype.DecreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Disabled: ATrousWaveletTransform.prototype.Disabled;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Hyperbolic: ATrousWaveletTransform.prototype.Hyperbolic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IncreasingPixels: ATrousWaveletTransform.prototype.IncreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Ln: ATrousWaveletTransform.prototype.Ln;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Log10: ATrousWaveletTransform.prototype.Log10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoFunction: ATrousWaveletTransform.prototype.NoFunction;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ATrousWaveletTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    curveBreakPoint: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    highRange: number;
    largeScaleFunction: number;
    layers: Array;
    linear: boolean;
    lowRange: number;
    noiseThreshold: number;
    noiseThresholding: boolean;
    noiseThresholdingAmount: number;
    outputDeringingMaps: boolean;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    scalingFunctionColFilter: Array;
    scalingFunctionData: Array;
    scalingFunctionName: string;
    scalingFunctionNoiseSigma: Array;
    scalingFunctionRowFilter: Array;
    softThresholding: boolean;
    toChrominance: boolean;
    toLuminance: boolean;
    useMultiresolutionSupport: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ATrousWaveletTransform?: ATrousWaveletTransform);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static curveBreakPoint: number;
    static deringing: boolean;
    static deringingBright: number;
    static deringingDark: number;
    static highRange: number;
    static largeScaleFunction: number;
    static layers: Array;
    static linear: boolean;
    static lowRange: number;
    static noiseThreshold: number;
    static noiseThresholding: boolean;
    static noiseThresholdingAmount: number;
    static outputDeringingMaps: boolean;
    static previewLayer: number;
    static previewMode: number;
    static scaleDelta: number;
    static scalingFunctionColFilter: Array;
    static scalingFunctionData: Array;
    static scalingFunctionName: string;
    static scalingFunctionNoiseSigma: Array;
    static scalingFunctionRowFilter: Array;
    static softThresholding: boolean;
    static toChrominance: boolean;
    static toLuminance: boolean;
    static useMultiresolutionSupport: boolean;
}
