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
    @param G: PointGridInterpolation

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
    @param r: Rect
    @param Sx: SurfaceSpline
    @param Sy: SurfaceSpline

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
    @param r: Rect
    @param Sx: SurfaceSpline
    @param Sy: SurfaceSpline
    @param delta: int = 8
    @param verbose: Boolean = false

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
    @param r: Rect
    @param Sx: ShepardInterpolation
    @param Sy: ShepardInterpolation

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
    @param r: Rect
    @param Sx: ShepardInterpolation
    @param Sy: ShepardInterpolation
    @param delta: int = 8
    @param verbose: Boolean = false

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
