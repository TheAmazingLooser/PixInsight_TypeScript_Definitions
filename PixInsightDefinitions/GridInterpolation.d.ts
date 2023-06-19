//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GridInterpolation {


    //-------------------------
    //-------Properties--------
    //-------------------------
    delta: number;
    isValid: boolean;
    referenceRect: Rect;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(r: Rect, S: SurfaceSpline, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(r: Rect, S: ShepardInterpolation, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(G: GridInterpolation);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    G: GridInterpolation

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(G: GridInterpolation): void;

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
    public evaluate(points: Array<any>): Array<any>;

    /**
    DESCRIPTION


    r: Rect
    S: SurfaceSpline

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, S: SurfaceSpline): void;
    /**
    DESCRIPTION


    r: Rect
    S: SurfaceSpline
    delta: int = 8
    verbose: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, S: SurfaceSpline, delta?: number /* 8 */, verbose?: boolean /* false */): void;

    /**
    DESCRIPTION


    r: Rect
    S: ShepardInterpolation

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, S: ShepardInterpolation): void;
    /**
    DESCRIPTION


    r: Rect
    S: ShepardInterpolation
    delta: int = 8
    verbose: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, S: ShepardInterpolation, delta?: number /* 8 */, verbose?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: GridInterpolation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
