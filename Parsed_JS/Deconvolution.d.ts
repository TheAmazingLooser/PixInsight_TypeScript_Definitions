//-------------------------
//--------Constants--------
//-------------------------
/* declare const B3Spline5x5: Deconvolution.prototype.B3Spline5x5;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const External: Deconvolution.prototype.External;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Gaussian: Deconvolution.prototype.Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LinearInterpolation3x3: Deconvolution.prototype.LinearInterpolation3x3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MotionBlur: Deconvolution.prototype.MotionBlur;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Parametric: Deconvolution.prototype.Parametric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Poisson: Deconvolution.prototype.Poisson;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RichardsonLucy: Deconvolution.prototype.RichardsonLucy;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SmallScale3x3: Deconvolution.prototype.SmallScale3x3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const VanCittert: Deconvolution.prototype.VanCittert;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Deconvolution extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    algorithm: number;
    convergence: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    deringingSupport: boolean;
    deringingSupportAmount: number;
    deringingSupportViewId: string;
    iterations: Array;
    noiseModel: number;
    numberOfIterations: number;
    numberOfWaveletLayers: number;
    psfAspectRatio: number;
    psfFFTSizeLimit: number;
    psfGaussianAspectRatio: number;
    psfGaussianRotationAngle: number;
    psfGaussianShape: number;
    psfGaussianSigma: number;
    psfMode: number;
    psfMotionLength: number;
    psfMotionRotationAngle: number;
    psfRotationAngle: number;
    psfShape: number;
    psfSigma: number;
    psfViewId: string;
    rangeHigh: number;
    rangeLow: number;
    scalingFunction: number;
    toLuminance: boolean;
    useLuminance: boolean;
    useRegularization: boolean;
    waveletLayers: Array;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Deconvolution?: Deconvolution);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static algorithm: number;
    static convergence: number;
    static deringing: boolean;
    static deringingBright: number;
    static deringingDark: number;
    static deringingSupport: boolean;
    static deringingSupportAmount: number;
    static deringingSupportViewId: string;
    static iterations: Array;
    static noiseModel: number;
    static numberOfIterations: number;
    static numberOfWaveletLayers: number;
    static psfAspectRatio: number;
    static psfFFTSizeLimit: number;
    static psfGaussianAspectRatio: number;
    static psfGaussianRotationAngle: number;
    static psfGaussianShape: number;
    static psfGaussianSigma: number;
    static psfMode: number;
    static psfMotionLength: number;
    static psfMotionRotationAngle: number;
    static psfRotationAngle: number;
    static psfShape: number;
    static psfSigma: number;
    static psfViewId: string;
    static rangeHigh: number;
    static rangeLow: number;
    static scalingFunction: number;
    static toLuminance: boolean;
    static useLuminance: boolean;
    static useRegularization: boolean;
    static waveletLayers: Array;
}
