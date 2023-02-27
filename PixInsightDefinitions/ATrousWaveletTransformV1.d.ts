//-------------------------
//--------Constants--------
//-------------------------
/* declare const AllPixelChanges: ATrousWaveletTransformV1.prototype.AllPixelChanges;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DecreasingPixels: ATrousWaveletTransformV1.prototype.DecreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DirectionalMultiway: ATrousWaveletTransformV1.prototype.DirectionalMultiway;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Disabled: ATrousWaveletTransformV1.prototype.Disabled;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Hyperbolic: ATrousWaveletTransformV1.prototype.Hyperbolic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IncreasingPixels: ATrousWaveletTransformV1.prototype.IncreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Ln: ATrousWaveletTransformV1.prototype.Ln;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Log10: ATrousWaveletTransformV1.prototype.Log10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Morphological: ATrousWaveletTransformV1.prototype.Morphological;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoFunction: ATrousWaveletTransformV1.prototype.NoFunction;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Recursive: ATrousWaveletTransformV1.prototype.Recursive;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SignificantStructures: ATrousWaveletTransformV1.prototype.SignificantStructures;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ATrousWaveletTransformV1 extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    curveBreakPoint: number;
    highRange: number;
    largeScaleFunction: number;
    layers: Array<any>;
    linear: boolean;
    lowRange: number;
    noiseThreshold: number;
    noiseThresholdingAmount: number;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    scalingFunctionData: Array<any>;
    scalingFunctionKernelSize: number;
    scalingFunctionName: string;
    scalingFunctionNoiseLayers: number;
    scalingFunctionNoiseSigma: Array<any>;
    toChrominance: boolean;
    toLuminance: boolean;
    version: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ATrousWaveletTransformV1: ATrousWaveletTransformV1);


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
    static highRange: number;
    static largeScaleFunction: number;
    static layers: Array<any>;
    static linear: boolean;
    static lowRange: number;
    static noiseThreshold: number;
    static noiseThresholdingAmount: number;
    static previewLayer: number;
    static previewMode: number;
    static scaleDelta: number;
    static scalingFunctionData: Array<any>;
    static scalingFunctionKernelSize: number;
    static scalingFunctionName: string;
    static scalingFunctionNoiseLayers: number;
    static scalingFunctionNoiseSigma: Array<any>;
    static toChrominance: boolean;
    static toLuminance: boolean;
    static version: number;
}
