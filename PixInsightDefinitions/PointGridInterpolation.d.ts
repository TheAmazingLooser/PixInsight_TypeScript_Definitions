//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PointGridInterpolation {


    //-------------------------
    //-------Properties--------
    //-------------------------
    delta: number;
    isValid: boolean;
    referenceRect: Rect;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(G: PointGridInterpolation);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(G: PointGridInterpolation): void;

    public clear(): void;

    public evaluate(x: number, y: number): Point;

    public evaluate(p: Point): Point;

    public evaluate(points: Array<any>): Array<any>;

    public initialize(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline): void;
    public initialize(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline, delta?: number /* 8 */, verbose?: boolean /* false */): void;

    public initialize(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation): void;
    public initialize(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation, delta?: number /* 8 */, verbose?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: PointGridInterpolation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
