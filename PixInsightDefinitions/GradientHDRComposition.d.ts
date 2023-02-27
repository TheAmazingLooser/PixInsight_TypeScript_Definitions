//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GradientHDRComposition extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bKeepLog: boolean;
    bNegativeBias: boolean;
    dLogBias: number;
    generateMask: boolean;
    targetFrames: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GradientHDRComposition: GradientHDRComposition);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bKeepLog: boolean;
    static bNegativeBias: boolean;
    static dLogBias: number;
    static generateMask: boolean;
    static targetFrames: Array<any>;
}
