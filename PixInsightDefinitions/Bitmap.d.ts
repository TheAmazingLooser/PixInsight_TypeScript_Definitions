//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Bitmap {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bounds: Rect;
    height: number;
    physicalPixelRatio: number;
    pixelFormat: number;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(width: number, height: number, format?: number /* BitmapFormat_ARGB32*/);
    constructor(filePath: string);
    constructor(data: ByteArray, format?: string /* "SVG"*/);
    constructor(bmp: Bitmap, r: Rect);
    constructor(bmp: Bitmap, x0: number, y0: number, x1: number, y1: number);
    constructor(bmp: Bitmap);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(v: number): void;

    /**
    DESCRIPTION


    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(bmp: Bitmap): void;

    /**
    DESCRIPTION


    r: Rect
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(r: Rect, v: number): void;

    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(p: Point, bmp: Bitmap): void;
    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap
    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(p: Point, bmp: Bitmap, r?: Rect): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(x0: number, y0: number, x1: number, y1: number, v: number): void;

    /**
    DESCRIPTION


    x: int
    y: int
    bmp: Bitmap
    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public and(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(bmp: Bitmap): void;

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


    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public copy(bmp: Bitmap): void;

    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public copy(p: Point, bmp: Bitmap): void;
    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap
    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public copy(p: Point, bmp: Bitmap, r?: Rect): void;

    /**
    DESCRIPTION


    x: int
    y: int
    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public copy(x: number, y: number, bmp: Bitmap): void;
    /**
    DESCRIPTION


    x: int
    y: int
    bmp: Bitmap
    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public copy(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fill(v: number): void;

    /**
    DESCRIPTION


    r: Rect
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fill(r: Rect, v: number): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fill(x0: number, y0: number, x1: number, y1: number, v: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invert(): void;

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
    public invert(r: Rect): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invert(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invertRect(): void;

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
    public invertRect(r: Rect): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invertRect(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isEmpty(): boolean;

    /**
    DESCRIPTION


    filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public load(filePath: string): void;

    /**
    DESCRIPTION


    data: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public load(data: ByteArray): void;
    /**
    DESCRIPTION


    data: ByteArray
    format: String = "SVG"

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public load(data: ByteArray, format?: string /* "SVG" */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mirrored(): Bitmap;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mirroredHorizontally(): Bitmap;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mirroredVertically(): Bitmap;

    /**
    DESCRIPTION


    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(v: number): void;

    /**
    DESCRIPTION


    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(bmp: Bitmap): void;

    /**
    DESCRIPTION


    r: Rect
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(r: Rect, v: number): void;

    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(p: Point, bmp: Bitmap): void;
    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap
    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(p: Point, bmp: Bitmap, r?: Rect): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(x0: number, y0: number, x1: number, y1: number, v: number): void;

    /**
    DESCRIPTION


    x: int
    y: int
    bmp: Bitmap
    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public or(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

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
    public pixel(p: Point): number;

    /**
    DESCRIPTION


    x: int
    y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public pixel(x: number, y: number): number;

    /**
    DESCRIPTION


    replaceThis: uint32
    replaceWith: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replaceColor(replaceThis: number, replaceWith: number): void;

    /**
    DESCRIPTION


    r: Rect
    replaceThis: uint32
    replaceWith: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replaceColor(r: Rect, replaceThis: number, replaceWith: number): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    replaceThis: uint32
    replaceWith: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replaceColor(x0: number, y0: number, x1: number, y1: number, replaceThis: number, replaceWith: number): void;

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
    public rotated(angleRadians: number): Bitmap;
    /**
    DESCRIPTION


    angleRadians: Number
    mode: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotated(angleRadians: number, mode?: any): Bitmap;

    /**
    DESCRIPTION


    filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public save(filePath: string): void;
    /**
    DESCRIPTION


    filePath: String
    quality: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public save(filePath: string, quality?: number): void;

    /**
    DESCRIPTION


    scale: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public scaled(scale: number): Bitmap;

    /**
    DESCRIPTION


    sx: Number
    sy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public scaled(sx: number, sy: number): Bitmap;
    /**
    DESCRIPTION


    sx: Number
    sy: Number
    mode: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public scaled(sx: number, sy: number, mode?: any): Bitmap;

    /**
    DESCRIPTION


    size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public scaledTo(size: number): Bitmap;

    /**
    DESCRIPTION


    width: int
    height: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public scaledTo(width: number, height: number): Bitmap;
    /**
    DESCRIPTION


    width: int
    height: int
    mode: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public scaledTo(width: number, height: number, mode?: any): Bitmap;

    /**
    DESCRIPTION


    alpha: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAlpha(alpha: number): void;

    /**
    DESCRIPTION


    r: Rect
    alpha: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAlpha(r: Rect, alpha: number): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    alpha: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAlpha(x0: number, y0: number, x1: number, y1: number, alpha: number): void;

    /**
    DESCRIPTION


    alpha: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAlpha(alpha: Bitmap): void;
    /**
    DESCRIPTION


    alpha: Bitmap
    invert: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAlpha(alpha: Bitmap, invert?: boolean /* false */): void;

    /**
    DESCRIPTION


    p: Point
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setPixel(p: Point, v: number): void;

    /**
    DESCRIPTION


    x: int
    y: int
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setPixel(x: number, y: number, v: number): void;

    /**
    DESCRIPTION


    t: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setTransparency(t: number): void;

    /**
    DESCRIPTION


    r: Rect
    t: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setTransparency(r: Rect, t: number): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    t: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setTransparency(x0: number, y0: number, x1: number, y1: number, t: number): void;

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
    public subimage(r: Rect): Bitmap;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public subimage(x0: number, y0: number, x1: number, y1: number): Bitmap;

    /**
    DESCRIPTION


    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(v: number): void;

    /**
    DESCRIPTION


    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(bmp: Bitmap): void;

    /**
    DESCRIPTION


    r: Rect
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(r: Rect, v: number): void;

    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(p: Point, bmp: Bitmap): void;
    /**
    DESCRIPTION


    p: Point
    bmp: Bitmap
    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(p: Point, bmp: Bitmap, r?: Rect): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(x0: number, y0: number, x1: number, y1: number, v: number): void;

    /**
    DESCRIPTION


    x: int
    y: int
    bmp: Bitmap
    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xor(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xorRect(v: number): void;

    /**
    DESCRIPTION


    r: Rect
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xorRect(r: Rect, v: number): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    v: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public xorRect(x0: number, y0: number, x1: number, y1: number, v: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    data: ByteArray
    width: int
    height: int
    pixelRatio: Number = 1.0
    flags: uint32 = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromSVG(data: ByteArray, width: number, height: number, pixelRatio: number /* 1.0 */, flags: number /* 0 */): Bitmap;

    /**
    DESCRIPTION


    filePath: String
    width: int
    height: int
    pixelRatio: Number = 1.0
    flags: uint32 = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromSVGFile(filePath: string, width: number, height: number, pixelRatio: number /* 1.0 */, flags: number /* 0 */): Bitmap;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Bitmap;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
