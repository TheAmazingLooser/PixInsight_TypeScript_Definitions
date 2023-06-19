//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ShepardInterpolation {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isValid: boolean;
    power: number;
    radius: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


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
	public evaluate(points: Array<any>): Vector;

    /**
    DESCRIPTION
    @param x: Vector
    @param y: Vector
    @param z: Vector

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
    @param r: Rect
    @param x: Vector
    @param y: Vector
    @param z: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public initialize(r: Rect, x: Vector, y: Vector, z: Vector): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ShepardInterpolation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
