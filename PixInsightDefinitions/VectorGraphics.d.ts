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
    public begin(bmp: Bitmap): void;

    public begin(svg: SVG): void;

    public begin(pdf: PDF): void;

    public begin(ctr: Control): void;

    public drawArc(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    public drawArc(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    public drawBitmap(p: Point, bmp: Bitmap): void;

    public drawBitmap(x: number, y: number, bmp: Bitmap): void;

    public drawBitmapRect(p: Point, bmp: Bitmap, r: Rect): void;

    public drawBitmapRect(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

    public drawChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    public drawChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    public drawCircle(center: Point, radius: number): void;

    public drawCircle(xc: number, yc: number, radius: number): void;

    public drawEllipse(r: Rect): void;

    public drawEllipse(x0: number, y0: number, x1: number, y1: number): void;

    public drawEllipticArc(r: Rect, startRadians: number, spanRadians: number): void;

    public drawEllipticArc(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    public drawEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;

    public drawEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    public drawEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;

    public drawEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    public drawLine(p0: Point, p1: Point): void;

    public drawLine(x0: number, y0: number, x1: number, y1: number): void;

    public drawPie(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    public drawPie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    public drawPoint(p: Point): void;

    public drawPoint(x: number, y: number): void;

    public drawPolygon(points: Array<any>): void;
    public drawPolygon(points: Array<any>, fillRule: number): void;

    public drawPolyline(points: Array<any>): void;

    public drawRect(r: Rect): void;

    public drawRect(x0: number, y0: number, x1: number, y1: number): void;

    public drawRoundedRect(r: Rect): void;
    public drawRoundedRect(r: Rect, rx: number /* 25 */): void;
    public drawRoundedRect(r: Rect, rx: number /* 25 */, ry: number /* 25 */): void;

    public drawRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    public drawRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */): void;
    public drawRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */, ry: number /* 25 */): void;

    public drawScaledBitmap(r: Rect, bmp: Bitmap): void;

    public drawScaledBitmap(x0: number, y0: number, x1: number, y1: number, bmp: Bitmap): void;

    public drawScaledBitmapRect(rdst: Rect, bmp: Bitmap, rsrc: Rect): void;

    public drawScaledBitmapRect(dx0: number, dy0: number, dx1: number, dy1: number, bmp: Bitmap, sx0: number, sy0: number, sx1: number, sy1: number): void;

    public drawText(p: Point, text: string): void;

    public drawText(x: number, y: number, text: string): void;

    public drawTextRect(r: Rect, text: string): void;
    public drawTextRect(r: Rect, text: string, align: number): void;

    public drawTextRect(x0: number, y0: number, x1: number, y1: number, text: string): void;
    public drawTextRect(x0: number, y0: number, x1: number, y1: number, text: string, align: number): void;

    public drawTiledBitmap(r: Rect, bmp: Bitmap): void;
    public drawTiledBitmap(r: Rect, bmp: Bitmap, origin: Point /* 0 */): void;

    public drawTiledBitmap(x0: number, y0: number, x1: number, y1: number, bmp: Bitmap): void;
    public drawTiledBitmap(x0: number, y0: number, x1: number, y1: number, bmp: Bitmap, ox: number /* 0 */, oy: number /* 0 */): void;

    public end(): void;

    public eraseChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    public eraseChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    public eraseCircle(center: Point, radius: number): void;

    public eraseCircle(xc: number, yc: number, radius: number): void;

    public eraseEllipse(r: Rect): void;

    public eraseEllipse(x0: number, y0: number, x1: number, y1: number): void;

    public eraseEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;

    public eraseEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    public eraseEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;

    public eraseEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;

    public erasePie(center: Point, radius: number, startRadians: number, spanRadians: number): void;

    public erasePie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;

    public erasePolygon(points: Array<any>): void;
    public erasePolygon(points: Array<any>, fillRule: number): void;

    public eraseRect(r: Rect): void;

    public eraseRect(x0: number, y0: number, x1: number, y1: number): void;

    public eraseRoundedRect(r: Rect): void;
    public eraseRoundedRect(r: Rect, rx: number /* 25 */): void;
    public eraseRoundedRect(r: Rect, rx: number /* 25 */, ry: number /* 25 */): void;

    public eraseRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    public eraseRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */): void;
    public eraseRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */, ry: number /* 25 */): void;

    public fillChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    public fillChord(center: Point, radius: number, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    public fillChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillCircle(center: Point, radius: number): void;
    public fillCircle(center: Point, radius: number, brush: Brush): void;

    public fillCircle(xc: number, yc: number, radius: number): void;
    public fillCircle(xc: number, yc: number, radius: number, brush: Brush): void;

    public fillEllipse(r: Rect): void;
    public fillEllipse(r: Rect, brush: Brush): void;

    public fillEllipse(x0: number, y0: number, x1: number, y1: number): void;
    public fillEllipse(x0: number, y0: number, x1: number, y1: number, brush: Brush): void;

    public fillEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;
    public fillEllipticChord(r: Rect, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    public fillEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;
    public fillEllipticPie(r: Rect, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    public fillEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillPie(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    public fillPie(center: Point, radius: number, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillPie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    public fillPie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, brush: Brush): void;

    public fillPolygon(points: Array<any>): void;
    public fillPolygon(points: Array<any>, fillRule: number): void;
    public fillPolygon(points: Array<any>, fillRule: number, brush: Brush): void;

    public fillRect(r: Rect): void;
    public fillRect(r: Rect, brush: Brush): void;

    public fillRect(x0: number, y0: number, x1: number, y1: number): void;
    public fillRect(x0: number, y0: number, x1: number, y1: number, brush: Brush): void;

    public fillRoundedRect(r: Rect): void;
    public fillRoundedRect(r: Rect, rx: number /* 25 */): void;
    public fillRoundedRect(r: Rect, rx: number /* 25 */, ry: number /* 25 */): void;
    public fillRoundedRect(r: Rect, rx: number /* 25 */, ry: number /* 25 */, brush: Brush): void;

    public fillRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    public fillRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */): void;
    public fillRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */, ry: number /* 25 */): void;
    public fillRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */, ry: number /* 25 */, brush: Brush): void;

    public multiplyTransformation(T: Matrix): void;

    public popState(): void;

    public pushState(): void;

    public resetTransformation(): void;

    public rotateTransformation(angleRadians: number): void;

    public scaleTransformation(sx: number): void;
    public scaleTransformation(sx: number, sy: number): void;

    public shearTransformation(sx: number): void;
    public shearTransformation(sx: number, sy: number): void;

    public strokeChord(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    public strokeChord(center: Point, radius: number, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokeChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    public strokeChord(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokeCircle(center: Point, radius: number): void;
    public strokeCircle(center: Point, radius: number, pen: Pen): void;

    public strokeCircle(xc: number, yc: number, radius: number): void;
    public strokeCircle(xc: number, yc: number, radius: number, pen: Pen): void;

    public strokeEllipse(r: Rect): void;
    public strokeEllipse(r: Rect, pen: Pen): void;

    public strokeEllipse(x0: number, y0: number, x1: number, y1: number): void;
    public strokeEllipse(x0: number, y0: number, x1: number, y1: number, pen: Pen): void;

    public strokeEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;
    public strokeEllipticChord(r: Rect, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokeEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    public strokeEllipticChord(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokeEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;
    public strokeEllipticPie(r: Rect, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokeEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number): void;
    public strokeEllipticPie(x0: number, y0: number, x1: number, y1: number, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokePie(center: Point, radius: number, startRadians: number, spanRadians: number): void;
    public strokePie(center: Point, radius: number, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokePie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number): void;
    public strokePie(cx: number, cy: number, radius: number, startRadians: number, spanRadians: number, pen: Pen): void;

    public strokePolygon(points: Array<any>): void;
    public strokePolygon(points: Array<any>, fillRule: number): void;
    public strokePolygon(points: Array<any>, fillRule: number, pen: Pen): void;

    public strokeRect(r: Rect): void;
    public strokeRect(r: Rect, pen: Pen): void;

    public strokeRect(x0: number, y0: number, x1: number, y1: number): void;
    public strokeRect(x0: number, y0: number, x1: number, y1: number, pen: Pen): void;

    public strokeRoundedRect(r: Rect): void;
    public strokeRoundedRect(r: Rect, rx: number /* 25 */): void;
    public strokeRoundedRect(r: Rect, rx: number /* 25 */, ry: number /* 25 */): void;
    public strokeRoundedRect(r: Rect, rx: number /* 25 */, ry: number /* 25 */, pen: Pen): void;

    public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number): void;
    public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */): void;
    public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */, ry: number /* 25 */): void;
    public strokeRoundedRect(x0: number, y0: number, x1: number, y1: number, rx: number /* 25 */, ry: number /* 25 */, pen: Pen): void;

    public textRect(r: Rect, text: string): Rect;
    public textRect(r: Rect, text: string, align: number): Rect;

    public textRect(x0: number, y0: number, x1: number, y1: number, text: string): Rect;
    public textRect(x0: number, y0: number, x1: number, y1: number, text: string, align: number): Rect;

    public transformed(p: Point): Point;

    public transformed(x: number, y: number): Point;

    public translateTransformation(d: Point): void;

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
