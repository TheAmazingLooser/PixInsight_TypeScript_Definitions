//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Rect {


    //-------------------------
    //-------Properties--------
    //-------------------------
    area: number;
    bottom: number;
    center: Point;
    diagonal: number;
    height: number;
    hypot: number;
    isHorizontalLine: boolean;
    isLine: boolean;
    isNormal: boolean;
    isOrdered: boolean;
    isPoint: boolean;
    isPointOrLine: boolean;
    isRect: boolean;
    isVerticalLine: boolean;
    left: number;
    leftBottom: Point;
    leftTop: Point;
    perimeter: number;
    right: number;
    rightBottom: Point;
    rightTop: Point;
    top: number;
    width: number;
    x0: number;
    x1: number;
    y0: number;
    y1: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(x0: number, y0: number, x1: number, y1: number);
    constructor(width: number, height: number);
    constructor(d: number);
    constructor(r: Rect);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(r: Rect): void;

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
    public add(p: Point): void;

    /**
    DESCRIPTION


    x: Number

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


    x: Number
    y: Number = x

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(r: Rect): void;

    /**
    DESCRIPTION


    v: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(v: number): void;

    /**
    DESCRIPTION


    width: Number
    height: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(width: number, height: number): void;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(x0: number, y0: number, x1: number, y1: number): void;

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
    public clipCode(p: Point): number;

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
    public clipCode(x: number, y: number): number;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deflateBy(d: Point): void;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deflateBy(dx: number): void;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deflateBy(dx: number, dy?: number /* dx */): void;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deflatedBy(d: Point): Rect;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deflatedBy(dx: number): Rect;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deflatedBy(dx: number, dy?: number /* dx */): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public div(r: Rect): void;

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
    public div(p: Point): void;

    /**
    DESCRIPTION


    x: Number

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


    x: Number
    y: Number = x

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public div(x0: number, y0: number, x1: number, y1: number): void;

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
    public includes(p: Point): boolean;

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
    public includes(x: number, y: number): boolean;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inflateBy(d: Point): void;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inflateBy(dx: number): void;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inflateBy(dx: number, dy?: number /* dx */): void;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inflatedBy(d: Point): Rect;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inflatedBy(dx: number): Rect;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inflatedBy(dx: number, dy?: number /* dx */): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intersect(r: Rect): void;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intersect(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intersection(r: Rect): Rect;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intersection(x0: number, y0: number, x1: number, y1: number): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intersects(r: Rect): boolean;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intersects(x0: number, y0: number, x1: number, y1: number): boolean;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isEqualTo(r: Rect): boolean;

    /**
    DESCRIPTION


    p0: Point
    p1: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isEqualTo(p0: Point, p1: Point): boolean;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isEqualTo(x0: number, y0: number, x1: number, y1: number): boolean;

    /**
    DESCRIPTION


    scalar: Number

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


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isLessThan(r: Rect): boolean;

    /**
    DESCRIPTION


    p0: Point
    p1: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isLessThan(p0: Point, p1: Point): boolean;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isLessThan(x0: number, y0: number, x1: number, y1: number): boolean;

    /**
    DESCRIPTION


    scalar: Number

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


    d: Point

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


    dx: Number

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


    dx: Number
    dy: Number = dx

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


    p: Point

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


    x: Number

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


    x: Number
    y: Number = x

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


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public movedBy(d: Point): Rect;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public movedBy(dx: number): Rect;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public movedBy(dx: number, dy?: number /* dx */): Rect;

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
    public movedTo(p: Point): Rect;

    /**
    DESCRIPTION


    x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public movedTo(x: number): Rect;
    /**
    DESCRIPTION


    x: Number
    y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public movedTo(x: number, y?: number /* x */): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mul(r: Rect): void;

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
    public mul(p: Point): void;

    /**
    DESCRIPTION


    x: Number

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


    x: Number
    y: Number = x

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mul(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public order(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public ordered(): Rect;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizeBy(d: Point): void;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizeBy(dx: number): void;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizeBy(dx: number, dy?: number /* dx */): void;

    /**
    DESCRIPTION


    width: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizeTo(width: number): void;
    /**
    DESCRIPTION


    width: Number
    height: Number = width

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizeTo(width: number, height?: number /* width */): void;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizedBy(d: Point): Rect;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizedBy(dx: number): Rect;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizedBy(dx: number, dy?: number /* dx */): Rect;

    /**
    DESCRIPTION


    width: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizedTo(width: number): Rect;
    /**
    DESCRIPTION


    width: Number
    height: Number = width

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resizedTo(width: number, height?: number /* width */): Rect;

    /**
    DESCRIPTION


    angleRadians: Number

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


    angleRadians: Number
    center: Point = 0

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


    sin: Number
    cos: Number

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


    sin: Number
    cos: Number
    center: Point = 0

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


    angleRadians: Number
    xc: Number
    yc: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number, xc: number, yc: number): void;

    /**
    DESCRIPTION


    sin: Number
    cos: Number
    xc: Number
    yc: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(sin: number, cos: number, xc: number, yc: number): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(angleRadians: number): Rect;
    /**
    DESCRIPTION


    angleRadians: Number
    center: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(angleRadians: number, center?: Point /* 0 */): Rect;

    /**
    DESCRIPTION


    sin: Number
    cos: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(sin: number, cos: number): Rect;
    /**
    DESCRIPTION


    sin: Number
    cos: Number
    center: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(sin: number, cos: number, center?: Point /* 0 */): Rect;

    /**
    DESCRIPTION


    angleRadians: Number
    xc: Number
    yc: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(angleRadians: number, xc: number, yc: number): Rect;

    /**
    DESCRIPTION


    sin: Number
    cos: Number
    xc: Number
    yc: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(sin: number, cos: number, xc: number, yc: number): Rect;

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


    n: uint = 0

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
    public rounded(): Rect;
    /**
    DESCRIPTION


    n: uint = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rounded(n?: number /* 0 */): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sub(r: Rect): void;

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
    public sub(p: Point): void;

    /**
    DESCRIPTION


    x: Number

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


    x: Number
    y: Number = x

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sub(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public symmetric(): Rect;

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


    M: Matrix

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


    M: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public transformed(M: Matrix): Rect;

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
    public translate(p: Point): void;

    /**
    DESCRIPTION


    x: Number

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


    x: Number
    y: Number = x

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


    d: Point

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


    dx: Number

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


    dx: Number
    dy: Number = dx

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


    p: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translated(p: Point): Rect;

    /**
    DESCRIPTION


    x: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translated(x: number): Rect;
    /**
    DESCRIPTION


    x: Number
    y: Number = x

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translated(x: number, y?: number /* x */): Rect;

    /**
    DESCRIPTION


    d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translatedBy(d: Point): Rect;

    /**
    DESCRIPTION


    dx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translatedBy(dx: number): Rect;
    /**
    DESCRIPTION


    dx: Number
    dy: Number = dx

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translatedBy(dx: number, dy?: number /* dx */): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public union(r: Rect): Rect;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public union(x0: number, y0: number, x1: number, y1: number): Rect;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public unite(r: Rect): void;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public unite(x0: number, y0: number, x1: number, y1: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Rect;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
