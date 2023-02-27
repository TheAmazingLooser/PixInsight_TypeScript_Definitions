//-------------------------
//--------Constants--------
//-------------------------
/* declare const AllPixelChanges: MultiscaleMedianTransform.prototype.AllPixelChanges;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DecreasingPixels: MultiscaleMedianTransform.prototype.DecreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Disabled: MultiscaleMedianTransform.prototype.Disabled;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IncreasingPixels: MultiscaleMedianTransform.prototype.IncreasingPixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MedianWaveletTransform: MultiscaleMedianTransform.prototype.MedianWaveletTransform;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MultiscaleMedianTransform: MultiscaleMedianTransform.prototype.MultiscaleMedianTransform;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class MultiscaleMedianTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    highRange: number;
    layers: Array<any>;
    linear: boolean;
    linearMask: boolean;
    linearMaskAmpFactor: number;
    linearMaskInverted: boolean;
    linearMaskPreview: boolean;
    linearMaskSmoothness: number;
    lowRange: number;
    medianWaveletThreshold: number;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    toChrominance: boolean;
    toLuminance: boolean;
    transform: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MultiscaleMedianTransform: MultiscaleMedianTransform);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static highRange: number;
    static layers: Array<any>;
    static linear: boolean;
    static linearMask: boolean;
    static linearMaskAmpFactor: number;
    static linearMaskInverted: boolean;
    static linearMaskPreview: boolean;
    static linearMaskSmoothness: number;
    static lowRange: number;
    static medianWaveletThreshold: number;
    static previewLayer: number;
    static previewMode: number;
    static scaleDelta: number;
    static toChrominance: boolean;
    static toLuminance: boolean;
    static transform: number;
}
