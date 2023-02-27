//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NoiseGenerator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    distribution: number;
    impulsionalNoiseProbability: number;
    preserveBrightness: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(NoiseGenerator?: NoiseGenerator);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amount: number;
    static distribution: number;
    static impulsionalNoiseProbability: number;
    static preserveBrightness: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Impulsional;
    None;
    Normal;
    Poisson;
    PreserveMean;
    PreserveMedian;
    Uniform;
}
