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
    @param bmp: Bitmap

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
    @param bmp: Bitmap
    @param view: View

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
    @param eqDeg: Point

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
    @param alphaDeg: Number
    @param deltaDeg: Number

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
    @param eqDeg: Array

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
    @param alphaDeg: Array
    @param deltaDeg: Array

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
    @param multiple: Boolean = false

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
    @param source: ImageWindow

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
    @param r: Rect
    @param id: String

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
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param id: String

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
    @param preview: View

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
    @param index: uint

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
    @param k: Number

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
    @param xy: Point

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
    @param x: Number
    @param y: Number

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
    @param xy: Array

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
    @param x: Array
    @param y: Array

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
    @param p: Point

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
    @param r: Rect

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
    @param mask: ImageWindow

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
    @param window: ImageWindow

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
    @param view: View

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
    @param preview: View
    @param r: Rect

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
    @param preview: View
    @param r: Rect
    @param id: String

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
    @param preview: View
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
	public modifyPreview(preview: View, x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION
    @param preview: View
    @param x0: int
    @param y0: int
    @param x1: int
    @param y1: int
    @param id: String

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
    @param id: String

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
    @param preview: View

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
    @param swapFiles: Boolean = true
    @param properties: any = true
    @param histograms: Boolean = true
    @param statistics: Boolean = true
    @param notify: Boolean = true

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
    @param n: uint = 1

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
    @param allowMessages: Boolean = true
    @param strict: Boolean = true

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
    @param filePath: String

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
    @param filePath: String
    @param queryOptions: Boolean = true
    @param allowMessages: Boolean = true
    @param strict: Boolean = true
    @param verifyOverwrite: Boolean = true
    @param formatHints: String = ''

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
    @param keywords: Array
    @param controlPoints: ByteArray

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
    @param mask: ImageWindow

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
    @param mask: ImageWindow
    @param invert: Boolean = false

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
    @param res: Number

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
    @param xRes: Number
    @param yRes: Number

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
    @param xRes: Number
    @param yRes: Number
    @param metric: Boolean

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
    @param bitsPerSample: int
    @param floatSample: Boolean

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
    @param center: Point

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
    @param center: Point
    @param zoomFactor: int

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
    @param x: Number
    @param y: Number

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
    @param x: Number
    @param y: Number
    @param zoomFactor: int

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
    @param n: uint = 1

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
    @param r: Rect

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
    @param x0: Number
    @param y0: Number
    @param x1: Number
    @param y1: Number

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
    @param r: Rect

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
	public updateViewportRect(x0: number, y0: number, x1: number, y1: number): void;

    /**
    DESCRIPTION
    @param k: Number

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
    @param p: Point

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
    @param r: Rect

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
    @param allowZoomIn: Boolean = false
    @param animate: Boolean = true

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
    @param allowZoomIn: Boolean = false
    @param animate: Boolean = true

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
    @param url: String

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
    @param url: String
    @param id: String = ''
    @param formatHints: String = ''
    @param asCopy: Boolean = false

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
    @param path: String

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
    @param id: String

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
