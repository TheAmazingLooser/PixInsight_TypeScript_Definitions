//-------------------------
//--------Constants--------
//-------------------------
/* declare const AkimaSubsplines: ColorSaturation.prototype.AkimaSubsplines;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicSpline: ColorSaturation.prototype.CubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Linear: ColorSaturation.prototype.Linear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ColorSaturation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    HS: Array<any>;
    HSt: number;
    hueShift: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ColorSaturation?: ColorSaturation);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static HS: Array<any>;
    static HSt: number;
    static hueShift: number;
}
