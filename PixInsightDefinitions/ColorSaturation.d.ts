//-------------------------
//--------Constants--------
//-------------------------


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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static HS: Array<any>;
    static HSt: number;
    static hueShift: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AkimaSubsplines;
    CubicSpline;
    Linear;
}
