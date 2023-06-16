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
    __base__: any;
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

    public controlToLocal(Control: Control, Point: Point): Point;

    public ensureLayoutUpdated(): void;

    public globalToLocal(Point: Point): Point;

    public hide(): void;

    public hideAlias(): void;

    public isAncestorOf(Control: Control): boolean;

    public localToControl(Control: Control, Point: Point): Point;

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

    public scaledStyleSheet(cssCode: string): string;
    public scaledStyleSheet(cssCode: string, fontDPI: number /* 0*/): string;

    public scroll(d: Point): void;

    public scroll(dx: number, dy: number): void;

    public scroll(d: Point, Rect: Rect): void;

    public scroll(dx: number, dy: number, x0: number, y0: number, x1: number, y1: number): void;

    public sendToBack(): void;

    public setCursorToParent(): void;

    public setFixedHeight(): void;
    public setFixedHeight(h: number): void;

    public setFixedSize(): void;
    public setFixedSize(w: number, h: number): void;

    public setFixedWidth(): void;
    public setFixedWidth(w: number): void;

    public setMaxHeight(): void;
    public setMaxHeight(h: number): void;

    public setMaxSize(): void;
    public setMaxSize(w: number, h: number): void;

    public setMaxWidth(): void;
    public setMaxWidth(w: number): void;

    public setMinHeight(): void;
    public setMinHeight(h: number): void;

    public setMinSize(): void;
    public setMinSize(w: number, h: number): void;

    public setMinWidth(): void;
    public setMinWidth(w: number): void;

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
    //-----event-handlers------
    //-------------------------
    public onChildCreate: (child: Control) => void;
    public onChildDestroy: (child: Control) => void;
    public onClose: () => Boolean;
    public onDestroy: () => void;
    public onEnter: () => Boolean|void;
    public onGetFocus: () => Boolean|void;
    public onHide: () => void;
    public onKeyPress: (keyCode: number, modifiers: number) => Boolean|void;
    public onKeyRelease: (keyCode: number, modifiers: number) => Boolean|void;
    public onLeave: () => Boolean|void;
    public onLoseFocus: () => Boolean|void;
    public onMouseDoubleClick: (x: number, y: number, buttonState: number, modifiers: number) => Boolean|void;
    public onMouseMove: (x: number, y: number, buttonState: number, modifiers: number) => Boolean|void;
    public onMousePress: (x: number, y: number, button: number, buttonState: number, modifiers: number) => Boolean|void;
    public onMouseRelease: (x: number, y: number, button: number, buttonState: number, modifiers: number) => Boolean|void;
    public onMouseWheel: (x: number, y: number, delta: number, buttonState: number, modifiers: number) => Boolean|void;
    public onMove: (xNew: number, yNew: number, xOld: number, yOld: number) => Boolean|void;
    public onPaint: (x0: number, y0: number, x1: number, y1: number) => Boolean|void;
    public onResize: (wNew: number, hNew: number, wOld: number, hOld: number) => Boolean|void;
    public onShow: () => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Control;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
