//-------------------------
//--------Constants--------
//-------------------------
/* declare const AbsoluteCentimeters: Crop.prototype.AbsoluteCentimeters;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AbsoluteInches: Crop.prototype.AbsoluteInches;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AbsolutePixels: Crop.prototype.AbsolutePixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RelativeMargins: Crop.prototype.RelativeMargins;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(Crop: Crop);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
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
}
