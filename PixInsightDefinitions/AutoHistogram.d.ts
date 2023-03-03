//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AutoHistogram extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    clip: boolean;
    clipHighB: number;
    clipHighG: number;
    clipHighR: number;
    clipLowB: number;
    clipLowG: number;
    clipLowR: number;
    clipTogether: boolean;
    isGammaEnabled: boolean;
    isGlobalGamma: boolean;
    isGlobalHistogramClip: boolean;
    isHistogramClipEnabled: boolean;
    medianB: number;
    medianG: number;
    medianR: number;
    stretch: boolean;
    stretchMethod: number;
    stretchTogether: boolean;
    targetMedianB: number;
    targetMedianG: number;
    targetMedianR: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AutoHistogram?: AutoHistogram);


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
    static clip: boolean;
    static clipHighB: number;
    static clipHighG: number;
    static clipHighR: number;
    static clipLowB: number;
    static clipLowG: number;
    static clipLowR: number;
    static clipTogether: boolean;
    static isGammaEnabled: boolean;
    static isGlobalGamma: boolean;
    static isGlobalHistogramClip: boolean;
    static isHistogramClipEnabled: boolean;
    static medianB: number;
    static medianG: number;
    static medianR: number;
    static stretch: boolean;
    static stretchMethod: number;
    static stretchTogether: boolean;
    static targetMedianB: number;
    static targetMedianG: number;
    static targetMedianR: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Gamma;
    Logarithm;
    MTF;
}
