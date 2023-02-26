//-------------------------
//--------Constants--------
//-------------------------
/* declare const Divide: DynamicBackgroundExtraction.prototype.Divide;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const None: DynamicBackgroundExtraction.prototype.None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SameAsTarget: DynamicBackgroundExtraction.prototype.SameAsTarget;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Subtract: DynamicBackgroundExtraction.prototype.Subtract;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: DynamicBackgroundExtraction.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: DynamicBackgroundExtraction.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: DynamicBackgroundExtraction.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: DynamicBackgroundExtraction.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i8: DynamicBackgroundExtraction.prototype.i8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicBackgroundExtraction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    axisColor: number;
    badSampleColor: number;
    badSampleFillColor: number;
    correctedImageId: string;
    correctedImageSampleFormat: number;
    data: Array<any>;
    defaultSampleRadius: number;
    derivativeOrder: number;
    discardModel: boolean;
    downsample: number;
    ignoreWeights: boolean;
    imageHeight: number;
    imageWidth: number;
    minSampleFraction: number;
    minWeight: number;
    modelHeight: number;
    modelId: string;
    modelSampleFormat: number;
    modelWidth: number;
    normalize: boolean;
    numberOfChannels: number;
    replaceTarget: boolean;
    sampleColor: number;
    samples: Array<any>;
    samplesPerRow: number;
    selectedSampleColor: number;
    selectedSampleFillColor: number;
    shadowsRelaxation: number;
    smoothing: number;
    symmetryCenterX: number;
    symmetryCenterY: number;
    targetCorrection: number;
    tolerance: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicBackgroundExtraction?: DynamicBackgroundExtraction);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static axisColor: number;
    static badSampleColor: number;
    static badSampleFillColor: number;
    static correctedImageId: string;
    static correctedImageSampleFormat: number;
    static data: Array<any>;
    static defaultSampleRadius: number;
    static derivativeOrder: number;
    static discardModel: boolean;
    static downsample: number;
    static ignoreWeights: boolean;
    static imageHeight: number;
    static imageWidth: number;
    static minSampleFraction: number;
    static minWeight: number;
    static modelHeight: number;
    static modelId: string;
    static modelSampleFormat: number;
    static modelWidth: number;
    static normalize: boolean;
    static numberOfChannels: number;
    static replaceTarget: boolean;
    static sampleColor: number;
    static samples: Array<any>;
    static samplesPerRow: number;
    static selectedSampleColor: number;
    static selectedSampleFillColor: number;
    static shadowsRelaxation: number;
    static smoothing: number;
    static symmetryCenterX: number;
    static symmetryCenterY: number;
    static targetCorrection: number;
    static tolerance: number;
}
