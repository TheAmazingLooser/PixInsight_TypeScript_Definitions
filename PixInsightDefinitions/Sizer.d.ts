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
    public add(Control: Control): void;
    public add(Control: Control, stretchFactor: number): void;
    public add(Control: Control, stretchFactor: number, alignment: number): void;

    public add(Sizer: Sizer): void;
    public add(Sizer: Sizer, stretchFactor: number): void;

    public addScaledSpacing(size: number): void;

    public addSpacing(size: number): void;
    public addSpacing(size: number, autoScaling: boolean /* true*/): void;

    public addStretch(): void;
    public addStretch(stretchFactor: number): void;

    public addUnscaledSpacing(size: number): void;

    public has(Control: Control): boolean;

    public has(Sizer: Sizer): boolean;

    public indexOf(Control: Control): number;

    public indexOf(Sizer: Sizer): number;

    public insert(index: number, Control: Control): void;
    public insert(index: number, Control: Control, stretchFactor: number): void;
    public insert(index: number, Control: Control, stretchFactor: number, alignment: number): void;

    public insert(index: number, Sizer: Sizer): void;
    public insert(index: number, Sizer: Sizer, stretchFactor: number): void;

    public insertScaledSpacing(index: number, size: number): void;

    public insertSpacing(index: number, size: number): void;
    public insertSpacing(index: number, size: number, autoScaling: boolean /* true*/): void;

    public insertStretch(index: number): void;
    public insertStretch(index: number, stretchFactor: number): void;

    public insertUnscaledSpacing(index: number, size: number): void;

    public logicalPixelsToPhysical(size: number): number;

    public physicalPixelsToLogical(size: number): number;

    public remove(Control: Control): void;

    public remove(Sizer: Sizer): void;

    public setAlignment(Control: Control, alignment: number): void;

    public setAlignment(Sizer: Sizer, alignment: number): void;

    public setStretchFactor(Control: Control, stretch: number): void;

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
    static displayPixelRatio: number;
    static isHorizontal: boolean;
    static isVertical: boolean;
    static margin: number /* unsigned */;
    static numberOfItems: number /* unsigned */;
    static parentControl: Control;
    static scaledMargin: number /* unsigned */;
    static scaledSpacing: number /* unsigned */;
    static spacing: number /* unsigned */;
    static unscaledMargin: number /* unsigned */;
    static unscaledSpacing: number /* unsigned */;


    //-------------------------
    //--------constants--------
    //-------------------------
}
