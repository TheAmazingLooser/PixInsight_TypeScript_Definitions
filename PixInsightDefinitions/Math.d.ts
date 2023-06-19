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
    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static MAD(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static MAD(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static Qn(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static Sn(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static abs(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static acos(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static acosh(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static ahav(x: number): number;

    /**
    DESCRIPTION
    @param deg: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static angle(deg: number): number;
    /**
    DESCRIPTION
    @param deg: Number
    @param min: Number = 0
    @param sec: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static angle(deg: number, min?: number /* 0 */, sec?: number /* 0 */): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static asin(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static asinh(x: number): number;

    /**
    DESCRIPTION
    @param y: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static atan(y: number): number;
    /**
    DESCRIPTION
    @param y: Number
    @param x: Number = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static atan(y: number, x?: number /* 1 */): number;

    /**
    DESCRIPTION
    @param y: Number
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static atan2(y: number, x: number): number;

    /**
    DESCRIPTION
    @param y: Number
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static atan2pi(y: number, x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static atanh(x: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static avgDev(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static avgDev(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static bendMidvariance(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)
    @param beta: Number = 0.2

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static bendMidvariance(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */, beta?: number /* 0.2 */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static biweightMidvariance(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)
    @param sigma: Number = MAD(data,center)
    @param k: int = 9
    @param reducedLength: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static biweightMidvariance(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */, sigma?: number /* MAD(data,center) */, k?: number /* 9 */, reducedLength?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param year: int
    @param month: int
    @param day: int
    @param dayFraction: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static calendarTimeToJD(year: number, month: number, day: number, dayFraction: number): number;

    /**
    DESCRIPTION
    @param year: int
    @param month: int
    @param days: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static calendarTimeToJD(year: number, month: number, days: number): number;

    /**
    DESCRIPTION
    @param dateTime: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static calendarTimeToJD(dateTime: string): number;

    /**
    DESCRIPTION
    @param year: int
    @param month: int
    @param day: int
    @param dayFraction: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static calendarTimeToJD2(year: number, month: number, day: number, dayFraction: number): Array<any>;

    /**
    DESCRIPTION
    @param year: int
    @param month: int
    @param days: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static calendarTimeToJD2(year: number, month: number, days: number): Array<any>;

    /**
    DESCRIPTION
    @param dateTime: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static calendarTimeToJD2(dateTime: string): Array<any>;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static ceil(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static cos(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static cosh(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static cotan(x: number): number;

    /**
    DESCRIPTION
    @param degrees: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static decimalToSexagesimal(degrees: number): Array<any>;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deg(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static erf(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static erfinv(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static exp(x: number): number;

    /**
    DESCRIPTION
    @param x: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static fact(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static floor(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static frac(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static frexp(x: number): Array<any>;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hav(x: number): number;

    /**
    DESCRIPTION
    @param data: TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static heapSort(data: any /* TypedArray */): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static initRandomGenerator(): void;
    /**
    DESCRIPTION
    @param seed64: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static initRandomGenerator(seed64?: Array<any>): void;

    /**
    DESCRIPTION
    @param seedLSW: uint
    @param seedMSW: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static initRandomGenerator(seedLSW: number, seedMSW: number): void;

    /**
    DESCRIPTION
    @param seed32: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static initRandomGenerator(seed32: number): void;

    /**
    DESCRIPTION
    @param data: TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static insertionSort(data: any /* TypedArray */): void;

    /**
    DESCRIPTION
    @param jd1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static jdToCalendarTime(jd1: number): Array<any>;
    /**
    DESCRIPTION
    @param jd1: Number
    @param jd2: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static jdToCalendarTime(jd1: number, jd2?: number): Array<any>;

    /**
    DESCRIPTION
    @param mant: Number
    @param exp: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static ldexp(mant: number, exp: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static ln(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static lngamma(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static log(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static log10(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static log2(x: number): number;

    /**
    DESCRIPTION
    @param n: Number
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static logn(n: number, x: number): number;

    /**
    DESCRIPTION
    @param ...x: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static max(...x: any[]): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static maxElem(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static mean(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static median(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param ...x: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static min(...x: any[]): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static min2rad(x: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static minElem(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param x: Number
    @param y: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static mod(x: number, y: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static modulus(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param m: Number
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static mtf(m: number, x: number): number;

    /**
    DESCRIPTION
    @param s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static parseInteger(s: string): number;
    /**
    DESCRIPTION
    @param s: String
    @param lowerBound: int
    @param upperBound: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static parseInteger(s: string, lowerBound?: number, upperBound?: number): number;

    /**
    DESCRIPTION
    @param s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static parseReal(s: string): number;
    /**
    DESCRIPTION
    @param s: String
    @param precision: int
    @param lowerBound: Number
    @param upperBound: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static parseReal(s: string, precision?: number, lowerBound?: number, upperBound?: number): number;

    /**
    DESCRIPTION
    @param x: Number
    @param coeffs: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static poly(x: number, coeffs: Array<any>): number;

    /**
    DESCRIPTION
    @param x: Number
    @param y: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static pow(x: number, y: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static pow10(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static pow2(x: number): number;

    /**
    DESCRIPTION
    @param data: TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static quickSort(data: any /* TypedArray */): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rad(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rad2min(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rad2sec(x: number): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static random(): number;

    /**
    DESCRIPTION
    @param n: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static randomArray(n: number): Array<any>;

    /**
    DESCRIPTION
    @param n: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static randomFloat32Array(n: number): Float32Array;
    /**
    DESCRIPTION
    @param n: uint
    @param distr: String
    @param distr_p1: any
    @param distr_p2: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static randomFloat32Array(n: number, distr?: string, distr_p1?: any, distr_p2?: any): Float32Array;

    /**
    DESCRIPTION
    @param n: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static randomFloat64Array(n: number): Float64Array;
    /**
    DESCRIPTION
    @param n: uint
    @param distr: String
    @param distr_p1: any
    @param distr_p2: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static randomFloat64Array(n: number, distr?: string, distr_p1?: any, distr_p2?: any): Float64Array;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static randomSeed32(): number;

    /**
    DESCRIPTION
    @param x: Number
    @param a: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static range(x: number, a: number, b: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static round(x: number): number;

    /**
    DESCRIPTION
    @param x: Number
    @param n: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static roundTo(x: number, n: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sec2rad(x: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param k: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static select(data: Array<any> | any /* TypedArray */, k: number): number;

    /**
    DESCRIPTION
    @param sign: int
    @param s1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sexagesimalToDecimal(sign: number, s1: number): number;
    /**
    DESCRIPTION
    @param sign: int
    @param s1: Number
    @param s2: Number = 0
    @param s3: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sexagesimalToDecimal(sign: number, s1: number, s2?: number /* 0 */, s3?: number /* 0 */): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sign(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sin(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sinh(x: number): number;

    /**
    DESCRIPTION
    @param A: Matrix
    @param B: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static solve(A: Matrix, B: Matrix): Array<any>;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sqrt(x: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stableAvgDev(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stableAvgDev(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stableMean(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stableModulus(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stableSum(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stableSumOfSquares(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static stdDev(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sum(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sumOfSquares(data: Array<any> | any /* TypedArray */): number;

    /**
    DESCRIPTION
    @param A: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static svd(A: Matrix): Array<any>;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static tan(x: number): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static tanh(x: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static trimmedMean(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param l: int = 1
    @param h: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static trimmedMean(data: Array<any> | any /* TypedArray */, l?: number /* 1 */, h?: number /* 1 */): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static trimmedMeanOfSquares(data: Array<any> | any /* TypedArray */): number;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param l: int = 1
    @param h: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static trimmedMeanOfSquares(data: Array<any> | any /* TypedArray */, l?: number /* 1 */, h?: number /* 1 */): number;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static trunc(x: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static twoSidedAvgDev(data: Array<any> | any /* TypedArray */): Array<any>;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static twoSidedAvgDev(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): Array<any>;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static twoSidedBiweightMidvariance(data: Array<any> | any /* TypedArray */): Array<any>;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)
    @param sigma: Array|Number = twoSidedMAD(data,center)
    @param k: int = 9
    @param reducedLength: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static twoSidedBiweightMidvariance(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */, sigma?: Array<any> | number /* twoSidedMAD(data,center) */, k?: number /* 9 */, reducedLength?: boolean /* false */): Array<any>;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static twoSidedMAD(data: Array<any> | any /* TypedArray */): Array<any>;
    /**
    DESCRIPTION
    @param data: Array|TypedArray
    @param center: Number = median(data)

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static twoSidedMAD(data: Array<any> | any /* TypedArray */, center?: number /* median(data) */): Array<any>;

    /**
    DESCRIPTION
    @param scalingFactor: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiResourceScalingFactor(scalingFactor: number): number;

    /**
    DESCRIPTION
    @param index: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiResourceScalingFactorForIndex(index: number): number;

    /**
    DESCRIPTION
    @param scalingFactor: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiResourceScalingIndex(scalingFactor: number): number;

    /**
    DESCRIPTION
    @param scalingFactor: Number
    @param size: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiScaled(scalingFactor: number, size: number): number;

    /**
    DESCRIPTION
    @param scalingFactor: Number
    @param resource: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiScaledResource(scalingFactor: number, resource: string): string;

    /**
    DESCRIPTION
    @param index: int
    @param resource: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiScaledResourceForIndex(index: number, resource: string): string;

    /**
    DESCRIPTION
    @param scalingFactor: Number
    @param size: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static uiUnscaled(scalingFactor: number, size: number): number;

    /**
    DESCRIPTION
    @param data: Array|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
