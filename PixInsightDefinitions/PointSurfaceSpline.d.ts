//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PointSurfaceSpline {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isRecursive: boolean;
    isValid: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(P1: Array<any>, P2: Array<any>, smoothness ?: number /*  0*/, W ?: Vector /*  null*/, order ?: number /*  2*/, allowExtrapolation ?: boolean /*  true*/, maxSplineLength ?: number /*  1600*/, bucketCapacity ?: number /*  64*/, verbose ?: boolean /*  true*/);


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
	public clear(): void;

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
	public evaluate(x: number, y: number): Point;

    /**
    DESCRIPTION
    @param p: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public evaluate(p: Point): Point;

    /**
    DESCRIPTION
    @param points: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public evaluate(points: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param P1: Array
    @param P2: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public initialize(P1: Array<any>, P2: Array<any>): void;
    /**
    DESCRIPTION
    @param P1: Array
    @param P2: Array
    @param smoothness: Number = 0
    @param W: Vector = null
    @param order: int = 2
    @param allowExtrapolation: Boolean = true
    @param maxSplineLength: int = 1600
    @param bucketCapacity: int = 64
    @param verbose: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public initialize(P1: Array<any>, P2: Array<any>, smoothness?: number /* 0 */, W?: Vector /* null */, order?: number /* 2 */, allowExtrapolation?: boolean /* true */, maxSplineLength?: number /* 1600 */, bucketCapacity?: number /* 64 */, verbose?: boolean /* true */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: PointSurfaceSpline;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
