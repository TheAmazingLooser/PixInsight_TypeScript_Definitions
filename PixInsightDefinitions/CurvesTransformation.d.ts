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
    A: Array<any>;
    At: number;
    B: Array<any>;
    Bt: number;
    G: Array<any>;
    Gt: number;
    H: Array<any>;
    Ht: number;
    K: Array<any>;
    Kt: number;
    L: Array<any>;
    Lt: number;
    R: Array<any>;
    Rt: number;
    S: Array<any>;
    St: number;
    a: Array<any>;
    at: number;
    b: Array<any>;
    bt: number;
    c: Array<any>;
    ct: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CurvesTransformation: CurvesTransformation);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static A: Array<any>;
    static At: number;
    static B: Array<any>;
    static Bt: number;
    static G: Array<any>;
    static Gt: number;
    static H: Array<any>;
    static Ht: number;
    static K: Array<any>;
    static Kt: number;
    static L: Array<any>;
    static Lt: number;
    static R: Array<any>;
    static Rt: number;
    static S: Array<any>;
    static St: number;
    static a: Array<any>;
    static at: number;
    static b: Array<any>;
    static bt: number;
    static c: Array<any>;
    static ct: number;
}
