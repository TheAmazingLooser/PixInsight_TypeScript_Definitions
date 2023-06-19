//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Graphics {


    //-------------------------
    //-------Properties--------
    //-------------------------
    antialiasing: boolean;
    backgroundBrush: Brush;
    brush: Brush;
    brushOrigin: Point;
    clipRect: Rect;
    clipping: boolean;
    compositionOperator: number;
    font: Font;
    isPainting: boolean;
    opacity: number;
    pen: Pen;
    smoothInterpolation: boolean;
    textAntialiasing: boolean;
    transformationEnabled: boolean;
    transformationMatrix: Matrix;
    transparentBackground: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(bmp: Bitmap);
    constructor(svg: SVG);
    constructor(pdf: PDF);
    constructor(ctr: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
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
	public begin(bmp: Bitmap): void;

    /**
    DESCRIPTION
    @param svg: SVG

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public begin(svg: SVG): void;

    /**
    DESCRIPTION
    @param pdf: PDF

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public begin(pdf: PDF): void;

    /**
    DESCRIPTION
    @param ctr: Control

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public begin(ctr: Control): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawArc(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawArc(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

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
	public drawBitmap(p: Point, bmp: Bitmap): void;

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
	public drawBitmap(x: number, y: number, bmp: Bitmap): void;

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
	public drawBitmapRect(p: Point, bmp: Bitmap, r: Rect): void;

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
	public drawBitmapRect(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawCircle(center: Point, radius: number): void;

    /**
    DESCRIPTION
    @param xc: int
    @param yc: int
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawCircle(xc: number, yc: number, radius: number): void;

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
	public drawEllipse(r: Rect): void;

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
	public drawEllipse(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawEllipticArc(r: Rect, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawEllipticArc(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param p0: Point
    @param p1: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawLine(p0: Point, p1: Point): void;

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
	public drawLine(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawPie(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawPie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

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
	public drawPoint(p: Point): void;

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
	public drawPoint(x: number, y: number): void;

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
	public drawPolygon(points: Array<any>): void;
    /**
    DESCRIPTION
    @param points: Array
    @param fillRule: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawPolygon(points: Array<any>, fillRule?: number): void;

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
	public drawPolyline(points: Array<any>): void;

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
	public drawRect(r: Rect): void;

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
	public drawRect(x0: number, y0: number, x1: number, y1: number): void;

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
	public drawRoundedRect(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param rx: Number = 25
    @param ry: Number = 25

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawRoundedRect(r: Rect, rx?: number /* 25 */, ry?: number /* 25 */): void;

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
	public drawRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param rx: Number = 25
    @param ry: Number = 25

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawRoundedRect(x0: number, y0: number, x1: number, y1: number, rx?: number /* 25 */, ry?: number /* 25 */): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawScaledBitmap(r: Rect, bmp: Bitmap): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawScaledBitmap(x0: number, y0: number, x1: number, y1: number, bmp: Bitmap): void;

    /**
    DESCRIPTION
    @param rdst: Rect
    @param bmp: Bitmap
    @param rsrc: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawScaledBitmapRect(rdst: Rect, bmp: Bitmap, rsrc: Rect): void;

    /**
    DESCRIPTION
    @param dx0: int
    @param dy0: int
    @param dx1: int
    @param dy1: int
    @param bmp: Bitmap
    @param sx0: int
    @param sy0: int
    @param sx1: int
    @param sy1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawScaledBitmapRect(dx0: number, dy0: number, dx1: number, dy1: number, bmp: Bitmap, sx0: number, sy0: number, sx1: number, sy1: number): void;

    /**
    DESCRIPTION
    @param p: Point
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawText(p: Point, text: string): void;

    /**
    DESCRIPTION
    @param x: int
    @param y: int
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawText(x: number, y: number, text: string): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTextRect(r: Rect, text: string): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param text: String
    @param align: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTextRect(r: Rect, text: string, align?: number): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTextRect(x0: number, y0: number, x1: number, y1: number, text: string): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param text: String
    @param align: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTextRect(x0: number, y0: number, x1: number, y1: number, text: string, align?: number): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTiledBitmap(r: Rect, bmp: Bitmap): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param bmp: Bitmap
    @param origin: Point = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTiledBitmap(r: Rect, bmp: Bitmap, origin?: Point /* 0 */): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTiledBitmap(x0: number, y0: number, x1: number, y1: number, bmp: Bitmap): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param bmp: Bitmap
    @param ox: int = 0
    @param oy: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public drawTiledBitmap(x0: number, y0: number, x1: number, y1: number, bmp: Bitmap, ox: number /* 0 */, oy: number /* 0 */): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public end(): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseCircle(center: Point, radius: number): void;

    /**
    DESCRIPTION
    @param xc: int
    @param yc: int
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseCircle(xc: number, yc: number, radius: number): void;

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
	public eraseEllipse(r: Rect): void;

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
	public eraseEllipse(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public erasePie(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public erasePie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

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
	public erasePolygon(points: Array<any>): void;
    /**
    DESCRIPTION
    @param points: Array
    @param fillRule: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public erasePolygon(points: Array<any>, fillRule?: number): void;

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
	public eraseRect(r: Rect): void;

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
	public eraseRect(x0: number, y0: number, x1: number, y1: number): void;

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
	public eraseRoundedRect(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param rx: Number = 25
    @param ry: Number = 25

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseRoundedRect(r: Rect, rx?: number /* 25 */, ry?: number /* 25 */): void;

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
	public eraseRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param rx: Number = 25
    @param ry: Number = 25

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public eraseRoundedRect(x0: number, y0: number, x1: number, y1: number, rx?: number /* 25 */, ry?: number /* 25 */): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillChord(center: Point, radius: number, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillCircle(center: Point, radius: number): void;
    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillCircle(center: Point, radius: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param xc: int
    @param yc: int
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillCircle(xc: number, yc: number, radius: number): void;
    /**
    DESCRIPTION
    @param xc: int
    @param yc: int
    @param radius: int
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillCircle(xc: number, yc: number, radius: number, brush?: Brush): void;

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
	public fillEllipse(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipse(r: Rect, brush?: Brush): void;

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
	public fillEllipse(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipse(x0: number, y0: number, x1: number, y1: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticChord(r: Rect, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticPie(r: Rect, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillPie(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillPie(center: Point, radius: number, startRadians: number, spanRadians: number, brush?: Brush): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillPie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillPie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, brush?: Brush): void;

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
	public fillPolygon(points: Array<any>): void;
    /**
    DESCRIPTION
    @param points: Array
    @param fillRule: int
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillPolygon(points: Array<any>, fillRule?: number, brush?: Brush): void;

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
	public fillRect(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillRect(r: Rect, brush?: Brush): void;

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
	public fillRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillRect(x0: number, y0: number, x1: number, y1: number, brush?: Brush): void;

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
	public fillRoundedRect(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param rx: Number = 25
    @param ry: Number = 25
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillRoundedRect(r: Rect, rx?: number /* 25 */, ry?: number /* 25 */, brush?: Brush): void;

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
	public fillRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param rx: Number = 25
    @param ry: Number = 25
    @param brush: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public fillRoundedRect(x0: number, y0: number, x1: number, y1: number, rx?: number /* 25 */, ry?: number /* 25 */, brush?: Brush): void;

    /**
    DESCRIPTION
    @param T: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public multiplyTransformation(T: Matrix): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public popState(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public pushState(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public resetTransformation(): void;

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
	public rotateTransformation(angleRadians: number): void;

    /**
    DESCRIPTION
    @param sx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scaleTransformation(sx: number): void;
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
	public scaleTransformation(sx: number, sy?: number): void;

    /**
    DESCRIPTION
    @param sx: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public shearTransformation(sx: number): void;
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
	public shearTransformation(sx: number, sy?: number): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeChord(center: Point, radius: number, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeCircle(center: Point, radius: number): void;
    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeCircle(center: Point, radius: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param xc: int
    @param yc: int
    @param radius: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeCircle(xc: number, yc: number, radius: number): void;
    /**
    DESCRIPTION
    @param xc: int
    @param yc: int
    @param radius: int
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeCircle(xc: number, yc: number, radius: number, pen?: Pen): void;

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
	public strokeEllipse(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipse(r: Rect, pen?: Pen): void;

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
	public strokeEllipse(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipse(x0: number, y0: number, x1: number, y1: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticChord(r: Rect, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticPie(r: Rect, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokePie(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param center: Point
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokePie(center: Point, radius: number, startRadians: number, spanRadians: number, pen?: Pen): void;

    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokePie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    /**
    DESCRIPTION
    @param cx: int
    @param cy: int
    @param radius: int
    @param startRadians: Number
    @param spanRadians: Number
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokePie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, pen?: Pen): void;

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
	public strokePolygon(points: Array<any>): void;
    /**
    DESCRIPTION
    @param points: Array
    @param fillRule: int
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokePolygon(points: Array<any>, fillRule?: number, pen?: Pen): void;

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
	public strokeRect(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeRect(r: Rect, pen?: Pen): void;

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
	public strokeRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeRect(x0: number, y0: number, x1: number, y1: number, pen?: Pen): void;

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
	public strokeRoundedRect(r: Rect): void;
    /**
    DESCRIPTION
    @param r: Rect
    @param rx: Number = 25
    @param ry: Number = 25
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeRoundedRect(r: Rect, rx?: number /* 25 */, ry?: number /* 25 */, pen?: Pen): void;

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
	public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param rx: Number = 25
    @param ry: Number = 25
    @param pen: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number, rx?: number /* 25 */, ry?: number /* 25 */, pen?: Pen): void;

    /**
    DESCRIPTION
    @param r: Rect
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public textRect(r: Rect, text: string): Rect;
    /**
    DESCRIPTION
    @param r: Rect
    @param text: String
    @param align: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public textRect(r: Rect, text: string, align?: number): Rect;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public textRect(x0: number, y0: number, x1: number, y1: number, text: string): Rect;
    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param text: String
    @param align: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public textRect(x0: number, y0: number, x1: number, y1: number, text: string, align?: number): Rect;

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
	public transformed(p: Point): Point;

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
	public transformed(x: number, y: number): Point;

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
	public translateTransformation(d: Point): void;

    /**
    DESCRIPTION
    @param dx: Number
    @param dy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public translateTransformation(dx: number, dy: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Graphics;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
