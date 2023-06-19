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
    @param text: String

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
    @param text: String
    @param icon: Bitmap|String

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
    @param index: int

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
    @param index: int

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
    @param text: String

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
    @param text: String
    @param fromIdx: int = 0
    @param exactMatch: Boolean = false
    @param caseSensitive: Boolean = false

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
    @param index: int
    @param text: String

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
    @param index: int
    @param text: String
    @param icon: Bitmap|String

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
    @param index: int

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
    @param index: int

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
    @param index: int

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
    @param index: int
    @param Bitmap: Bitmap | string

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
    @param index: int
    @param string: string

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
