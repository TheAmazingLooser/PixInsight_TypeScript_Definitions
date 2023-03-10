//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ShepardInterpolation {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isValid: boolean;
    power: number;
    radius: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


    //-------------------------
    //--------Functions--------
    //-------------------------
    public clear(): void;

    public evaluate(x: number, y: number): number;

    public evaluate(p: Point): number;

    public evaluate(points: Array<any>): Vector;

    public initialize(x: Vector, y: Vector, z: Vector): void;

    public initialize(r: Rect, x: Vector, y: Vector, z: Vector): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ShepardInterpolation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
