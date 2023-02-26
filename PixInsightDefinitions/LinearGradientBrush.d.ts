//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LinearGradientBrush extends GradientBrush {


    //-------------------------
    //-------Properties--------
    //-------------------------
    end: Point;
    start: Point;
    x1: number;
    x2: number;
    y1: number;
    y2: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(start: Point, end: Point, stops?: Array<any>, spread?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static end: Point;
    static start: Point;
    static x1: number;
    static x2: number;
    static y1: number;
    static y2: number;
}
