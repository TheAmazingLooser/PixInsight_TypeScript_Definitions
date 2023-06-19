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
    @param G: GridInterpolation

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
    @param x: Number
    @param y: Number

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
    @param p: Point

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
    @param S: SurfaceSpline

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
    @param r: Rect
    @param S: SurfaceSpline
    @param delta: int = 8
    @param verbose: Boolean = false

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
    @param r: Rect
    @param S: ShepardInterpolation

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
    @param r: Rect
    @param S: ShepardInterpolation
    @param delta: int = 8
    @param verbose: Boolean = false

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
