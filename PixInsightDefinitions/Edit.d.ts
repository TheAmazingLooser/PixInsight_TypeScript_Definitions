//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Edit extends Frame {


    //-------------------------
    //-------Properties--------
    //-------------------------
    caretPosition: number;
    hasSelection: boolean;
    isValid: boolean;
    maxLength: number;
    modified: boolean;
    passwordMode: boolean;
    readOnly: boolean;
    rightAlignment: boolean;
    selectedText: string;
    selectionEnd: number;
    selectionStart: number;
    text: string;
    utf8: ByteArray;
    validatingRegExp: string;


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
    static caretPosition: number;
    static hasSelection: boolean;
    static isValid: boolean;
    static maxLength: number;
    static modified: boolean;
    static passwordMode: boolean;
    static readOnly: boolean;
    static rightAlignment: boolean;
    static selectedText: string;
    static selectionEnd: number;
    static selectionStart: number;
    static text: string;
    static utf8: ByteArray;
    static validatingRegExp: string;
}
