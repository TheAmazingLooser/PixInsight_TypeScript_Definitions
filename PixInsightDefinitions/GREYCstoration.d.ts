//-------------------------
//--------Constants--------
//-------------------------


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
    //-----event-handlers------
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


    //-------------------------
    //--------constants--------
    //-------------------------
    Bilinear;
    Nearest;
    RungeKutta;
}
