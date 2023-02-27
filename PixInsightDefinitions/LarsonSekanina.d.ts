//-------------------------
//--------Constants--------
//-------------------------
/* declare const Bicubic: LarsonSekanina.prototype.Bicubic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicBSpline: LarsonSekanina.prototype.BicubicBSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicSpline: LarsonSekanina.prototype.BicubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: LarsonSekanina.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class LarsonSekanina extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    angleIncrement: number;
    centerX: number;
    centerY: number;
    deringing: number;
    disableExtension: boolean;
    highPass: boolean;
    interpolation: number;
    radiusIncrement: number;
    rangeHigh: number;
    rangeLow: number;
    threshold: number;
    useLuminance: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LarsonSekanina: LarsonSekanina);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amount: number;
    static angleIncrement: number;
    static centerX: number;
    static centerY: number;
    static deringing: number;
    static disableExtension: boolean;
    static highPass: boolean;
    static interpolation: number;
    static radiusIncrement: number;
    static rangeHigh: number;
    static rangeLow: number;
    static threshold: number;
    static useLuminance: boolean;
}
