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
    public BWMV(): number;
    public BWMV(center: number /* median() */): number;
    public BWMV(center: number /* median() */, sigma: number /* MAD() */): number;
    public BWMV(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */): number;
    public BWMV(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */): number;
    public BWMV(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */): number;
    public BWMV(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public BWMV(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public FFT(): void;
    public FFT(centered: boolean /* false */): void;

    public MAD(): number;
    public MAD(center: number /* median() */): number;
    public MAD(center: number /* median() */, rect: Rect /* 0 */): number;
    public MAD(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public MAD(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public PBMV(): number;
    public PBMV(center: number /* median() */): number;
    public PBMV(center: number /* median() */, beta: number /* 0.2 */): number;
    public PBMV(center: number /* median() */, beta: number /* 0.2 */, rect: Rect /* 0 */): number;
    public PBMV(center: number /* median() */, beta: number /* 0.2 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public PBMV(center: number /* median() */, beta: number /* 0.2 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public Qn(): number;
    public Qn(rect: Rect /* 0 */): number;
    public Qn(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public Qn(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public Sn(): number;
    public Sn(rect: Rect /* 0 */): number;
    public Sn(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public Sn(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public aTrousWaveletTransform(kernel: Array<any>, numberOfLayers: number): Array<any>;
    public aTrousWaveletTransform(kernel: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public aTrousWaveletTransform(kernel: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public aTrousWaveletTransform(kernel: Matrix, numberOfLayers: number): Array<any>;
    public aTrousWaveletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public aTrousWaveletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public aTrousWaveletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number): Array<any>;
    public aTrousWaveletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public aTrousWaveletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public aTrousWaveletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number): Array<any>;
    public aTrousWaveletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public aTrousWaveletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public advanceStatus(count: number): void;

    public allocate(width: number, height: number): void;
    public allocate(width: number, height: number, numberOfChannels: number /* 1 */): void;
    public allocate(width: number, height: number, numberOfChannels: number /* 1 */, colorSpace: number /* Gray */): void;

    public apply(scalar: number): void;
    public apply(scalar: number, op: number): void;
    public apply(scalar: number, op: number, rect: Rect /* 0 */): void;
    public apply(scalar: number, op: number, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public apply(scalar: number, op: number, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public apply(scalar: Complex): void;
    public apply(scalar: Complex, op: number): void;
    public apply(scalar: Complex, op: number, rect: Rect /* 0 */): void;
    public apply(scalar: Complex, op: number, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public apply(scalar: Complex, op: number, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public apply(image: Image): void;
    public apply(image: Image, op: number): void;
    public apply(image: Image, op: number, pos: Point /* int_max */): void;
    public apply(image: Image, op: number, pos: Point /* int_max */, channel: number /* -1 */): void;
    public apply(image: Image, op: number, pos: Point /* int_max */, channel: number /* -1 */, rect: Rect /* 0 */): void;
    public apply(image: Image, op: number, pos: Point /* int_max */, channel: number /* -1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public apply(image: Image, op: number, pos: Point /* int_max */, channel: number /* -1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public assign(Image: Image): void;
    public assign(Image: Image, rect: Rect /* 0 */): void;
    public assign(Image: Image, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public assign(Image: Image, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public assignStatus(img: Image): void;

    public avgDev(): number;
    public avgDev(center: number /* median() */): number;
    public avgDev(center: number /* median() */, rect: Rect /* 0 */): number;
    public avgDev(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public avgDev(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public bendMidvariance(): number;
    public bendMidvariance(center: number /* median() */): number;
    public bendMidvariance(center: number /* median() */, beta: number /* 0.2 */): number;
    public bendMidvariance(center: number /* median() */, beta: number /* 0.2 */, rect: Rect /* 0 */): number;
    public bendMidvariance(center: number /* median() */, beta: number /* 0.2 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public bendMidvariance(center: number /* median() */, beta: number /* 0.2 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public binarize(): void;
    public binarize(v: number /* 0.5 */): void;
    public binarize(v: number /* 0.5 */, rect: Rect /* 0 */): void;
    public binarize(v: number /* 0.5 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public binarize(v: number /* 0.5 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public biweightMidvariance(): number;
    public biweightMidvariance(center: number /* median() */): number;
    public biweightMidvariance(center: number /* median() */, sigma: number /* MAD() */): number;
    public biweightMidvariance(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */): number;
    public biweightMidvariance(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */): number;
    public biweightMidvariance(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */): number;
    public biweightMidvariance(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public biweightMidvariance(center: number /* median() */, sigma: number /* MAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public blend(bmp: Bitmap): void;
    public blend(bmp: Bitmap, rect: Rect /* 0 */): void;

    public blend(bmp: Bitmap, pos: Point): void;
    public blend(bmp: Bitmap, pos: Point, rect: Rect /* 0 */): void;

    public blend(bmp: Bitmap, x0: any, y0: any, x1: any, number: number): void;

    public blend(bmp: Bitmap, x: any, y: any, x0: any, y0: any, x1: any, number: number): void;

    public canPopSelections(): boolean;

    public completeStatus(): void;

    public convolve(kernel: Array<any>): void;
    public convolve(kernel: Array<any>, highPassMode: number /* 0 */): void;
    public convolve(kernel: Array<any>, highPassMode: number /* 0 */, thr0: number /* 0 */): void;
    public convolve(kernel: Array<any>, highPassMode: number /* 0 */, thr0: number /* 0 */, thr1: number /* 0 */): void;
    public convolve(kernel: Array<any>, highPassMode: number /* 0 */, thr0: number /* 0 */, thr1: number /* 0 */, interlacing: number /* 1 */): void;

    public convolve(kernel: Matrix): void;
    public convolve(kernel: Matrix, highPassMode: number /* 0 */): void;
    public convolve(kernel: Matrix, highPassMode: number /* 0 */, thr0: number /* 0 */): void;
    public convolve(kernel: Matrix, highPassMode: number /* 0 */, thr0: number /* 0 */, thr1: number /* 0 */): void;
    public convolve(kernel: Matrix, highPassMode: number /* 0 */, thr0: number /* 0 */, thr1: number /* 0 */, interlacing: number /* 1 */): void;

    public convolveFFT(kernel: Array<any>): void;

    public convolveFFT(kernel: Matrix): void;

    public convolveFFT(respFunc: Image): void;

    public convolveSeparable(rowVector: Array<any>, colVector: Array<any>): void;
    public convolveSeparable(rowVector: Array<any>, colVector: Array<any>, highPassMode: number /* 0 */): void;
    public convolveSeparable(rowVector: Array<any>, colVector: Array<any>, highPassMode: number /* 0 */, interlacing: number /* 1 */): void;

    public convolveSeparable(rowVector: Vector, colVector: Vector): void;
    public convolveSeparable(rowVector: Vector, colVector: Vector, highPassMode: number /* 0 */): void;
    public convolveSeparable(rowVector: Vector, colVector: Vector, highPassMode: number /* 0 */, interlacing: number /* 1 */): void;

    public count(): number;
    public count(rect: Rect /* 0 */): number;
    public count(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public count(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public createAlphaChannels(n: number): void;

    public crop(): void;
    public crop(...fill: any[]): void;

    public crop(fillValues: Array<any>): void;

    public cropBy(left: number, top: number, right: number, bottom: number): void;
    public cropBy(...fill: any[]): void;

    public cropBy(left: number, top: number, right: number, bottom: number, fillValues: Array<any>): void;

    public cropTo(x0: number, y0: number, x1: number, y1: number): void;
    public cropTo(...fill: any[]): void;

    public cropTo(x0: number, y0: number, x1: number, y1: number, fillValues: Array<any>): void;

    public cropTo(r: Rect): void;
    public cropTo(...fill: any[]): void;

    public cropTo(r: Rect, fillValues: Array<any>): void;

    public deleteAlphaChannel(c: number): void;

    public deleteAlphaChannels(): void;

    public fastFourierTransform(): void;
    public fastFourierTransform(centered: boolean /* false */): void;

    public fill(): void;
    public fill(v: number | Complex): void;
    public fill(v: number | Complex, rect: Rect /* 0 */): void;
    public fill(v: number | Complex, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public fill(v: number | Complex, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public forEachMutablePixel(f: Function): void;
    public forEachMutablePixel(f: Function, thisObj: Object): void;
    public forEachMutablePixel(f: Function, thisObj: Object, rect: Rect /* 0 */): void;
    public forEachMutablePixel(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public forEachMutablePixel(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public forEachMutableSample(f: Function): void;
    public forEachMutableSample(f: Function, thisObj: Object): void;
    public forEachMutableSample(f: Function, thisObj: Object, rect: Rect /* 0 */): void;
    public forEachMutableSample(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public forEachMutableSample(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public forEachPixel(f: Function): void;
    public forEachPixel(f: Function, thisObj: Object): void;
    public forEachPixel(f: Function, thisObj: Object, rect: Rect /* 0 */): void;
    public forEachPixel(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public forEachPixel(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public forEachSample(f: Function): void;
    public forEachSample(f: Function, thisObj: Object): void;
    public forEachSample(f: Function, thisObj: Object, rect: Rect /* 0 */): void;
    public forEachSample(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public forEachSample(f: Function, thisObj: Object, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public free(): void;

    public getIntensity(I: Image): void;
    public getIntensity(I: Image, rect: Rect /* 0 */): void;

    public getLightness(L: Image): void;
    public getLightness(L: Image, rect: Rect /* 0 */): void;

    public getLuminance(Y: Image): void;
    public getLuminance(Y: Image, rect: Rect /* 0 */): void;

    public getPixelValue(Vector: Vector): void;

    public getSamples(samples: any /* TypedArray */ | Array<any> | Vector): void;
    public getSamples(samples: any /* TypedArray */ | Array<any> | Vector, rect: Rect /* 0 */): void;
    public getSamples(samples: any /* TypedArray */ | Array<any> | Vector, rect: Rect /* 0 */, channel: number /* -1 */): void;

    public initPixelIterator(): void;
    public initPixelIterator(r: Rect /* 0 */): void;
    public initPixelIterator(r: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public initPixelIterator(r: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public initSampleIterator(): void;
    public initSampleIterator(r: Rect /* 0 */): void;
    public initSampleIterator(r: Rect /* 0 */, channel: number /* -1 */): void;

    public initializeStatus(info: string, total: number): void;

    public interpolate(x: number, y: number): number;
    public interpolate(x: number, y: number, channel: number /* 0 */): number;

    public interpolate(p: Point): number;
    public interpolate(p: Point, channel: number /* 0 */): number;

    public inverseATrousWaveletTransform(layers: Array<any>): void;

    public inverseFFT(): void;
    public inverseFFT(centered: boolean /* false */): void;

    public inverseFastFourierTransform(): void;
    public inverseFastFourierTransform(centered: boolean /* false */): void;

    public inverseMedianWaveletTransform(layers: Array<any>): void;

    public inverseMultiscaleLinearTransform(layers: Array<any>): void;

    public inverseMultiscaleMedianTransform(layers: Array<any>): void;

    public inverseMultiscaleTransform(layers: Array<any>): void;

    public inverseStarletTransform(layers: Array<any>): void;

    public invert(): void;
    public invert(v: number /* 1 */): void;
    public invert(v: number /* 1 */, rect: Rect /* 0 */): void;
    public invert(v: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public invert(v: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public logPolarTransform(): void;
    public logPolarTransform(startAngleRadians: number /* 0 */): void;
    public logPolarTransform(startAngleRadians: number /* 0 */, endAngleRadians: number /* 2pi */): void;

    public maximum(): number | Complex;
    public maximum(rect: Rect /* 0 */): number | Complex;
    public maximum(rect: Rect /* 0 */, firstChannel: number /* -1 */): number | Complex;
    public maximum(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number | Complex;

    public maximumPosition(): Point;
    public maximumPosition(rect: Rect /* 0 */): Point;
    public maximumPosition(rect: Rect /* 0 */, firstChannel: number /* -1 */): Point;
    public maximumPosition(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): Point;

    public mean(): number;
    public mean(rect: Rect /* 0 */): number;
    public mean(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public mean(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public meanOfSquares(): number;
    public meanOfSquares(rect: Rect /* 0 */): number;
    public meanOfSquares(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public meanOfSquares(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public median(): number;
    public median(rect: Rect /* 0 */): number;
    public median(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public median(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public medianWaveletTransform(numberOfLayers: number): Array<any>;
    public medianWaveletTransform(numberOfLayers: number, scalingSequence: number): Array<any>;
    public medianWaveletTransform(numberOfLayers: number, scalingSequence: number, layerState: Array<any>): Array<any>;
    public medianWaveletTransform(numberOfLayers: number, scalingSequence: number, layerState: Array<any>, threshold: number /* 5 */): Array<any>;

    public minimum(): number | Complex;
    public minimum(rect: Rect /* 0 */): number | Complex;
    public minimum(rect: Rect /* 0 */, firstChannel: number /* -1 */): number | Complex;
    public minimum(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number | Complex;

    public minimumPosition(): Point;
    public minimumPosition(rect: Rect /* 0 */): Point;
    public minimumPosition(rect: Rect /* 0 */, firstChannel: number /* -1 */): Point;
    public minimumPosition(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): Point;

    public mirrorHorizontal(): void;

    public mirrorVertical(): void;

    public mmtBackgroundResidual(): Float32Array;
    public mmtBackgroundResidual(scale: number /* 256 */): Float32Array;

    public modulus(): number;
    public modulus(rect: Rect /* 0 */): number;
    public modulus(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public modulus(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public morphologicalTransformation(operator: number, structure: Array<any>): void;
    public morphologicalTransformation(operator: number, structure: Array<any>, thr0: number /* 0 */): void;
    public morphologicalTransformation(operator: number, structure: Array<any>, thr0: number /* 0 */, thr1: number /* 0 */): void;
    public morphologicalTransformation(operator: number, structure: Array<any>, thr0: number /* 0 */, thr1: number /* 0 */, interlacing: number /* 1 */): void;

    public multiscaleLinearTransform(numberOfLayers: number): Array<any>;
    public multiscaleLinearTransform(numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public multiscaleLinearTransform(numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public multiscaleMedianTransform(numberOfLayers: number): Array<any>;
    public multiscaleMedianTransform(numberOfLayers: number, scalingSequence: number): Array<any>;
    public multiscaleMedianTransform(numberOfLayers: number, scalingSequence: number, layerState: Array<any>): Array<any>;

    public nextPixel(): boolean;

    public nextSample(): boolean;

    public norm(): number;
    public norm(rect: Rect /* 0 */): number;
    public norm(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public norm(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public normalize(): void;
    public normalize(v0: number /* 0 */, v1: number /* 1 */): void;
    public normalize(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */): void;
    public normalize(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public normalize(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public orderStatistic(k: number): number;
    public orderStatistic(k: number, rect: Rect /* 0 */): number;
    public orderStatistic(k: number, rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public orderStatistic(k: number, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public pixelValue(): Vector;

    public polarTransform(): void;
    public polarTransform(startAngleRadians: number /* 0 */): void;
    public polarTransform(startAngleRadians: number /* 0 */, endAngleRadians: number /* 2pi */): void;

    public popSelections(): void;

    public previousPixel(): boolean;

    public previousSample(): boolean;

    public pushSelections(): void;

    public readRawFile(path: string): void;

    public render(): Bitmap;
    public render(zoomFactor: number /* 1 */): Bitmap;
    public render(zoomFactor: number /* 1 */, enableTransparency: boolean /* true */): Bitmap;
    public render(zoomFactor: number /* 1 */, enableTransparency: boolean /* true */, fast: boolean /* false */): Bitmap;

    public resample(scale: number): void;

    public resample(sx: number, sy: number): void;
    public resample(sx: number, sy: number, mode: number): void;
    public resample(sx: number, sy: number, mode: number, absMode: number): void;

    public rescale(): void;
    public rescale(v0: number /* 0 */, v1: number /* 1 */): void;
    public rescale(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */): void;
    public rescale(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public rescale(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public resetChannelSelection(): void;

    public resetRectSelection(): void;

    public resetSelections(): void;

    public rotate(angleRadians: number): void;
    public rotate(angleRadians: number, cx: number /* 0 */, cy: number /* 0 */): void;
    public rotate(...fill: any[]): void;

    public rotate(angleRadians: number): void;
    public rotate(angleRadians: number, cx: number /* 0 */, cy: number /* 0 */): void;
    public rotate(angleRadians: number, cx: number /* 0 */, cy: number /* 0 */, fillValues: Array<any>): void;

    public rotate(angleRadians: number): void;
    public rotate(angleRadians: number, center: Point /* 0 */): void;
    public rotate(...fill: any[]): void;

    public rotate(angleRadians: number): void;
    public rotate(angleRadians: number, center: Point /* 0 */): void;
    public rotate(angleRadians: number, center: Point /* 0 */, fillValues: Array<any>): void;

    public rotate180(): void;

    public rotate90ccw(): void;

    public rotate90cw(): void;

    public rotateUnclipped(angleRadians: number): void;
    public rotateUnclipped(...fill: any[]): void;

    public rotateUnclipped(angleRadians: number): void;
    public rotateUnclipped(angleRadians: number, fillValues: Array<any>): void;

    public sample(p: Point): number | Complex;
    public sample(p: Point, channel: number /* 0 */): number | Complex;

    public sample(x: number, y: number): number | Complex;
    public sample(x: number, y: number, channel: number /* 0 */): number | Complex;

    public sampleValue(): number | Complex;

    public setAbs(): void;
    public setAbs(rect: Rect /* 0 */): void;
    public setAbs(rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public setAbs(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public setLightness(L: Image): void;
    public setLightness(L: Image, p: Point /* int_max */): void;
    public setLightness(L: Image, p: Point /* int_max */, rect: Rect /* 0 */): void;

    public setLuminance(Y: Image): void;
    public setLuminance(Y: Image, p: Point /* int_max */): void;
    public setLuminance(Y: Image, p: Point /* int_max */, rect: Rect /* 0 */): void;

    public setPixelValue(Vector: Vector): void;

    public setSample(scalar: number | Complex, p: Point): void;
    public setSample(scalar: number | Complex, p: Point, channel: number /* 0 */): void;

    public setSample(scalar: number | Complex, x: number, y: number): void;
    public setSample(scalar: number | Complex, x: number, y: number, channel: number /* 0 */): void;

    public setSampleValue(number: number  |  Complex): void;

    public setSamples(samples: any /* TypedArray */ | Array<any> | Vector): void;
    public setSamples(samples: any /* TypedArray */ | Array<any> | Vector, rect: Rect /* 0 */): void;
    public setSamples(samples: any /* TypedArray */ | Array<any> | Vector, rect: Rect /* 0 */, channel: number /* -1 */): void;

    public shift(): void;
    public shift(...fill: any[]): void;

    public shift(fillValues: Array<any>): void;

    public shiftBy(dx: number, dy: number): void;
    public shiftBy(...fill: any[]): void;

    public shiftBy(dx: number, dy: number, fillValues: Array<any>): void;

    public shiftTo(dx: number, dy: number): void;
    public shiftTo(...fill: any[]): void;

    public shiftTo(dx: number, dy: number, fillValues: Array<any>): void;

    public shiftTo(p: Point): void;
    public shiftTo(...fill: any[]): void;

    public shiftTo(p: Point, fillValues: Array<any>): void;

    public skipPixels(dx: number, dy: number): boolean;

    public skipSamples(dx: number, dy: number): boolean;

    public starletTransform(kernel: Array<any>, numberOfLayers: number): Array<any>;
    public starletTransform(kernel: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public starletTransform(kernel: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public starletTransform(kernel: Matrix, numberOfLayers: number): Array<any>;
    public starletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public starletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public starletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number): Array<any>;
    public starletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public starletTransform(rowVector: Array<any>, colVector: Array<any>, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public starletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number): Array<any>;
    public starletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence: number /* 0 */): Array<any>;
    public starletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence: number /* 0 */, layerState: Array<any>): Array<any>;

    public stdDev(): number;
    public stdDev(rect: Rect /* 0 */): number;
    public stdDev(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public stdDev(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public sumOfSquares(): number;
    public sumOfSquares(rect: Rect /* 0 */): number;
    public sumOfSquares(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public sumOfSquares(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public swap(img: Image): void;

    public toFloat32Array(): Float32Array;
    public toFloat32Array(rect: Rect /* 0 */): Float32Array;
    public toFloat32Array(rect: Rect /* 0 */, channel: number /* -1 */): Float32Array;

    public toFloat64Array(): Float64Array;
    public toFloat64Array(rect: Rect /* 0 */): Float64Array;
    public toFloat64Array(rect: Rect /* 0 */, channel: number /* -1 */): Float64Array;

    public toMatrix(): Matrix;
    public toMatrix(rect: Rect /* 0 */): Matrix;
    public toMatrix(rect: Rect /* 0 */, channel: number /* -1 */): Matrix;

    public toUint16Array(): Uint16Array;
    public toUint16Array(rect: Rect /* 0 */): Uint16Array;
    public toUint16Array(rect: Rect /* 0 */, channel: number /* -1 */): Uint16Array;

    public toUint32Array(): Uint32Array;
    public toUint32Array(rect: Rect /* 0 */): Uint32Array;
    public toUint32Array(rect: Rect /* 0 */, channel: number /* -1 */): Uint32Array;

    public toUint8Array(): Uint8Array;
    public toUint8Array(rect: Rect /* 0 */): Uint8Array;
    public toUint8Array(rect: Rect /* 0 */, channel: number /* -1 */): Uint8Array;

    public transfer(img: Image): void;

    public translate(dx: number, dy: number): void;
    public translate(...fill: any[]): void;

    public translate(dx: number, dy: number, fillValues: Array<any>): void;

    public truncate(): void;
    public truncate(v0: number /* 0 */, v1: number /* 1 */): void;
    public truncate(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */): void;
    public truncate(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */): void;
    public truncate(v0: number /* 0 */, v1: number /* 1 */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): void;

    public twoSidedAvgDev(): Array<any>;
    public twoSidedAvgDev(center: number /* median() */): Array<any>;
    public twoSidedAvgDev(center: number /* median() */, rect: Rect /* 0 */): Array<any>;
    public twoSidedAvgDev(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */): Array<any>;
    public twoSidedAvgDev(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): Array<any>;

    public twoSidedBWMV(): Array<any>;
    public twoSidedBWMV(center: number /* median() */): Array<any>;
    public twoSidedBWMV(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */): Array<any>;
    public twoSidedBWMV(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */): Array<any>;
    public twoSidedBWMV(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */): Array<any>;
    public twoSidedBWMV(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */): Array<any>;
    public twoSidedBWMV(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */): Array<any>;
    public twoSidedBWMV(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): Array<any>;

    public twoSidedBiweightMidvariance(): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */): Array<any>;
    public twoSidedBiweightMidvariance(center: number /* median() */, sigma: Array<any> /* twoSidedMAD() */, k: number /* 9 */, reducedLength: boolean /* false */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): Array<any>;

    public twoSidedMAD(): Array<any>;
    public twoSidedMAD(center: number /* median() */): Array<any>;
    public twoSidedMAD(center: number /* median() */, rect: Rect /* 0 */): Array<any>;
    public twoSidedMAD(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */): Array<any>;
    public twoSidedMAD(center: number /* median() */, rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): Array<any>;

    public variance(): number;
    public variance(rect: Rect /* 0 */): number;
    public variance(rect: Rect /* 0 */, firstChannel: number /* -1 */): number;
    public variance(rect: Rect /* 0 */, firstChannel: number /* -1 */, lastChannel: number /* -1 */): number;

    public writeRawFile(path: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static CPSM(fftA: Image, fftB: Image): Image;

    public static PCM(fftA: Image, fftB: Image): Image;

    public static crossPowerSpectrumMatrix(fftA: Image, fftB: Image): Image;

    public static fileExtensionsForMimeType(mimeType: string): Array<any>;

    public static mimeTypesForFileExtension(pathOrExt: string): Array<any>;

    public static newComplexImage(): Image;
    public static newComplexImage(bitsPerSample: number /* 32 */): Image;

    public static newFloatImage(): Image;
    public static newFloatImage(bitsPerSample: number /* 32 */): Image;

    public static newUIntImage(): Image;
    public static newUIntImage(bitsPerSample: number /* 16 */): Image;

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
