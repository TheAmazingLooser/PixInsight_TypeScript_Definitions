//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TextBox extends Frame {


    //-------------------------
    //-------Properties--------
    //-------------------------
    caretPosition: number;
    hasSelection: boolean;
    readOnly: boolean;
    selectedText: string;
    selectionEnd: number;
    selectionStart: number;
    text: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------






    public insert(text: string): void;








    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static caretPosition: number;
    static hasSelection: boolean;
    static readOnly: boolean;
    static selectedText: string;
    static selectionEnd: number;
    static selectionStart: number;
    static text: string;
}
