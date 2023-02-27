//-------------------------
//--------Constants--------
//-------------------------
/* declare const Average: IntegerResample.prototype.Average;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Maximum: IntegerResample.prototype.Maximum;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Median: IntegerResample.prototype.Median;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Minimum: IntegerResample.prototype.Minimum;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(IntegerResample: IntegerResample);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
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
}
