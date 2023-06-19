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
    public test(image: Image, createStarMaskWindow?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public progressCallback: (count: number, total: number) => Boolean;


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
