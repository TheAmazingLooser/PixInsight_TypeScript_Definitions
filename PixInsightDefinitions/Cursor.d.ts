//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Cursor {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bitmap: Bitmap;
    hotSpot: Point;
    hotX: number;
    hotY: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(shape?: number);
    constructor(param_0: any, hotSpot?: Point);
    constructor(param_0: any, hotX: number, hotY: number);
    constructor(csr: Cursor);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(csr: Cursor): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Cursor;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
