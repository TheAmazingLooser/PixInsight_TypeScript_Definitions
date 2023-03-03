//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Label extends Frame {


    //-------------------------
    //-------Properties--------
    //-------------------------
    margin: number;
    text: string;
    textAlignment: number;
    useRichText: boolean;
    wordWrapping: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public clear(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Label;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
