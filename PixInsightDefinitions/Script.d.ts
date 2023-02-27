//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Script extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    filePath: string;
    md5sum: string;
    parameters: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Script?: Script);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static filePath: string;
    static md5sum: string;
    static parameters: Array<any>;


    //-------------------------
    //--------constants--------
    //-------------------------
}
