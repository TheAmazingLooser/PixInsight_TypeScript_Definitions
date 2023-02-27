//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PushButton extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    defaultButton: boolean;
    icon: Bitmap;
    iconHeight: number;
    iconWidth: number;
    pushed: boolean;
    state: number;
    text: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static defaultButton: boolean;
    static icon: Bitmap;
    static iconHeight: number;
    static iconWidth: number;
    static pushed: boolean;
    static state: number;
    static text: string;
}
