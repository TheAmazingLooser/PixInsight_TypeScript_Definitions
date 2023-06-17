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
    public assign(fnt: Font): void;

    public assign(stdFamiliy: number): void;
    public assign(stdFamiliy: number, size: number): void;
    public assign(stdFamiliy: number, size: number, unit: string /* "pt" */): void;

    public assign(family: string): void;
    public assign(family: string, size: number): void;
    public assign(family: string, size: number, unit: string /* "pt" */): void;

    public boundingRect(s: string): Rect;

    public isCharDefined(ch: number): boolean;

    public tightBoundingRect(s: string): Rect;

    public width(s: string): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static families(): Array<any>;
    public static families(writingSystem: number): Array<any>;

    public static isFixedPitchFont(family: string): boolean;

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
