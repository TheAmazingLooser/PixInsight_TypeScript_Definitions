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


    x: Number
    y: Number

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


    p: Point

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


    points: Array

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


    P1: Array
    P2: Array

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


    P1: Array
    P2: Array
    smoothness: Number = 0
    W: Vector = null
    order: int = 2
    allowExtrapolation: Boolean = true
    maxSplineLength: int = 1600
    bucketCapacity: int = 64
    verbose: Boolean = true

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
