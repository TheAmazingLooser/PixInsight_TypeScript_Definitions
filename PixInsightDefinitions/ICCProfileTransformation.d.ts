//-------------------------
//--------Constants--------
//-------------------------


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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static renderingIntent: number;
    static targetProfile: string;
    static toDefaultProfile: boolean;
    static useBlackPointCompensation: boolean;
    static useFloatingPointTransformation: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteColorimetric;
    Perceptual;
    RelativeColorimetric;
    Saturation;
}
