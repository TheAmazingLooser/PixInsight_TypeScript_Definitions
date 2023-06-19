//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Image {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bitsPerSample: number;
    bounds: Rect;
    colorSpace: number;
    firstSelectedChannel: number;
    hasAlphaChannels: boolean;
    height: number;
    highRangeClippingEnabled: boolean;
    interpolation: number;
    interpolationClamping: number;
    interpolationSmoothness: number;
    interpolationXRadius: number;
    interpolationYRadius: number;
    isColor: boolean;
    isComplex: boolean;
    isEmpty: boolean;
    isGrayscale: boolean;
    isInteger: boolean;
    isReal: boolean;
    isStatusCompleted: boolean;
    isStatusInitialized: boolean;
    lastSelectedChannel: number;
    lowRangeClippingEnabled: boolean;
    numberOfAlphaChannels: number;
    numberOfAlphaSamples: number;
    numberOfChannels: number;
    numberOfNominalChannels: number;
    numberOfNominalSamples: number;
    numberOfPixels: number;
    numberOfSamples: number;
    numberOfSelectedChannels: number;
    numberOfSelectedPixels: number;
    numberOfSelectedSamples: number;
    rangeClipHigh: number;
    rangeClipLow: number;
    rangeClippingEnabled: boolean;
    sampleType: number;
    selectedChannel: number;
    selectedPoint: Point;
    selectedRect: Rect;
    selectionPoint: number;
    statusCount: number;
    statusEnabled: boolean;
    statusInfo: string;
    statusInitializationEnabled: boolean;
    statusTotal: number;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(src: Image);
    constructor(width: number, height: number, numberOfChannels?: number /* 1*/, colorSpace?: number /* Gray*/, bitsPerSample?: number /* 32*/, sampleType?: number /* Float*/);
    constructor(array: any /* TypedArray */, width: number, height: number, numberOfChannels?: number /* 1*/, colorSpace?: number /* Gray*/);


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
    public BWMV(): number;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Number = MAD()
    k: int = 9
    reducedLength: Boolean = false
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public BWMV(center?: number /* median() */, sigma?: number /* MAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public FFT(): void;
    /**
    DESCRIPTION


    centered: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public FFT(centered?: boolean /* false */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public MAD(): number;
    /**
    DESCRIPTION


    center: Number = median()
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public MAD(center?: number /* median() */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public PBMV(): number;
    /**
    DESCRIPTION


    center: Number = median()
    beta: Number = 0.2
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public PBMV(center?: number /* median() */, beta?: number /* 0.2 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public Qn(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public Qn(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public Sn(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public Sn(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    kernel: Array
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(kernel: Array<any>, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    kernel: Array
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(kernel: Array<any>, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    kernel: Matrix
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(kernel: Matrix, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    kernel: Matrix
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    rowVector: Array
    colVector: Array
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    rowVector: Array
    colVector: Array
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    rowVector: Vector
    colVector: Vector
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    rowVector: Vector
    colVector: Vector
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public aTrousWaveletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public advanceStatus(count: number): void;

    /**
    DESCRIPTION


    width: int
    height: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public allocate(width: number, height: number): void;
    /**
    DESCRIPTION


    width: int
    height: int
    numberOfChannels: int = 1
    colorSpace: int = Gray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public allocate(width: number, height: number, numberOfChannels?: number /* 1 */, colorSpace?: number /* Gray */): void;

    /**
    DESCRIPTION


    scalar: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(scalar: number): void;
    /**
    DESCRIPTION


    scalar: Number
    op: int
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(scalar: number, op?: number, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    scalar: Complex

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(scalar: Complex): void;
    /**
    DESCRIPTION


    scalar: Complex
    op: int
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(scalar: Complex, op?: number, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    image: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(image: Image): void;
    /**
    DESCRIPTION


    image: Image
    op: int
    pos: Point = int_max
    channel: int = -1
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(image: Image, op?: number, pos?: Point /* int_max */, channel?: number /* -1 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    Image: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(Image: Image): void;
    /**
    DESCRIPTION


    Image: Image
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(Image: Image, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    img: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assignStatus(img: Image): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public avgDev(): number;
    /**
    DESCRIPTION


    center: Number = median()
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public avgDev(center?: number /* median() */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public bendMidvariance(): number;
    /**
    DESCRIPTION


    center: Number = median()
    beta: Number = 0.2
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public bendMidvariance(center?: number /* median() */, beta?: number /* 0.2 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public binarize(): void;
    /**
    DESCRIPTION


    v: Number = 0.5
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public binarize(v?: number /* 0.5 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public biweightMidvariance(): number;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Number = MAD()
    k: int = 9
    reducedLength: Boolean = false
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public biweightMidvariance(center?: number /* median() */, sigma?: number /* MAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

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
    public blend(bmp: Bitmap): void;
    /**
    DESCRIPTION


    bmp: Bitmap
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public blend(bmp: Bitmap, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    bmp: Bitmap
    pos: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public blend(bmp: Bitmap, pos: Point): void;
    /**
    DESCRIPTION


    bmp: Bitmap
    pos: Point
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public blend(bmp: Bitmap, pos: Point, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    bmp: Bitmap
    x0: any
    y0: any
    x1: any
    number: number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public blend(bmp: Bitmap, x0: any, y0: any, x1: any, number: number): void;

    /**
    DESCRIPTION


    bmp: Bitmap
    x: any
    y: any
    x0: any
    y0: any
    x1: any
    number: number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public blend(bmp: Bitmap, x: any, y: any, x0: any, y0: any, x1: any, number: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public canPopSelections(): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public completeStatus(): void;

    /**
    DESCRIPTION


    kernel: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolve(kernel: Array<any>): void;
    /**
    DESCRIPTION


    kernel: Array
    highPassMode: int = 0
    thr0: Number = 0
    thr1: Number = 0
    interlacing: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolve(kernel: Array<any>, highPassMode?: number /* 0 */, thr0?: number /* 0 */, thr1?: number /* 0 */, interlacing?: number /* 1 */): void;

    /**
    DESCRIPTION


    kernel: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolve(kernel: Matrix): void;
    /**
    DESCRIPTION


    kernel: Matrix
    highPassMode: int = 0
    thr0: Number = 0
    thr1: Number = 0
    interlacing: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolve(kernel: Matrix, highPassMode?: number /* 0 */, thr0?: number /* 0 */, thr1?: number /* 0 */, interlacing?: number /* 1 */): void;

    /**
    DESCRIPTION


    kernel: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveFFT(kernel: Array<any>): void;

    /**
    DESCRIPTION


    kernel: Matrix

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveFFT(kernel: Matrix): void;

    /**
    DESCRIPTION


    respFunc: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveFFT(respFunc: Image): void;

    /**
    DESCRIPTION


    rowVector: Array
    colVector: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveSeparable(rowVector: Array<any>, colVector: Array<any>): void;
    /**
    DESCRIPTION


    rowVector: Array
    colVector: Array
    highPassMode: int = 0
    interlacing: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveSeparable(rowVector: Array<any>, colVector: Array<any>, highPassMode?: number /* 0 */, interlacing?: number /* 1 */): void;

    /**
    DESCRIPTION


    rowVector: Vector
    colVector: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveSeparable(rowVector: Vector, colVector: Vector): void;
    /**
    DESCRIPTION


    rowVector: Vector
    colVector: Vector
    highPassMode: int = 0
    interlacing: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public convolveSeparable(rowVector: Vector, colVector: Vector, highPassMode?: number /* 0 */, interlacing?: number /* 1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public count(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public count(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    n: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public createAlphaChannels(n: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public crop(): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public crop(...fill: any[]): void;

    /**
    DESCRIPTION


    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public crop(fillValues: Array<any>): void;

    /**
    DESCRIPTION


    left: int
    top: int
    right: int
    bottom: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropBy(left: number, top: number, right: number, bottom: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropBy(...fill: any[]): void;

    /**
    DESCRIPTION


    left: int
    top: int
    right: int
    bottom: int
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropBy(left: number, top: number, right: number, bottom: number, fillValues: Array<any>): void;

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
    public cropTo(x0: number, y0: number, x1: number, y1: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropTo(...fill: any[]): void;

    /**
    DESCRIPTION


    x0: int
    y0: int
    x1: int
    y1: int
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropTo(x0: number, y0: number, x1: number, y1: number, fillValues: Array<any>): void;

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
    public cropTo(r: Rect): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropTo(...fill: any[]): void;

    /**
    DESCRIPTION


    r: Rect
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public cropTo(r: Rect, fillValues: Array<any>): void;

    /**
    DESCRIPTION


    c: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deleteAlphaChannel(c: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public deleteAlphaChannels(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fastFourierTransform(): void;
    /**
    DESCRIPTION


    centered: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fastFourierTransform(centered?: boolean /* false */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fill(): void;
    /**
    DESCRIPTION


    v: Number|Complex
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fill(v?: number | Complex, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    f: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachMutablePixel(f: Function): void;
    /**
    DESCRIPTION


    f: Function
    thisObj: Object
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachMutablePixel(f: Function, thisObj?: Object, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    f: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachMutableSample(f: Function): void;
    /**
    DESCRIPTION


    f: Function
    thisObj: Object
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachMutableSample(f: Function, thisObj?: Object, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    f: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachPixel(f: Function): void;
    /**
    DESCRIPTION


    f: Function
    thisObj: Object
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachPixel(f: Function, thisObj?: Object, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    f: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachSample(f: Function): void;
    /**
    DESCRIPTION


    f: Function
    thisObj: Object
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEachSample(f: Function, thisObj?: Object, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public free(): void;

    /**
    DESCRIPTION


    I: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getIntensity(I: Image): void;
    /**
    DESCRIPTION


    I: Image
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getIntensity(I: Image, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    L: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getLightness(L: Image): void;
    /**
    DESCRIPTION


    L: Image
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getLightness(L: Image, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    Y: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getLuminance(Y: Image): void;
    /**
    DESCRIPTION


    Y: Image
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getLuminance(Y: Image, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    Vector: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getPixelValue(Vector: Vector): void;

    /**
    DESCRIPTION


    samples: TypedArray|Array|Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getSamples(samples: any /* TypedArray */ | Array<any> | Vector): void;
    /**
    DESCRIPTION


    samples: TypedArray|Array|Vector
    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getSamples(samples: any /* TypedArray */ | Array<any> | Vector, rect?: Rect /* 0 */, channel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initPixelIterator(): void;
    /**
    DESCRIPTION


    r: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initPixelIterator(r?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initSampleIterator(): void;
    /**
    DESCRIPTION


    r: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initSampleIterator(r?: Rect /* 0 */, channel?: number /* -1 */): void;

    /**
    DESCRIPTION


    info: String
    total: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initializeStatus(info: string, total: number): void;

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
    public interpolate(x: number, y: number): number;
    /**
    DESCRIPTION


    x: Number
    y: Number
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public interpolate(x: number, y: number, channel?: number /* 0 */): number;

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
    public interpolate(p: Point): number;
    /**
    DESCRIPTION


    p: Point
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public interpolate(p: Point, channel?: number /* 0 */): number;

    /**
    DESCRIPTION


    layers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseATrousWaveletTransform(layers: Array<any>): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseFFT(): void;
    /**
    DESCRIPTION


    centered: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseFFT(centered?: boolean /* false */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseFastFourierTransform(): void;
    /**
    DESCRIPTION


    centered: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseFastFourierTransform(centered?: boolean /* false */): void;

    /**
    DESCRIPTION


    layers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseMedianWaveletTransform(layers: Array<any>): void;

    /**
    DESCRIPTION


    layers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseMultiscaleLinearTransform(layers: Array<any>): void;

    /**
    DESCRIPTION


    layers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseMultiscaleMedianTransform(layers: Array<any>): void;

    /**
    DESCRIPTION


    layers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseMultiscaleTransform(layers: Array<any>): void;

    /**
    DESCRIPTION


    layers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inverseStarletTransform(layers: Array<any>): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invert(): void;
    /**
    DESCRIPTION


    v: Number = 1
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invert(v?: number /* 1 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public logPolarTransform(): void;
    /**
    DESCRIPTION


    startAngleRadians: Number = 0
    endAngleRadians: Number = 2pi

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public logPolarTransform(startAngleRadians?: number /* 0 */, endAngleRadians?: number /* 2pi */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maximum(): number | Complex;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maximum(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number | Complex;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maximumPosition(): Point;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maximumPosition(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): Point;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mean(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mean(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public meanOfSquares(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public meanOfSquares(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public median(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public median(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public medianWaveletTransform(numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    numberOfLayers: int
    scalingSequence: int
    layerState: Array
    threshold: Number = 5

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public medianWaveletTransform(numberOfLayers: number, scalingSequence?: number, layerState?: Array<any>, threshold?: number /* 5 */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minimum(): number | Complex;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minimum(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number | Complex;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minimumPosition(): Point;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minimumPosition(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): Point;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mirrorHorizontal(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mirrorVertical(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mmtBackgroundResidual(): Float32Array;
    /**
    DESCRIPTION


    scale: int = 256

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public mmtBackgroundResidual(scale?: number /* 256 */): Float32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modulus(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public modulus(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    operator: int
    structure: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public morphologicalTransformation(operator: number, structure: Array<any>): void;
    /**
    DESCRIPTION


    operator: int
    structure: Array
    thr0: Number = 0
    thr1: Number = 0
    interlacing: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public morphologicalTransformation(operator: number, structure: Array<any>, thr0?: number /* 0 */, thr1?: number /* 0 */, interlacing?: number /* 1 */): void;

    /**
    DESCRIPTION


    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public multiscaleLinearTransform(numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public multiscaleLinearTransform(numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public multiscaleMedianTransform(numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    numberOfLayers: int
    scalingSequence: int
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public multiscaleMedianTransform(numberOfLayers: number, scalingSequence?: number, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nextPixel(): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nextSample(): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public norm(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public norm(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public normalize(): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public normalize(v0: number /* 0 */, v1: number /* 1 */): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public normalize(v0: number /* 0 */, v1: number /* 1 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

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
    public orderStatistic(k: number): number;
    /**
    DESCRIPTION


    k: Number
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public orderStatistic(k: number, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public pixelValue(): Vector;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public polarTransform(): void;
    /**
    DESCRIPTION


    startAngleRadians: Number = 0
    endAngleRadians: Number = 2pi

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public polarTransform(startAngleRadians?: number /* 0 */, endAngleRadians?: number /* 2pi */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public popSelections(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public previousPixel(): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public previousSample(): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public pushSelections(): void;

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
    public readRawFile(path: string): void;

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


    zoomFactor: int = 1
    enableTransparency: Boolean = true
    fast: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public render(zoomFactor?: number /* 1 */, enableTransparency?: boolean /* true */, fast?: boolean /* false */): Bitmap;

    /**
    DESCRIPTION


    scale: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resample(scale: number): void;

    /**
    DESCRIPTION


    sx: Number
    sy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resample(sx: number, sy: number): void;
    /**
    DESCRIPTION


    sx: Number
    sy: Number
    mode: int
    absMode: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resample(sx: number, sy: number, mode?: number, absMode?: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rescale(): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rescale(v0: number /* 0 */, v1: number /* 1 */): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rescale(v0: number /* 0 */, v1: number /* 1 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resetChannelSelection(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resetRectSelection(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public resetSelections(): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number): void;
    /**
    DESCRIPTION


    angleRadians: Number
    cx: Number = 0
    cy: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number, cx: number /* 0 */, cy: number /* 0 */): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(...fill: any[]): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number): void;
    /**
    DESCRIPTION


    angleRadians: Number
    cx: Number = 0
    cy: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number, cx: number /* 0 */, cy: number /* 0 */): void;
    /**
    DESCRIPTION


    angleRadians: Number
    cx: Number = 0
    cy: Number = 0
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number, cx: number /* 0 */, cy: number /* 0 */, fillValues?: Array<any>): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(...fill: any[]): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number): void;
    /**
    DESCRIPTION


    angleRadians: Number
    center: Point = 0
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate(angleRadians: number, center?: Point /* 0 */, fillValues?: Array<any>): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate180(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate90ccw(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotate90cw(): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotateUnclipped(angleRadians: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotateUnclipped(...fill: any[]): void;

    /**
    DESCRIPTION


    angleRadians: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotateUnclipped(angleRadians: number): void;
    /**
    DESCRIPTION


    angleRadians: Number
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public rotateUnclipped(angleRadians: number, fillValues?: Array<any>): void;

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
    public sample(p: Point): number | Complex;
    /**
    DESCRIPTION


    p: Point
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sample(p: Point, channel?: number /* 0 */): number | Complex;

    /**
    DESCRIPTION


    x: int
    y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sample(x: number, y: number): number | Complex;
    /**
    DESCRIPTION


    x: int
    y: int
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sample(x: number, y: number, channel?: number /* 0 */): number | Complex;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sampleValue(): number | Complex;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAbs(): void;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setAbs(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    L: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setLightness(L: Image): void;
    /**
    DESCRIPTION


    L: Image
    p: Point = int_max
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setLightness(L: Image, p?: Point /* int_max */, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    Y: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setLuminance(Y: Image): void;
    /**
    DESCRIPTION


    Y: Image
    p: Point = int_max
    rect: Rect = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setLuminance(Y: Image, p?: Point /* int_max */, rect?: Rect /* 0 */): void;

    /**
    DESCRIPTION


    Vector: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setPixelValue(Vector: Vector): void;

    /**
    DESCRIPTION


    scalar: Number|Complex
    p: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSample(scalar: number | Complex, p: Point): void;
    /**
    DESCRIPTION


    scalar: Number|Complex
    p: Point
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSample(scalar: number | Complex, p: Point, channel?: number /* 0 */): void;

    /**
    DESCRIPTION


    scalar: Number|Complex
    x: int
    y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSample(scalar: number | Complex, x: number, y: number): void;
    /**
    DESCRIPTION


    scalar: Number|Complex
    x: int
    y: int
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSample(scalar: number | Complex, x: number, y: number, channel?: number /* 0 */): void;

    /**
    DESCRIPTION


    number: number | Complex

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSampleValue(number: number  |  Complex): void;

    /**
    DESCRIPTION


    samples: TypedArray|Array|Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSamples(samples: any /* TypedArray */ | Array<any> | Vector): void;
    /**
    DESCRIPTION


    samples: TypedArray|Array|Vector
    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSamples(samples: any /* TypedArray */ | Array<any> | Vector, rect?: Rect /* 0 */, channel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shift(): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shift(...fill: any[]): void;

    /**
    DESCRIPTION


    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shift(fillValues: Array<any>): void;

    /**
    DESCRIPTION


    dx: int
    dy: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftBy(dx: number, dy: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftBy(...fill: any[]): void;

    /**
    DESCRIPTION


    dx: int
    dy: int
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftBy(dx: number, dy: number, fillValues: Array<any>): void;

    /**
    DESCRIPTION


    dx: int
    dy: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftTo(dx: number, dy: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftTo(...fill: any[]): void;

    /**
    DESCRIPTION


    dx: int
    dy: int
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftTo(dx: number, dy: number, fillValues: Array<any>): void;

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
    public shiftTo(p: Point): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftTo(...fill: any[]): void;

    /**
    DESCRIPTION


    p: Point
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shiftTo(p: Point, fillValues: Array<any>): void;

    /**
    DESCRIPTION


    dx: int
    dy: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public skipPixels(dx: number, dy: number): boolean;

    /**
    DESCRIPTION


    dx: int
    dy: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public skipSamples(dx: number, dy: number): boolean;

    /**
    DESCRIPTION


    kernel: Array
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(kernel: Array<any>, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    kernel: Array
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(kernel: Array<any>, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    kernel: Matrix
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(kernel: Matrix, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    kernel: Matrix
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    rowVector: Array
    colVector: Array
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    rowVector: Array
    colVector: Array
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    rowVector: Vector
    colVector: Vector
    numberOfLayers: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number): Array<any>;
    /**
    DESCRIPTION


    rowVector: Vector
    colVector: Vector
    numberOfLayers: int
    scalingSequence: int = 0
    layerState: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public starletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence?: number /* 0 */, layerState?: Array<any>): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stdDev(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stdDev(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sumOfSquares(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sumOfSquares(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

    /**
    DESCRIPTION


    img: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public swap(img: Image): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat32Array(): Float32Array;
    /**
    DESCRIPTION


    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat32Array(rect?: Rect /* 0 */, channel?: number /* -1 */): Float32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat64Array(): Float64Array;
    /**
    DESCRIPTION


    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat64Array(rect?: Rect /* 0 */, channel?: number /* -1 */): Float64Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toMatrix(): Matrix;
    /**
    DESCRIPTION


    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toMatrix(rect?: Rect /* 0 */, channel?: number /* -1 */): Matrix;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint16Array(): Uint16Array;
    /**
    DESCRIPTION


    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint16Array(rect?: Rect /* 0 */, channel?: number /* -1 */): Uint16Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint32Array(): Uint32Array;
    /**
    DESCRIPTION


    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint32Array(rect?: Rect /* 0 */, channel?: number /* -1 */): Uint32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint8Array(): Uint8Array;
    /**
    DESCRIPTION


    rect: Rect = 0
    channel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint8Array(rect?: Rect /* 0 */, channel?: number /* -1 */): Uint8Array;

    /**
    DESCRIPTION


    img: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public transfer(img: Image): void;

    /**
    DESCRIPTION


    dx: Number
    dy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translate(dx: number, dy: number): void;
    /**
    DESCRIPTION


    ...fill: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translate(...fill: any[]): void;

    /**
    DESCRIPTION


    dx: Number
    dy: Number
    fillValues: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public translate(dx: number, dy: number, fillValues: Array<any>): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public truncate(): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public truncate(v0: number /* 0 */, v1: number /* 1 */): void;
    /**
    DESCRIPTION


    v0: Number = 0
    v1: Number = 1
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public truncate(v0: number /* 0 */, v1: number /* 1 */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedAvgDev(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedAvgDev(center?: number /* median() */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBWMV(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Array = twoSidedMAD()
    k: int = 9
    reducedLength: Boolean = false
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBWMV(center?: number /* median() */, sigma?: Array<any> /* twoSidedMAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBiweightMidvariance(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()
    sigma: Array = twoSidedMAD()
    k: int = 9
    reducedLength: Boolean = false
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedBiweightMidvariance(center?: number /* median() */, sigma?: Array<any> /* twoSidedMAD() */, k?: number /* 9 */, reducedLength?: boolean /* false */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedMAD(): Array<any>;
    /**
    DESCRIPTION


    center: Number = median()
    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public twoSidedMAD(center?: number /* median() */, rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public variance(): number;
    /**
    DESCRIPTION


    rect: Rect = 0
    firstChannel: int = -1
    lastChannel: int = -1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public variance(rect?: Rect /* 0 */, firstChannel?: number /* -1 */, lastChannel?: number /* -1 */): number;

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
    public writeRawFile(path: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    fftA: Image
    fftB: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static CPSM(fftA: Image, fftB: Image): Image;

    /**
    DESCRIPTION


    fftA: Image
    fftB: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static PCM(fftA: Image, fftB: Image): Image;

    /**
    DESCRIPTION


    fftA: Image
    fftB: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static crossPowerSpectrumMatrix(fftA: Image, fftB: Image): Image;

    /**
    DESCRIPTION


    mimeType: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fileExtensionsForMimeType(mimeType: string): Array<any>;

    /**
    DESCRIPTION


    pathOrExt: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static mimeTypesForFileExtension(pathOrExt: string): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static newComplexImage(): Image;
    /**
    DESCRIPTION


    bitsPerSample: int = 32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static newComplexImage(bitsPerSample?: number /* 32 */): Image;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static newFloatImage(): Image;
    /**
    DESCRIPTION


    bitsPerSample: int = 32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static newFloatImage(bitsPerSample?: number /* 32 */): Image;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static newUIntImage(): Image;
    /**
    DESCRIPTION


    bitsPerSample: int = 16

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static newUIntImage(bitsPerSample?: number /* 16 */): Image;

    /**
    DESCRIPTION


    fftA: Image
    fftB: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static phaseCorrelationMatrix(fftA: Image, fftB: Image): Image;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Image;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
