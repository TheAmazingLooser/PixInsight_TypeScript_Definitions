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
    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public activateWindow(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public adjustToContents(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public bringToFront(): void;

    /**
    DESCRIPTION
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public childByPos(Point: Point): Control;

    /**
    DESCRIPTION
    @param x: int
    @param y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public childByPos(x: number, y: number): Control;

    /**
    DESCRIPTION
    @param Control: Control
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public controlToLocal(Control: Control, Point: Point): Point;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public ensureLayoutUpdated(): void;

    /**
    DESCRIPTION
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public globalToLocal(Point: Point): Point;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hide(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hideAlias(): void;

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
	public isAncestorOf(Control: Control): boolean;

    /**
    DESCRIPTION
    @param Control: Control
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public localToControl(Control: Control, Point: Point): Point;

    /**
    DESCRIPTION
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public localToGlobal(Point: Point): Point;

    /**
    DESCRIPTION
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public localToParent(Point: Point): Point;

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
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public move(Point: Point): void;

    /**
    DESCRIPTION
    @param x: int
    @param y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public move(x: number, y: number): void;

    /**
    DESCRIPTION
    @param Point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public parentToLocal(Point: Point): Point;

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
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public render(): Bitmap;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public repaint(): void;

    /**
    DESCRIPTION
    @param Rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public repaint(Rect: Rect): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public repaint(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public resize(w: number, h: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public restyle(): void;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scaledResource(filePath: string): string;

    /**
    DESCRIPTION
    @param cssCode: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scaledStyleSheet(cssCode: string): string;
    /**
    DESCRIPTION
    @param cssCode: String
    @param fontDPI: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scaledStyleSheet(cssCode: string, fontDPI?: number /* 0 */): string;

    /**
    DESCRIPTION
    @param d: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scroll(d: Point): void;

    /**
    DESCRIPTION
    @param dx: int
    @param dy: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scroll(dx: number, dy: number): void;

    /**
    DESCRIPTION
    @param d: Point
    @param Rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scroll(d: Point, Rect: Rect): void;

    /**
    DESCRIPTION
    @param dx: int
    @param dy: int
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public scroll(dx: number, dy: number, x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public sendToBack(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setCursorToParent(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFixedHeight(): void;
    /**
    DESCRIPTION
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFixedHeight(h?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFixedSize(): void;
    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFixedSize(w: number, h: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFixedWidth(): void;
    /**
    DESCRIPTION
    @param w: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFixedWidth(w?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMaxHeight(): void;
    /**
    DESCRIPTION
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMaxHeight(h?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMaxSize(): void;
    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMaxSize(w: number, h: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMaxWidth(): void;
    /**
    DESCRIPTION
    @param w: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMaxWidth(w?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinHeight(): void;
    /**
    DESCRIPTION
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinHeight(h?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinSize(): void;
    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinSize(w: number, h: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinWidth(): void;
    /**
    DESCRIPTION
    @param w: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinWidth(w?: number): void;

    /**
    DESCRIPTION
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledFixedHeight(h: number): void;

    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledFixedSize(w: number, h: number): void;

    /**
    DESCRIPTION
    @param w: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledFixedWidth(w: number): void;

    /**
    DESCRIPTION
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledMaxHeight(h: number): void;

    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledMaxSize(w: number, h: number): void;

    /**
    DESCRIPTION
    @param w: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledMaxWidth(w: number): void;

    /**
    DESCRIPTION
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledMinHeight(h: number): void;

    /**
    DESCRIPTION
    @param w: int
    @param h: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledMinSize(w: number, h: number): void;

    /**
    DESCRIPTION
    @param w: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setScaledMinWidth(w: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setVariableHeight(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setVariableSize(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setVariableWidth(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public show(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public showAlias(): void;

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
	public stackUnder(Control: Control): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public update(): void;

    /**
    DESCRIPTION
    @param Rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public update(Rect: Rect): void;

    /**
    DESCRIPTION
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
