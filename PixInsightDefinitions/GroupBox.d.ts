//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GroupBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checked: boolean;
    title: string;
    titleCheckBox: boolean;


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
    //-----event-handlers------
    //-------------------------
    public onCheck: (checked: boolean) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static checked: boolean;
    static title: string;
    static titleCheckBox: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
