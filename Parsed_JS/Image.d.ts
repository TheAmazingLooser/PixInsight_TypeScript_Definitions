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
    public BWMV(center?: number /* median()*/, sigma?: number /* MAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public FFT(centered?: boolean /* false*/): void;

    public MAD(center?: number /* median()*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public PBMV(center?: number /* median()*/, beta?: number /* 0.2*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public Qn(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public Sn(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public aTrousWaveletTransform(kernel: Array, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public aTrousWaveletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public aTrousWaveletTransform(rowVector: Array, colVector: Array, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public aTrousWaveletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public advanceStatus(count: number): void;

    public allocate(width: number, height: number, numberOfChannels?: number /* 1*/, colorSpace?: number /* Gray*/): void;

    public apply(scalar: number, op?: number, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public apply(scalar: Complex, op?: number, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public apply(image: Image, op?: number, pos?: Point /* int_max*/, channel?: number /* -1*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public assign(Image: any, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public assignStatus(img: Image): void;

    public avgDev(center?: number /* median()*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public bendMidvariance(center?: number /* median()*/, beta?: number /* 0.2*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public binarize(v?: number /* 0.5*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public biweightMidvariance(center?: number /* median()*/, sigma?: number /* MAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public blend(bmp: Bitmap, rect?: Rect /* 0*/): void;

    public blend(bmp: Bitmap, pos: Point, rect?: Rect /* 0*/): void;

    public blend(bmp: Bitmap, x0: any, y0: any, x1: any, y1: number): void;

    public blend(bmp: Bitmap, x: any, y: any, x0: any, y0: any, x1: any, y1: number): void;

    public canPopSelections(): boolean;

    public completeStatus(): void;

    public convolve(kernel: Array, highPassMode?: number /* 0*/, thr0?: number /* 0*/, thr1?: number /* 0*/, interlacing?: number /* 1*/): void;

    public convolve(kernel: Matrix, highPassMode?: number /* 0*/, thr0?: number /* 0*/, thr1?: number /* 0*/, interlacing?: number /* 1*/): void;

    public convolveFFT(kernel: Array): void;

    public convolveFFT(kernel: Matrix): void;

    public convolveFFT(respFunc: Image): void;

    public convolveSeparable(rowVector: Array, colVector: Array, highPassMode?: number /* 0*/, interlacing?: number /* 1*/): void;

    public convolveSeparable(rowVector: Vector, colVector: Vector, highPassMode?: number /* 0*/, interlacing?: number /* 1*/): void;

    public count(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public createAlphaChannels(n: number): void;

    public crop(fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number, fill8?: number, fill9?: number): void;

    public crop(fillValues: Array): void;

    public cropBy(left: number, top: number, right: number, bottom: number, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number): void;

    public cropBy(left: number, top: number, right: number, bottom: number, fillValues: Array): void;

    public cropTo(x0: number, y0: number, x1: number, y1: number, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number): void;

    public cropTo(x0: number, y0: number, x1: number, y1: number, fillValues: Array): void;

    public cropTo(r: Rect, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number, fill8?: number): void;

    public cropTo(r: Rect, fillValues: Array): void;

    public deleteAlphaChannel(c: number): void;

    public deleteAlphaChannels(): void;

    public fastFourierTransform(centered?: boolean /* false*/): void;

    public fill(v?: number | Complex, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public forEachMutablePixel(f: Function, thisObj?: Object, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public forEachMutableSample(f: Function, thisObj?: Object, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public forEachPixel(f: Function, thisObj?: Object, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public forEachSample(f: Function, thisObj?: Object, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public free(): void;

    public getIntensity(I: Image, rect?: Rect /* 0*/): void;

    public getLightness(L: Image, rect?: Rect /* 0*/): void;

    public getLuminance(Y: Image, rect?: Rect /* 0*/): void;

    public getPixelValue(Vector: Vector): void;

    public getSamples(samples: any /* TypedArray */ | Array | Vector, rect?: Rect /* 0*/, channel?: number /* -1*/): void;

    public initPixelIterator(r?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public initSampleIterator(r?: Rect /* 0*/, channel?: number /* -1*/): void;

    public initializeStatus(info: string, total: number): void;

    public interpolate(x: number, y: number, channel?: number /* 0*/): number;

    public interpolate(p: Point, channel?: number /* 0*/): number;

    public inverseATrousWaveletTransform(layers: Array): void;

    public inverseFFT(centered?: boolean /* false*/): void;

    public inverseFastFourierTransform(centered?: boolean /* false*/): void;

    public inverseMedianWaveletTransform(layers: Array): void;

    public inverseMultiscaleLinearTransform(layers: Array): void;

    public inverseMultiscaleMedianTransform(layers: Array): void;

    public inverseMultiscaleTransform(layers: Array): void;

    public inverseStarletTransform(layers: Array): void;

    public invert(v?: number /* 1*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public logPolarTransform(startAngleRadians?: number /* 0*/, endAngleRadians?: number /* 2pi*/): void;

    public maximum(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number | Complex;

    public maximumPosition(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): Point;

    public mean(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public meanOfSquares(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public median(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public medianWaveletTransform(numberOfLayers: number, scalingSequence?: number, layerState?: Array, threshold?: number /* 5*/): Array;

    public minimum(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number | Complex;

    public minimumPosition(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): Point;

    public mirrorHorizontal(): void;

    public mirrorVertical(): void;

    public mmtBackgroundResidual(scale?: number): Float32Array;

    public modulus(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public morphologicalTransformation(operator: number, structure: Array, thr0?: number /* 0*/, thr1?: number /* 0*/, interlacing?: number /* 1*/): void;

    public multiscaleLinearTransform(numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public multiscaleMedianTransform(numberOfLayers: number, scalingSequence?: number, layerState?: Array): Array;

    public nextPixel(): boolean;

    public nextSample(): boolean;

    public norm(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public normalize(v0?: number /* 0*/, v1?: number /* 1*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public orderStatistic(k: number, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public pixelValue(): Vector;

    public polarTransform(startAngleRadians?: number /* 0*/, endAngleRadians?: number /* 2pi*/): void;

    public popSelections(): void;

    public previousPixel(): boolean;

    public previousSample(): boolean;

    public pushSelections(): void;

    public readRawFile(path: string): void;

    public render(zoomFactor?: number /* 1*/, enableTransparency?: boolean /* true*/, fast?: boolean /* false*/): Bitmap;

    public resample(scale: number): void;

    public resample(sx: number, sy: number, mode?: number, absMode?: number): void;

    public rescale(v0?: number /* 0*/, v1?: number /* 1*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public resetChannelSelection(): void;

    public resetRectSelection(): void;

    public resetSelections(): void;

    public rotate(angleRadians: number, cx?: number /* 0*/, cy?: number /* 0*/, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number): void;

    public rotate(angleRadians: number, cx?: number /* 0*/, cy?: number /* 0*/, fillValues?: Array): void;

    public rotate(angleRadians: number, center?: Point /* 0*/, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number): void;

    public rotate(angleRadians: number, center?: Point /* 0*/, fillValues?: Array): void;

    public rotate180(): void;

    public rotate90ccw(): void;

    public rotate90cw(): void;

    public rotateUnclipped(angleRadians: number, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number, fill8?: number): void;

    public rotateUnclipped(angleRadians: number, fillValues?: Array): void;

    public sample(p: Point, channel?: number /* 0*/): number | Complex;

    public sample(x: number, y: number, channel?: number /* 0*/): number | Complex;

    public sampleValue(): number | Complex;

    public setAbs(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public setLightness(L: Image, p?: Point /* int_max*/, rect?: Rect /* 0*/): void;

    public setLuminance(Y: Image, p?: Point /* int_max*/, rect?: Rect /* 0*/): void;

    public setPixelValue(Vector: Vector): void;

    public setSample(scalar: number | Complex, p: Point, channel?: number /* 0*/): void;

    public setSample(scalar: number | Complex, x: number, y: number, channel?: number /* 0*/): void;

    public setSampleValue(param_0: number | Complex): void;

    public setSamples(samples: any /* TypedArray */ | Array | Vector, rect?: Rect /* 0*/, channel?: number /* -1*/): void;

    public shift(fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number, fill8?: number, fill9?: number): void;

    public shift(fillValues: Array): void;

    public shiftBy(dx: number, dy: number, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number): void;

    public shiftBy(dx: number, dy: number, fillValues: Array): void;

    public shiftTo(dx: number, dy: number, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number): void;

    public shiftTo(dx: number, dy: number, fillValues: Array): void;

    public shiftTo(p: Point, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number, fill8?: number): void;

    public shiftTo(p: Point, fillValues: Array): void;

    public skipPixels(dx: number, dy: number): boolean;

    public skipSamples(dx: number, dy: number): boolean;

    public starletTransform(kernel: Array, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public starletTransform(kernel: Matrix, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public starletTransform(rowVector: Array, colVector: Array, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public starletTransform(rowVector: Vector, colVector: Vector, numberOfLayers: number, scalingSequence?: number /* 0*/, layerState?: Array): Array;

    public stdDev(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public sumOfSquares(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public swap(img: Image): void;

    public toFloat32Array(rect?: Rect /* 0*/, channel?: number /* -1*/): Float32Array;

    public toFloat64Array(rect?: Rect /* 0*/, channel?: number /* -1*/): Float64Array;

    public toMatrix(rect?: Rect /* 0*/, channel?: number /* -1*/): Matrix;

    public toUint16Array(rect?: Rect /* 0*/, channel?: number /* -1*/): Uint16Array;

    public toUint32Array(rect?: Rect /* 0*/, channel?: number /* -1*/): Uint32Array;

    public toUint8Array(rect?: Rect /* 0*/, channel?: number /* -1*/): Uint8Array;

    public transfer(img: Image): void;

    public translate(dx: number, dy: number, fill0?: number, fill1?: number, fill2?: number, fill3?: number, fill4?: number, fill5?: number, fill6?: number, fill7?: number): void;

    public translate(dx: number, dy: number, fillValues: Array): void;

    public truncate(v0?: number /* 0*/, v1?: number /* 1*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): void;

    public twoSidedAvgDev(center?: number /* median()*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): Array;

    public twoSidedBWMV(center?: number /* median()*/, sigma?: Array /* twoSidedMAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): Array;

    public twoSidedBiweightMidvariance(center?: number /* median()*/, sigma?: Array /* twoSidedMAD()*/, k?: number /* 9*/, reducedLength?: boolean /* false*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): Array;

    public twoSidedMAD(center?: number /* median()*/, rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): Array;

    public variance(rect?: Rect /* 0*/, firstChannel?: number /* -1*/, lastChannel?: number /* -1*/): number;

    public writeRawFile(path: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static CPSM(fftA: Image, fftB: Image): Image;

    public static PCM(fftA: Image, fftB: Image): Image;

    public static crossPowerSpectrumMatrix(fftA: Image, fftB: Image): Image;

    public static fileExtensionsForMimeType(mimeType: string): Array;

    public static mimeTypesForFileExtension(pathOrExt: string): Array;

    public static newComplexImage(bitsPerSample?: number /* 32*/): Image;

    public static newFloatImage(bitsPerSample?: number /* 32*/): Image;

    public static newUIntImage(bitsPerSample?: number /* 16*/): Image;

    public static phaseCorrelationMatrix(fftA: Image, fftB: Image): Image;



    //-------------------------
    //----static Properties----
    //-------------------------
    static bitsPerSample: number;
    static bounds: Rect;
    static colorSpace: number;
    static firstSelectedChannel: number;
    static hasAlphaChannels: boolean;
    static height: number;
    static highRangeClippingEnabled: boolean;
    static interpolation: number;
    static interpolationClamping: number;
    static interpolationSmoothness: number;
    static interpolationXRadius: number;
    static interpolationYRadius: number;
    static isColor: boolean;
    static isComplex: boolean;
    static isEmpty: boolean;
    static isGrayscale: boolean;
    static isInteger: boolean;
    static isReal: boolean;
    static isStatusCompleted: boolean;
    static isStatusInitialized: boolean;
    static lastSelectedChannel: number;
    static lowRangeClippingEnabled: boolean;
    static numberOfAlphaChannels: number;
    static numberOfAlphaSamples: number;
    static numberOfChannels: number;
    static numberOfNominalChannels: number;
    static numberOfNominalSamples: number;
    static numberOfPixels: number;
    static numberOfSamples: number;
    static numberOfSelectedChannels: number;
    static numberOfSelectedPixels: number;
    static numberOfSelectedSamples: number;
    static rangeClipHigh: number;
    static rangeClipLow: number;
    static rangeClippingEnabled: boolean;
    static sampleType: number;
    static selectedChannel: number;
    static selectedPoint: Point;
    static selectedRect: Rect;
    static selectionPoint: number;
    static statusCount: number;
    static statusEnabled: boolean;
    static statusInfo: string;
    static statusInitializationEnabled: boolean;
    static statusTotal: number;
    static width: number;
}
