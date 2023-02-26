//-------------------------
//--------Constants--------
//-------------------------
/* declare const Auto: DynamicCrop.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicBSpline: DynamicCrop.prototype.BicubicBSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicSpline: DynamicCrop.prototype.BicubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: DynamicCrop.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CatmullRomSplineFilter: DynamicCrop.prototype.CatmullRomSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicBSplineFilter: DynamicCrop.prototype.CubicBSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos3: DynamicCrop.prototype.Lanczos3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos4: DynamicCrop.prototype.Lanczos4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MitchellNetravaliFilter: DynamicCrop.prototype.MitchellNetravaliFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NearestNeighbor: DynamicCrop.prototype.NearestNeighbor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
}
