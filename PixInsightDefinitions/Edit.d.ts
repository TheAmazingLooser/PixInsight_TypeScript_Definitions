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
    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public clear(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public end(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public home(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public selectAll(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
