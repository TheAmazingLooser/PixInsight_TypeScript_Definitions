//-------------------------
//--------Constants--------
//-------------------------


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
    iterations: Array<any>;
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
    waveletLayers: Array<any>;


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
    //-----event-handlers------
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
    static iterations: Array<any>;
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
    static waveletLayers: Array<any>;


    //-------------------------
    //--------constants--------
    //-------------------------
    B3Spline5x5;
    External;
    Gaussian;
    LinearInterpolation3x3;
    MotionBlur;
    Parametric;
    Poisson;
    RichardsonLucy;
    SmallScale3x3;
    VanCittert;
}
