//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RGBWorkingSpace extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    applyGlobalRGBWS: boolean;
    channels: Array;
    gamma: number;
    sRGBGamma: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(RGBWorkingSpace?: RGBWorkingSpace);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static applyGlobalRGBWS: boolean;
    static channels: Array;
    static gamma: number;
    static sRGBGamma: boolean;
}
