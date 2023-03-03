//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicCrop extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    angle: number;
    blue: number;
    centerX: number;
    centerY: number;
    clampingThreshold: number;
    forceResolution: boolean;
    gammaCorrection: boolean;
    green: number;
    height: number;
    interpolation: number;
    metric: boolean;
    noGUIMessages: boolean;
    optimizeFast: boolean;
    outHeight: number;
    outWidth: number;
    red: number;
    refHeight: number;
    refWidth: number;
    scaleX: number;
    scaleY: number;
    smoothness: number;
    width: number;
    xResolution: number;
    yResolution: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicCrop?: DynamicCrop);


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
    static alpha: number;
    static angle: number;
    static blue: number;
    static centerX: number;
    static centerY: number;
    static clampingThreshold: number;
    static forceResolution: boolean;
    static gammaCorrection: boolean;
    static green: number;
    static height: number;
    static interpolation: number;
    static metric: boolean;
    static noGUIMessages: boolean;
    static optimizeFast: boolean;
    static outHeight: number;
    static outWidth: number;
    static red: number;
    static refHeight: number;
    static refWidth: number;
    static scaleX: number;
    static scaleY: number;
    static smoothness: number;
    static width: number;
    static xResolution: number;
    static yResolution: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    Lanczos3;
    Lanczos4;
    MitchellNetravaliFilter;
    NearestNeighbor;
}
