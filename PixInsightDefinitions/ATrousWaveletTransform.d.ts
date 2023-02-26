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
    layers: Array<any>;
    linear: boolean;
    lowRange: number;
    noiseThreshold: number;
    noiseThresholding: boolean;
    noiseThresholdingAmount: number;
    outputDeringingMaps: boolean;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    scalingFunctionColFilter: Array<any>;
    scalingFunctionData: Array<any>;
    scalingFunctionName: string;
    scalingFunctionNoiseSigma: Array<any>;
    scalingFunctionRowFilter: Array<any>;
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
    static layers: Array<any>;
    static linear: boolean;
    static lowRange: number;
    static noiseThreshold: number;
    static noiseThresholding: boolean;
    static noiseThresholdingAmount: number;
    static outputDeringingMaps: boolean;
    static previewLayer: number;
    static previewMode: number;
    static scaleDelta: number;
    static scalingFunctionColFilter: Array<any>;
    static scalingFunctionData: Array<any>;
    static scalingFunctionName: string;
    static scalingFunctionNoiseSigma: Array<any>;
    static scalingFunctionRowFilter: Array<any>;
    static softThresholding: boolean;
    static toChrominance: boolean;
    static toLuminance: boolean;
    static useMultiresolutionSupport: boolean;
}
