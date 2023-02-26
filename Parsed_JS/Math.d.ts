//-------------------------
//--------Constants--------
//-------------------------
/* declare const DEG: Math.prototype.DEG;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const E: Math.prototype.E;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const EPSILON: Math.prototype.EPSILON;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const EPSILON32: Math.prototype.EPSILON32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GOLDEN: Math.prototype.GOLDEN;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LN10: Math.prototype.LN10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LN2: Math.prototype.LN2;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LOG10E: Math.prototype.LOG10E;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LOG2E: Math.prototype.LOG2E;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LOWEST: Math.prototype.LOWEST;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LOWEST32: Math.prototype.LOWEST32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MAX: Math.prototype.MAX;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MAX32: Math.prototype.MAX32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MIN: Math.prototype.MIN;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MIN32: Math.prototype.MIN32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PI: Math.prototype.PI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PI2: Math.prototype.PI2;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PI4: Math.prototype.PI4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RAD: Math.prototype.RAD;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SQRT1_2: Math.prototype.SQRT1_2;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SQRT2: Math.prototype.SQRT2;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _1_PI: Math.prototype._1_PI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _2PI: Math.prototype._2PI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _2_PI: Math.prototype._2_PI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _3PI2: Math.prototype._3PI2;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _3PI4: Math.prototype._3PI4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _5PI4: Math.prototype._5PI4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const _7PI4: Math.prototype._7PI4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    public static MAD(data: Array | any /* TypedArray */, center?: number /* median(data)*/): number;

    public static Qn(data: Array | any /* TypedArray */): number;

    public static Sn(data: Array | any /* TypedArray */): number;

    public static abs(x: number): number;

    public static acos(x: number): number;

    public static acosh(x: number): number;

    public static ahav(x: number): number;

    public static angle(deg: number, min?: number /* 0*/, sec?: number /* 0*/): number;

    public static asin(x: number): number;

    public static asinh(x: number): number;

    public static atan(y: number, x?: number /* 1*/): number;

    public static atan2(y: number, x: number): number;

    public static atan2pi(y: number, x: number): number;

    public static atanh(x: number): number;

    public static avgDev(data: Array | any /* TypedArray */, center?: number /* median(data)*/): number;

    public static bendMidvariance(data: Array | any /* TypedArray */, center?: number /* median(data)*/, beta?: number /* 0.2*/): number;

    public static biweightMidvariance(data: Array | any /* TypedArray */, center?: number /* median(data)*/, sigma?: number /* MAD(data,center)*/, k?: number /* 9*/, reducedLength?: boolean /* false*/): number;

    public static calendarTimeToJD(year: number, month: number, day: number, dayFraction: number): number;

    public static calendarTimeToJD(year: number, month: number, days: number): number;

    public static calendarTimeToJD(dateTime: string): number;

    public static calendarTimeToJD2(year: number, month: number, day: number, dayFraction: number): Array;

    public static calendarTimeToJD2(year: number, month: number, days: number): Array;

    public static calendarTimeToJD2(dateTime: string): Array;

    public static ceil(x: number): number;

    public static cos(x: number): number;

    public static cosh(x: number): number;

    public static cotan(x: number): number;

    public static decimalToSexagesimal(degrees: number): Array;

    public static deg(x: number): number;

    public static erf(x: number): number;

    public static erfinv(x: number): number;

    public static exp(x: number): number;

    public static fact(x: number): number;

    public static floor(x: number): number;

    public static frac(x: number): number;

    public static frexp(x: number): Array;

    public static hav(x: number): number;

    public static heapSort(data: any /* TypedArray */): void;

    public static initRandomGenerator(seed64?: Array): void;

    public static initRandomGenerator(seedLSW: number, seedMSW: number): void;

    public static initRandomGenerator(seed32: number): void;

    public static insertionSort(data: any /* TypedArray */): void;

    public static jdToCalendarTime(jd1: number, jd2?: number): Array;

    public static ldexp(mant: number, exp: number): number;

    public static ln(x: number): number;

    public static lngamma(x: number): number;

    public static log(x: number): number;

    public static log10(x: number): number;

    public static log2(x: number): number;

    public static logn(n: number, x: number): number;

    public static max(x1: number, x2?: number, x3?: number, x4?: number, x5?: number, x6?: number, x7?: number, x8?: number, x9?: number, x10?: number): number;

    public static maxElem(data: Array | any /* TypedArray */): number;

    public static mean(data: Array | any /* TypedArray */): number;

    public static median(data: Array | any /* TypedArray */): number;

    public static min(x1: number, x2?: number, x3?: number, x4?: number, x5?: number, x6?: number, x7?: number, x8?: number, x9?: number, x10?: number): number;

    public static min2rad(x: number): number;

    public static minElem(data: Array | any /* TypedArray */): number;

    public static mod(x: number, y: number): number;

    public static modulus(data: Array | any /* TypedArray */): number;

    public static mtf(m: number, x: number): number;

    public static parseInteger(s: string, lowerBound?: number, upperBound?: number): number;

    public static parseReal(s: string, precision?: number, lowerBound?: number, upperBound?: number): number;

    public static poly(x: number, coeffs: Array): number;

    public static pow(x: number, y: number): number;

    public static pow10(x: number): number;

    public static pow2(x: number): number;

    public static quickSort(data: any /* TypedArray */): void;

    public static rad(x: number): number;

    public static rad2min(x: number): number;

    public static rad2sec(x: number): number;

    public static random(): number;

    public static randomArray(n: number): Array;

    public static randomFloat32Array(n: number, distr?: string, distr_p1?: any, distr_p2?: any): Float32Array;

    public static randomFloat64Array(n: number, distr?: string, distr_p1?: any, distr_p2?: any): Float64Array;

    public static randomSeed32(): number;

    public static range(x: number, a: number, b: number): number;

    public static round(x: number): number;

    public static roundTo(x: number, n: number): number;

    public static sec2rad(x: number): number;

    public static select(data: Array | any /* TypedArray */, k: number): number;

    public static sexagesimalToDecimal(sign: number, s1: number, s2 ?: number /*  0*/, s3 ?: number /*  0*/): number;

    public static sign(x: number): number;

    public static sin(x: number): number;

    public static sinh(x: number): number;

    public static solve(A: Matrix, B: Matrix): Array;

    public static sqrt(x: number): number;

    public static stableAvgDev(data: Array | any /* TypedArray */, center?: number /* median(data)*/): number;

    public static stableMean(data: Array | any /* TypedArray */): number;

    public static stableModulus(data: Array | any /* TypedArray */): number;

    public static stableSum(data: Array | any /* TypedArray */): number;

    public static stableSumOfSquares(data: Array | any /* TypedArray */): number;

    public static stdDev(data: Array | any /* TypedArray */): number;

    public static sum(data: Array | any /* TypedArray */): number;

    public static sumOfSquares(data: Array | any /* TypedArray */): number;

    public static svd(A: Matrix): Array;

    public static tan(x: number): number;

    public static tanh(x: number): number;

    public static trimmedMean(data: Array | any /* TypedArray */, l?: number /* 1*/, h?: number /* 1*/): number;

    public static trimmedMeanOfSquares(data: Array | any /* TypedArray */, l?: number /* 1*/, h?: number /* 1*/): number;

    public static trunc(x: number): number;

    public static twoSidedAvgDev(data: Array | any /* TypedArray */, center?: number /* median(data)*/): Array;

    public static twoSidedBiweightMidvariance(data: Array | any /* TypedArray */, center?: number /* median(data)*/, sigma?: Array | number /* twoSidedMAD(data,center)*/, k?: number /* 9*/, reducedLength?: boolean /* false*/): Array;

    public static twoSidedMAD(data: Array | any /* TypedArray */, center?: number /* median(data)*/): Array;

    public static uiResourceScalingFactor(scalingFactor: number): number;

    public static uiResourceScalingFactorForIndex(index: number): number;

    public static uiResourceScalingIndex(scalingFactor: number): number;

    public static uiScaled(scalingFactor: number, size: number): number;

    public static uiScaledResource(scalingFactor: number, resource: string): string;

    public static uiScaledResourceForIndex(index: number, resource: string): string;

    public static uiUnscaled(scalingFactor: number, size: number): number;

    public static variance(data: Array | any /* TypedArray */): number;



    //-------------------------
    //----static Properties----
    //-------------------------
}
