//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PDF {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bottomMargin: number;
    creator: string;
    filePath: string;
    fullRect: Rect;
    isPainting: boolean;
    landscape: boolean;
    leftMargin: number;
    margins: Rect;
    maxMargins: Rect;
    minMargins: Rect;
    outputData: ByteArray;
    pageSize: Rect;
    paintRect: Rect;
    portrait: boolean;
    resolution: number;
    rightMargin: number;
    title: string;
    topMargin: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(filePath?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: PDF;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
