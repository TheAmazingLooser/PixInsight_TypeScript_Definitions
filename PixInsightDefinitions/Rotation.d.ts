//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Rotation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    angle: number;
    blue: number;
    clampingThreshold: number;
    gammaCorrection: boolean;
    green: number;
    interpolation: number;
    noGUIMessages: boolean;
    optimizeFast: boolean;
    red: number;
    smoothness: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Rotation?: Rotation);


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
    static clampingThreshold: number;
    static gammaCorrection: boolean;
    static green: number;
    static interpolation: number;
    static noGUIMessages: boolean;
    static optimizeFast: boolean;
    static red: number;
    static smoothness: number;


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
