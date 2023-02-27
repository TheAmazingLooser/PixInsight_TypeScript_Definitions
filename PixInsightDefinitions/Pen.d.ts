//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Pen {


    //-------------------------
    //-------Properties--------
    //-------------------------
    brush: Brush;
    cap: number;
    color: number;
    isEmpty: boolean;
    isSolid: boolean;
    join: number;
    style: number;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(color?: number /* 0xff000000*/, width?: number /* 0*/, style?: number /* PenStyle_Solid*/, cap?: number /* PenCap_Flat*/, join?: number /* PenJoin_Miter*/);
    constructor(p: Pen);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(p: Pen): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static brush: Brush;
    static cap: number;
    static color: number;
    static isEmpty: boolean;
    static isSolid: boolean;
    static join: number;
    static style: number;
    static width: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
