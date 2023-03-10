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
    constructor(center: Point, angle: number, stops?: Array<any>);


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
    static prototype: ConicalGradientBrush;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
