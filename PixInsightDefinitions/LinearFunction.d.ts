//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LinearFunction {


    //-------------------------
    //-------Properties--------
    //-------------------------
    adev: number;
    b: number;
    intercept: number;
    isValid: boolean;
    m: number;
    slope: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(S: LinearFunction);
    constructor(x1: number, y1: number, x2: number, y2: number);
    constructor(x: Array<any> | any /* TypedArray */, y: Array<any> | any /* TypedArray */);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public evaluate(x: number): void;


    public fit(x: Array<any> | any /* TypedArray */, y: Array<any> | any /* TypedArray */): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static adev: number;
    static b: number;
    static intercept: number;
    static isValid: boolean;
    static m: number;
    static slope: number;
}
