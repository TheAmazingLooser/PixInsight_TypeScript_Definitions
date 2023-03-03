//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class MultiscaleMedianTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    highRange: number;
    layers: Array<any>;
    linear: boolean;
    linearMask: boolean;
    linearMaskAmpFactor: number;
    linearMaskInverted: boolean;
    linearMaskPreview: boolean;
    linearMaskSmoothness: number;
    lowRange: number;
    medianWaveletThreshold: number;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    toChrominance: boolean;
    toLuminance: boolean;
    transform: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MultiscaleMedianTransform?: MultiscaleMedianTransform);


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
    static highRange: number;
    static layers: Array<any>;
    static linear: boolean;
    static linearMask: boolean;
    static linearMaskAmpFactor: number;
    static linearMaskInverted: boolean;
    static linearMaskPreview: boolean;
    static linearMaskSmoothness: number;
    static lowRange: number;
    static medianWaveletThreshold: number;
    static previewLayer: number;
    static previewMode: number;
    static scaleDelta: number;
    static toChrominance: boolean;
    static toLuminance: boolean;
    static transform: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AllPixelChanges;
    DecreasingPixels;
    Disabled;
    IncreasingPixels;
    MedianWaveletTransform;
    MultiscaleMedianTransform;
}
