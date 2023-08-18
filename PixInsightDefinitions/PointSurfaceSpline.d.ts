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
    errorX: number;
    errorY: number;
    incrementalFunctionEnabled: boolean;
    isValid: boolean;
    linearFunction: Matrix;
    maxSplinePoints: number;
    pointsX: Array<any>;
    pointsY: Array<any>;
    simplifierRejectFraction: number;
    simplifiersEnabled: boolean;
    truncatedX: boolean;
    truncatedY: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(S: PointSurfaceSpline);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(S: PointSurfaceSpline): void;

    public clear(): void;

    public evaluate(x: number, y: number): Point;

    public evaluate(p: Point): Point;

    public evaluate(points: Array<any>): Array<any>;

    public initialize(P1: Array<any>, P2: Array<any>): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness?: number /* 0 */, W?: Vector /* null */, order?: number /* 2 */, rbfType?: number /* RBFType_Default */, eps?: number /* 0 */, polynomial?: boolean /* true */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: PointSurfaceSpline;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
