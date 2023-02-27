//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Complex {


    //-------------------------
    //-------Properties--------
    //-------------------------
    im: number;
    imag: number;
    re: number;
    real: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(re: number, im: number);
    constructor(c: Complex);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public add(c: Complex): void;


    public add(r: number): void;




    public assign(c: Complex): void;


    public assign(r: number): void;








    public div(c: Complex): void;


    public div(r: number): void;










    public mul(c: Complex): void;


    public mul(r: number): void;




    public pow(c: Complex): void;


    public pow(r: number): void;






























    public sub(c: Complex): void;


    public sub(r: number): void;












    //-------------------------
    //----static Functions-----
    //-------------------------
    public polar(r: number, thetaRadians: number): Complex;


    public polar(r: number, sinTheta: number, cosTheta: number): Complex;




    //-------------------------
    //----static Properties----
    //-------------------------
    static im: number;
    static imag: number;
    static re: number;
    static real: number;
}
