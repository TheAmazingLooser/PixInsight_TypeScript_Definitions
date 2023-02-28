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
    constructor(re: number, im?: number);
    constructor(c: Complex);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public abs(): number;

    public add(c: Complex): void;

    public add(r: number): void;

    public arg(): number;

    public assign(c: Complex): void;

    public assign(r: number): void;

    public conj(): Complex;

    public cos(): Complex;

    public cosh(): Complex;

    public div(c: Complex): void;

    public div(r: number): void;

    public exp(): Complex;

    public ln(): Complex;

    public log(): Complex;

    public mag(): number;

    public mul(c: Complex): void;

    public mul(r: number): void;

    public norm(): number;

    public pow(c: Complex): void;

    public pow(r: number): void;

    public setConj(): void;

    public setCos(): void;

    public setCosh(): void;

    public setExp(): void;

    public setLn(): void;

    public setLog(): void;

    public setSin(): void;

    public setSinh(): void;

    public setSqrt(): void;

    public setTan(): void;

    public setTanh(): void;

    public sin(): Complex;

    public sinh(): Complex;

    public sqrt(): Complex;

    public sub(c: Complex): void;

    public sub(r: number): void;

    public tan(): Complex;

    public tanh(): Complex;

    public toArray(): Array<any>;

    public toString(): string;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static polar(r: number, thetaRadians: number): Complex;

    public static polar(r: number, sinTheta: number, cosTheta: number): Complex;



    //-------------------------
    //----static Properties----
    //-------------------------
    static im: number;
    static imag: number;
    static re: number;
    static real: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
