//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LocalHistogramEqualization extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    circularKernel: boolean;
    histogramBins: number;
    radius: number;
    slopeLimit: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LocalHistogramEqualization?: LocalHistogramEqualization);


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
    static amount: number;
    static circularKernel: boolean;
    static histogramBins: number;
    static radius: number;
    static slopeLimit: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Bit10;
    Bit12;
    Bit8;
}
