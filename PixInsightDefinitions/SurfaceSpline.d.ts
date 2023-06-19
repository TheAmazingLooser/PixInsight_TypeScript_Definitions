//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SurfaceSpline {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isValid: boolean;
    length: number;
    order: number;
    rbfType: number;
    shapeParameter: number;
    smoothing: number;
    usePolynomial: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(S: SurfaceSpline);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    S: SurfaceSpline

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(S: SurfaceSpline): void;

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
    public evaluate(x: number, y: number): number;

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
    public evaluate(p: Point): number;

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
    public evaluate(points: Array<any>): Vector;

    /**
    DESCRIPTION


    x: Vector
    y: Vector
    z: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(x: Vector, y: Vector, z: Vector): void;
    /**
    DESCRIPTION


    x: Vector
    y: Vector
    z: Vector
    w: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(x: Vector, y: Vector, z: Vector, w?: Vector): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: SurfaceSpline;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
