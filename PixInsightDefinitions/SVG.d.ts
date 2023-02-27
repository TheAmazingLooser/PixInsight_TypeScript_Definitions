//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SVG {


    //-------------------------
    //-------Properties--------
    //-------------------------
    description: string;
    filePath: string;
    height: number;
    isPainting: boolean;
    outputData: ByteArray;
    resolution: number;
    size: Rect;
    title: string;
    viewBox: Rect;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(filePath: string, width?: number, height?: number);
    constructor(width?: number, height?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static description: string;
    static filePath: string;
    static height: number;
    static isPainting: boolean;
    static outputData: ByteArray;
    static resolution: number;
    static size: Rect;
    static title: string;
    static viewBox: Rect;
    static width: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
