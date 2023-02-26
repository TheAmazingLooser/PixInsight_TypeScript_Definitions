//-------------------------
//--------Constants--------
//-------------------------
/* declare const Bilinear: GREYCstoration.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Nearest: GREYCstoration.prototype.Nearest;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RungeKutta: GREYCstoration.prototype.RungeKutta;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class GREYCstoration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amplitude: number;
    angularIntegrationStep: number;
    anisotropy: number;
    contourPreservation: number;
    coupledChannels: boolean;
    fastApproximation: boolean;
    geometryRegularity: number;
    interpolation: number;
    noiseScale: number;
    numberOfIterations: number;
    precision: number;
    spatialIntegrationStep: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GREYCstoration?: GREYCstoration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amplitude: number;
    static angularIntegrationStep: number;
    static anisotropy: number;
    static contourPreservation: number;
    static coupledChannels: boolean;
    static fastApproximation: boolean;
    static geometryRegularity: number;
    static interpolation: number;
    static noiseScale: number;
    static numberOfIterations: number;
    static precision: number;
    static spatialIntegrationStep: number;
}
