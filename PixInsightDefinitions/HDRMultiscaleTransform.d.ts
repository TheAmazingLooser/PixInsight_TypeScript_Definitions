//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class HDRMultiscaleTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    deringing: boolean;
    invertedIterations: boolean;
    largeScaleDeringing: number;
    luminanceMask: boolean;
    medianTransform: boolean;
    midtonesBalance: number;
    midtonesBalanceMode: number;
    numberOfIterations: number;
    numberOfLayers: number;
    outputDeringingMaps: boolean;
    overdrive: number;
    preserveHue: boolean;
    scalingFunctionColFilter: Array<any>;
    scalingFunctionData: Array<any>;
    scalingFunctionName: string;
    scalingFunctionRowFilter: Array<any>;
    smallScaleDeringing: number;
    toLightness: boolean;
    toLuminanceOnly: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(HDRMultiscaleTransform?: HDRMultiscaleTransform);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static deringing: boolean;
    static invertedIterations: boolean;
    static largeScaleDeringing: number;
    static luminanceMask: boolean;
    static medianTransform: boolean;
    static midtonesBalance: number;
    static midtonesBalanceMode: number;
    static numberOfIterations: number;
    static numberOfLayers: number;
    static outputDeringingMaps: boolean;
    static overdrive: number;
    static preserveHue: boolean;
    static scalingFunctionColFilter: Array<any>;
    static scalingFunctionData: Array<any>;
    static scalingFunctionName: string;
    static scalingFunctionRowFilter: Array<any>;
    static smallScaleDeringing: number;
    static toLightness: boolean;
    static toLuminanceOnly: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    Automatic;
    Manual;
    NoMidtonesBalance;
}
