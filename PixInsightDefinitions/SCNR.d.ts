//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SCNR extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    colorToRemove: number;
    preserveLightness: boolean;
    preserveLuminance: boolean;
    protectionMethod: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SCNR?: SCNR);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amount: number;
    static colorToRemove: number;
    static preserveLightness: boolean;
    static preserveLuminance: boolean;
    static protectionMethod: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AdditiveMask;
    AverageNeutral;
    Blue;
    Green;
    MaximumMask;
    MaximumNeutral;
    MinimumNeutral;
    Red;
}
