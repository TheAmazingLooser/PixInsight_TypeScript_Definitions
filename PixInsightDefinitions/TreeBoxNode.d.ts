//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TreeBoxNode {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checkable: boolean;
    checked: boolean;
    enabled: boolean;
    expanded: boolean;
    numberOfChildren: number;
    parent: TreeBoxNode;
    parentTree: TreeBox;
    selectable: boolean;
    selected: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(TreeBox: any, idx?: number);
    constructor(TreeBoxNode: any, idx?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    node: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(node: TreeBoxNode): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public alignment(col: number): number;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public backgroundColor(col: number): number;

    /**
    DESCRIPTION


    index: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public child(index: number): TreeBoxNode;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public clearIcon(col: number): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public font(col: number): Font;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public icon(col: number): Bitmap;

    /**
    DESCRIPTION


    index: int
    node: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(index: number, node: TreeBoxNode): void;

    /**
    DESCRIPTION


    index: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(index: number): void;

    /**
    DESCRIPTION


    col: int
    align: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAlignment(col: number, align: number): void;

    /**
    DESCRIPTION


    col: int
    rgba: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setBackgroundColor(col: number, rgba: number): void;

    /**
    DESCRIPTION


    col: int
    font: Font

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setFont(col: number, font: Font): void;

    /**
    DESCRIPTION


    col: int
    icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setIcon(col: number, icon: Bitmap | string): void;

    /**
    DESCRIPTION


    col: int
    txt: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setText(col: number, txt: string): void;

    /**
    DESCRIPTION


    col: int
    rgba: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setTextColor(col: number, rgba: number): void;

    /**
    DESCRIPTION


    col: int
    tip: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setToolTip(col: number, tip: string): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public text(col: number): string;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public textColor(col: number): number;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toolTip(col: number): string;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: TreeBoxNode;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
