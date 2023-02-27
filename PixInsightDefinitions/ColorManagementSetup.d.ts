//-------------------------
//--------Constants--------
//-------------------------
/* declare const AbsoluteColorimetric: ColorManagementSetup.prototype.AbsoluteColorimetric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AskUser: ColorManagementSetup.prototype.AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AssignDefault: ColorManagementSetup.prototype.AssignDefault;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ConvertToDefault: ColorManagementSetup.prototype.ConvertToDefault;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DisableCM: ColorManagementSetup.prototype.DisableCM;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DiscardEmbedded: ColorManagementSetup.prototype.DiscardEmbedded;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const KeepEmbedded: ColorManagementSetup.prototype.KeepEmbedded;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LeaveUntagged: ColorManagementSetup.prototype.LeaveUntagged;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Perceptual: ColorManagementSetup.prototype.Perceptual;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RelativeColorimetric: ColorManagementSetup.prototype.RelativeColorimetric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Saturation: ColorManagementSetup.prototype.Saturation;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ColorManagementSetup extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    defaultEmbedProfilesInGrayscaleImages: boolean;
    defaultEmbedProfilesInRGBImages: boolean;
    defaultGamutCheckEnabled: boolean;
    defaultGrayscaleProfile: string;
    defaultProofingEnabled: boolean;
    defaultRGBProfile: string;
    defaultRenderingIntent: number;
    detectMonitorProfile: boolean;
    enabled: boolean;
    gamutWarningColor: number;
    onMissingProfile: number;
    onProfileMismatch: number;
    proofingIntent: number;
    proofingProfile: string;
    updateMonitorProfile: string;
    useLowResolutionCLUTs: boolean;
    useProofingBPC: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ColorManagementSetup: ColorManagementSetup);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static defaultEmbedProfilesInGrayscaleImages: boolean;
    static defaultEmbedProfilesInRGBImages: boolean;
    static defaultGamutCheckEnabled: boolean;
    static defaultGrayscaleProfile: string;
    static defaultProofingEnabled: boolean;
    static defaultRGBProfile: string;
    static defaultRenderingIntent: number;
    static detectMonitorProfile: boolean;
    static enabled: boolean;
    static gamutWarningColor: number;
    static onMissingProfile: number;
    static onProfileMismatch: number;
    static proofingIntent: number;
    static proofingProfile: string;
    static updateMonitorProfile: string;
    static useLowResolutionCLUTs: boolean;
    static useProofingBPC: boolean;
}
