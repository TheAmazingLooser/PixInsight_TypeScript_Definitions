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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    deg: Number

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


    deg: Number
    min: Number = 0
    sec: Number = 0

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


    x: Number

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


    x: Number

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


    y: Number

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


    y: Number
    x: Number = 1

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


    y: Number
    x: Number

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


    y: Number
    x: Number

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


    x: Number

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)
    beta: Number = 0.2

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)
    sigma: Number = MAD(data,center)
    k: int = 9
    reducedLength: Boolean = false

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


    year: int
    month: int
    day: int
    dayFraction: Number

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


    year: int
    month: int
    days: Number

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


    dateTime: String

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


    year: int
    month: int
    day: int
    dayFraction: Number

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


    year: int
    month: int
    days: Number

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


    dateTime: String

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    degrees: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: int

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    data: TypedArray

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


    seed64: Array

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


    seedLSW: uint
    seedMSW: uint

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


    seed32: uint

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


    data: TypedArray

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


    jd1: Number

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


    jd1: Number
    jd2: Number

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


    mant: Number
    exp: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    x: Number

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


    n: Number
    x: Number

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


    ...x: any[]

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    ...x: any[]

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


    x: Number

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


    data: Array|TypedArray

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


    x: Number
    y: Number

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


    data: Array|TypedArray

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


    m: Number
    x: Number

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


    s: String

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


    s: String
    lowerBound: int
    upperBound: int

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


    s: String

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


    s: String
    precision: int
    lowerBound: Number
    upperBound: Number

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


    x: Number
    coeffs: Array

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


    x: Number
    y: Number

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


    x: Number

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


    x: Number

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


    data: TypedArray

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


    x: Number

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


    x: Number

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


    x: Number

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


    n: uint

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


    n: uint

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


    n: uint
    distr: String
    distr_p1: any
    distr_p2: any

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


    n: uint

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


    n: uint
    distr: String
    distr_p1: any
    distr_p2: any

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


    x: Number
    a: Number
    b: Number

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


    x: Number

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


    x: Number
    n: int

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


    x: Number

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


    data: Array|TypedArray
    k: int

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


    sign: int
    s1: Number

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


    sign: int
    s1: Number
    s2: Number = 0
    s3: Number = 0

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


    x: Number

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


    x: Number

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


    x: Number

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


    A: Matrix
    B: Matrix

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


    x: Number

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    data: Array|TypedArray

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


    A: Matrix

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


    x: Number

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


    x: Number

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    l: int = 1
    h: int = 1

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    l: int = 1
    h: int = 1

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


    x: Number

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)
    sigma: Array|Number = twoSidedMAD(data,center)
    k: int = 9
    reducedLength: Boolean = false

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


    data: Array|TypedArray

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


    data: Array|TypedArray
    center: Number = median(data)

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


    scalingFactor: Number

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


    index: int

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


    scalingFactor: Number

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


    scalingFactor: Number
    size: Number

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


    scalingFactor: Number
    resource: String

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


    index: int
    resource: String

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


    scalingFactor: Number
    size: Number

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


    data: Array|TypedArray

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
