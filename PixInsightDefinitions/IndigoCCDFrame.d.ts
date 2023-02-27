//-------------------------
//--------Constants--------
//-------------------------
/* declare const AlignmentDevice_PolygonMatching: IndigoCCDFrame.prototype.AlignmentDevice_PolygonMatching;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AlignmentDevice_TriangleSimilarity: IndigoCCDFrame.prototype.AlignmentDevice_TriangleSimilarity;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FrameType_Bias: IndigoCCDFrame.prototype.FrameType_Bias;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FrameType_Dark: IndigoCCDFrame.prototype.FrameType_Dark;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FrameType_Flat: IndigoCCDFrame.prototype.FrameType_Flat;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FrameType_Light: IndigoCCDFrame.prototype.FrameType_Light;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_Gnomonic: IndigoCCDFrame.prototype.Projection_Gnomonic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_HammerAitoff: IndigoCCDFrame.prototype.Projection_HammerAitoff;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_Mercator: IndigoCCDFrame.prototype.Projection_Mercator;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_Orthographic: IndigoCCDFrame.prototype.Projection_Orthographic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_PlateCarree: IndigoCCDFrame.prototype.Projection_PlateCarree;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_Stereographic: IndigoCCDFrame.prototype.Projection_Stereographic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Projection_ZenithalEqualArea: IndigoCCDFrame.prototype.Projection_ZenithalEqualArea;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TelescopeSelection_ActiveOrMountController: IndigoCCDFrame.prototype.TelescopeSelection_ActiveOrMountController;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TelescopeSelection_ActiveTelescope: IndigoCCDFrame.prototype.TelescopeSelection_ActiveTelescope;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TelescopeSelection_DeviceName: IndigoCCDFrame.prototype.TelescopeSelection_DeviceName;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TelescopeSelection_MountController: IndigoCCDFrame.prototype.TelescopeSelection_MountController;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TelescopeSelection_NoTelescope: IndigoCCDFrame.prototype.TelescopeSelection_NoTelescope;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const UploadMode_Client: IndigoCCDFrame.prototype.UploadMode_Client;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const UploadMode_Server: IndigoCCDFrame.prototype.UploadMode_Server;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const UploadMode_ServerAndClient: IndigoCCDFrame.prototype.UploadMode_ServerAndClient;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class IndigoCCDFrame extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alignmentModelFile: string;
    applyPlateSolver: boolean;
    autoStretch: boolean;
    binningX: number;
    binningY: number;
    centerTarget: boolean;
    clientDownloadDirectory: string;
    clientFileNameTemplate: string;
    clientFrames: Array<any>;
    clientOutputFormatHints: string;
    deviceName: string;
    enableAlignmentCorrection: boolean;
    exposureCount: number;
    exposureDelay: number;
    exposureTime: number;
    externalFilterWheelDeviceName: string;
    filterSlot: number;
    frameType: number;
    linkedAutoStretch: boolean;
    newImageIdTemplate: string;
    objectName: string;
    openClientImages: boolean;
    overwriteClientImages: boolean;
    requireSelectedTelescope: boolean;
    reuseImageWindow: boolean;
    saveClientImages: boolean;
    serverFileNameTemplate: string;
    serverFrames: Array<any>;
    serverURL: string;
    serverUploadDirectory: string;
    solverAlignmentDevice: number;
    solverAutoCatalog: boolean;
    solverAutoLimitMagnitude: boolean;
    solverCatalogName: string;
    solverDistortionCorrection: boolean;
    solverLimitMagnitude: number;
    solverNoiseLayers: number;
    solverProjection: number;
    solverSplineSmoothing: number;
    solverStarSensitivity: number;
    telescopeAperture: number;
    telescopeDeviceName: string;
    telescopeSelection: number;
    uploadMode: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoCCDFrame: IndigoCCDFrame);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static alignmentModelFile: string;
    static applyPlateSolver: boolean;
    static autoStretch: boolean;
    static binningX: number;
    static binningY: number;
    static centerTarget: boolean;
    static clientDownloadDirectory: string;
    static clientFileNameTemplate: string;
    static clientFrames: Array<any>;
    static clientOutputFormatHints: string;
    static deviceName: string;
    static enableAlignmentCorrection: boolean;
    static exposureCount: number;
    static exposureDelay: number;
    static exposureTime: number;
    static externalFilterWheelDeviceName: string;
    static filterSlot: number;
    static frameType: number;
    static linkedAutoStretch: boolean;
    static newImageIdTemplate: string;
    static objectName: string;
    static openClientImages: boolean;
    static overwriteClientImages: boolean;
    static requireSelectedTelescope: boolean;
    static reuseImageWindow: boolean;
    static saveClientImages: boolean;
    static serverFileNameTemplate: string;
    static serverFrames: Array<any>;
    static serverURL: string;
    static serverUploadDirectory: string;
    static solverAlignmentDevice: number;
    static solverAutoCatalog: boolean;
    static solverAutoLimitMagnitude: boolean;
    static solverCatalogName: string;
    static solverDistortionCorrection: boolean;
    static solverLimitMagnitude: number;
    static solverNoiseLayers: number;
    static solverProjection: number;
    static solverSplineSmoothing: number;
    static solverStarSensitivity: number;
    static telescopeAperture: number;
    static telescopeDeviceName: string;
    static telescopeSelection: number;
    static uploadMode: number;
}
