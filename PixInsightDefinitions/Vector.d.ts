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
    constructor(a: Array<any>, startIndex?: number /* 0*/, endIndex?: number /* a.length*/);
    constructor(a: any /* TypedArray */, startIndex?: number /* 0*/, endIndex?: number /* a.length*/);


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
	public abs(): Vector;

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
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(v: Vector): void;

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
    @param length: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(value: number, length: number): void;

    /**
    DESCRIPTION
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(v: Vector): void;
    /**
    DESCRIPTION
    @param v: Vector
    @param startIndex: int = 0
    @param endIndex: int = v.length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(v: Vector, startIndex?: number /* 0 */, endIndex?: number /* v.length */): void;

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
    @param startIndex: int = 0
    @param endIndex: int = a.length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(a: Array<any>, startIndex?: number /* 0 */, endIndex?: number /* a.length */): void;

    /**
    DESCRIPTION
    @param a: TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(a: any /* TypedArray */): void;
    /**
    DESCRIPTION
    @param a: TypedArray
    @param startIndex: int = 0
    @param endIndex: int = a.length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(a: any /* TypedArray */, startIndex?: number /* 0 */, endIndex?: number /* a.length */): void;

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
	public at(index: number): number;

    /**
    DESCRIPTION
    @param index: int
    @param value: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public at(index: number, value: number): void;

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
	public binarySearch(value: number): number;
    /**
    DESCRIPTION
    @param value: Number
    @param startIndex: int = 0
    @param endIndex: int = length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public binarySearch(value: number, startIndex?: number /* 0 */, endIndex?: number /* length */): number;

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
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cross(v: Vector): Vector;

    /**
    DESCRIPTION
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public crossProduct(v: Vector): Vector;

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
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public div(v: Vector): void;

    /**
    DESCRIPTION
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public dot(v: Vector): number;

    /**
    DESCRIPTION
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public dotProduct(v: Vector): number;

    /**
    DESCRIPTION
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isEqualTo(v: Vector): boolean;

    /**
    DESCRIPTION
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isLessThan(v: Vector): boolean;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public l1norm(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public l2norm(): number;

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
	public linearSearch(value: number): number;
    /**
    DESCRIPTION
    @param value: Number
    @param startIndex: int = 0
    @param endIndex: int = length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public linearSearch(value: number, startIndex?: number /* 0 */, endIndex?: number /* length */): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public maxComponent(): number;

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
	public minComponent(): number;

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
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public mul(v: Vector): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public norm(): number;
    /**
    DESCRIPTION
    @param p: Number = 2

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public norm(p?: number /* 2 */): number;

    /**
    DESCRIPTION
    @param k: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public orderStatistic(k: number): number;

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
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public reverse(): void;

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
	public setUnit(): void;

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
	public sqr(): Vector;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public sqrt(): Vector;

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
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public sub(v: Vector): void;

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
    @param v: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public swap(v: Vector): void;

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
    @param startIndex: int = 0
    @param endIndex: int = length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toArray(startIndex?: number /* 0 */, endIndex?: number /* length */): Array<any>;

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
    @param startIndex: int = 0
    @param endIndex: int = length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toFloat32Array(startIndex?: number /* 0 */, endIndex?: number /* length */): Float32Array;

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
    @param startIndex: int = 0
    @param endIndex: int = length

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toFloat64Array(startIndex?: number /* 0 */, endIndex?: number /* length */): Float64Array;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toSpherical(): Array<any>;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toSpherical2Pi(): Array<any>;

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
	public unit(): Vector;

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
    @param longitude: Number
    @param latitude: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static fromSpherical(longitude: number, latitude: number): Vector;

    /**
    DESCRIPTION
    @param slon: Number
    @param clon: Number
    @param slat: Number
    @param clat: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static fromSpherical(slon: number, clon: number, slat: number, clat: number): Vector;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Vector;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
