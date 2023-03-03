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
    public add(r: Rect): void;

    public add(p: Point): void;

    public add(x: number): void;
    public add(x: number, y: number /* x*/): void;

    public add(x0: number, y0: number, x1: number, y1: number): void;

    public assign(r: Rect): void;

    public assign(v: number): void;

    public assign(width: number, height: number): void;

    public assign(x0: number, y0: number, x1: number, y1: number): void;

    public clipCode(p: Point): number;

    public clipCode(x: number, y: number): number;

    public deflateBy(d: Point): void;

    public deflateBy(dx: number): void;
    public deflateBy(dx: number, dy: number /* dx*/): void;

    public deflatedBy(d: Point): Rect;

    public deflatedBy(dx: number): Rect;
    public deflatedBy(dx: number, dy: number /* dx*/): Rect;

    public div(r: Rect): void;

    public div(p: Point): void;

    public div(x: number): void;
    public div(x: number, y: number /* x*/): void;

    public div(x0: number, y0: number, x1: number, y1: number): void;

    public includes(p: Point): boolean;

    public includes(x: number, y: number): boolean;

    public inflateBy(d: Point): void;

    public inflateBy(dx: number): void;
    public inflateBy(dx: number, dy: number /* dx*/): void;

    public inflatedBy(d: Point): Rect;

    public inflatedBy(dx: number): Rect;
    public inflatedBy(dx: number, dy: number /* dx*/): Rect;

    public intersect(r: Rect): void;

    public intersect(x0: number, y0: number, x1: number, y1: number): void;

    public intersection(r: Rect): Rect;

    public intersection(x0: number, y0: number, x1: number, y1: number): Rect;

    public intersects(r: Rect): boolean;

    public intersects(x0: number, y0: number, x1: number, y1: number): boolean;

    public isEqualTo(r: Rect): boolean;

    public isEqualTo(p0: Point, p1: Point): boolean;

    public isEqualTo(x0: number, y0: number, x1: number, y1: number): boolean;

    public isEqualTo(scalar: number): boolean;

    public isLessThan(r: Rect): boolean;

    public isLessThan(p0: Point, p1: Point): boolean;

    public isLessThan(x0: number, y0: number, x1: number, y1: number): boolean;

    public isLessThan(scalar: number): boolean;

    public moveBy(d: Point): void;

    public moveBy(dx: number): void;
    public moveBy(dx: number, dy: number /* dx*/): void;

    public moveTo(p: Point): void;

    public moveTo(x: number): void;
    public moveTo(x: number, y: number /* x*/): void;

    public movedBy(d: Point): Rect;

    public movedBy(dx: number): Rect;
    public movedBy(dx: number, dy: number /* dx*/): Rect;

    public movedTo(p: Point): Rect;

    public movedTo(x: number): Rect;
    public movedTo(x: number, y: number /* x*/): Rect;

    public mul(r: Rect): void;

    public mul(p: Point): void;

    public mul(x: number): void;
    public mul(x: number, y: number /* x*/): void;

    public mul(x0: number, y0: number, x1: number, y1: number): void;

    public order(): void;

    public ordered(): Rect;

    public resizeBy(d: Point): void;

    public resizeBy(dx: number): void;
    public resizeBy(dx: number, dy: number /* dx*/): void;

    public resizeTo(width: number): void;
    public resizeTo(width: number, height: number /* width*/): void;

    public resizedBy(d: Point): Rect;

    public resizedBy(dx: number): Rect;
    public resizedBy(dx: number, dy: number /* dx*/): Rect;

    public resizedTo(width: number): Rect;
    public resizedTo(width: number, height: number /* width*/): Rect;

    public rotate(angleRadians: number): void;
    public rotate(angleRadians: number, center: Point /* 0*/): void;

    public rotate(sin: number, cos: number): void;
    public rotate(sin: number, cos: number, center: Point /* 0*/): void;

    public rotate(angleRadians: number, xc: number, yc: number): void;

    public rotate(sin: number, cos: number, xc: number, yc: number): void;

    public rotated(angleRadians: number): Rect;
    public rotated(angleRadians: number, center: Point /* 0*/): Rect;

    public rotated(sin: number, cos: number): Rect;
    public rotated(sin: number, cos: number, center: Point /* 0*/): Rect;

    public rotated(angleRadians: number, xc: number, yc: number): Rect;

    public rotated(sin: number, cos: number, xc: number, yc: number): Rect;

    public round(): void;
    public round(n: number /* 0*/): void;

    public rounded(): Rect;
    public rounded(n: number /* 0*/): Rect;

    public sub(r: Rect): void;

    public sub(p: Point): void;

    public sub(x: number): void;
    public sub(x: number, y: number /* x*/): void;

    public sub(x0: number, y0: number, x1: number, y1: number): void;

    public symmetric(): Rect;

    public symmetrize(): void;

    public toArray(): Array<any>;

    public toString(): string;

    public transform(M: Matrix): void;

    public transformed(M: Matrix): Rect;

    public translate(p: Point): void;

    public translate(x: number): void;
    public translate(x: number, y: number /* x*/): void;

    public translateBy(d: Point): void;

    public translateBy(dx: number): void;
    public translateBy(dx: number, dy: number /* dx*/): void;

    public translated(p: Point): Rect;

    public translated(x: number): Rect;
    public translated(x: number, y: number /* x*/): Rect;

    public translatedBy(d: Point): Rect;

    public translatedBy(dx: number): Rect;
    public translatedBy(dx: number, dy: number /* dx*/): Rect;

    public union(r: Rect): Rect;

    public union(x0: number, y0: number, x1: number, y1: number): Rect;

    public unite(r: Rect): void;

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
    static area: number;
    static bottom: number;
    static center: Point;
    static diagonal: number;
    static height: number;
    static hypot: number;
    static isHorizontalLine: boolean;
    static isLine: boolean;
    static isNormal: boolean;
    static isOrdered: boolean;
    static isPoint: boolean;
    static isPointOrLine: boolean;
    static isRect: boolean;
    static isVerticalLine: boolean;
    static left: number;
    static leftBottom: Point;
    static leftTop: Point;
    static perimeter: number;
    static right: number;
    static rightBottom: Point;
    static rightTop: Point;
    static top: number;
    static width: number;
    static x0: number;
    static x1: number;
    static y0: number;
    static y1: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
