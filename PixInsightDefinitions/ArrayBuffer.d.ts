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
    public slice(begin: number): ArrayBuffer;
    public slice(begin: number, end?: number): ArrayBuffer;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ArrayBuffer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
