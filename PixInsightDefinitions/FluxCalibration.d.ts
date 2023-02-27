//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FluxCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aperture: number;
    apertureKeyword: string;
    apertureMode: number;
    atmosphericExtinction: number;
    atmosphericExtinctionKeyword: string;
    atmosphericExtinctionMode: number;
    centralObstruction: number;
    centralObstructionKeyword: string;
    centralObstructionMode: number;
    exposureTime: number;
    exposureTimeKeyword: string;
    exposureTimeMode: number;
    filterWidth: number;
    filterWidthKeyword: string;
    filterWidthMode: number;
    quantumEfficiency: number;
    quantumEfficiencyKeyword: string;
    quantumEfficiencyMode: number;
    sensorGain: number;
    sensorGainKeyword: string;
    sensorGainMode: number;
    transmissivity: number;
    transmissivityKeyword: string;
    transmissivityMode: number;
    wavelength: number;
    wavelengthKeyword: string;
    wavelengthMode: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(FluxCalibration?: FluxCalibration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static aperture: number;
    static apertureKeyword: string;
    static apertureMode: number;
    static atmosphericExtinction: number;
    static atmosphericExtinctionKeyword: string;
    static atmosphericExtinctionMode: number;
    static centralObstruction: number;
    static centralObstructionKeyword: string;
    static centralObstructionMode: number;
    static exposureTime: number;
    static exposureTimeKeyword: string;
    static exposureTimeMode: number;
    static filterWidth: number;
    static filterWidthKeyword: string;
    static filterWidthMode: number;
    static quantumEfficiency: number;
    static quantumEfficiencyKeyword: string;
    static quantumEfficiencyMode: number;
    static sensorGain: number;
    static sensorGainKeyword: string;
    static sensorGainMode: number;
    static transmissivity: number;
    static transmissivityKeyword: string;
    static transmissivityMode: number;
    static wavelength: number;
    static wavelengthKeyword: string;
    static wavelengthMode: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    CustomKeyword;
    Literal;
    StandardKeyword;
}
