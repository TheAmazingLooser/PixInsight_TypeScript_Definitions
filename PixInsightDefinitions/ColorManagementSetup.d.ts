//-------------------------
//--------Constants--------
//-------------------------


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
    constructor(ColorManagementSetup?: ColorManagementSetup);


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


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteColorimetric;
    AskUser;
    AssignDefault;
    ConvertToDefault;
    DisableCM;
    DiscardEmbedded;
    KeepEmbedded;
    LeaveUntagged;
    Perceptual;
    RelativeColorimetric;
    Saturation;
}
