//-------------------------
//--------Constants--------
//-------------------------
/* declare const CT_Clip: GeneralizedHyperbolicStretch.prototype.CT_Clip;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CT_RGBBlend: GeneralizedHyperbolicStretch.prototype.CT_RGBBlend;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CT_Rescale: GeneralizedHyperbolicStretch.prototype.CT_Rescale;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CT_RescaleGlobal: GeneralizedHyperbolicStretch.prototype.CT_RescaleGlobal;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_Blue: GeneralizedHyperbolicStretch.prototype.SC_Blue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_Colour: GeneralizedHyperbolicStretch.prototype.SC_Colour;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_Green: GeneralizedHyperbolicStretch.prototype.SC_Green;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_Lightness: GeneralizedHyperbolicStretch.prototype.SC_Lightness;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_RGB: GeneralizedHyperbolicStretch.prototype.SC_RGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_Red: GeneralizedHyperbolicStretch.prototype.SC_Red;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SC_Saturation: GeneralizedHyperbolicStretch.prototype.SC_Saturation;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ST_Arcsinh: GeneralizedHyperbolicStretch.prototype.ST_Arcsinh;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ST_GeneralisedHyperbolic: GeneralizedHyperbolicStretch.prototype.ST_GeneralisedHyperbolic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ST_Linear: GeneralizedHyperbolicStretch.prototype.ST_Linear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ST_MidtonesTransfer: GeneralizedHyperbolicStretch.prototype.ST_MidtonesTransfer;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class GeneralizedHyperbolicStretch extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    blackPoint: number;
    clipType: number;
    colourBlend: number;
    highlightProtection: number;
    inverse: boolean;
    localIntensity: number;
    shadowProtection: number;
    stretchChannel: number;
    stretchFactor: number;
    stretchType: number;
    symmetryPoint: number;
    useRGBWorkingSpace: boolean;
    whitePoint: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GeneralizedHyperbolicStretch?: GeneralizedHyperbolicStretch);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static blackPoint: number;
    static clipType: number;
    static colourBlend: number;
    static highlightProtection: number;
    static inverse: boolean;
    static localIntensity: number;
    static shadowProtection: number;
    static stretchChannel: number;
    static stretchFactor: number;
    static stretchType: number;
    static symmetryPoint: number;
    static useRGBWorkingSpace: boolean;
    static whitePoint: number;
}
