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
    public match(P1: Array<any>, P2: Array<any>): boolean;
    public match(P1: Array<any>, P2: Array<any>, tolerance: number /* 2 */, maxIterations: number /* 2000 */, klen: number /* 1 */): boolean;
    public match(P1: Array<any>, P2: Array<any>, tolerance: number /* 2 */, maxIterations: number /* 2000 */, klen: number /* 1 */, kovl?: number /* 1 */, kreg?: number /* 1 */, krms?: number /* 1 */): boolean;



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
