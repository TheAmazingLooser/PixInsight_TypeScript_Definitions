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
    //----static Properties----
    //-------------------------
    static margin: number;
    static text: string;
    static textAlignment: number;
    static useRichText: boolean;
    static wordWrapping: boolean;
}
