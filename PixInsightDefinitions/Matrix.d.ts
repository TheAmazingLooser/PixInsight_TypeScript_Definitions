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
    constructor(A: Matrix, startRow: number, startCol: number, rows: number, cols: number);
    constructor(a: Array<any>, rows: number, cols: number);
    constructor(a: Array<any>, startIndex: number, rows: number, cols: number);
    constructor(a: any /* TypedArray */, rows: number, cols: number);
    constructor(a: any /* TypedArray */, startIndex: number, rows: number, cols: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public BWMV(): number;
    public BWMV(center: number /* median(*/): number;
    public BWMV(center: number /* median(*/, sigma: number /* MAD(*/): number;
    public BWMV(center: number /* median(*/, sigma: number /* MAD(*/, k: number /* 9*/): number;
    public BWMV(center: number /* median(*/, sigma: number /* MAD(*/, k: number /* 9*/, reducedLength: boolean /* false*/): number;


    public MAD(): number;
    public MAD(center: number /* median(*/): number;


    public PBMV(): number;
    public PBMV(center: number /* median(*/): number;
    public PBMV(center: number /* median(*/, beta: number /* 0.2*/): number;








    public add(s: number): void;


    public add(A: Matrix): Matrix;


    public addElementWise(A: Matrix): void;


    public assign(value: number): void;


    public assign(value: number, rows: number, cols: number): void;


    public assign(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number): void;


    public assign(A: Matrix): void;
    public assign(A: Matrix, startRow: number, startCol: number, rows: number, cols: number): void;


    public assign(a: Array<any>): void;


    public assign(a: Array<any>, rows: number, cols: number): void;


    public assign(a: Array<any>, startIndex: number, rows: number, cols: number): void;


    public assign(a: any /* TypedArray */, rows: number, cols: number): void;


    public assign(a: any /* TypedArray */, startIndex: number, rows: number, cols: number): void;


    public at(row: number, col: number): number;


    public at(row: number, col: number, value: number): void;


    public avgDev(): number;
    public avgDev(center: number /* median(*/): number;


    public bendMidvariance(): number;
    public bendMidvariance(center: number /* median(*/): number;
    public bendMidvariance(center: number /* median(*/, beta: number /* 0.2*/): number;


    public binarySearch(value: number): Array<any> | void;


    public biweightMidvariance(): number;
    public biweightMidvariance(center: number /* median(*/): number;
    public biweightMidvariance(center: number /* median(*/, sigma: number /* MAD(*/): number;
    public biweightMidvariance(center: number /* median(*/, sigma: number /* MAD(*/, k: number /* 9*/): number;
    public biweightMidvariance(center: number /* median(*/, sigma: number /* MAD(*/, k: number /* 9*/, reducedLength: boolean /* false*/): number;


    public colVector(col: number): Vector;


    public div(s: number): void;


    public divElementWise(A: Matrix): void;












    public isEqualTo(A: Matrix): boolean;


    public isLessThan(A: Matrix): boolean;


    public linearSearch(value: number): Array<any> | void;












    public mul(s: number): void;


    public mul(A: Matrix): Matrix;


    public mulElementWise(A: Matrix): void;


    public pow(s: number): void;


    public powElementWise(A: Matrix): void;


    public rescale(): void;
    public rescale(v0: number /* 0*/): void;
    public rescale(v0: number /* 0*/, v1: number /* 1*/): void;


    public rowVector(row: number): Vector;


    public sameElements(A: Matrix): boolean;
















    public stableAvgDev(): number;
    public stableAvgDev(center: number /* median(*/): number;












    public sub(s: number): void;


    public sub(A: Matrix): Matrix;


    public subElementWise(A: Matrix): void;






    public swap(A: Matrix): void;


    public toArray(): Array<any>;
    public toArray(startRow: number /* 0*/, startCol: number /* 0*/, rows: number /* rows*/, cols: number /* cols*/): Array<any>;


    public toFloat32Array(): Float32Array;
    public toFloat32Array(startRow: number /* 0*/, startCol: number /* 0*/, rows: number /* rows*/, cols: number /* cols*/): Float32Array;


    public toFloat64Array(): Float64Array;
    public toFloat64Array(startRow: number /* 0*/, startCol: number /* 0*/, rows: number /* rows*/, cols: number /* cols*/): Float64Array;






    public trimmedMean(): number;
    public trimmedMean(l: number /* 1*/): number;
    public trimmedMean(l: number /* 1*/, h: number /* 1*/): number;


    public trimmedMeanOfSquares(): number;
    public trimmedMeanOfSquares(l: number /* 1*/): number;
    public trimmedMeanOfSquares(l: number /* 1*/, h: number /* 1*/): number;


    public truncate(): void;
    public truncate(v0: number /* 0*/): void;
    public truncate(v0: number /* 0*/, v1: number /* 1*/): void;


    public twoSidedAvgDev(): Array<any>;
    public twoSidedAvgDev(center: number /* median(*/): Array<any>;


    public twoSidedBWMV(): Array<any>;
    public twoSidedBWMV(center: number /* median(*/): Array<any>;
    public twoSidedBWMV(center: number /* median(*/, sigma: Array<any> | number /* twoSidedMAD(*/): Array<any>;
    public twoSidedBWMV(center: number /* median(*/, sigma: Array<any> | number /* twoSidedMAD(*/, k: number /* 9*/): Array<any>;
    public twoSidedBWMV(center: number /* median(*/, sigma: Array<any> | number /* twoSidedMAD(*/, k: number /* 9*/, reducedLength: boolean /* false*/): Array<any>;


    public twoSidedBiweightMidvariance(): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median(*/): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median(*/, sigma: Array<any> | number /* twoSidedMAD(*/): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median(*/, sigma: Array<any> | number /* twoSidedMAD(*/, k: number /* 9*/): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median(*/, sigma: Array<any> | number /* twoSidedMAD(*/, k: number /* 9*/, reducedLength: boolean /* false*/): Array<any>;


    public twoSidedMAD(): Array<any>;
    public twoSidedMAD(center: number /* median(*/): Array<any>;






    //-------------------------
    //----static Functions-----
    //-------------------------
    public fromImage(img: Image): Matrix;
    public fromImage(img: Image, rect: Rect /* 0*/): Matrix;
    public fromImage(img: Image, rect: Rect /* 0*/, channel: number /* -1*/): Matrix;


    public gaussianFilter(sigma: number): Matrix;
    public gaussianFilter(sigma: number, epsilon: number /* 0.01*/): Matrix;
    public gaussianFilter(sigma: number, epsilon: number /* 0.01*/, rho: number /* 1*/): Matrix;
    public gaussianFilter(sigma: number, epsilon: number /* 0.01*/, rho: number /* 1*/, theta: number /* 0*/): Matrix;


    public gaussianFilterBySize(size: number): Matrix;
    public gaussianFilterBySize(size: number, epsilon: number /* 0.01*/): Matrix;
    public gaussianFilterBySize(size: number, epsilon: number /* 0.01*/, rho: number /* 1*/): Matrix;
    public gaussianFilterBySize(size: number, epsilon: number /* 0.01*/, rho: number /* 1*/, theta: number /* 0*/): Matrix;


    public linearFilter(size: number): Matrix;
    public linearFilter(size: number, v0: number /* 1.0*/): Matrix;
    public linearFilter(size: number, v0: number /* 1.0*/, v1: number /* 0.01*/): Matrix;


    public moffatFilter(sigma: number): Matrix;
    public moffatFilter(sigma: number, beta: number /* 4*/): Matrix;
    public moffatFilter(sigma: number, beta: number /* 4*/, epsilon: number /* 0.01*/): Matrix;
    public moffatFilter(sigma: number, beta: number /* 4*/, epsilon: number /* 0.01*/, rho: number /* 1*/): Matrix;
    public moffatFilter(sigma: number, beta: number /* 4*/, epsilon: number /* 0.01*/, rho: number /* 1*/, theta: number /* 0*/): Matrix;


    public moffatFilterBySize(size: number): Matrix;
    public moffatFilterBySize(size: number, beta: number /* 4*/): Matrix;
    public moffatFilterBySize(size: number, beta: number /* 4*/, epsilon: number /* 0.01*/): Matrix;
    public moffatFilterBySize(size: number, beta: number /* 4*/, epsilon: number /* 0.01*/, rho: number /* 1*/): Matrix;
    public moffatFilterBySize(size: number, beta: number /* 4*/, epsilon: number /* 0.01*/, rho: number /* 1*/, theta: number /* 0*/): Matrix;


    public unitMatrix(): Matrix;
    public unitMatrix(n: number /* 3*/): Matrix;


    public variableShapeFilter(sigma: number): Matrix;
    public variableShapeFilter(sigma: number, shape: number /* 2*/): Matrix;
    public variableShapeFilter(sigma: number, shape: number /* 2*/, epsilon: number /* 0.01*/): Matrix;
    public variableShapeFilter(sigma: number, shape: number /* 2*/, epsilon: number /* 0.01*/, rho: number /* 1*/): Matrix;
    public variableShapeFilter(sigma: number, shape: number /* 2*/, epsilon: number /* 0.01*/, rho: number /* 1*/, theta: number /* 0*/): Matrix;


    public variableShapeFilterBySize(size: number): Matrix;
    public variableShapeFilterBySize(size: number, shape: number /* 2*/): Matrix;
    public variableShapeFilterBySize(size: number, shape: number /* 2*/, epsilon: number /* 0.01*/): Matrix;
    public variableShapeFilterBySize(size: number, shape: number /* 2*/, epsilon: number /* 0.01*/, rho: number /* 1*/): Matrix;
    public variableShapeFilterBySize(size: number, shape: number /* 2*/, epsilon: number /* 0.01*/, rho: number /* 1*/, theta: number /* 0*/): Matrix;




    //-------------------------
    //----static Properties----
    //-------------------------
    static cols: number;
    static columns: number;
    static isEmpty: boolean;
    static numberOfElements: number;
    static rows: number;
}
