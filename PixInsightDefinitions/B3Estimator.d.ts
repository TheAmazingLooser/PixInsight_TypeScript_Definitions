//-------------------------
//--------Constants--------
//-------------------------
/* declare const IntensityUnits_EnergyFrequency: B3Estimator.prototype.IntensityUnits_EnergyFrequency;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IntensityUnits_EnergyWavelength: B3Estimator.prototype.IntensityUnits_EnergyWavelength;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IntensityUnits_PhotonsFrequency: B3Estimator.prototype.IntensityUnits_PhotonsFrequency;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const IntensityUnits_PhotonsWavelength: B3Estimator.prototype.IntensityUnits_PhotonsWavelength;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class B3Estimator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh1: number;
    backgroundHigh2: number;
    backgroundLow1: number;
    backgroundLow2: number;
    backgroundROIX01: number;
    backgroundROIX02: number;
    backgroundROIX11: number;
    backgroundROIX12: number;
    backgroundROIY01: number;
    backgroundROIY02: number;
    backgroundROIY11: number;
    backgroundROIY12: number;
    backgroundReferenceViewId1: string;
    backgroundReferenceViewId2: string;
    backgroundUseROI1: boolean;
    backgroundUseROI2: boolean;
    inputCenter1: number;
    inputCenter2: number;
    inputViewId1: string;
    inputViewId2: string;
    intensityUnits: number;
    outOfRangeMask: boolean;
    outOfRangeMaskViewId: string;
    outputBackgroundReferenceMask1: boolean;
    outputBackgroundReferenceMask2: boolean;
    outputCenter: number;
    substractBackground1: boolean;
    substractBackground2: boolean;
    syntheticImage: boolean;
    syntheticImageViewId: string;
    thermalMap: boolean;
    thermalMapViewId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(B3Estimator: B3Estimator);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static backgroundHigh1: number;
    static backgroundHigh2: number;
    static backgroundLow1: number;
    static backgroundLow2: number;
    static backgroundROIX01: number;
    static backgroundROIX02: number;
    static backgroundROIX11: number;
    static backgroundROIX12: number;
    static backgroundROIY01: number;
    static backgroundROIY02: number;
    static backgroundROIY11: number;
    static backgroundROIY12: number;
    static backgroundReferenceViewId1: string;
    static backgroundReferenceViewId2: string;
    static backgroundUseROI1: boolean;
    static backgroundUseROI2: boolean;
    static inputCenter1: number;
    static inputCenter2: number;
    static inputViewId1: string;
    static inputViewId2: string;
    static intensityUnits: number;
    static outOfRangeMask: boolean;
    static outOfRangeMaskViewId: string;
    static outputBackgroundReferenceMask1: boolean;
    static outputBackgroundReferenceMask2: boolean;
    static outputCenter: number;
    static substractBackground1: boolean;
    static substractBackground2: boolean;
    static syntheticImage: boolean;
    static syntheticImageViewId: string;
    static thermalMap: boolean;
    static thermalMapViewId: string;
}
