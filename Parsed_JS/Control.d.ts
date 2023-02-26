//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alternateCanvasColor: number;
    availableScreenRect: Rect;
    backgroundColor: number;
    boundsRect: Rect;
    buttonColor: number;
    buttonTextColor: number;
    canUpdate: boolean;
    canvasColor: number;
    childToFocus: Control;
    childrenRect: Rect;
    clientRect: Rect;
    cursor: Cursor;
    dialog: Dialog;
    displayPixelRatio: number;
    enabled: boolean;
    focusStyle: number;
    focusedChild: Control;
    font: Font;
    foregroundColor: number;
    frameRect: Rect;
    hasFocus: boolean;
    height: number;
    highlightColor: number;
    highlightedTextColor: number;
    isActiveWindow: boolean;
    isDialog: boolean;
    isFixedHeight: boolean;
    isFixedWidth: boolean;
    isMaximized: boolean;
    isMinimized: boolean;
    isModal: boolean;
    isUnderMouse: boolean;
    isWindow: boolean;
    maxHeight: number;
    maxWidth: number;
    minHeight: number;
    minWidth: number;
    mouseTracking: boolean;
    nextSiblingToFocus: Control;
    objectId: string;
    parent: Control;
    position: Point;
    resourcePixelRatio: number;
    scaledMaxHeight: number;
    scaledMaxWidth: number;
    scaledMinHeight: number;
    scaledMinWidth: number;
    screenRect: Rect;
    sizer: Sizer;
    smartMinHeight: number;
    smartMinWidth: number;
    styleSheet: string;
    textColor: number;
    toolTip: string;
    visible: boolean;
    visibleRect: Rect;
    width: number;
    window: Control;
    windowOpacity: number;
    windowTitle: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public activateWindow(): void;

    public adjustToContents(): void;

    public bringToFront(): void;

    public childByPos(Point: Point): Control;

    public childByPos(x: number, y: number): Control;

    public controlToLocal(Control: any, Point: Point): Point;

    public ensureLayoutUpdated(): void;

    public globalToLocal(Point: Point): Point;

    public hide(): void;

    public hideAlias(): void;

    public isAncestorOf(Control: Control): boolean;

    public localToControl(Control: any, Point: Point): Point;

    public localToGlobal(Point: Point): Point;

    public localToParent(Point: Point): Point;

    public logicalPixelsToPhysical(size: number): number;

    public move(Point: Point): void;

    public move(x: number, y: number): void;

    public parentToLocal(Point: Point): Point;

    public physicalPixelsToLogical(size: number): number;

    public render(): Bitmap;

    public repaint(): void;

    public repaint(Rect: Rect): void;

    public repaint(x0: number, y0: number, x1: number, y1: number): void;

    public resize(w: number, h: number): void;

    public restyle(): void;

    public scaledResource(filePath: string): string;

    public scaledStyleSheet(cssCode: string, fontDPI?: number /* 0*/): string;

    public scroll(d: Point): void;

    public scroll(dx: number, dy: number): void;

    public scroll(d: Point, Rect: Rect): void;

    public scroll(dx: number, dy: number, x0: number, y0: number, x1: number, y1: number): void;

    public sendToBack(): void;

    public setCursorToParent(): void;

    public setFixedHeight(h?: number): void;

    public setFixedSize(w?: number, h: number): void;

    public setFixedWidth(w?: number): void;

    public setMaxHeight(h?: number): void;

    public setMaxSize(w?: number, h: number): void;

    public setMaxWidth(w?: number): void;

    public setMinHeight(h?: number): void;

    public setMinSize(w?: number, h: number): void;

    public setMinWidth(w?: number): void;

    public setScaledFixedHeight(h: number): void;

    public setScaledFixedSize(w: number, h: number): void;

    public setScaledFixedWidth(w: number): void;

    public setScaledMaxHeight(h: number): void;

    public setScaledMaxSize(w: number, h: number): void;

    public setScaledMaxWidth(w: number): void;

    public setScaledMinHeight(h: number): void;

    public setScaledMinSize(w: number, h: number): void;

    public setScaledMinWidth(w: number): void;

    public setVariableHeight(): void;

    public setVariableSize(): void;

    public setVariableWidth(): void;

    public show(): void;

    public showAlias(): void;

    public stackUnder(Control: Control): void;

    public update(): void;

    public update(Rect: Rect): void;

    public update(x0: number, y0: number, x1: number, y1: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static alternateCanvasColor: number;
    static availableScreenRect: Rect;
    static backgroundColor: number;
    static boundsRect: Rect;
    static buttonColor: number;
    static buttonTextColor: number;
    static canUpdate: boolean;
    static canvasColor: number;
    static childToFocus: Control;
    static childrenRect: Rect;
    static clientRect: Rect;
    static cursor: Cursor;
    static dialog: Dialog;
    static displayPixelRatio: number;
    static enabled: boolean;
    static focusStyle: number;
    static focusedChild: Control;
    static font: Font;
    static foregroundColor: number;
    static frameRect: Rect;
    static hasFocus: boolean;
    static height: number;
    static highlightColor: number;
    static highlightedTextColor: number;
    static isActiveWindow: boolean;
    static isDialog: boolean;
    static isFixedHeight: boolean;
    static isFixedWidth: boolean;
    static isMaximized: boolean;
    static isMinimized: boolean;
    static isModal: boolean;
    static isUnderMouse: boolean;
    static isWindow: boolean;
    static maxHeight: number;
    static maxWidth: number;
    static minHeight: number;
    static minWidth: number;
    static mouseTracking: boolean;
    static nextSiblingToFocus: Control;
    static objectId: string;
    static parent: Control;
    static position: Point;
    static resourcePixelRatio: number;
    static scaledMaxHeight: number;
    static scaledMaxWidth: number;
    static scaledMinHeight: number;
    static scaledMinWidth: number;
    static screenRect: Rect;
    static sizer: Sizer;
    static smartMinHeight: number;
    static smartMinWidth: number;
    static styleSheet: string;
    static textColor: number;
    static toolTip: string;
    static visible: boolean;
    static visibleRect: Rect;
    static width: number;
    static window: Control;
    static windowOpacity: number;
    static windowTitle: string;
}
