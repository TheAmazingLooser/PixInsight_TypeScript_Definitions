//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class BRQuadTree {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bucketCapacity: number;
    objects: Array;
    root: QuadTreeNode;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(objects?: Array, bucketCapacity ?: number /*  40*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public avgDist(rect: Rect, dx: number, dy: number, excludeRect?: Rect): number;

    public build(objects: any, bucketCapacity?: any, rect?: any): void;

    public clear(): void;

    public height(): number;

    public insert(obj: Object): void;

    public isEmpty(): boolean;

    public isTree(): boolean;

    public leafNodeAt(point: Point): QuadTreeNode;

    public minDist(rect: Rect, dx: number, dy: number, excludeRect?: Rect): number;

    public nodeAt(point: Point): QuadTreeNode;

    public numberOfLeafNodes(): number;

    public numberOfNodes(): number;

    public regenerate(bucketCapacity?: any, rect?: any): void;

    public remove(obj: Object): void;

    public removeAtPoint(point: Point): void;

    public removeAtRect(rect: Rect): void;

    public search(rect: Rect): Array;

    public searchWithCallback(rect: Rect, callback: Function, data?: Object): void;

    public traverse(callback: Function): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bucketCapacity: number;
    static objects: Array;
    static root: QuadTreeNode;
}
