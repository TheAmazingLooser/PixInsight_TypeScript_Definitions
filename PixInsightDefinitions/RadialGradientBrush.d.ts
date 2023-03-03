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
    constructor(center: Point, radius: number, focalPoint?: Point, stops?: Array<any>, spread?: number);


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
    static prototype: RadialGradientBrush;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
