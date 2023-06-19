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


    Control: Control

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


    Control: Control
    stretchFactor: int
    alignment: int

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


    Sizer: Sizer

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


    Sizer: Sizer
    stretchFactor: int

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


    size: int

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


    size: int

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


    size: int
    autoScaling: Boolean = true

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


    stretchFactor: int

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


    size: int

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


    Control: Control

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


    Sizer: Sizer

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


    Control: Control

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


    Sizer: Sizer

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


    index: int
    Control: Control

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


    index: int
    Control: Control
    stretchFactor: int
    alignment: int

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


    index: int
    Sizer: Sizer

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


    index: int
    Sizer: Sizer
    stretchFactor: int

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


    index: int
    size: int

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


    index: int
    size: int

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


    index: int
    size: int
    autoScaling: Boolean = true

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


    index: int

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


    index: int
    stretchFactor: int

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


    index: int
    size: int

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


    size: Number

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


    size: Number

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


    Control: Control

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


    Sizer: Sizer

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


    Control: Control
    alignment: int

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


    Sizer: Sizer
    alignment: int

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


    Control: Control
    stretch: int

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


    Sizer: Sizer
    stretch: int

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
