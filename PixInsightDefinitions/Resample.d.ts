//-------------------------
//--------Constants--------
//-------------------------
/* declare const AbsoluteCentimeters: Resample.prototype.AbsoluteCentimeters;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AbsoluteInches: Resample.prototype.AbsoluteInches;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AbsolutePixels: Resample.prototype.AbsolutePixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Auto: Resample.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicBSpline: Resample.prototype.BicubicBSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicSpline: Resample.prototype.BicubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: Resample.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CatmullRomSplineFilter: Resample.prototype.CatmullRomSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicBSplineFilter: Resample.prototype.CubicBSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ForceArea: Resample.prototype.ForceArea;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ForceHeight: Resample.prototype.ForceHeight;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ForceWidth: Resample.prototype.ForceWidth;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ForceWidthAndHeight: Resample.prototype.ForceWidthAndHeight;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos3: Resample.prototype.Lanczos3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos4: Resample.prototype.Lanczos4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MitchellNetravaliFilter: Resample.prototype.MitchellNetravaliFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NearestNeighbor: Resample.prototype.NearestNeighbor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RelativeDimensions: Resample.prototype.RelativeDimensions;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(Resample: Resample);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
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
}
