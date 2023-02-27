//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ObserverPosition {


    //-------------------------
    //-------Properties--------
    //-------------------------
    cioBased: boolean;
    equatorialRadius: number;
    flattening: number;
    height: number;
    lambda: number;
    latitude: number;
    longitude: number;
    phi: number;
    regionalCenter: Vector;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(longitude: number, latitude: number, height : number /*  0*/, equatorialRadius: number, flattening: number, regionalCenter: Vector, cioBased : boolean /*  false*/);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static cioBased: boolean;
    static equatorialRadius: number;
    static flattening: number;
    static height: number;
    static lambda: number;
    static latitude: number;
    static longitude: number;
    static phi: number;
    static regionalCenter: Vector;
}
