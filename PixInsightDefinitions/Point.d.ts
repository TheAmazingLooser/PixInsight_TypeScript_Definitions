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
    public add(p: Point): void;

    public add(x: number, y?: number /* x*/): void;

    public assign(p: Point): void;

    public assign(x: number, y?: number /* x*/): void;

    public distanceTo(p: Point): number;

    public distanceTo(x: number, y: number): number;

    public div(p: Point): void;

    public div(x: number, y?: number /* x*/): void;

    public dot(p: Point): number;

    public dot(x: number, y: number): number;

    public isEqualTo(p: Point): boolean;

    public isEqualTo(x: number, y: number): boolean;

    public isEqualTo(scalar: number): boolean;

    public isLessThan(p: Point): boolean;

    public isLessThan(x: number, y: number): boolean;

    public isLessThan(scalar: number): boolean;

    public moveBy(d: Point): void;

    public moveBy(dx: number, dy?: number /* dx*/): void;

    public moveTo(p: Point): void;

    public moveTo(x: number, y?: number /* x*/): void;

    public movedBy(d: Point): Point;

    public movedBy(dx: number, dy?: number /* dx*/): Point;

    public movedTo(p: Point): Point;

    public movedTo(x: number, y?: number /* x*/): Point;

    public mul(p: Point): void;

    public mul(x: number, y?: number /* x*/): void;

    public rotate(angleRadians: number, center?: Point /* 0*/): void;

    public rotate(sin: number, cos: number, center?: Point /* 0*/): void;

    public rotate(angleRadians: number, cx: number, cy: number): void;

    public rotate(sin: number, cos: number, cx: number, cy: number): void;

    public rotated(angleRadians: number, center?: Point /* 0*/): Point;

    public rotated(sin: number, cos: number, center?: Point /* 0*/): Point;

    public rotated(angleRadians: number, cx: number, cy: number): Point;

    public rotated(sin: number, cos: number, cx: number, cy: number): Point;

    public round(n?: number /* 0*/): void;

    public rounded(n?: number /* 0*/): Point;

    public sub(p: Point): void;

    public sub(x: number, y?: number /* x*/): void;

    public symmetric(): Point;

    public symmetrize(): void;

    public toArray(): Array<any>;

    public toString(): string;

    public toVector(): Vector;

    public transform(M: Matrix): void;

    public transformed(M: Matrix): Point;

    public translate(p: Point): void;

    public translate(x: number, y?: number /* x*/): void;

    public translateBy(d: Point): void;

    public translateBy(dx: number, dy?: number /* dx*/): void;

    public translated(p: Point): Point;

    public translated(x: number, y?: number /* x*/): Point;

    public translatedBy(d: Point): Point;

    public translatedBy(dx: number, dy?: number /* dx*/): Point;

    public truncate(): void;

    public truncated(): Point;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static x: number;
    static y: number;
}
