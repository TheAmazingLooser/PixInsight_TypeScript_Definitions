//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class VectorGraphics {


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


    bmp: Bitmap

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


    svg: SVG

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


    pdf: PDF

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


    ctr: Control

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    p: Point
    bmp: Bitmap

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


    x: Number
    y: Number
    bmp: Bitmap

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
    public drawBitmapRect(p: Point, bmp: Bitmap, r: Rect): void;

    /**
    DESCRIPTION


    x: Number
    y: Number
    bmp: Bitmap
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
    public drawBitmapRect(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number

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


    xc: Number
    yc: Number
    radius: Number

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


    r: Rect

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
    public drawEllipse(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    p0: Point
    p1: Point

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
    public drawLine(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    p: Point

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


    x: Number
    y: Number

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


    points: Array

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


    points: Array
    fillRule: int

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


    points: Array

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


    r: Rect

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
    public drawRect(x0: number, y0: number, x1: number, y1: number): void;

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
    public drawRoundedRect(r: Rect): void;
    /**
    DESCRIPTION


    r: Rect
    rx: Number = 25
    ry: Number = 25

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
    public drawRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    rx: Number = 25
    ry: Number = 25

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


    r: Rect
    bmp: Bitmap

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    bmp: Bitmap

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


    rdst: Rect
    bmp: Bitmap
    rsrc: Rect

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


    dx0: Number
    dy0: Number
    dx1: Number
    dy1: Number
    bmp: Bitmap
    sx0: Number
    sy0: Number
    sx1: Number
    sy1: Number

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


    p: Point
    text: String

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


    x: Number
    y: Number
    text: String

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


    r: Rect
    text: String

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


    r: Rect
    text: String
    align: int

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    text: String

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    text: String
    align: int

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


    r: Rect
    bmp: Bitmap

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


    r: Rect
    bmp: Bitmap
    origin: Point = 0

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    bmp: Bitmap

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    bmp: Bitmap
    ox: Number = 0
    oy: Number = 0

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number

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


    xc: Number
    yc: Number
    radius: Number

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


    r: Rect

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
    public eraseEllipse(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    points: Array

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


    points: Array
    fillRule: int

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


    r: Rect

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
    public eraseRect(x0: number, y0: number, x1: number, y1: number): void;

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
    public eraseRoundedRect(r: Rect): void;
    /**
    DESCRIPTION


    r: Rect
    rx: Number = 25
    ry: Number = 25

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
    public eraseRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    rx: Number = 25
    ry: Number = 25

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    center: Point
    radius: Number

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


    center: Point
    radius: Number
    brush: Brush

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


    xc: Number
    yc: Number
    radius: Number

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


    xc: Number
    yc: Number
    radius: Number
    brush: Brush

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


    r: Rect

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


    r: Rect
    brush: Brush

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
    public fillEllipse(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    brush: Brush

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number
    brush: Brush

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


    points: Array

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


    points: Array
    fillRule: int
    brush: Brush

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


    r: Rect

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


    r: Rect
    brush: Brush

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
    public fillRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    brush: Brush

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


    r: Rect

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


    r: Rect
    rx: Number = 25
    ry: Number = 25
    brush: Brush

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
    public fillRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    rx: Number = 25
    ry: Number = 25
    brush: Brush

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


    T: Matrix

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


    angleRadians: Number

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


    sx: Number

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


    sx: Number
    sy: Number

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


    sx: Number

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


    sx: Number
    sy: Number

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    center: Point
    radius: Number

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


    center: Point
    radius: Number
    pen: Pen

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


    xc: Number
    yc: Number
    radius: Number

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


    xc: Number
    yc: Number
    radius: Number
    pen: Pen

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


    r: Rect

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


    r: Rect
    pen: Pen

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
    public strokeEllipse(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    pen: Pen

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    r: Rect
    startRadians: Number
    spanRadians: Number

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


    r: Rect
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    center: Point
    radius: Number
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number

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


    cx: Number
    cy: Number
    radius: Number
    startRadians: Number
    spanRadians: Number
    pen: Pen

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


    points: Array

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


    points: Array
    fillRule: int
    pen: Pen

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


    r: Rect

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


    r: Rect
    pen: Pen

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
    public strokeRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    pen: Pen

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


    r: Rect

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


    r: Rect
    rx: Number = 25
    ry: Number = 25
    pen: Pen

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
    public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    rx: Number = 25
    ry: Number = 25
    pen: Pen

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


    r: Rect
    text: String

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


    r: Rect
    text: String
    align: int

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    text: String

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


    x0: Number
    y0: Number
    x1: Number
    y1: Number
    text: String
    align: int

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


    p: Point

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


    x: Number
    y: Number

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


    d: Point

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


    dx: Number
    dy: Number

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
    static prototype: VectorGraphics;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
