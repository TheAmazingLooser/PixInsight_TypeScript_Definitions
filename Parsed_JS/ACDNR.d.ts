//-------------------------
//--------Constants--------
//-------------------------
/* declare const Median3x3: ACDNR.prototype.Median3x3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Median5x5: ACDNR.prototype.Median5x5;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Multiscale: ACDNR.prototype.Multiscale;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const None: ACDNR.prototype.None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Recursive: ACDNR.prototype.Recursive;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const UnweightedAverage3x3: ACDNR.prototype.UnweightedAverage3x3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const WeightedAverage3x3: ACDNR.prototype.WeightedAverage3x3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const WeightedAverage5x5: ACDNR.prototype.WeightedAverage5x5;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ACDNR extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amountC: number;
    amountL: number;
    applyToChrominance: boolean;
    applyToLightness: boolean;
    applyToLuminance: boolean;
    brightSidesOverdriveC: number;
    brightSidesOverdriveL: number;
    brightSidesThresholdC: number;
    brightSidesThresholdL: number;
    darkSidesOverdriveC: number;
    darkSidesOverdriveL: number;
    darkSidesThresholdC: number;
    darkSidesThresholdL: number;
    iterationsC: number;
    iterationsL: number;
    maskHighlightsClipping: number;
    maskMTF: number;
    maskRemovedWaveletLayers: number;
    maskShadowsClipping: number;
    minStructSizeC: number;
    minStructSizeL: number;
    prefilterMethodC: number;
    prefilterMethodL: number;
    previewMask: boolean;
    protectBrightSidesC: boolean;
    protectBrightSidesL: boolean;
    protectDarkSidesC: boolean;
    protectDarkSidesL: boolean;
    protectionMethodC: number;
    protectionMethodL: number;
    shapeC: number;
    shapeL: number;
    sigmaC: number;
    sigmaL: number;
    starProtectionC: boolean;
    starProtectionL: boolean;
    starThresholdC: number;
    starThresholdL: number;
    useMaskC: boolean;
    useMaskL: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ACDNR?: ACDNR);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amountC: number;
    static amountL: number;
    static applyToChrominance: boolean;
    static applyToLightness: boolean;
    static applyToLuminance: boolean;
    static brightSidesOverdriveC: number;
    static brightSidesOverdriveL: number;
    static brightSidesThresholdC: number;
    static brightSidesThresholdL: number;
    static darkSidesOverdriveC: number;
    static darkSidesOverdriveL: number;
    static darkSidesThresholdC: number;
    static darkSidesThresholdL: number;
    static iterationsC: number;
    static iterationsL: number;
    static maskHighlightsClipping: number;
    static maskMTF: number;
    static maskRemovedWaveletLayers: number;
    static maskShadowsClipping: number;
    static minStructSizeC: number;
    static minStructSizeL: number;
    static prefilterMethodC: number;
    static prefilterMethodL: number;
    static previewMask: boolean;
    static protectBrightSidesC: boolean;
    static protectBrightSidesL: boolean;
    static protectDarkSidesC: boolean;
    static protectDarkSidesL: boolean;
    static protectionMethodC: number;
    static protectionMethodL: number;
    static shapeC: number;
    static shapeL: number;
    static sigmaC: number;
    static sigmaL: number;
    static starProtectionC: boolean;
    static starProtectionL: boolean;
    static starThresholdC: number;
    static starThresholdL: number;
    static useMaskC: boolean;
    static useMaskL: boolean;
}
