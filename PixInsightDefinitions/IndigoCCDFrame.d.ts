//-------------------------
//--------Constants--------
//-------------------------


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
    constructor(IndigoCCDFrame?: IndigoCCDFrame);


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


    //-------------------------
    //--------constants--------
    //-------------------------
    AlignmentDevice_PolygonMatching;
    AlignmentDevice_TriangleSimilarity;
    FrameType_Bias;
    FrameType_Dark;
    FrameType_Flat;
    FrameType_Light;
    Projection_Gnomonic;
    Projection_HammerAitoff;
    Projection_Mercator;
    Projection_Orthographic;
    Projection_PlateCarree;
    Projection_Stereographic;
    Projection_ZenithalEqualArea;
    TelescopeSelection_ActiveOrMountController;
    TelescopeSelection_ActiveTelescope;
    TelescopeSelection_DeviceName;
    TelescopeSelection_MountController;
    TelescopeSelection_NoTelescope;
    UploadMode_Client;
    UploadMode_Server;
    UploadMode_ServerAndClient;
}
