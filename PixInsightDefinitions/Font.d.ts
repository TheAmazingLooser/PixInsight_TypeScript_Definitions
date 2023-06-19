//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Font {


    //-------------------------
    //-------Properties--------
    //-------------------------
    ascent: number;
    bold: boolean;
    descent: number;
    family: string;
    fixedPitch: boolean;
    height: number;
    isExactMatch: boolean;
    italic: boolean;
    kerning: boolean;
    lineSpacing: number;
    maxWidth: number;
    overline: boolean;
    pixelSize: number;
    pointSize: number;
    stretchFactor: number;
    strikeOut: boolean;
    underline: boolean;
    unscaledPointSize: number;
    weight: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(stdFamiliy: number, size?: number, unit ?: string /*  "pt"*/);
    constructor(family: string, size?: number, unit ?: string /*  "pt"*/);
    constructor(fnt: Font);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    fnt: Font

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(fnt: Font): void;

    /**
    DESCRIPTION


    stdFamiliy: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(stdFamiliy: number): void;
    /**
    DESCRIPTION


    stdFamiliy: int
    size: Number
    unit: String = "pt"

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(stdFamiliy: number, size?: number, unit?: string /* "pt" */): void;

    /**
    DESCRIPTION


    family: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(family: string): void;
    /**
    DESCRIPTION


    family: String
    size: Number
    unit: String = "pt"

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(family: string, size?: number, unit?: string /* "pt" */): void;

    /**
    DESCRIPTION


    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public boundingRect(s: string): Rect;

    /**
    DESCRIPTION


    ch: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isCharDefined(ch: number): boolean;

    /**
    DESCRIPTION


    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public tightBoundingRect(s: string): Rect;

    /**
    DESCRIPTION


    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public width(s: string): number;



    //-------------------------
    //----static Functions-----
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
    public static families(): Array<any>;
    /**
    DESCRIPTION


    writingSystem: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static families(writingSystem?: number): Array<any>;

    /**
    DESCRIPTION


    family: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static isFixedPitchFont(family: string): boolean;

    /**
    DESCRIPTION


    family: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static isScalableFont(family: string): boolean;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Font;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
