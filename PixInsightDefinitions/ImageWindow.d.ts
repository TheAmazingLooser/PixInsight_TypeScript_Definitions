//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageWindow {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aperture: number;
    bitsPerSample: number;
    cfaType: string;
    currentView: View;
    exposure: number;
    filePath: string;
    fileURL: string;
    focalLength: number;
    geometry: Rect;
    hasMaskReferences: boolean;
    hasPendingUpdates: boolean;
    height: number;
    horizontalResolution: number;
    iconic: boolean;
    isACopy: boolean;
    isClosed: boolean;
    isComplexSample: boolean;
    isFloatSample: boolean;
    isModified: boolean;
    isNew: boolean;
    isNull: boolean;
    isWindow: boolean;
    isoSpeed: number;
    keywords: Array<any>;
    mainView: View;
    mask: ImageWindow;
    maskEnabled: boolean;
    maskInverted: boolean;
    maskMode: number;
    maskVisible: boolean;
    metricResolution: boolean;
    numberOfPreviews: number;
    position: Point;
    previews: Array<any>;
    resolution: number;
    rgbWorkingSpace: RGBColorSystem;
    selectedPreview: View;
    transparencyColor: boolean;
    transparencyMode: boolean;
    transparencyVisible: boolean;
    verticalResolution: number;
    viewportHeight: number;
    viewportPosition: Point;
    viewportUpdateRect: Rect;
    viewportWidth: number;
    visible: boolean;
    visibleViewportRect: Rect;
    width: number;
    zoomFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(ImageWindow: ImageWindow);
    constructor(width: number, height: number, numberOfChannels?: number, bitsPerSample?: number, floatSample?: boolean, color?: boolean, id?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    bmp: Bitmap

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public applyColorTransformation(bmp: Bitmap): void;
    /**
    DESCRIPTION


    bmp: Bitmap
    view: View

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public applyColorTransformation(bmp: Bitmap, view?: View): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public astrometricSolution(): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public astrometricSolutionSummary(): string;

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


    eqDeg: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public celestialToImage(eqDeg: Point): Point;

    /**
    DESCRIPTION


    alphaDeg: Number
    deltaDeg: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public celestialToImage(alphaDeg: number, deltaDeg: number): Point;

    /**
    DESCRIPTION


    eqDeg: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public celestialToImage(eqDeg: Array<any>): Array<any>;

    /**
    DESCRIPTION


    alphaDeg: Array
    deltaDeg: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public celestialToImage(alphaDeg: Array<any>, deltaDeg: Array<any>): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public clearAstrometricSolution(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public close(): number;
    /**
    DESCRIPTION


    multiple: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public close(multiple?: boolean /* false */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public commitPendingUpdates(): void;

    /**
    DESCRIPTION


    source: ImageWindow

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public copyAstrometricSolution(source: ImageWindow): void;

    /**
    DESCRIPTION


    r: Rect
    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public createPreview(r: Rect, id: string): View;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public createPreview(x0: number, y0: number, x1: number, y1: number, id: string): View;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deiconize(): void;

    /**
    DESCRIPTION


    preview: View

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deletePreview(preview: View): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deletePreviews(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fitWindow(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forceClose(): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public go(index: number): void;

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
    public iconize(): void;

    /**
    DESCRIPTION


    k: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageScalarToViewport(k: number): number;

    /**
    DESCRIPTION


    xy: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageToCelestial(xy: Point): Point;

    /**
    DESCRIPTION


    x: Number
    y: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageToCelestial(x: number, y: number): Point;

    /**
    DESCRIPTION


    xy: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageToCelestial(xy: Array<any>): Array<any>;

    /**
    DESCRIPTION


    x: Array
    y: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageToCelestial(x: Array<any>, y: Array<any>): Array<any>;

    /**
    DESCRIPTION


    p: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageToViewport(p: Point): Point;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public imageToViewport(r: Rect): Rect;

    /**
    DESCRIPTION


    mask: ImageWindow

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isMaskCompatible(mask: ImageWindow): boolean;

    /**
    DESCRIPTION


    window: ImageWindow

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isMaskOf(window: ImageWindow): boolean;

    /**
    DESCRIPTION


    view: View

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isValidView(view: View): boolean;

    /**
    DESCRIPTION


    preview: View
    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modifyPreview(preview: View, r: Rect): void;
    /**
    DESCRIPTION


    preview: View
    r: Rect
    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modifyPreview(preview: View, r: Rect, id?: string): void;

    /**
    DESCRIPTION


    preview: View
    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modifyPreview(preview: View, x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    preview: View
    x0: int
    y0: int
    x1: int
    y1: int
    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modifyPreview(preview: View, x0: number, y0: number, x1: number, y1: number, id?: string): void;

    /**
    DESCRIPTION


    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public previewById(id: string): View;

    /**
    DESCRIPTION


    preview: View

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public previewRect(preview: View): Rect;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public purge(): void;
    /**
    DESCRIPTION


    swapFiles: Boolean = true
    properties: any = true
    histograms: Boolean = true
    statistics: Boolean = true
    notify: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public purge(swapFiles?: boolean /* true */, properties?: any /* true */, histograms?: boolean /* true */, statistics?: boolean /* true */, notify?: boolean /* true */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redo(): void;
    /**
    DESCRIPTION


    n: uint = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redo(n?: number /* 1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redoAll(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public regenerate(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public regenerateAstrometricSolution(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public removeMask(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public removeMaskReferences(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public save(): boolean;
    /**
    DESCRIPTION


    allowMessages: Boolean = true
    strict: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public save(allowMessages?: boolean /* true */, strict?: boolean /* true */): boolean;

    /**
    DESCRIPTION


    filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public saveAs(filePath: string): boolean;
    /**
    DESCRIPTION


    filePath: String
    queryOptions: Boolean = true
    allowMessages: Boolean = true
    strict: Boolean = true
    verifyOverwrite: Boolean = true
    formatHints: String = ''

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public saveAs(filePath: string, queryOptions?: boolean /* true */, allowMessages?: boolean /* true */, strict?: boolean /* true */, verifyOverwrite?: boolean /* true */, formatHints?: string /* '' */): boolean;

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


    keywords: Array
    controlPoints: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAstrometricSolution(keywords: Array<any>, controlPoints: ByteArray): void;

    /**
    DESCRIPTION


    mask: ImageWindow

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setMask(mask: ImageWindow): void;
    /**
    DESCRIPTION


    mask: ImageWindow
    invert: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setMask(mask: ImageWindow, invert?: boolean /* false */): void;

    /**
    DESCRIPTION


    res: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setResolution(res: number): void;

    /**
    DESCRIPTION


    xRes: Number
    yRes: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setResolution(xRes: number, yRes: number): void;
    /**
    DESCRIPTION


    xRes: Number
    yRes: Number
    metric: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setResolution(xRes: number, yRes: number, metric?: boolean): void;

    /**
    DESCRIPTION


    bitsPerSample: int
    floatSample: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSampleFormat(bitsPerSample: number, floatSample: boolean): void;

    /**
    DESCRIPTION


    center: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setViewport(center: Point): void;
    /**
    DESCRIPTION


    center: Point
    zoomFactor: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setViewport(center: Point, zoomFactor?: number): void;

    /**
    DESCRIPTION


    x: Number
    y: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setViewport(x: number, y: number): void;
    /**
    DESCRIPTION


    x: Number
    y: Number
    zoomFactor: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setViewport(x: number, y: number, zoomFactor?: number): void;

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
    public undo(): void;
    /**
    DESCRIPTION


    n: uint = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public undo(n?: number /* 1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public undoAll(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateAstrometryMetadata(): void;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateImageRect(r: Rect): void;

    /**
    DESCRIPTION


    x0: Number
    y0: Number
    x1: Number
    y1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateImageRect(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateMaskReferences(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateViewport(): void;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateViewportRect(r: Rect): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public updateViewportRect(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION


    k: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public viewportScalarToImage(k: number): number;

    /**
    DESCRIPTION


    p: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public viewportToImage(p: Point): Point;

    /**
    DESCRIPTION


    r: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public viewportToImage(r: Rect): Rect;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public zoomIn(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public zoomOut(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public zoomToFit(): void;
    /**
    DESCRIPTION


    allowZoomIn: Boolean = false
    animate: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public zoomToFit(allowZoomIn?: boolean /* false */, animate?: boolean /* true */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public zoomToOptimalFit(): void;
    /**
    DESCRIPTION


    allowZoomIn: Boolean = false
    animate: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public zoomToOptimalFit(allowZoomIn?: boolean /* false */, animate?: boolean /* true */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    url: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static open(url: string): Array<any>;
    /**
    DESCRIPTION


    url: String
    id: String = ''
    formatHints: String = ''
    asCopy: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static open(url: string, id?: string /* '' */, formatHints?: string /* '' */, asCopy?: boolean /* false */): Array<any>;

    /**
    DESCRIPTION


    path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static windowByFilePath(path: string): ImageWindow;

    /**
    DESCRIPTION


    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static windowById(id: string): ImageWindow;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ImageWindow;
    static windows: Array<any>;
    static openWindows: Array<any>;
    static activeWindow: ImageWindow;
    static swapFilesDirectory: string;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
