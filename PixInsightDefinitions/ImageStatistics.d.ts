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
    /**
    DESCRIPTION


    s: ImageStatistics

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(s: ImageStatistics): void;

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
    public generate(img: Image): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ImageStatistics;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
