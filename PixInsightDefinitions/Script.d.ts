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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Script;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
