//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class UnsharpMask extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    linear: boolean;
    outputDeringingMaps: boolean;
    rangeHigh: number;
    rangeLow: number;
    sigma: number;
    useLuminance: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(UnsharpMask: UnsharpMask);


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
    static deringing: boolean;
    static deringingBright: number;
    static deringingDark: number;
    static linear: boolean;
    static outputDeringingMaps: boolean;
    static rangeHigh: number;
    static rangeLow: number;
    static sigma: number;
    static useLuminance: boolean;
}
