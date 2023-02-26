//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageDescription {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aperture: number;
    bitsPerSample: number;
    cfaType: string;
    colorSpace: number;
    complexSample: boolean;
    embedColorFilterArray: boolean;
    embedDisplayFunction: boolean;
    embedICCProfile: boolean;
    embedPreviewRects: boolean;
    embedProcessingHistory: boolean;
    embedProperties: boolean;
    embedRGBWS: boolean;
    embedThumbnail: boolean;
    exposure: number;
    focalLength: number;
    height: number;
    id: string;
    ieeefpSampleFormat: boolean;
    isoSpeed: number;
    lowerRange: number;
    metricResolution: boolean;
    numberOfChannels: number;
    signedIntegers: boolean;
    supported: boolean;
    upperRange: number;
    width: number;
    xResolution: number;
    yResolution: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(d: ImageDescription);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(r: ImageDescription): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static aperture: number;
    static bitsPerSample: number;
    static cfaType: string;
    static colorSpace: number;
    static complexSample: boolean;
    static embedColorFilterArray: boolean;
    static embedDisplayFunction: boolean;
    static embedICCProfile: boolean;
    static embedPreviewRects: boolean;
    static embedProcessingHistory: boolean;
    static embedProperties: boolean;
    static embedRGBWS: boolean;
    static embedThumbnail: boolean;
    static exposure: number;
    static focalLength: number;
    static height: number;
    static id: string;
    static ieeefpSampleFormat: boolean;
    static isoSpeed: number;
    static lowerRange: number;
    static metricResolution: boolean;
    static numberOfChannels: number;
    static signedIntegers: boolean;
    static supported: boolean;
    static upperRange: number;
    static width: number;
    static xResolution: number;
    static yResolution: number;
}
