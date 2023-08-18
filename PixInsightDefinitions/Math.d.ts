//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Math {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    public static MAD(data: Array<any> | any /* TypedArray */): number;
    public static MAD(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): number;

    public static Qn(data: Array<any> | any /* TypedArray */): number;

    public static Sn(data: Array<any> | any /* TypedArray */): number;

    public static abs(x: number): number;

    public static acos(x: number): number;

    public static acosh(x: number): number;

    public static ahav(x: number): number;

    public static angle(deg: number): number;
    public static angle(deg: number, min?: number /* 0 */, sec?: number /* 0 */): number;

    public static asin(x: number): number;

    public static asinh(x: number): number;

    public static atan(y: number): number;
    public static atan(y: number, x?: number /* 1 */): number;

    public static atan2(y: number, x: number): number;

    public static atan2pi(y: number, x: number): number;

    public static atanh(x: number): number;

    public static avgDev(data: Array<any> | any /* TypedArray */): number;
    public static avgDev(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): number;

    public static bendMidvariance(data: Array<any> | any /* TypedArray */): number;
    public static bendMidvariance(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */, beta?: number /* 0.2 */): number;

    public static biweightMidvariance(data: Array<any> | any /* TypedArray */): number;
    public static biweightMidvariance(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */, sigma?: number /* MAD(data,center) */, k?: number /* 9 */, reducedLength?: boolean /* false */): number;

    public static calendarTimeToJD(year: number, month: number, day: number, dayFraction: number): number;

    public static calendarTimeToJD(year: number, month: number, days: number): number;

    public static calendarTimeToJD(dateTime: string): number;

    public static calendarTimeToJD2(year: number, month: number, day: number, dayFraction: number): Array<any>;

    public static calendarTimeToJD2(year: number, month: number, days: number): Array<any>;

    public static calendarTimeToJD2(dateTime: string): Array<any>;

    public static ceil(x: number): number;

    public static cos(x: number): number;

    public static cosh(x: number): number;

    public static cotan(x: number): number;

    public static decimalToSexagesimal(degrees: number): Array<any>;

    public static deg(x: number): number;

    public static erf(x: number): number;

    public static erfinv(x: number): number;

    public static exp(x: number): number;

    public static fact(x: number): number;

    public static floor(x: number): number;

    public static frac(x: number): number;

    public static frexp(x: number): Array<any>;

    public static hav(x: number): number;

    public static heapSort(data: any /* TypedArray */): void;

    public static homography(P1: Array<any>, P2: Array<any>): Matrix;

    public static initRandomGenerator(): void;
    public static initRandomGenerator(seed64?: Array<any>): void;

    public static initRandomGenerator(seedLSW: number, seedMSW: number): void;

    public static initRandomGenerator(seed32: number): void;

    public static insertionSort(data: any /* TypedArray */): void;

    public static jdToCalendarTime(jd1: number): Array<any>;
    public static jdToCalendarTime(jd1: number, jd2?: number): Array<any>;

    public static ldexp(mant: number, exp: number): number;

    public static ln(x: number): number;

    public static lngamma(x: number): number;

    public static log(x: number): number;

    public static log10(x: number): number;

    public static log2(x: number): number;

    public static logn(n: number, x: number): number;

    public static max(...x: any[]): number;

    public static maxElem(data: Array<any> | any /* TypedArray */): number;

    public static mean(data: Array<any> | any /* TypedArray */): number;

    public static median(data: Array<any> | any /* TypedArray */): number;

    public static min(...x: any[]): number;

    public static min2rad(x: number): number;

    public static minElem(data: Array<any> | any /* TypedArray */): number;

    public static mod(x: number, y: number): number;

    public static modulus(data: Array<any> | any /* TypedArray */): number;

    public static mtf(m: number, x: number): number;

    public static parseInteger(s: string): number;
    public static parseInteger(s: string, lowerBound?: number, upperBound?: number): number;

    public static parseReal(s: string): number;
    public static parseReal(s: string, precision?: number, lowerBound?: number, upperBound?: number): number;

    public static poly(x: number, coeffs: Array<any>): number;

    public static pow(x: number, y: number): number;

    public static pow10(x: number): number;

    public static pow2(x: number): number;

    public static quickSort(data: any /* TypedArray */): void;

    public static rad(x: number): number;

    public static rad2min(x: number): number;

    public static rad2sec(x: number): number;

    public static random(): number;

    public static randomArray(n: number): Array<any>;

    public static randomFloat32Array(n: number): Float32Array;
    public static randomFloat32Array(n: number, distr?: string, distr_p1?: any, distr_p2?: any): Float32Array;

    public static randomFloat64Array(n: number): Float64Array;
    public static randomFloat64Array(n: number, distr?: string, distr_p1?: any, distr_p2?: any): Float64Array;

    public static randomSeed32(): number;

    public static range(x: number, a: number, b: number): number;

    public static round(x: number): number;

    public static roundTo(x: number, n: number): number;

    public static sec2rad(x: number): number;

    public static select(data: Array<any> | any /* TypedArray */, k: number): number;

    public static sexagesimalToDecimal(sign: number, s1: number): number;
    public static sexagesimalToDecimal(sign: number, s1: number, s2?: number /* 0 */, s3?: number /* 0 */): number;

    public static sign(x: number): number;

    public static sin(x: number): number;

    public static sinh(x: number): number;

    public static solve(A: Matrix, B: Matrix): Array<any>;

    public static sqrt(x: number): number;

    public static stableAvgDev(data: Array<any> | any /* TypedArray */): number;
    public static stableAvgDev(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): number;

    public static stableMean(data: Array<any> | any /* TypedArray */): number;

    public static stableModulus(data: Array<any> | any /* TypedArray */): number;

    public static stableSum(data: Array<any> | any /* TypedArray */): number;

    public static stableSumOfSquares(data: Array<any> | any /* TypedArray */): number;

    public static stdDev(data: Array<any> | any /* TypedArray */): number;

    public static sum(data: Array<any> | any /* TypedArray */): number;

    public static sumOfSquares(data: Array<any> | any /* TypedArray */): number;

    public static tan(x: number): number;

    public static tanh(x: number): number;

    public static trimmedMean(data: Array<any> | any /* TypedArray */): number;
    public static trimmedMean(data: Array<any> | any /* TypedArray */, l?: number /* 1 */, h?: number /* 1 */): number;

    public static trimmedMeanOfSquares(data: Array<any> | any /* TypedArray */): number;
    public static trimmedMeanOfSquares(data: Array<any> | any /* TypedArray */, l?: number /* 1 */, h?: number /* 1 */): number;

    public static trunc(x: number): number;

    public static twoSidedAvgDev(data: Array<any> | any /* TypedArray */): Array<any>;
    public static twoSidedAvgDev(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): Array<any>;

    public static twoSidedBiweightMidvariance(data: Array<any> | any /* TypedArray */): Array<any>;
    public static twoSidedBiweightMidvariance(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */, sigma?: Array<any> | number /* twoSidedMAD(data,center) */, k?: number /* 9 */, reducedLength?: boolean /* false */): Array<any>;

    public static twoSidedMAD(data: Array<any> | any /* TypedArray */): Array<any>;
    public static twoSidedMAD(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): Array<any>;

    public static uiResourceScalingFactor(scalingFactor: number): number;

    public static uiResourceScalingFactorForIndex(index: number): number;

    public static uiResourceScalingIndex(scalingFactor: number): number;

    public static uiScaled(scalingFactor: number, size: number): number;

    public static uiScaledResource(scalingFactor: number, resource: string): string;

    public static uiScaledResourceForIndex(index: number, resource: string): string;

    public static uiUnscaled(scalingFactor: number, size: number): number;

    public static variance(data: Array<any> | any /* TypedArray */): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static E: number;
    static LOG2E: number;
    static LOG10E: number;
    static LN2: number;
    static LN10: number;
    static PI: number;
    static SQRT2: number;
    static SQRT1_2: number;
    static PI4: number;
    static PI2: number;
    static _3PI4: number;
    static _5PI4: number;
    static _3PI2: number;
    static _7PI4: number;
    static _2PI: number;
    static _1_PI: number;
    static _2_PI: number;
    static DEG: number;
    static RAD: number;
    static GOLDEN: number;
    static EPSILON: number;
    static MAX: number;
    static MIN: number;
    static LOWEST: number;
    static EPSILON32: number;
    static MAX32: number;
    static MIN32: number;
    static LOWEST32: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    DEG;
    E;
    EPSILON;
    EPSILON32;
    GOLDEN;
    LN10;
    LN2;
    LOG10E;
    LOG2E;
    LOWEST;
    LOWEST32;
    MAX;
    MAX32;
    MIN;
    MIN32;
    PI;
    PI2;
    PI4;
    RAD;
    SQRT1_2;
    SQRT2;
    _1_PI;
    _2PI;
    _2_PI;
    _3PI2;
    _3PI4;
    _5PI4;
    _7PI4;
}
