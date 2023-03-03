//-------------------------
//--------Constants--------
//-------------------------


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
    //-----event-handlers------
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
