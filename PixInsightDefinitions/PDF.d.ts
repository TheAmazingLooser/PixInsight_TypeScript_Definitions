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
    constructor(filePath: string);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bottomMargin: number;
    static creator: string;
    static filePath: string;
    static fullRect: Rect;
    static isPainting: boolean;
    static landscape: boolean;
    static leftMargin: number;
    static margins: Rect;
    static maxMargins: Rect;
    static minMargins: Rect;
    static outputData: ByteArray;
    static pageSize: Rect;
    static paintRect: Rect;
    static portrait: boolean;
    static resolution: number;
    static rightMargin: number;
    static title: string;
    static topMargin: number;
}
