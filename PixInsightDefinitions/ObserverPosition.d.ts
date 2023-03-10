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
    constructor(longitude: number, latitude: number, height ?: number /*  0*/, equatorialRadius?: number, flattening?: number, regionalCenter?: Vector, cioBased ?: boolean /*  false*/);


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
    static prototype: ObserverPosition;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
