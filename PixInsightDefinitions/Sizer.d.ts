//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Sizer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    displayPixelRatio: number;
    isHorizontal: boolean;
    isVertical: boolean;
    margin: number /* unsigned */;
    numberOfItems: number /* unsigned */;
    parentControl: Control;
    scaledMargin: number /* unsigned */;
    scaledSpacing: number /* unsigned */;
    spacing: number /* unsigned */;
    unscaledMargin: number /* unsigned */;
    unscaledSpacing: number /* unsigned */;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(vertical?: boolean);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param Control: Control

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(Control: Control): void;
    /**
    DESCRIPTION
    @param Control: Control
    @param stretchFactor: int
    @param alignment: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(Control: Control, stretchFactor?: number, alignment?: number): void;

    /**
    DESCRIPTION
    @param Sizer: Sizer

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(Sizer: Sizer): void;
    /**
    DESCRIPTION
    @param Sizer: Sizer
    @param stretchFactor: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public add(Sizer: Sizer, stretchFactor?: number): void;

    /**
    DESCRIPTION
    @param size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addScaledSpacing(size: number): void;

    /**
    DESCRIPTION
    @param size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addSpacing(size: number): void;
    /**
    DESCRIPTION
    @param size: int
    @param autoScaling: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addSpacing(size: number, autoScaling?: boolean /* true */): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addStretch(): void;
    /**
    DESCRIPTION
    @param stretchFactor: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addStretch(stretchFactor?: number): void;

    /**
    DESCRIPTION
    @param size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public addUnscaledSpacing(size: number): void;

    /**
    DESCRIPTION
    @param Control: Control

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public has(Control: Control): boolean;

    /**
    DESCRIPTION
    @param Sizer: Sizer

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public has(Sizer: Sizer): boolean;

    /**
    DESCRIPTION
    @param Control: Control

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public indexOf(Control: Control): number;

    /**
    DESCRIPTION
    @param Sizer: Sizer

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public indexOf(Sizer: Sizer): number;

    /**
    DESCRIPTION
    @param index: int
    @param Control: Control

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insert(index: number, Control: Control): void;
    /**
    DESCRIPTION
    @param index: int
    @param Control: Control
    @param stretchFactor: int
    @param alignment: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insert(index: number, Control: Control, stretchFactor?: number, alignment?: number): void;

    /**
    DESCRIPTION
    @param index: int
    @param Sizer: Sizer

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insert(index: number, Sizer: Sizer): void;
    /**
    DESCRIPTION
    @param index: int
    @param Sizer: Sizer
    @param stretchFactor: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insert(index: number, Sizer: Sizer, stretchFactor?: number): void;

    /**
    DESCRIPTION
    @param index: int
    @param size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertScaledSpacing(index: number, size: number): void;

    /**
    DESCRIPTION
    @param index: int
    @param size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertSpacing(index: number, size: number): void;
    /**
    DESCRIPTION
    @param index: int
    @param size: int
    @param autoScaling: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertSpacing(index: number, size: number, autoScaling?: boolean /* true */): void;

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
	public insertStretch(index: number): void;
    /**
    DESCRIPTION
    @param index: int
    @param stretchFactor: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertStretch(index: number, stretchFactor?: number): void;

    /**
    DESCRIPTION
    @param index: int
    @param size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public insertUnscaledSpacing(index: number, size: number): void;

    /**
    DESCRIPTION
    @param size: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public logicalPixelsToPhysical(size: number): number;

    /**
    DESCRIPTION
    @param size: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public physicalPixelsToLogical(size: number): number;

    /**
    DESCRIPTION
    @param Control: Control

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public remove(Control: Control): void;

    /**
    DESCRIPTION
    @param Sizer: Sizer

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public remove(Sizer: Sizer): void;

    /**
    DESCRIPTION
    @param Control: Control
    @param alignment: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setAlignment(Control: Control, alignment: number): void;

    /**
    DESCRIPTION
    @param Sizer: Sizer
    @param alignment: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setAlignment(Sizer: Sizer, alignment: number): void;

    /**
    DESCRIPTION
    @param Control: Control
    @param stretch: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setStretchFactor(Control: Control, stretch: number): void;

    /**
    DESCRIPTION
    @param Sizer: Sizer
    @param stretch: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setStretchFactor(Sizer: Sizer, stretch: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Sizer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
