//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TabBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    currentPageControl: Control;
    currentPageIndex: number;
    leftControl: Control;
    numberOfPages: number;
    rightControl: Control;
    tabPosition: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param page: Control
    @param label: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addPage(page: Control, label: string): void;
    /**
    DESCRIPTION
    @param page: Control
    @param label: String
    @param icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addPage(page: Control, label: string, icon?: Bitmap | string): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public clearControls(): void;
    /**
    DESCRIPTION
    @param clearLeft: Boolean
    @param clearRight: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public clearControls(clearLeft: boolean, clearRight: boolean): void;

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
	public clearPageIcon(index: number): void;

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
	public disablePage(index: number): void;
    /**
    DESCRIPTION
    @param index: int
    @param disable: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public disablePage(index: number, disable?: boolean /* true */): void;

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
	public enablePage(index: number): void;
    /**
    DESCRIPTION
    @param index: int
    @param enable: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public enablePage(index: number, enable?: boolean /* true */): void;

    /**
    DESCRIPTION
    @param index: int
    @param page: Control
    @param label: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertPage(index: number, page: Control, label: string): void;
    /**
    DESCRIPTION
    @param index: int
    @param page: Control
    @param label: String
    @param icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertPage(index: number, page: Control, label: string, icon?: Bitmap | string): void;

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
	public isPageEnabled(index: number): boolean;

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
	public pageControlByIndex(index: number): Control;

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
	public pageIcon(index: number): Bitmap;

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
	public pageLabel(index: number): string;

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
	public pageToolTip(index: number): string;

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
	public removePage(index: number): void;

    /**
    DESCRIPTION
    @param index: int
    @param icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setPageIcon(index: number, icon: Bitmap | string): void;

    /**
    DESCRIPTION
    @param index: int
    @param label: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setPageLabel(index: number, label: string): void;

    /**
    DESCRIPTION
    @param index: int
    @param tip: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setPageToolTip(index: number, tip: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onPageSelected: (pageIndex: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: TabBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
