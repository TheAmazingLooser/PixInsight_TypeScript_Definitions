//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IntegerResample extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    downsamplingMode: number;
    forceResolution: boolean;
    gammaCorrection: boolean;
    metric: boolean;
    noGUIMessages: boolean;
    subsampleMode: number;
    xResolution: number;
    yResolution: number;
    zoomFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IntegerResample?: IntegerResample);


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
    static downsamplingMode: number;
    static forceResolution: boolean;
    static gammaCorrection: boolean;
    static metric: boolean;
    static noGUIMessages: boolean;
    static subsampleMode: number;
    static xResolution: number;
    static yResolution: number;
    static zoomFactor: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Average;
    Maximum;
    Median;
    Minimum;
}
