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
    public and(v: number): void;

    public and(bmp: Bitmap): void;

    public and(r: Rect, v: number): void;

    public and(p: Point, bmp: Bitmap): void;
    public and(p: Point, bmp: Bitmap, r: Rect): void;

    public and(x0: number, y0: number, x1: number, y1: number, v: number): void;

    public and(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    public assign(bmp: Bitmap): void;

    public clear(): void;

    public copy(bmp: Bitmap): void;

    public copy(p: Point, bmp: Bitmap): void;
    public copy(p: Point, bmp: Bitmap, r: Rect): void;

    public copy(x: number, y: number, bmp: Bitmap): void;
    public copy(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    public fill(v: number): void;

    public fill(r: Rect, v: number): void;

    public fill(x0: number, y0: number, x1: number, y1: number, v: number): void;

    public invert(): void;

    public invert(r: Rect): void;

    public invert(x0: number, y0: number, x1: number, y1: number): void;

    public invertRect(): void;

    public invertRect(r: Rect): void;

    public invertRect(x0: number, y0: number, x1: number, y1: number): void;

    public isEmpty(): boolean;

    public load(filePath: string): void;

    public load(data: ByteArray): void;
    public load(data: ByteArray, format: string /* "SVG"*/): void;

    public mirrored(): Bitmap;

    public mirroredHorizontally(): Bitmap;

    public mirroredVertically(): Bitmap;

    public or(v: number): void;

    public or(bmp: Bitmap): void;

    public or(r: Rect, v: number): void;

    public or(p: Point, bmp: Bitmap): void;
    public or(p: Point, bmp: Bitmap, r: Rect): void;

    public or(x0: number, y0: number, x1: number, y1: number, v: number): void;

    public or(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    public pixel(p: Point): number;

    public pixel(x: number, y: number): number;

    public replaceColor(replaceThis: number, replaceWith: number): void;

    public replaceColor(r: Rect, replaceThis: number, replaceWith: number): void;

    public replaceColor(x0: number, y0: number, x1: number, y1: number, replaceThis: number, replaceWith: number): void;

    public rotated(angleRadians: number): Bitmap;
    public rotated(angleRadians: number, mode: any): Bitmap;

    public save(filePath: string): void;
    public save(filePath: string, quality: number): void;

    public scaled(scale: number): Bitmap;

    public scaled(sx: number, sy: number): Bitmap;
    public scaled(sx: number, sy: number, mode: any): Bitmap;

    public scaledTo(size: number): Bitmap;

    public scaledTo(width: number, height: number): Bitmap;
    public scaledTo(width: number, height: number, mode: any): Bitmap;

    public setAlpha(alpha: number): void;

    public setAlpha(r: Rect, alpha: number): void;

    public setAlpha(x0: number, y0: number, x1: number, y1: number, alpha: number): void;

    public setAlpha(alpha: Bitmap): void;
    public setAlpha(alpha: Bitmap, invert: boolean /* false*/): void;

    public setPixel(p: Point, v: number): void;

    public setPixel(x: number, y: number, v: number): void;

    public setTransparency(t: number): void;

    public setTransparency(r: Rect, t: number): void;

    public setTransparency(x0: number, y0: number, x1: number, y1: number, t: number): void;

    public subimage(r: Rect): Bitmap;

    public subimage(x0: number, y0: number, x1: number, y1: number): Bitmap;

    public xor(v: number): void;

    public xor(bmp: Bitmap): void;

    public xor(r: Rect, v: number): void;

    public xor(p: Point, bmp: Bitmap): void;
    public xor(p: Point, bmp: Bitmap, r: Rect): void;

    public xor(x0: number, y0: number, x1: number, y1: number, v: number): void;

    public xor(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    public xorRect(v: number): void;

    public xorRect(r: Rect, v: number): void;

    public xorRect(x0: number, y0: number, x1: number, y1: number, v: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromSVG(data: ByteArray, width: number, height: number, pixelRatio: number /* 1.0*/, flags: number /* 0*/): Bitmap;

    public static fromSVGFile(filePath: string, width: number, height: number, pixelRatio: number /* 1.0*/, flags: number /* 0*/): Bitmap;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bounds: Rect;
    static height: number;
    static physicalPixelRatio: number;
    static pixelFormat: number;
    static width: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
