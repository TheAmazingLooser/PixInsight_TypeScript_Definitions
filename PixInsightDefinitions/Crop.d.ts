//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Crop extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    blue: number;
    bottomMargin: number;
    forceResolution: boolean;
    green: number;
    leftMargin: number;
    metric: boolean;
    mode: number;
    noGUIMessages: boolean;
    red: number;
    rightMargin: number;
    topMargin: number;
    xResolution: number;
    yResolution: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Crop?: Crop);


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
    static alpha: number;
    static blue: number;
    static bottomMargin: number;
    static forceResolution: boolean;
    static green: number;
    static leftMargin: number;
    static metric: boolean;
    static mode: number;
    static noGUIMessages: boolean;
    static red: number;
    static rightMargin: number;
    static topMargin: number;
    static xResolution: number;
    static yResolution: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteCentimeters;
    AbsoluteInches;
    AbsolutePixels;
    RelativeMargins;
}
