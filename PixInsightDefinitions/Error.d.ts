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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Error;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
