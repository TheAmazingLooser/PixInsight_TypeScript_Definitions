//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CheckBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checked: boolean;
    state: number;
    text: string;
    tristate: boolean;


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
    static checked: boolean;
    static state: number;
    static text: string;
    static tristate: boolean;
}
