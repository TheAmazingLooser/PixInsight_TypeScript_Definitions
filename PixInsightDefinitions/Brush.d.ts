//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Brush {


    //-------------------------
    //-------Properties--------
    //-------------------------
    color: number;
    isEmpty: boolean;
    isSolid: boolean;
    isStippled: boolean;
    stipple: Bitmap;
    style: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(color: number /* 0xff000000*/, style: number /* BrushStyle_Solid*/);
    constructor(b: Brush);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(br: Brush): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static color: number;
    static isEmpty: boolean;
    static isSolid: boolean;
    static isStippled: boolean;
    static stipple: Bitmap;
    static style: number;
}
