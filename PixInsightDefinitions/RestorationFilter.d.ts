//-------------------------
//--------Constants--------
//-------------------------
/* declare const ConstrainedLeastSquares: RestorationFilter.prototype.ConstrainedLeastSquares;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const External: RestorationFilter.prototype.External;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MotionBlur: RestorationFilter.prototype.MotionBlur;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Parametric: RestorationFilter.prototype.Parametric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Wiener: RestorationFilter.prototype.Wiener;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class RestorationFilter extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    K: number;
    algorithm: number;
    amount: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    gamma: number;
    linear: boolean;
    outputDeringingMaps: boolean;
    psfAspectRatio: number;
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
    toLuminance: boolean;
    useLuminance: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(RestorationFilter: RestorationFilter);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static K: number;
    static algorithm: number;
    static amount: number;
    static deringing: boolean;
    static deringingBright: number;
    static deringingDark: number;
    static gamma: number;
    static linear: boolean;
    static outputDeringingMaps: boolean;
    static psfAspectRatio: number;
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
    static toLuminance: boolean;
    static useLuminance: boolean;
}
