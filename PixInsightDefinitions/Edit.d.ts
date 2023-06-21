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
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public clear(): void;

    public end(): void;

    public home(): void;

    public selectAll(): void;

    public unselect(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onCaretPositionUpdated: (oldPos: number, newPos: number) => void;
    public onEditCompleted: () => void;
    public onReturnPressed: () => void;
    public onSelectionUpdated: (start: number, end: number) => void;
    public onTextUpdated: (text: string) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Edit;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
