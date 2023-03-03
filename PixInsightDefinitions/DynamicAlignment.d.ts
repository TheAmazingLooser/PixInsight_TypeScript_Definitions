//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    badSampleColor: number;
    badSampleFillColor: number;
    data: Array<any>;
    points: Array<any>;
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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static badSampleColor: number;
    static badSampleFillColor: number;
    static data: Array<any>;
    static points: Array<any>;
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


    //-------------------------
    //--------constants--------
    //-------------------------
    SameAsTarget;
    f32;
    f64;
    i16;
    i32;
    i8;
}
