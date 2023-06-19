//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Point {


    //-------------------------
    //-------Properties--------
    //-------------------------
    x: number;
    y: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(x: number, y: number);
    constructor(d: number);
    constructor(p: Point);


    //-------------------------
    //--------Functions--------
    //-------------------------
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
	public add(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(x: number, y?: number /* x */): void;

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
	public assign(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(x: number, y?: number /* x */): void;

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
	public distanceTo(p: Point): number;

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
	public distanceTo(x: number, y: number): number;

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
	public div(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public div(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public div(x: number, y?: number /* x */): void;

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
	public dot(p: Point): number;

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
	public dot(x: number, y: number): number;

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
	public isEqualTo(p: Point): boolean;

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
	public isEqualTo(x: number, y: number): boolean;

    /**
    DESCRIPTION
    @param scalar: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isEqualTo(scalar: number): boolean;

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
	public isLessThan(p: Point): boolean;

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
	public isLessThan(x: number, y: number): boolean;

    /**
    DESCRIPTION
    @param scalar: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isLessThan(scalar: number): boolean;

    /**
    DESCRIPTION
    @param d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public moveBy(d: Point): void;

    /**
    DESCRIPTION
    @param dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public moveBy(dx: number): void;
    /**
    DESCRIPTION
    @param dx: Number
    @param dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public moveBy(dx: number, dy?: number /* dx */): void;

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
	public moveTo(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public moveTo(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public moveTo(x: number, y?: number /* x */): void;

    /**
    DESCRIPTION
    @param d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public movedBy(d: Point): Point;

    /**
    DESCRIPTION
    @param dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public movedBy(dx: number): Point;
    /**
    DESCRIPTION
    @param dx: Number
    @param dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public movedBy(dx: number, dy?: number /* dx */): Point;

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
	public movedTo(p: Point): Point;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public movedTo(x: number): Point;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public movedTo(x: number, y?: number /* x */): Point;

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
	public mul(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public mul(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public mul(x: number, y?: number /* x */): void;

    /**
    DESCRIPTION
    @param angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotate(angleRadians: number): void;
    /**
    DESCRIPTION
    @param angleRadians: Number
    @param center: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotate(angleRadians: number, center?: Point /* 0 */): void;

    /**
    DESCRIPTION
    @param sin: Number
    @param cos: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotate(sin: number, cos: number): void;
    /**
    DESCRIPTION
    @param sin: Number
    @param cos: Number
    @param center: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotate(sin: number, cos: number, center?: Point /* 0 */): void;

    /**
    DESCRIPTION
    @param angleRadians: Number
    @param cx: Number
    @param cy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotate(angleRadians: number, cx: number, cy: number): void;

    /**
    DESCRIPTION
    @param sin: Number
    @param cos: Number
    @param cx: Number
    @param cy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotate(sin: number, cos: number, cx: number, cy: number): void;

    /**
    DESCRIPTION
    @param angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotated(angleRadians: number): Point;
    /**
    DESCRIPTION
    @param angleRadians: Number
    @param center: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotated(angleRadians: number, center?: Point /* 0 */): Point;

    /**
    DESCRIPTION
    @param sin: Number
    @param cos: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotated(sin: number, cos: number): Point;
    /**
    DESCRIPTION
    @param sin: Number
    @param cos: Number
    @param center: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotated(sin: number, cos: number, center?: Point /* 0 */): Point;

    /**
    DESCRIPTION
    @param angleRadians: Number
    @param cx: Number
    @param cy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotated(angleRadians: number, cx: number, cy: number): Point;

    /**
    DESCRIPTION
    @param sin: Number
    @param cos: Number
    @param cx: Number
    @param cy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rotated(sin: number, cos: number, cx: number, cy: number): Point;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public round(): void;
    /**
    DESCRIPTION
    @param n: uint = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public round(n?: number /* 0 */): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rounded(): Point;
    /**
    DESCRIPTION
    @param n: uint = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rounded(n?: number /* 0 */): Point;

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
	public sub(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public sub(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public sub(x: number, y?: number /* x */): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public symmetric(): Point;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public symmetrize(): void;

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
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toVector(): Vector;

    /**
    DESCRIPTION
    @param M: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public transform(M: Matrix): void;

    /**
    DESCRIPTION
    @param M: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public transformed(M: Matrix): Point;

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
	public translate(p: Point): void;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translate(x: number): void;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translate(x: number, y?: number /* x */): void;

    /**
    DESCRIPTION
    @param d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translateBy(d: Point): void;

    /**
    DESCRIPTION
    @param dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translateBy(dx: number): void;
    /**
    DESCRIPTION
    @param dx: Number
    @param dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translateBy(dx: number, dy?: number /* dx */): void;

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
	public translated(p: Point): Point;

    /**
    DESCRIPTION
    @param x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translated(x: number): Point;
    /**
    DESCRIPTION
    @param x: Number
    @param y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translated(x: number, y?: number /* x */): Point;

    /**
    DESCRIPTION
    @param d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translatedBy(d: Point): Point;

    /**
    DESCRIPTION
    @param dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translatedBy(dx: number): Point;
    /**
    DESCRIPTION
    @param dx: Number
    @param dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translatedBy(dx: number, dy?: number /* dx */): Point;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public truncate(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public truncated(): Point;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Point;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
