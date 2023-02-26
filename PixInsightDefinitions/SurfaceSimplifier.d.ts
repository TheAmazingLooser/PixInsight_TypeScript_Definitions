//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SurfaceSimplifier {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centroidInclusionEnabled: boolean;
    rejectFraction: number;
    rejectionEnabled: boolean;
    tolerance: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(tolerance?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public simplify(x: Vector, y: Vector, z: Vector): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static centroidInclusionEnabled: boolean;
    static rejectFraction: number;
    static rejectionEnabled: boolean;
    static tolerance: number;
}
