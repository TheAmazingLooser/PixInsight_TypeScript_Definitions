//-------------------------
//--------Constants--------
//-------------------------
/* declare const AkimaSubsplines: CurvesTransformation.prototype.AkimaSubsplines;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicSpline: CurvesTransformation.prototype.CubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Linear: CurvesTransformation.prototype.Linear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class CurvesTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    A: Array;
    At: number;
    B: Array;
    Bt: number;
    G: Array;
    Gt: number;
    H: Array;
    Ht: number;
    K: Array;
    Kt: number;
    L: Array;
    Lt: number;
    R: Array;
    Rt: number;
    S: Array;
    St: number;
    a: Array;
    at: number;
    b: Array;
    bt: number;
    c: Array;
    ct: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CurvesTransformation?: CurvesTransformation);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static A: Array;
    static At: number;
    static B: Array;
    static Bt: number;
    static G: Array;
    static Gt: number;
    static H: Array;
    static Ht: number;
    static K: Array;
    static Kt: number;
    static L: Array;
    static Lt: number;
    static R: Array;
    static Rt: number;
    static S: Array;
    static St: number;
    static a: Array;
    static at: number;
    static b: Array;
    static bt: number;
    static c: Array;
    static ct: number;
}
