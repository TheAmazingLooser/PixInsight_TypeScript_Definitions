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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: SVG;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
