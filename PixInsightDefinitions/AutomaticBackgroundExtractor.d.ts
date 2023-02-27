//-------------------------
//--------Constants--------
//-------------------------


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


    //-------------------------
    //--------constants--------
    //-------------------------
    Divide;
    None;
    SameAsTarget;
    Subtract;
    f32;
    f64;
    i16;
    i32;
    i8;
}
