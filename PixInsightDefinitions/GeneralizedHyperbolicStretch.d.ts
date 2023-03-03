//-------------------------
//--------Constants--------
//-------------------------


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
    //-----event-handlers------
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


    //-------------------------
    //--------constants--------
    //-------------------------
    CT_Clip;
    CT_RGBBlend;
    CT_Rescale;
    CT_RescaleGlobal;
    SC_Blue;
    SC_Colour;
    SC_Green;
    SC_Lightness;
    SC_RGB;
    SC_Red;
    SC_Saturation;
    ST_Arcsinh;
    ST_GeneralisedHyperbolic;
    ST_Linear;
    ST_MidtonesTransfer;
}
