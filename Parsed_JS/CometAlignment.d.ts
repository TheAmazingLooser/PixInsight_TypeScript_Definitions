//-------------------------
//--------Constants--------
//-------------------------
/* declare const Auto: CometAlignment.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicBSpline: CometAlignment.prototype.BicubicBSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicSpline: CometAlignment.prototype.BicubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: CometAlignment.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CatmullRomSplineFilter: CometAlignment.prototype.CatmullRomSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicBSplineFilter: CometAlignment.prototype.CubicBSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos3: CometAlignment.prototype.Lanczos3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos4: CometAlignment.prototype.Lanczos4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos5: CometAlignment.prototype.Lanczos5;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MitchellNetravaliFilter: CometAlignment.prototype.MitchellNetravaliFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NearestNeighbor: CometAlignment.prototype.NearestNeighbor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_Abort: CometAlignment.prototype.OnError_Abort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_AskUser: CometAlignment.prototype.OnError_AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OnError_Continue: CometAlignment.prototype.OnError_Continue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    targetFrames: Array;
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
    static targetFrames: Array;
    static useFileThreads: boolean;
}
