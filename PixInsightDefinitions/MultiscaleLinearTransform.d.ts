//-------------------------
//--------Constants--------
//-------------------------
/* declare const AllPixelChanges: MultiscaleLinearTransform.prototype.AllPixelChanges;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DecreasingPixels: MultiscaleLinearTransform.prototype.DecreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Disabled: MultiscaleLinearTransform.prototype.Disabled;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Hyperbolic: MultiscaleLinearTransform.prototype.Hyperbolic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IncreasingPixels: MultiscaleLinearTransform.prototype.IncreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Ln: MultiscaleLinearTransform.prototype.Ln;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Log10: MultiscaleLinearTransform.prototype.Log10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MultiscaleLinearTransform: MultiscaleLinearTransform.prototype.MultiscaleLinearTransform;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoFunction: MultiscaleLinearTransform.prototype.NoFunction;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const StarletTransform: MultiscaleLinearTransform.prototype.StarletTransform;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class MultiscaleLinearTransform extends ProcessInstance {


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
    linearMask: boolean;
    linearMaskAmpFactor: number;
    linearMaskInverted: boolean;
    linearMaskPreview: boolean;
    linearMaskSmoothness: number;
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
    transform: number;
    useMultiresolutionSupport: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MultiscaleLinearTransform: MultiscaleLinearTransform);


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
    static linearMask: boolean;
    static linearMaskAmpFactor: number;
    static linearMaskInverted: boolean;
    static linearMaskPreview: boolean;
    static linearMaskSmoothness: number;
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
    static transform: number;
    static useMultiresolutionSupport: boolean;
}
