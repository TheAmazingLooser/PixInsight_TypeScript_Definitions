//-------------------------
//--------Constants--------
//-------------------------
/* declare const Divide: AutomaticBackgroundExtractor.prototype.Divide;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const None: AutomaticBackgroundExtractor.prototype.None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SameAsTarget: AutomaticBackgroundExtractor.prototype.SameAsTarget;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Subtract: AutomaticBackgroundExtractor.prototype.Subtract;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: AutomaticBackgroundExtractor.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: AutomaticBackgroundExtractor.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: AutomaticBackgroundExtractor.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: AutomaticBackgroundExtractor.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i8: AutomaticBackgroundExtractor.prototype.i8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class AutomaticBackgroundExtractor extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    abeDownsample: number;
    boxSeparation: number;
    boxSize: number;
    compareFactor: number;
    compareModel: boolean;
    correctedImageId: string;
    correctedImageSampleFormat: number;
    deviation: number;
    discardModel: boolean;
    justTrySamples: boolean;
    maxBackground: number;
    minBackground: number;
    minBoxFraction: number;
    modelImageSampleFormat: number;
    normalize: boolean;
    polyDegree: number;
    replaceTarget: boolean;
    targetCorrection: number;
    tolerance: number;
    unbalance: number;
    useBrightnessLimits: boolean;
    useLuminanceLimits: boolean;
    verboseCoefficients: boolean;
    writeSampleBoxes: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AutomaticBackgroundExtractor?: AutomaticBackgroundExtractor);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static abeDownsample: number;
    static boxSeparation: number;
    static boxSize: number;
    static compareFactor: number;
    static compareModel: boolean;
    static correctedImageId: string;
    static correctedImageSampleFormat: number;
    static deviation: number;
    static discardModel: boolean;
    static justTrySamples: boolean;
    static maxBackground: number;
    static minBackground: number;
    static minBoxFraction: number;
    static modelImageSampleFormat: number;
    static normalize: boolean;
    static polyDegree: number;
    static replaceTarget: boolean;
    static targetCorrection: number;
    static tolerance: number;
    static unbalance: number;
    static useBrightnessLimits: boolean;
    static useLuminanceLimits: boolean;
    static verboseCoefficients: boolean;
    static writeSampleBoxes: boolean;
}
