//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SurfaceSpline {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isValid: boolean;
    length: number;
    order: number;
    rbfType: number;
    shapeParameter: number;
    smoothing: number;
    usePolynomial: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(S: SurfaceSpline);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(S: SurfaceSpline): void;

    public clear(): void;

    public evaluate(x: number, y: number): number;

    public evaluate(p: Point): number;

    public evaluate(points: Array<any>): Vector;

    public initialize(x: Vector, y: Vector, z: Vector): void;
    public initialize(x: Vector, y: Vector, z: Vector, w?: Vector): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: SurfaceSpline;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
