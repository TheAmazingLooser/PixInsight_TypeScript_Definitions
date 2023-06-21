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
    index: Array<any>;
    ne: QuadTreeNode;
    nw: QuadTreeNode;
    rect: Rect;
    se: QuadTreeNode;
    sw: QuadTreeNode;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(rect?: Rect, index?: Array<any>);


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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
