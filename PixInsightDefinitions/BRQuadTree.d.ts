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
    objects: Array<any>;
    root: QuadTreeNode;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(objects: Array<any>, bucketCapacity : number /*  40*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public avgDist(rect: Rect, dx: number, dy: number): number;
    public avgDist(rect: Rect, dx: number, dy: number, excludeRect: Rect): number;


    public build(objects: any): void;
    public build(objects: any, bucketCapacity: any): void;
    public build(objects: any, bucketCapacity: any, Rect: Rect): void;






    public insert(obj: Object): void;






    public leafNodeAt(point: Point): QuadTreeNode;


    public minDist(rect: Rect, dx: number, dy: number): number;
    public minDist(rect: Rect, dx: number, dy: number, excludeRect: Rect): number;


    public nodeAt(point: Point): QuadTreeNode;






    public regenerate(): void;
    public regenerate(bucketCapacity: any): void;
    public regenerate(bucketCapacity: any, Rect: Rect): void;


    public remove(obj: Object): void;


    public removeAtPoint(point: Point): void;


    public removeAtRect(rect: Rect): void;


    public search(rect: Rect): Array<any>;


    public searchWithCallback(rect: Rect, callback: Function): void;
    public searchWithCallback(rect: Rect, callback: Function, data: Object): void;


    public traverse(callback: Function): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bucketCapacity: number;
    static objects: Array<any>;
    static root: QuadTreeNode;
}
