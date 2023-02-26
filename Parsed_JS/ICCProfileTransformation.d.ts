//-------------------------
//--------Constants--------
//-------------------------
/* declare const AbsoluteColorimetric: ICCProfileTransformation.prototype.AbsoluteColorimetric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Perceptual: ICCProfileTransformation.prototype.Perceptual;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RelativeColorimetric: ICCProfileTransformation.prototype.RelativeColorimetric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Saturation: ICCProfileTransformation.prototype.Saturation;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ICCProfileTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    renderingIntent: number;
    targetProfile: string;
    toDefaultProfile: boolean;
    useBlackPointCompensation: boolean;
    useFloatingPointTransformation: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ICCProfileTransformation?: ICCProfileTransformation);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static renderingIntent: number;
    static targetProfile: string;
    static toDefaultProfile: boolean;
    static useBlackPointCompensation: boolean;
    static useFloatingPointTransformation: boolean;
}
