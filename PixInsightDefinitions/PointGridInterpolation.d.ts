//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PointGridInterpolation {


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
    constructor(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation, delta ?: number /*  8*/, verbose ?: boolean /*  false*/);
    constructor(G: PointGridInterpolation);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    G: PointGridInterpolation

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(G: PointGridInterpolation): void;

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


    r: Rect
    Sx: SurfaceSpline
    Sy: SurfaceSpline

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline): void;
    /**
    DESCRIPTION


    r: Rect
    Sx: SurfaceSpline
    Sy: SurfaceSpline
    delta: int = 8
    verbose: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline, delta?: number /* 8 */, verbose?: boolean /* false */): void;

    /**
    DESCRIPTION


    r: Rect
    Sx: ShepardInterpolation
    Sy: ShepardInterpolation

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation): void;
    /**
    DESCRIPTION


    r: Rect
    Sx: ShepardInterpolation
    Sy: ShepardInterpolation
    delta: int = 8
    verbose: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initialize(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation, delta?: number /* 8 */, verbose?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: PointGridInterpolation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
