//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ATrousWaveletTransformV1 extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    curveBreakPoint: number;
    highRange: number;
    largeScaleFunction: number;
    layers: Array<any>;
    linear: boolean;
    lowRange: number;
    noiseThreshold: number;
    noiseThresholdingAmount: number;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    scalingFunctionData: Array<any>;
    scalingFunctionKernelSize: number;
    scalingFunctionName: string;
    scalingFunctionNoiseLayers: number;
    scalingFunctionNoiseSigma: Array<any>;
    toChrominance: boolean;
    toLuminance: boolean;
    version: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ATrousWaveletTransformV1?: ATrousWaveletTransformV1);


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
    static curveBreakPoint: number;
    static highRange: number;
    static largeScaleFunction: number;
    static layers: Array<any>;
    static linear: boolean;
    static lowRange: number;
    static noiseThreshold: number;
    static noiseThresholdingAmount: number;
    static previewLayer: number;
    static previewMode: number;
    static scaleDelta: number;
    static scalingFunctionData: Array<any>;
    static scalingFunctionKernelSize: number;
    static scalingFunctionName: string;
    static scalingFunctionNoiseLayers: number;
    static scalingFunctionNoiseSigma: Array<any>;
    static toChrominance: boolean;
    static toLuminance: boolean;
    static version: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AllPixelChanges;
    DecreasingPixels;
    DirectionalMultiway;
    Disabled;
    Hyperbolic;
    IncreasingPixels;
    Ln;
    Log10;
    Morphological;
    NoFunction;
    Recursive;
    SignificantStructures;
}
