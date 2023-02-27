//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SplitCFA extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    outputDir: string;
    outputSubDirCFA: boolean;
    outputTree: boolean;
    outputViewId0: string;
    outputViewId1: string;
    outputViewId2: string;
    outputViewId3: string;
    overwrite: boolean;
    postfix: string;
    prefix: string;
    targetFrames: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SplitCFA?: SplitCFA);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static outputDir: string;
    static outputSubDirCFA: boolean;
    static outputTree: boolean;
    static outputViewId0: string;
    static outputViewId1: string;
    static outputViewId2: string;
    static outputViewId3: string;
    static overwrite: boolean;
    static postfix: string;
    static prefix: string;
    static targetFrames: Array<any>;


    //-------------------------
    //--------constants--------
    //-------------------------
}
