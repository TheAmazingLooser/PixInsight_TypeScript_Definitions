//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageStatistics {


    //-------------------------
    //-------Properties--------
    //-------------------------
    averageDeviation: number;
    avgDev: number;
    avgDevEnabled: boolean;
    bendMidvariance: number;
    biweightMidvariance: number;
    bwmv: number;
    bwmvEnabled: boolean;
    count: number;
    extremesEnabled: boolean;
    highRejectionEnabled: boolean;
    lowRejectionEnabled: boolean;
    mad: number;
    madEnabled: boolean;
    maximum: number;
    maximumPosition: Point;
    mean: number;
    meanEnabled: boolean;
    median: number;
    medianDeviation: number;
    medianEnabled: boolean;
    minimum: number;
    minimumPosition: Point;
    pbmv: number;
    pbmvEnabled: boolean;
    qn: number;
    qnEnabled: boolean;
    rejectionHigh: number;
    rejectionLow: number;
    sn: number;
    snEnabled: boolean;
    standardDeviation: number;
    stdDev: number;
    sumOfSquares: number;
    sumOfSquaresEnabled: boolean;
    variance: number;
    varianceEnabled: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(s: ImageStatistics);
    constructor(img: Image);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(s: ImageStatistics): void;


    public generate(img: Image): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static averageDeviation: number;
    static avgDev: number;
    static avgDevEnabled: boolean;
    static bendMidvariance: number;
    static biweightMidvariance: number;
    static bwmv: number;
    static bwmvEnabled: boolean;
    static count: number;
    static extremesEnabled: boolean;
    static highRejectionEnabled: boolean;
    static lowRejectionEnabled: boolean;
    static mad: number;
    static madEnabled: boolean;
    static maximum: number;
    static maximumPosition: Point;
    static mean: number;
    static meanEnabled: boolean;
    static median: number;
    static medianDeviation: number;
    static medianEnabled: boolean;
    static minimum: number;
    static minimumPosition: Point;
    static pbmv: number;
    static pbmvEnabled: boolean;
    static qn: number;
    static qnEnabled: boolean;
    static rejectionHigh: number;
    static rejectionLow: number;
    static sn: number;
    static snEnabled: boolean;
    static standardDeviation: number;
    static stdDev: number;
    static sumOfSquares: number;
    static sumOfSquaresEnabled: boolean;
    static variance: number;
    static varianceEnabled: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
