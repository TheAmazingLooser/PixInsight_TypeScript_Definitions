//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PointSurfaceSpline {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isRecursive: boolean;
    isValid: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(P1: Array, P2: Array, smoothness ?: number /*  0*/, W ?: Vector /*  null*/, order ?: number /*  2*/, allowExtrapolation ?: boolean /*  true*/, maxSplineLength ?: number /*  1600*/, bucketCapacity ?: number /*  64*/, verbose ?: boolean /*  true*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public clear(): void;

    public evaluate(x: number, y: number): Point;

    public evaluate(p: Point): Point;

    public evaluate(points: Array): Array;

    public initialize(P1: Array, P2: Array, smoothness ?: number /*  0*/, W ?: Vector /*  null*/, order ?: number /*  2*/, allowExtrapolation ?: boolean /*  true*/, maxSplineLength ?: number /*  1600*/, bucketCapacity ?: number /*  64*/, verbose ?: boolean /*  true*/): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static isRecursive: boolean;
    static isValid: boolean;
}
