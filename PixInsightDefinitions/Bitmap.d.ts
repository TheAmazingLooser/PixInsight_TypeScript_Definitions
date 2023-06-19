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
    @param v: uint32

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
    @param bmp: Bitmap

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
    @param r: Rect
    @param v: uint32

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
    @param p: Point
    @param bmp: Bitmap

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
    @param p: Point
    @param bmp: Bitmap
    @param r: Rect

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param v: uint32

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
    @param x: int
    @param y: int
    @param bmp: Bitmap
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param bmp: Bitmap

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
    @param bmp: Bitmap

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
    @param p: Point
    @param bmp: Bitmap

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
    @param p: Point
    @param bmp: Bitmap
    @param r: Rect

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
    @param x: int
    @param y: int
    @param bmp: Bitmap

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
    @param x: int
    @param y: int
    @param bmp: Bitmap
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param v: uint32

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
    @param r: Rect
    @param v: uint32

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param v: uint32

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
    @param r: Rect

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param r: Rect

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param filePath: String

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
    @param data: ByteArray

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
    @param data: ByteArray
    @param format: String = "SVG"

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
    @param v: uint32

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
    @param bmp: Bitmap

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
    @param r: Rect
    @param v: uint32

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
    @param p: Point
    @param bmp: Bitmap

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
    @param p: Point
    @param bmp: Bitmap
    @param r: Rect

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param v: uint32

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
    @param x: int
    @param y: int
    @param bmp: Bitmap
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param p: Point

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
    @param x: int
    @param y: int

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
    @param replaceThis: uint32
    @param replaceWith: uint32

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
    @param r: Rect
    @param replaceThis: uint32
    @param replaceWith: uint32

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param replaceThis: uint32
    @param replaceWith: uint32

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
    @param angleRadians: Number

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
    @param angleRadians: Number
    @param mode: any

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
    @param filePath: String

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
    @param filePath: String
    @param quality: int

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
    @param scale: Number

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
    @param sx: Number
    @param sy: Number

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
    @param sx: Number
    @param sy: Number
    @param mode: any

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
    @param size: int

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
    @param width: int
    @param height: int

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
    @param width: int
    @param height: int
    @param mode: any

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
    @param alpha: uint

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
    @param r: Rect
    @param alpha: uint

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param alpha: uint

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
    @param alpha: Bitmap

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
    @param alpha: Bitmap
    @param invert: Boolean = false

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
    @param p: Point
    @param v: uint32

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
    @param x: int
    @param y: int
    @param v: uint32

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
    @param t: Number

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
    @param r: Rect
    @param t: Number

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param t: Number

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
    @param r: Rect

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param v: uint32

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
    @param bmp: Bitmap

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
    @param r: Rect
    @param v: uint32

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
    @param p: Point
    @param bmp: Bitmap

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
    @param p: Point
    @param bmp: Bitmap
    @param r: Rect

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param v: uint32

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
    @param x: int
    @param y: int
    @param bmp: Bitmap
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

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
    @param v: uint32

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
    @param r: Rect
    @param v: uint32

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param v: uint32

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
    @param data: ByteArray
    @param width: int
    @param height: int
    @param pixelRatio: Number = 1.0
    @param flags: uint32 = 0

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
    @param filePath: String
    @param width: int
    @param height: int
    @param pixelRatio: Number = 1.0
    @param flags: uint32 = 0

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
