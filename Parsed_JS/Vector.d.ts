//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Vector {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isEmpty: boolean;
    length: number;
    lowerBound: number;
    upperBound: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(length: number);
    constructor(value: number, length: number);
    constructor(v: Vector, startIndex?: number /* 0*/, endIndex?: number /* v.length*/);
    constructor(a: Array, startIndex?: number /* 0*/, endIndex?: number /* a.length*/);
    constructor(a: any /* TypedArray */, startIndex?: number /* 0*/, endIndex?: number /* a.length*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public BWMV(center?: number /* median()*/, sigma?: number /* MAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/): number;

    public MAD(center?: number /* median()*/): number;

    public PBMV(center?: number /* median()*/, beta?: number /* 0.2*/): number;

    public Qn(): number;

    public Sn(): number;

    public abs(): Vector;

    public add(s: number): void;

    public add(v: Vector): void;

    public assign(value: number): void;

    public assign(value: number, length: number): void;

    public assign(v: Vector, startIndex?: number /* 0*/, endIndex?: number /* v.length*/): void;

    public assign(a: Array, startIndex?: number /* 0*/, endIndex?: number /* a.length*/): void;

    public assign(a: any /* TypedArray */, startIndex?: number /* 0*/, endIndex?: number /* a.length*/): void;

    public at(index: number): number;

    public at(index: number, value: number): void;

    public avgDev(center?: number /* median()*/): number;

    public bendMidvariance(center?: number /* median()*/, beta?: number /* 0.2*/): number;

    public binarySearch(value: number, startIndex?: number /* 0*/, endIndex?: number /* length*/): number;

    public biweightMidvariance(center?: number /* median()*/, sigma?: number /* MAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/): number;

    public cross(v: Vector): Vector;

    public crossProduct(v: Vector): Vector;

    public div(s: number): void;

    public div(v: Vector): void;

    public dot(v: Vector): number;

    public dotProduct(v: Vector): number;

    public isEqualTo(v: Vector): boolean;

    public isLessThan(v: Vector): boolean;

    public l1norm(): number;

    public l2norm(): number;

    public linearSearch(value: number, startIndex?: number /* 0*/, endIndex?: number /* length*/): number;

    public maxComponent(): number;

    public mean(): number;

    public median(): number;

    public minComponent(): number;

    public modulus(): number;

    public mul(s: number): void;

    public mul(v: Vector): void;

    public norm(p?: number /* 2*/): number;

    public orderStatistic(k: number): number;

    public pow(s: number): void;

    public reverse(): void;

    public setAbs(): void;

    public setRandom(): void;

    public setSqr(): void;

    public setSqrt(): void;

    public setUnit(): void;

    public sort(): void;

    public sqr(): Vector;

    public sqrt(): Vector;

    public stableAvgDev(center?: number /* median()*/): number;

    public stableMean(): number;

    public stableModulus(): number;

    public stableSum(): number;

    public stableSumOfSquares(): number;

    public stdDev(): number;

    public sub(s: number): void;

    public sub(v: Vector): void;

    public sum(): number;

    public sumOfSquares(): number;

    public swap(v: Vector): void;

    public toArray(startIndex?: number /* 0*/, endIndex?: number /* length*/): Array;

    public toFloat32Array(startIndex?: number /* 0*/, endIndex?: number /* length*/): Float32Array;

    public toFloat64Array(startIndex?: number /* 0*/, endIndex?: number /* length*/): Float64Array;

    public toSpherical(): Array;

    public toSpherical2Pi(): Array;

    public trimmedMean(l?: number /* 1*/, h?: number /* 1*/): number;

    public trimmedMeanOfSquares(l?: number /* 1*/, h?: number /* 1*/): number;

    public twoSidedAvgDev(center?: number /* median()*/): Array;

    public twoSidedBWMV(center?: number /* median()*/, sigma?: Array | number /* twoSidedMAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/): Array;

    public twoSidedBiweightMidvariance(center?: number /* median()*/, sigma?: Array | number /* twoSidedMAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/): Array;

    public twoSidedMAD(center?: number /* median()*/): Array;

    public unit(): Vector;

    public variance(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromSpherical(longitude: number, latitude: number): Vector;

    public static fromSpherical(slon: number, clon: number, slat: number, clat: number): Vector;



    //-------------------------
    //----static Properties----
    //-------------------------
    static isEmpty: boolean;
    static length: number;
    static lowerBound: number;
    static upperBound: number;
}
