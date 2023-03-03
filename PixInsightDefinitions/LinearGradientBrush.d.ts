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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: LinearGradientBrush;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
