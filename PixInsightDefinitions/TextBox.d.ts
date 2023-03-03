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
    //-----event-handlers------
    //-------------------------
    public onCaretPositionUpdated: () => void;
    public onSelectionUpdated: () => void;
    public onTextUpdated: () => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: TextBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
