//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Resample extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    absoluteMode: number;
    clampingThreshold: number;
    forceResolution: boolean;
    gammaCorrection: boolean;
    interpolation: number;
    metric: boolean;
    mode: number;
    noGUIMessages: boolean;
    smoothness: number;
    xResolution: number;
    xSize: number;
    yResolution: number;
    ySize: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Resample?: Resample);


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
    static absoluteMode: number;
    static clampingThreshold: number;
    static forceResolution: boolean;
    static gammaCorrection: boolean;
    static interpolation: number;
    static metric: boolean;
    static mode: number;
    static noGUIMessages: boolean;
    static smoothness: number;
    static xResolution: number;
    static xSize: number;
    static yResolution: number;
    static ySize: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteCentimeters;
    AbsoluteInches;
    AbsolutePixels;
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    ForceArea;
    ForceHeight;
    ForceWidth;
    ForceWidthAndHeight;
    Lanczos3;
    Lanczos4;
    MitchellNetravaliFilter;
    NearestNeighbor;
    RelativeDimensions;
}
