//-------------------------
//--------Constants--------
//-------------------------
/* declare const SameAsTarget: DynamicAlignment.prototype.SameAsTarget;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: DynamicAlignment.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: DynamicAlignment.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: DynamicAlignment.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: DynamicAlignment.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i8: DynamicAlignment.prototype.i8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    badSampleColor: number;
    badSampleFillColor: number;
    data: Array;
    points: Array;
    registeredImageId: string;
    registeredImageSampleFormat: number;
    removedLayers: number;
    sampleColor: number;
    searchFeatures: boolean;
    selectedSampleColor: number;
    selectedSampleFillColor: number;
    sourceImageHeight: number;
    sourceImageId: string;
    sourceImageWidth: number;
    sourceSearchRadius: number;
    targetImageHeight: number;
    targetImageWidth: number;
    targetSearchRadius: number;
    threshold: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicAlignment?: DynamicAlignment);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static badSampleColor: number;
    static badSampleFillColor: number;
    static data: Array;
    static points: Array;
    static registeredImageId: string;
    static registeredImageSampleFormat: number;
    static removedLayers: number;
    static sampleColor: number;
    static searchFeatures: boolean;
    static selectedSampleColor: number;
    static selectedSampleFillColor: number;
    static sourceImageHeight: number;
    static sourceImageId: string;
    static sourceImageWidth: number;
    static sourceSearchRadius: number;
    static targetImageHeight: number;
    static targetImageWidth: number;
    static targetSearchRadius: number;
    static threshold: number;
}
