//-------------------------
//--------Constants--------
//-------------------------
/* declare const Impulsional: NoiseGenerator.prototype.Impulsional;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const None: NoiseGenerator.prototype.None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Normal: NoiseGenerator.prototype.Normal;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Poisson: NoiseGenerator.prototype.Poisson;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PreserveMean: NoiseGenerator.prototype.PreserveMean;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PreserveMedian: NoiseGenerator.prototype.PreserveMedian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Uniform: NoiseGenerator.prototype.Uniform;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
}
