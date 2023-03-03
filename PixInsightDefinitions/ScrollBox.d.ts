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
    public hideScrollBars(): void;
    public hideScrollBars(hide: boolean /* true*/): void;

    public hideScrollBars(hideHorz: boolean, hideVert: boolean): void;

    public setHorizontalScrollRange(min: number, max: number): void;

    public setScrollPosition(x: number, y: number): void;

    public setScrollPosition(pos: Point): void;

    public setVerticalScrollRange(min: number, max: number): void;

    public showScrollBars(): void;
    public showScrollBars(show: boolean /* true*/): void;

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
