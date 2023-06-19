//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ComboBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoCompletion: boolean;
    currentItem: number;
    editEnabled: boolean;
    editText: string;
    iconHeight: number;
    iconWidth: number;
    maxVisibleItemCount: number;
    minItemCharWidth: number;
    numberOfItems: number;
    popupToolTip: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public addItem(text: string): void;
    /**
    DESCRIPTION


    text: String
    icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public addItem(text: string, icon?: Bitmap | string): void;

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
    public clearEditText(): void;

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
    public clearItemIcon(index: number): void;

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
    public clearItemText(index: number): void;

    /**
    DESCRIPTION


    text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public findItem(text: string): number;
    /**
    DESCRIPTION


    text: String
    fromIdx: int = 0
    exactMatch: Boolean = false
    caseSensitive: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public findItem(text: string, fromIdx?: number /* 0 */, exactMatch?: boolean /* false */, caseSensitive?: boolean /* false */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hideList(): void;

    /**
    DESCRIPTION


    index: int
    text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insertItem(index: number, text: string): void;
    /**
    DESCRIPTION


    index: int
    text: String
    icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insertItem(index: number, text: string, icon?: Bitmap | string): void;

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
    public itemIcon(index: number): Bitmap;

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
    public itemText(index: number): string;

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
    public removeItem(index: number): void;

    /**
    DESCRIPTION


    index: int
    Bitmap: Bitmap | string

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setItemIcon(index: number, Bitmap: Bitmap  |  string): void;

    /**
    DESCRIPTION


    index: int
    string: string

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setItemText(index: number, string: string): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public showList(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onEditTextUpdated: (text: string) => void;
    public onItemHighlighted: (itemIndex: number) => void;
    public onItemSelected: (itemIndex: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ComboBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
