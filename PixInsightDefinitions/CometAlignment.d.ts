//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CometAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    drizzleWriteCometAlignedImage: boolean;
    drizzleWriteStarAlignedImage: boolean;
    drzSaveCometAligned: boolean;
    drzSaveStarsAligned: boolean;
    enableLinearFit: boolean;
    fileThreadOverload: number;
    fitPSF: boolean;
    generateCometPathMap: boolean;
    inputHints: string;
    linearClampingThreshold: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    normalize: boolean;
    onError: number;
    operandImageFilePath: string;
    operandLinearFit: boolean;
    operandLinearFitHigh: number;
    operandLinearFitLow: number;
    operandNormalize: boolean;
    operandSubtractAligned: boolean;
    outputDir: string;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    overwrite: boolean;
    overwriteExistingFiles: boolean;
    pixelInterpolation: number;
    postfix: string;
    prefix: string;
    reference: number;
    referenceIndex: number;
    rejectHigh: number;
    rejectLow: number;
    subtractFile: string;
    subtractMode: boolean;
    targetFrames: Array<any>;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CometAlignment?: CometAlignment);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static drizzleWriteCometAlignedImage: boolean;
    static drizzleWriteStarAlignedImage: boolean;
    static drzSaveCometAligned: boolean;
    static drzSaveStarsAligned: boolean;
    static enableLinearFit: boolean;
    static fileThreadOverload: number;
    static fitPSF: boolean;
    static generateCometPathMap: boolean;
    static inputHints: string;
    static linearClampingThreshold: number;
    static maxFileReadThreads: number;
    static maxFileWriteThreads: number;
    static normalize: boolean;
    static onError: number;
    static operandImageFilePath: string;
    static operandLinearFit: boolean;
    static operandLinearFitHigh: number;
    static operandLinearFitLow: number;
    static operandNormalize: boolean;
    static operandSubtractAligned: boolean;
    static outputDir: string;
    static outputDirectory: string;
    static outputExtension: string;
    static outputHints: string;
    static outputPostfix: string;
    static outputPrefix: string;
    static overwrite: boolean;
    static overwriteExistingFiles: boolean;
    static pixelInterpolation: number;
    static postfix: string;
    static prefix: string;
    static reference: number;
    static referenceIndex: number;
    static rejectHigh: number;
    static rejectLow: number;
    static subtractFile: string;
    static subtractMode: boolean;
    static targetFrames: Array<any>;
    static useFileThreads: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    Lanczos3;
    Lanczos4;
    Lanczos5;
    MitchellNetravaliFilter;
    NearestNeighbor;
    OnError_Abort;
    OnError_AskUser;
    OnError_Continue;
}
