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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ImageDescription;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
