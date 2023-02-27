//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ToolButton extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checkable: boolean;
    checked: boolean;
    icon: Bitmap;
    iconHeight: number;
    iconWidth: number;
    pushed: boolean;
    state: number;
    text: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static checkable: boolean;
    static checked: boolean;
    static icon: Bitmap;
    static iconHeight: number;
    static iconWidth: number;
    static pushed: boolean;
    static state: number;
    static text: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
