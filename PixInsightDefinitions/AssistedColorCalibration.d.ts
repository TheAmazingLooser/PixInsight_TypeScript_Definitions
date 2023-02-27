//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AssistedColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    BlueCorrectionFactor: number;
    GreenCorrectionFactor: number;
    HistogramHighlights: number;
    HistogramMidtones: number;
    HistogramShadows: number;
    SaturationBoost: number;
    backgroundRef: string;
    redCorrectionFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AssistedColorCalibration?: AssistedColorCalibration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static BlueCorrectionFactor: number;
    static GreenCorrectionFactor: number;
    static HistogramHighlights: number;
    static HistogramMidtones: number;
    static HistogramShadows: number;
    static SaturationBoost: number;
    static backgroundRef: string;
    static redCorrectionFactor: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
