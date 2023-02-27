//-------------------------
//--------Constants--------
//-------------------------
/* declare const CIELab: ChannelCombination.prototype.CIELab;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CIELch: ChannelCombination.prototype.CIELch;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CIEXYZ: ChannelCombination.prototype.CIEXYZ;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const HSI: ChannelCombination.prototype.HSI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const HSV: ChannelCombination.prototype.HSV;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGB: ChannelCombination.prototype.RGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ChannelCombination extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array<any>;
    colorSpace: number;
    inheritAstrometricSolution: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ChannelCombination: ChannelCombination);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static channels: Array<any>;
    static colorSpace: number;
    static inheritAstrometricSolution: boolean;
}
