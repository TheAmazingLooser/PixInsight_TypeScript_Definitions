//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Histogram {


    //-------------------------
    //-------Properties--------
    //-------------------------
    entropy: number;
    isEmpty: boolean;
    lastLevel: number;
    normalizedPeakLevel: number;
    peakCount: number;
    peakLevel: number;
    resolution: number;
    totalCount: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(resolution: number);
    constructor(h: Histogram);
    constructor(img: Image);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(h: Histogram): void;

    public clipHigh(count: number): number;

    public clipLow(count: number): number;

    public count(level: number): number;

    public generate(img: Image): void;

    public histogramLevel(normalizedLevel: number): number;

    public normalizedClipHigh(count: number): number;

    public normalizedClipLow(count: number): number;

    public normalizedLevel(histogramLevel: number): number;

    public resample(h: Histogram): void;

    public toArray(): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Histogram;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
