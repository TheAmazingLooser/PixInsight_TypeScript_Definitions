//-------------------------
//--------Constants--------
//-------------------------
/* declare const Auto: Rotation.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicBSpline: Rotation.prototype.BicubicBSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicSpline: Rotation.prototype.BicubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: Rotation.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CatmullRomSplineFilter: Rotation.prototype.CatmullRomSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicBSplineFilter: Rotation.prototype.CubicBSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos3: Rotation.prototype.Lanczos3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos4: Rotation.prototype.Lanczos4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MitchellNetravaliFilter: Rotation.prototype.MitchellNetravaliFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NearestNeighbor: Rotation.prototype.NearestNeighbor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
}
