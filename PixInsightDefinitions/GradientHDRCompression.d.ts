//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GradientHDRCompression extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bPreserveColor: boolean;
    bRescale01: boolean;
    expGradient: number;
    logMaxGradient: number;
    logMinGradient: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GradientHDRCompression: GradientHDRCompression);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static bPreserveColor: boolean;
    static bRescale01: boolean;
    static expGradient: number;
    static logMaxGradient: number;
    static logMinGradient: number;
}
