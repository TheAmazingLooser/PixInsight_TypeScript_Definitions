//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GridInterpolation {


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
    constructor(r: Rect, S: SurfaceSpline, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(r: Rect, S: ShepardInterpolation, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(G: GridInterpolation);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(G: GridInterpolation): void;

    public clear(): void;

    public evaluate(x: number, y: number): number;

    public evaluate(p: Point): number;

    public evaluate(points: Array<any>): Array<any>;

    public initialize(r: Rect, S: SurfaceSpline): void;
    public initialize(r: Rect, S: SurfaceSpline, delta: number /* 8*/): void;
    public initialize(r: Rect, S: SurfaceSpline, delta: number /* 8*/, verbose: boolean /* false*/): void;

    public initialize(r: Rect, S: ShepardInterpolation): void;
    public initialize(r: Rect, S: ShepardInterpolation, delta: number /* 8*/): void;
    public initialize(r: Rect, S: ShepardInterpolation, delta: number /* 8*/, verbose: boolean /* false*/): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: GridInterpolation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
