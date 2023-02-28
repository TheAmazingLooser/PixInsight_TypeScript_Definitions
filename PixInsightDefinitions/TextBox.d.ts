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
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public clear(): void;

    public end(): void;

    public home(): void;

    public insert(text: string): void;

    public selectAll(): void;

    public unselect(): void;



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


    //-------------------------
    //--------constants--------
    //-------------------------
}
