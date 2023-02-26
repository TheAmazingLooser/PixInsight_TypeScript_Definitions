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
    margin: unsigned;
    numberOfItems: unsigned;
    parentControl: Control;
    scaledMargin: unsigned;
    scaledSpacing: unsigned;
    spacing: unsigned;
    unscaledMargin: unsigned;
    unscaledSpacing: unsigned;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(vertical?: boolean);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public add(Control: any, stretchFactor?: number, alignment?: number): void;

    public add(Sizer: any, stretchFactor?: number): void;

    public addScaledSpacing(size: number): void;

    public addSpacing(size: number, autoScaling?: boolean /* true*/): void;

    public addStretch(stretchFactor?: number): void;

    public addUnscaledSpacing(size: number): void;

    public has(Control: Control): boolean;

    public has(Sizer: Sizer): boolean;

    public indexOf(Control: Control): number;

    public indexOf(Sizer: Sizer): number;

    public insert(index: number, Control: any, stretchFactor?: number, alignment?: number): void;

    public insert(index: number, Sizer: any, stretchFactor?: number): void;

    public insertScaledSpacing(index: number, size: number): void;

    public insertSpacing(index: number, size: number, autoScaling?: boolean /* true*/): void;

    public insertStretch(index: number, stretchFactor?: number): void;

    public insertUnscaledSpacing(index: number, size: number): void;

    public logicalPixelsToPhysical(size: number): number;

    public physicalPixelsToLogical(size: number): number;

    public remove(Control: Control): void;

    public remove(Sizer: Sizer): void;

    public setAlignment(Control: any, alignment: number): void;

    public setAlignment(Sizer: any, alignment: number): void;

    public setStretchFactor(Control: any, stretch: number): void;

    public setStretchFactor(Sizer: any, stretch: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static displayPixelRatio: number;
    static isHorizontal: boolean;
    static isVertical: boolean;
    static margin: unsigned;
    static numberOfItems: unsigned;
    static parentControl: Control;
    static scaledMargin: unsigned;
    static scaledSpacing: unsigned;
    static spacing: unsigned;
    static unscaledMargin: unsigned;
    static unscaledSpacing: unsigned;
}
