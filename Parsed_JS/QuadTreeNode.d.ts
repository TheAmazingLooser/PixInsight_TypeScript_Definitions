//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class QuadTreeNode {


    //-------------------------
    //-------Properties--------
    //-------------------------
    index: Array;
    ne: QuadTreeNode;
    nw: QuadTreeNode;
    rect: Rect;
    se: QuadTreeNode;
    sw: QuadTreeNode;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(rect?: Rect, index?: Array);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public includes(point: Point): boolean;

    public intersects(rect: Rect): boolean;

    public isLeaf(): boolean;

    public neRect(): Rect;

    public nwRect(): Rect;

    public seRect(): Rect;

    public swRect(): Rect;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static index: Array;
    static ne: QuadTreeNode;
    static nw: QuadTreeNode;
    static rect: Rect;
    static se: QuadTreeNode;
    static sw: QuadTreeNode;
}
