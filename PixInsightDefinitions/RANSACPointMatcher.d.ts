//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RANSACPointMatcher {


    //-------------------------
    //-------Properties--------
    //-------------------------
    H: Matrix;
    M1: Array<any>;
    M2: Array<any>;
    bestIteration: number;
    index: Array<any>;
    inliersFraction: number;
    numberOfIterations: number;
    overlapping: number;
    peakErrorX: number;
    peakErrorY: number;
    quality: number;
    regularity: number;
    rmsError: number;
    rmsErrorDeviation: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


    //-------------------------
    //--------Functions--------
    //-------------------------



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: RANSACPointMatcher;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
