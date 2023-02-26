//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Error {


    //-------------------------
    //-------Properties--------
    //-------------------------
    message: string;
    name: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(message?: string, fileName?: string, lineNumber?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public propertyIsEnumerable(propertyName: string): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static message: string;
    static name: string;
}
