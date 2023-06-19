//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Matrix {


    //-------------------------
    //-------Properties--------
    //-------------------------
    cols: number;
    columns: number;
    isEmpty: boolean;
    numberOfElements: number;
    rows: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(rows: number, cols: number);
    constructor(value: number, rows: number, cols: number);
    constructor(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number);
    constructor(A: Matrix, startRow?: number, startCol?: number, rows?: number, cols?: number);
    constructor(a: Array<any>, rows: number, cols: number);
    constructor(a: Array<any>, startIndex: number, rows: number, cols: number);
    constructor(a: any /* TypedArray */, rows: number, cols: number);
    constructor(a: any /* TypedArray */, startIndex: number, rows: number, cols: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public BWMV(): number;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Number = MAD()
    k: int = 9
    reducedLength: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public BWMV(center?: number /* median() */, sigma?: number /* MAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public MAD(): number;
    /**
    DESCRIPTION


    center: Number = median()

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public MAD(center?: number /* median() */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public PBMV(): number;
    /**
    DESCRIPTION


    center: Number = median()
    beta: Number = 0.2

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public PBMV(center?: number /* median() */, beta?: number /* 0.2 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public Qn(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public Sn(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public abs(): Matrix;

    /**
    DESCRIPTION


    s: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(s: number): void;

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
    public add(A: Matrix): Matrix;

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
    public addElementWise(A: Matrix): void;

    /**
    DESCRIPTION


    value: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(value: number): void;

    /**
    DESCRIPTION


    value: Number
    rows: int
    cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(value: number, rows: number, cols: number): void;

    /**
    DESCRIPTION


    a00: Number
    a01: Number
    a02: Number
    a10: Number
    a11: Number
    a12: Number
    a20: Number
    a21: Number
    a22: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number): void;

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
    public assign(A: Matrix): void;
    /**
    DESCRIPTION


    A: Matrix
    startRow: int
    startCol: int
    rows: int
    cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(A: Matrix, startRow: number, startCol: number, rows: number, cols: number): void;

    /**
    DESCRIPTION


    a: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a: Array<any>): void;

    /**
    DESCRIPTION


    a: Array
    rows: int
    cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a: Array<any>, rows: number, cols: number): void;

    /**
    DESCRIPTION


    a: Array
    startIndex: int
    rows: int
    cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a: Array<any>, startIndex: number, rows: number, cols: number): void;

    /**
    DESCRIPTION


    a: TypedArray
    rows: int
    cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a: any /* TypedArray */, rows: number, cols: number): void;

    /**
    DESCRIPTION


    a: TypedArray
    startIndex: int
    rows: int
    cols: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a: any /* TypedArray */, startIndex: number, rows: number, cols: number): void;

    /**
    DESCRIPTION


    row: int
    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public at(row: number, col: number): number;

    /**
    DESCRIPTION


    row: int
    col: int
    value: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public at(row: number, col: number, value: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public avgDev(): number;
    /**
    DESCRIPTION


    center: Number = median()

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public avgDev(center?: number /* median() */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public bendMidvariance(): number;
    /**
    DESCRIPTION


    center: Number = median()
    beta: Number = 0.2

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public bendMidvariance(center?: number /* median() */, beta?: number /* 0.2 */): number;

    /**
    DESCRIPTION


    value: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public binarySearch(value: number): Array<any> | void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public biweightMidvariance(): number;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Number = MAD()
    k: int = 9
    reducedLength: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public biweightMidvariance(center?: number /* median() */, sigma?: number /* MAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */): number;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public colVector(col: number): Vector;

    /**
    DESCRIPTION


    s: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public div(s: number): void;

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
    public divElementWise(A: Matrix): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public flip(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public flipped(): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverse(): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invert(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invertElementWise(): void;

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
    public isEqualTo(A: Matrix): boolean;

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
    public isLessThan(A: Matrix): boolean;

    /**
    DESCRIPTION


    value: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public linearSearch(value: number): Array<any> | void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maxElement(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mean(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public median(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minElement(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modulus(): number;

    /**
    DESCRIPTION


    s: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mul(s: number): void;

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
    public mul(A: Matrix): Matrix;

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
    public mulElementWise(A: Matrix): void;

    /**
    DESCRIPTION


    s: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public pow(s: number): void;

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
    public powElementWise(A: Matrix): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rescale(): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rescale(v0?: number /* 0 */, v1?: number /* 1 */): void;

    /**
    DESCRIPTION


    row: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rowVector(row: number): Vector;

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
    public sameElements(A: Matrix): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAbs(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setRandom(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSqr(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSqrt(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sort(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sqr(): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sqrt(): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stableAvgDev(): number;
    /**
    DESCRIPTION


    center: Number = median()

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stableAvgDev(center?: number /* median() */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stableMean(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stableModulus(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stableSum(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stableSumOfSquares(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stdDev(): number;

    /**
    DESCRIPTION


    s: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sub(s: number): void;

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
    public sub(A: Matrix): Matrix;

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
    public subElementWise(A: Matrix): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sum(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sumOfSquares(): number;

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
    public swap(A: Matrix): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toArray(): Array<any>;
    /**
    DESCRIPTION


    startRow: int = 0
    startCol: int = 0
    rows: int = rows
    cols: int = cols

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toArray(startRow: number /* 0 */, startCol: number /* 0 */, rows: number /* rows */, cols: number /* cols */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat32Array(): Float32Array;
    /**
    DESCRIPTION


    startRow: int = 0
    startCol: int = 0
    rows: int = rows
    cols: int = cols

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat32Array(startRow: number /* 0 */, startCol: number /* 0 */, rows: number /* rows */, cols: number /* cols */): Float32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat64Array(): Float64Array;
    /**
    DESCRIPTION


    startRow: int = 0
    startCol: int = 0
    rows: int = rows
    cols: int = cols

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat64Array(startRow: number /* 0 */, startCol: number /* 0 */, rows: number /* rows */, cols: number /* cols */): Float64Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toImage(): Image;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public transpose(): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trimmedMean(): number;
    /**
    DESCRIPTION


    l: int = 1
    h: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trimmedMean(l?: number /* 1 */, h?: number /* 1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trimmedMeanOfSquares(): number;
    /**
    DESCRIPTION


    l: int = 1
    h: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trimmedMeanOfSquares(l?: number /* 1 */, h?: number /* 1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public truncate(): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public truncate(v0?: number /* 0 */, v1?: number /* 1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedAvgDev(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedAvgDev(center?: number /* median() */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBWMV(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Array|Number = twoSidedMAD()
    k: int = 9
    reducedLength: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBWMV(center?: number /* median() */, sigma?: Array<any> | number /* twoSidedMAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBiweightMidvariance(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Array|Number = twoSidedMAD()
    k: int = 9
    reducedLength: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBiweightMidvariance(center?: number /* median() */, sigma?: Array<any> | number /* twoSidedMAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedMAD(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedMAD(center?: number /* median() */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public variance(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    img: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromImage(img: Image): Matrix;
    /**
    DESCRIPTION


    img: Image
    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromImage(img: Image, rect?: Rect /* 0 */, channel?: number /* -1 */): Matrix;

    /**
    DESCRIPTION


    sigma: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static gaussianFilter(sigma: number): Matrix;
    /**
    DESCRIPTION


    sigma: Number
    epsilon: Number = 0.01
    rho: Number = 1
    theta: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static gaussianFilter(sigma: number, epsilon?: number /* 0.01 */, rho?: number /* 1 */, theta?: number /* 0 */): Matrix;

    /**
    DESCRIPTION


    size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static gaussianFilterBySize(size: number): Matrix;
    /**
    DESCRIPTION


    size: int
    epsilon: Number = 0.01
    rho: Number = 1
    theta: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static gaussianFilterBySize(size: number, epsilon?: number /* 0.01 */, rho?: number /* 1 */, theta?: number /* 0 */): Matrix;

    /**
    DESCRIPTION


    size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static linearFilter(size: number): Matrix;
    /**
    DESCRIPTION


    size: int
    v0: Number = 1.0
    v1: Number = 0.01

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static linearFilter(size: number, v0?: number /* 1.0 */, v1?: number /* 0.01 */): Matrix;

    /**
    DESCRIPTION


    sigma: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static moffatFilter(sigma: number): Matrix;
    /**
    DESCRIPTION


    sigma: Number
    beta: Number = 4
    epsilon: Number = 0.01
    rho: Number = 1
    theta: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static moffatFilter(sigma: number, beta?: number /* 4 */, epsilon?: number /* 0.01 */, rho?: number /* 1 */, theta?: number /* 0 */): Matrix;

    /**
    DESCRIPTION


    size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static moffatFilterBySize(size: number): Matrix;
    /**
    DESCRIPTION


    size: int
    beta: Number = 4
    epsilon: Number = 0.01
    rho: Number = 1
    theta: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static moffatFilterBySize(size: number, beta?: number /* 4 */, epsilon?: number /* 0.01 */, rho?: number /* 1 */, theta?: number /* 0 */): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static unitMatrix(): Matrix;
    /**
    DESCRIPTION


    n: int = 3

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static unitMatrix(n?: number /* 3 */): Matrix;

    /**
    DESCRIPTION


    sigma: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static variableShapeFilter(sigma: number): Matrix;
    /**
    DESCRIPTION


    sigma: Number
    shape: Number = 2
    epsilon: Number = 0.01
    rho: Number = 1
    theta: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static variableShapeFilter(sigma: number, shape?: number /* 2 */, epsilon?: number /* 0.01 */, rho?: number /* 1 */, theta?: number /* 0 */): Matrix;

    /**
    DESCRIPTION


    size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static variableShapeFilterBySize(size: number): Matrix;
    /**
    DESCRIPTION


    size: int
    shape: Number = 2
    epsilon: Number = 0.01
    rho: Number = 1
    theta: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static variableShapeFilterBySize(size: number, shape?: number /* 2 */, epsilon?: number /* 0.01 */, rho?: number /* 1 */, theta?: number /* 0 */): Matrix;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Matrix;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
