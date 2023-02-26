//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RadialGradientBrush extends GradientBrush {


    //-------------------------
    //-------Properties--------
    //-------------------------
    center: Point;
    focalPoint: Point;
    radius: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(center: Point, radius: number, focalPoint?: Point, stops?: Array, spread?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static center: Point;
    static focalPoint: Point;
    static radius: number;
}
