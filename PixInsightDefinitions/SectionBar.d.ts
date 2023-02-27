//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SectionBar extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checkBox: CheckBox;
    section: Control;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control, title?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------












    public setSection(section: Control): void;


    public setTitle(title: string): void;










    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static checkBox: CheckBox;
    static section: Control;


    //-------------------------
    //--------constants--------
    //-------------------------
}
