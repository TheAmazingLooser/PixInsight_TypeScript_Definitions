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
    @param fnt: Font

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
    @param stdFamiliy: int

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
    @param stdFamiliy: int
    @param size: Number
    @param unit: String = "pt"

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
    @param family: String

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
    @param family: String
    @param size: Number
    @param unit: String = "pt"

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
    @param s: String

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
    @param ch: int

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
    @param s: String

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
    @param s: String

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
    @param writingSystem: int

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
    @param family: String

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
    @param family: String

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
