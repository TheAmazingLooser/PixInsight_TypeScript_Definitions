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
    @param center: Number = median()
    @param sigma: Number = MAD()
    @param k: int = 9
    @param reducedLength: Boolean = false

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
    @param center: Number = median()

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
    @param center: Number = median()
    @param beta: Number = 0.2

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
    @param s: Number

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
    @param A: Matrix

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
    @param A: Matrix

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
    @param value: Number

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
    @param value: Number
    @param rows: int
    @param cols: int

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
    @param a00: Number
    @param a01: Number
    @param a02: Number
    @param a10: Number
    @param a11: Number
    @param a12: Number
    @param a20: Number
    @param a21: Number
    @param a22: Number

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
    @param A: Matrix

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
    @param A: Matrix
    @param startRow: int
    @param startCol: int
    @param rows: int
    @param cols: int

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
    @param a: Array

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
    @param a: Array
    @param rows: int
    @param cols: int

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
    @param a: Array
    @param startIndex: int
    @param rows: int
    @param cols: int

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
    @param a: TypedArray
    @param rows: int
    @param cols: int

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
    @param a: TypedArray
    @param startIndex: int
    @param rows: int
    @param cols: int

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
    @param row: int
    @param col: int

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
    @param row: int
    @param col: int
    @param value: Number

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
    @param center: Number = median()

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
    @param center: Number = median()
    @param beta: Number = 0.2

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
    @param value: Number

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
    @param center: Number = median()
    @param sigma: Number = MAD()
    @param k: int = 9
    @param reducedLength: Boolean = false

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
    @param col: int

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
    @param s: Number

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
    @param A: Matrix

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
    @param A: Matrix

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
    @param A: Matrix

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
    @param value: Number

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
    @param s: Number

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
    @param A: Matrix

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
    @param A: Matrix

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
    @param s: Number

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
    @param A: Matrix

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
    @param v0: Number = 0
    @param v1: Number = 1

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
    @param row: int

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
    @param A: Matrix

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
    @param center: Number = median()

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
    @param s: Number

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
    @param A: Matrix

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
    @param A: Matrix

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
    @param A: Matrix

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
    @param startRow: int = 0
    @param startCol: int = 0
    @param rows: int = rows
    @param cols: int = cols

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
    @param startRow: int = 0
    @param startCol: int = 0
    @param rows: int = rows
    @param cols: int = cols

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
    @param startRow: int = 0
    @param startCol: int = 0
    @param rows: int = rows
    @param cols: int = cols

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
    @param l: int = 1
    @param h: int = 1

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
    @param l: int = 1
    @param h: int = 1

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
    @param v0: Number = 0
    @param v1: Number = 1

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
    @param center: Number = median()

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
    @param center: Number = median()
    @param sigma: Array|Number = twoSidedMAD()
    @param k: int = 9
    @param reducedLength: Boolean = false

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
    @param center: Number = median()
    @param sigma: Array|Number = twoSidedMAD()
    @param k: int = 9
    @param reducedLength: Boolean = false

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
    @param center: Number = median()

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
    @param img: Image

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
    @param img: Image
    @param rect: Rect = 0
    @param channel: int = -1

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
    @param sigma: Number

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
    @param sigma: Number
    @param epsilon: Number = 0.01
    @param rho: Number = 1
    @param theta: Number = 0

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
    @param size: int

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
    @param size: int
    @param epsilon: Number = 0.01
    @param rho: Number = 1
    @param theta: Number = 0

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
    @param size: int

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
    @param size: int
    @param v0: Number = 1.0
    @param v1: Number = 0.01

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
    @param sigma: Number

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
    @param sigma: Number
    @param beta: Number = 4
    @param epsilon: Number = 0.01
    @param rho: Number = 1
    @param theta: Number = 0

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
    @param size: int

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
    @param size: int
    @param beta: Number = 4
    @param epsilon: Number = 0.01
    @param rho: Number = 1
    @param theta: Number = 0

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
    @param n: int = 3

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
    @param sigma: Number

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
    @param sigma: Number
    @param shape: Number = 2
    @param epsilon: Number = 0.01
    @param rho: Number = 1
    @param theta: Number = 0

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
    @param size: int

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
    @param size: int
    @param shape: Number = 2
    @param epsilon: Number = 0.01
    @param rho: Number = 1
    @param theta: Number = 0

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
