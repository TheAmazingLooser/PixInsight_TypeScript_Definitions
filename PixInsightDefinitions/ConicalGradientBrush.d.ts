//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ConicalGradientBrush extends GradientBrush {


    //-------------------------
    //-------Properties--------
    //-------------------------
    angle: number;
    center: Point;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(center: Point, angle: number, stops: Array<any>);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static angle: number;
    static center: Point;
}
