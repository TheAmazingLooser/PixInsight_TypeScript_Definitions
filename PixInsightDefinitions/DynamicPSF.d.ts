//-------------------------
//--------Constants--------
//-------------------------
/* declare const Function_Gaussian: DynamicPSF.prototype.Function_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Lorentzian: DynamicPSF.prototype.Function_Lorentzian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat: DynamicPSF.prototype.Function_Moffat;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat10: DynamicPSF.prototype.Function_Moffat10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat15: DynamicPSF.prototype.Function_Moffat15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat25: DynamicPSF.prototype.Function_Moffat25;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat4: DynamicPSF.prototype.Function_Moffat4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat6: DynamicPSF.prototype.Function_Moffat6;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_Moffat8: DynamicPSF.prototype.Function_Moffat8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Function_VariableShape: DynamicPSF.prototype.Function_VariableShape;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_BadParameters: DynamicPSF.prototype.PSF_BadParameters;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_FittedOk: DynamicPSF.prototype.PSF_FittedOk;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_InaccurateSolution: DynamicPSF.prototype.PSF_InaccurateSolution;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_NoConvergence: DynamicPSF.prototype.PSF_NoConvergence;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_NoSolution: DynamicPSF.prototype.PSF_NoSolution;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_NotFitted: DynamicPSF.prototype.PSF_NotFitted;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PSF_UnknownError: DynamicPSF.prototype.PSF_UnknownError;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Scale_CustomKeyword: DynamicPSF.prototype.Scale_CustomKeyword;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Scale_LiteralValue: DynamicPSF.prototype.Scale_LiteralValue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Scale_Pixels: DynamicPSF.prototype.Scale_Pixels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Scale_StandardMetadata: DynamicPSF.prototype.Scale_StandardMetadata;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_CrossingEdges: DynamicPSF.prototype.Star_CrossingEdges;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_DetectedOk: DynamicPSF.prototype.Star_DetectedOk;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_NoConvergence: DynamicPSF.prototype.Star_NoConvergence;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_NoSignificantData: DynamicPSF.prototype.Star_NoSignificantData;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_NotDetected: DynamicPSF.prototype.Star_NotDetected;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_OutsideImage: DynamicPSF.prototype.Star_OutsideImage;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Star_UnknownError: DynamicPSF.prototype.Star_UnknownError;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicPSF extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    astrometry: boolean;
    autoAperture: boolean;
    autoPSF: boolean;
    autoVariableShapePSF: boolean;
    badStarColor: number;
    badStarFillColor: number;
    betaMax: number;
    betaMin: number;
    circularPSF: boolean;
    gaussianPSF: boolean;
    lorentzianPSF: boolean;
    moffat10PSF: boolean;
    moffat15PSF: boolean;
    moffat25PSF: boolean;
    moffat4PSF: boolean;
    moffat6PSF: boolean;
    moffat8PSF: boolean;
    moffatPSF: boolean;
    psf: Array<any>;
    regenerate: boolean;
    scaleKeyword: string;
    scaleMode: number;
    scaleValue: number;
    searchRadius: number;
    selectedStarColor: number;
    selectedStarFillColor: number;
    signedAngles: boolean;
    starColor: number;
    stars: Array<any>;
    threshold: number;
    variableShapePSF: boolean;
    views: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicPSF?: DynamicPSF);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static astrometry: boolean;
    static autoAperture: boolean;
    static autoPSF: boolean;
    static autoVariableShapePSF: boolean;
    static badStarColor: number;
    static badStarFillColor: number;
    static betaMax: number;
    static betaMin: number;
    static circularPSF: boolean;
    static gaussianPSF: boolean;
    static lorentzianPSF: boolean;
    static moffat10PSF: boolean;
    static moffat15PSF: boolean;
    static moffat25PSF: boolean;
    static moffat4PSF: boolean;
    static moffat6PSF: boolean;
    static moffat8PSF: boolean;
    static moffatPSF: boolean;
    static psf: Array<any>;
    static regenerate: boolean;
    static scaleKeyword: string;
    static scaleMode: number;
    static scaleValue: number;
    static searchRadius: number;
    static selectedStarColor: number;
    static selectedStarFillColor: number;
    static signedAngles: boolean;
    static starColor: number;
    static stars: Array<any>;
    static threshold: number;
    static variableShapePSF: boolean;
    static views: Array<any>;
}
