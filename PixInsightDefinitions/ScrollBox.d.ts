//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ScrollBox extends Frame {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoScroll: boolean;
    horizontalAutoScroll: boolean;
    horizontalScrollBarVisible: boolean;
    horizontalScrollPosition: number;
    horizontalTracking: boolean;
    lineHeight: number;
    lineWidth: number;
    maxHorizontalScrollPosition: number;
    maxVerticalScrollPosition: number;
    minHorizontalScrollPosition: number;
    minVerticalScrollPosition: number;
    pageHeight: number;
    pageWidth: number;
    scrollBarsVisible: boolean;
    scrollPosition: Point;
    tracking: boolean;
    verticalAutoScroll: boolean;
    verticalScrollBarVisible: boolean;
    verticalScrollPosition: number;
    verticalTracking: boolean;
    viewport: Control;


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
	public hideScrollBars(): void;
    /**
    DESCRIPTION
    @param hide: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hideScrollBars(hide?: boolean /* true */): void;

    /**
    DESCRIPTION
    @param hideHorz: Boolean
    @param hideVert: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hideScrollBars(hideHorz: boolean, hideVert: boolean): void;

    /**
    DESCRIPTION
    @param min: int
    @param max: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setHorizontalScrollRange(min: number, max: number): void;

    /**
    DESCRIPTION
    @param x: int
    @param y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScrollPosition(x: number, y: number): void;

    /**
    DESCRIPTION
    @param pos: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScrollPosition(pos: Point): void;

    /**
    DESCRIPTION
    @param min: int
    @param max: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setVerticalScrollRange(min: number, max: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public showScrollBars(): void;
    /**
    DESCRIPTION
    @param show: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public showScrollBars(show?: boolean /* true */): void;

    /**
    DESCRIPTION
    @param showHorz: Boolean
    @param showVert: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public showScrollBars(showHorz: boolean, showVert: boolean): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onHorizontalScrollPosUpdated: (newPos: number) => void;
    public onHorizontalScrollRangeUpdated: (minPos: number, maxPos: number) => void;
    public onVerticalScrollPosUpdated: (newPos: number) => void;
    public onVerticalScrollRangeUpdated: (minPos: number, maxPos: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ScrollBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
