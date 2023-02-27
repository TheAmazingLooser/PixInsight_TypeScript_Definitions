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
    constructor(P1: Array<any>, P2: Array<any>, smoothness : number /*  0*/, W : Vector /*  null*/, order : number /*  2*/, allowExtrapolation : boolean /*  true*/, maxSplineLength : number /*  1600*/, bucketCapacity : number /*  64*/, verbose : boolean /*  true*/);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public evaluate(x: number, y: number): Point;


    public evaluate(p: Point): Point;


    public evaluate(points: Array<any>): Array<any>;


    public initialize(P1: Array<any>, P2: Array<any>): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/, W: Vector /* null*/): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/, W: Vector /* null*/, order: number /* 2*/): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/, W: Vector /* null*/, order: number /* 2*/, allowExtrapolation: boolean /* true*/): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/, W: Vector /* null*/, order: number /* 2*/, allowExtrapolation: boolean /* true*/, maxSplineLength: number /* 1600*/): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/, W: Vector /* null*/, order: number /* 2*/, allowExtrapolation: boolean /* true*/, maxSplineLength: number /* 1600*/, bucketCapacity: number /* 64*/): void;
    public initialize(P1: Array<any>, P2: Array<any>, smoothness: number /* 0*/, W: Vector /* null*/, order: number /* 2*/, allowExtrapolation: boolean /* true*/, maxSplineLength: number /* 1600*/, bucketCapacity: number /* 64*/, verbose: boolean /* true*/): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static isRecursive: boolean;
    static isValid: boolean;
}
