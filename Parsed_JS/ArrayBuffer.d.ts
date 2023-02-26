//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ArrayBuffer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    byteLength: number;
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(length: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public slice(begin: number, end?: number): ArrayBuffer;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static byteLength: number;
    static length: number;
}
