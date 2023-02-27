//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarDetector {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bkgDelta: number;
    hotPixelFilterRadius: number;
    invert: boolean;
    mask: Image;
    maxDistortion: number;
    noiseReductionFilterRadius: number;
    peakResponse: number;
    sensitivity: number;
    structureLayers: number;
    upperLimit: number;
    xyStretch: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


    //-------------------------
    //--------Functions--------
    //-------------------------
    public getStructureMap(map: Image): void;


    public stars(image: Image): Array<any>;


    public test(image: Image): void;
    public test(image: Image, createStarMaskWindow: boolean /* false*/): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bkgDelta: number;
    static hotPixelFilterRadius: number;
    static invert: boolean;
    static mask: Image;
    static maxDistortion: number;
    static noiseReductionFilterRadius: number;
    static peakResponse: number;
    static sensitivity: number;
    static structureLayers: number;
    static upperLimit: number;
    static xyStretch: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
