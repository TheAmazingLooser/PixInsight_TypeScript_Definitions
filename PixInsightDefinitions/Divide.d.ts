//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Divide extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    customNormalization: number;
    flatId: string;
    highlightsAmount: number;
    highlightsContinuity: number;
    highlightsLimit: number;
    linearization: number;
    method: number;
    normalization: number;
    shadowsAmount: number;
    shadowsContinuity: number;
    shadowsLimit: number;
    statisticalDownLimit: number;
    statisticalUpLimit: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Divide?: Divide);


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
    static customNormalization: number;
    static flatId: string;
    static highlightsAmount: number;
    static highlightsContinuity: number;
    static highlightsLimit: number;
    static linearization: number;
    static method: number;
    static normalization: number;
    static shadowsAmount: number;
    static shadowsContinuity: number;
    static shadowsLimit: number;
    static statisticalDownLimit: number;
    static statisticalUpLimit: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Custom;
    FixedValueZone;
    ImageLinearization;
    Maximum;
    Mean;
    Median;
    Minimum;
    PlainDivision;
    StatisticalValueZone;
}
