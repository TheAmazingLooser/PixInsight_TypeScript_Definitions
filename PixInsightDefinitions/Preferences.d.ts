//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Preferences extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    Application_asteroidEphemeridesFile: string;
    Application_autoUIScaling: boolean;
    Application_cipITRSDataFile: string;
    Application_deltaATDataFile: string;
    Application_deltaTDataFile: string;
    Application_fontResolution: number;
    Application_fundamentalEphemeridesFile: string;
    Application_highResFont: string;
    Application_highResMonoFont: string;
    Application_kboEphemeridesFile: string;
    Application_lowResFont: string;
    Application_lowResMonoFont: string;
    Application_nutationModelFile: string;
    Application_resourceFile01: string;
    Application_resourceFile02: string;
    Application_resourceFile03: string;
    Application_resourceFile04: string;
    Application_resourceFile05: string;
    Application_resourceFile06: string;
    Application_resourceFile07: string;
    Application_resourceFile08: string;
    Application_resourceFile09: string;
    Application_resourceFile10: string;
    Application_shortTermAsteroidEphemeridesFile: string;
    Application_shortTermFundamentalEphemeridesFile: string;
    Application_shortTermKBOEphemeridesFile: string;
    Application_shortTermNutationModelFile: string;
    Application_styleSheetFile: string;
    Application_uiScalingFactor: number;
    Identifiers_brokenLinkText: string;
    Identifiers_clonePostfix: string;
    Identifiers_imageContainerIconPrefix: string;
    Identifiers_imagePrefix: string;
    Identifiers_newImageCaption: string;
    Identifiers_noPreviewSelectedText: string;
    Identifiers_noPreviewsAvailableText: string;
    Identifiers_noViewSelectedText: string;
    Identifiers_noViewsAvailableText: string;
    Identifiers_previewPrefix: string;
    Identifiers_processIconPrefix: string;
    Identifiers_workspacePrefix: string;
    ImageWindow_backupFiles: boolean;
    ImageWindow_createPreviewsFromCoreProperties: boolean;
    ImageWindow_cursorTolerance: number;
    ImageWindow_default24BitScreenLUT: boolean;
    ImageWindow_defaultEmbedProperties: boolean;
    ImageWindow_defaultEmbedThumbnails: boolean;
    ImageWindow_defaultFileExtension: string;
    ImageWindow_defaultHorizontalResolution: number;
    ImageWindow_defaultMaskMode: number;
    ImageWindow_defaultMasksShown: boolean;
    ImageWindow_defaultMetricResolution: boolean;
    ImageWindow_defaultTransparencyColor: number;
    ImageWindow_defaultTransparencyMode: number;
    ImageWindow_defaultVerticalResolution: number;
    ImageWindow_downloadsDirectory: string;
    ImageWindow_fastScreenRenditionThreshold: number;
    ImageWindow_fastScreenRenditions: boolean;
    ImageWindow_fileFormatWarnings: boolean;
    ImageWindow_followDownloadLocations: boolean;
    ImageWindow_highDPIRenditions: boolean;
    ImageWindow_loadAstrometricSolutions: boolean;
    ImageWindow_loadInitialProcessingFromCoreProperties: boolean;
    ImageWindow_nativeFileDialogs: boolean;
    ImageWindow_pinchSensitivity: number;
    ImageWindow_proxyURL: string;
    ImageWindow_rememberFileOpenType: boolean;
    ImageWindow_rememberFileSaveType: boolean;
    ImageWindow_showActiveSTFIndicators: boolean;
    ImageWindow_showCaptionCurrentChannels: boolean;
    ImageWindow_showCaptionFullPaths: boolean;
    ImageWindow_showCaptionIdentifiers: boolean;
    ImageWindow_showCaptionZoomRatios: boolean;
    ImageWindow_strictFileSaveMode: boolean;
    ImageWindow_swapCompression: boolean;
    ImageWindow_swapDirectories: Array<any>;
    ImageWindow_touchEvents: boolean;
    ImageWindow_transparencyBrush: number;
    ImageWindow_transparencyBrushBackgroundColor: number;
    ImageWindow_transparencyBrushForegroundColor: number;
    ImageWindow_useFileNamesAsImageIdentifiers: boolean;
    ImageWindow_verboseNetworkOperations: boolean;
    ImageWindow_wheelDirection: number;
    ImageWindow_wheelStepAngle: number;
    ImageWindow_zoomAtCursor: boolean;
    MainWindow_acceptDroppedFiles: boolean;
    MainWindow_animateCombo: boolean;
    MainWindow_animateMenu: boolean;
    MainWindow_animateToolBox: boolean;
    MainWindow_animateToolTip: boolean;
    MainWindow_animateWindows: boolean;
    MainWindow_capitalizedMenuBars: boolean;
    MainWindow_checkForUpdatesAtStartup: boolean;
    MainWindow_confirmProgramTermination: boolean;
    MainWindow_desktopSettingsAware: boolean;
    MainWindow_doubleClickLaunchesOpenDialog: boolean;
    MainWindow_expandFavoritesAtStartup: boolean;
    MainWindow_expandMostUsedAtStartup: boolean;
    MainWindow_expandRecentlyUsedAtStartup: boolean;
    MainWindow_explodeIcons: boolean;
    MainWindow_fadeAutoHideWindows: boolean;
    MainWindow_fadeMenu: boolean;
    MainWindow_fadeToolTip: boolean;
    MainWindow_fadeWindows: boolean;
    MainWindow_fadeWorkspaces: boolean;
    MainWindow_fullScreenAtStartup: boolean;
    MainWindow_highQualityWallpapers: boolean;
    MainWindow_hoverableAutoHideWindows: boolean;
    MainWindow_iconGridSpacing: number;
    MainWindow_implodeIcons: boolean;
    MainWindow_maxRecentFiles: number;
    MainWindow_maxUsageListLength: number;
    MainWindow_maximizeAtStartup: boolean;
    MainWindow_nativeMenuBar: boolean;
    MainWindow_openResourcesOnNewWebBrowserWindows: boolean;
    MainWindow_openURLsWithInternalBrowser: boolean;
    MainWindow_privateWebBrowsingMode: boolean;
    MainWindow_showFavorites: boolean;
    MainWindow_showMostUsed: boolean;
    MainWindow_showRecentlyUsed: boolean;
    MainWindow_showSplashAtStartup: boolean;
    MainWindow_translucentAutoHideWindows: boolean;
    MainWindow_translucentChildWindows: boolean;
    MainWindow_translucentWindows: boolean;
    MainWindow_useWallpapers: boolean;
    MainWindow_wallpaperFile01: string;
    MainWindow_wallpaperFile02: string;
    MainWindow_wallpaperFile03: string;
    MainWindow_wallpaperFile04: string;
    MainWindow_wallpaperFile05: string;
    MainWindow_wallpaperFile06: string;
    MainWindow_wallpaperFile07: string;
    MainWindow_wallpaperFile08: string;
    MainWindow_wallpaperFile09: string;
    MainWindow_wallpaperFile10: string;
    MainWindow_windowButtonsOnTheLeft: boolean;
    Process_alertOnProcessCompleted: boolean;
    Process_autoSavePSMPeriod: number;
    Process_backupFiles: boolean;
    Process_consoleDelay: number;
    Process_enableCUDAAcceleration: boolean;
    Process_enableExecutionStatistics: boolean;
    Process_enableLaunchStatistics: boolean;
    Process_enableParallelCoreColorManagement: boolean;
    Process_enableParallelCoreRendering: boolean;
    Process_enableParallelModuleProcessing: boolean;
    Process_enableParallelProcessing: boolean;
    Process_enableThreadCPUAffinity: boolean;
    Process_generateScriptComments: boolean;
    Process_initCUDARuntimeAtStartup: boolean;
    Process_maxConsoleLines: number;
    Process_maxFileReadThreads: number;
    Process_maxFileWriteThreads: number;
    Process_maxModuleThreadPriority: number;
    Process_maxProcessors: number;
    Security_allowInsecureRepositories: boolean;
    Security_allowUnsignedRepositories: boolean;
    Security_allowUnsignedScriptExecution: boolean;
    Security_enableLocalSigningIdentity: boolean;
    Security_reportScriptSignatures: boolean;
    Security_warnOnUnsignedCodeExecution: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Preferences?: Preferences);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static Application_asteroidEphemeridesFile: string;
    static Application_autoUIScaling: boolean;
    static Application_cipITRSDataFile: string;
    static Application_deltaATDataFile: string;
    static Application_deltaTDataFile: string;
    static Application_fontResolution: number;
    static Application_fundamentalEphemeridesFile: string;
    static Application_highResFont: string;
    static Application_highResMonoFont: string;
    static Application_kboEphemeridesFile: string;
    static Application_lowResFont: string;
    static Application_lowResMonoFont: string;
    static Application_nutationModelFile: string;
    static Application_resourceFile01: string;
    static Application_resourceFile02: string;
    static Application_resourceFile03: string;
    static Application_resourceFile04: string;
    static Application_resourceFile05: string;
    static Application_resourceFile06: string;
    static Application_resourceFile07: string;
    static Application_resourceFile08: string;
    static Application_resourceFile09: string;
    static Application_resourceFile10: string;
    static Application_shortTermAsteroidEphemeridesFile: string;
    static Application_shortTermFundamentalEphemeridesFile: string;
    static Application_shortTermKBOEphemeridesFile: string;
    static Application_shortTermNutationModelFile: string;
    static Application_styleSheetFile: string;
    static Application_uiScalingFactor: number;
    static Identifiers_brokenLinkText: string;
    static Identifiers_clonePostfix: string;
    static Identifiers_imageContainerIconPrefix: string;
    static Identifiers_imagePrefix: string;
    static Identifiers_newImageCaption: string;
    static Identifiers_noPreviewSelectedText: string;
    static Identifiers_noPreviewsAvailableText: string;
    static Identifiers_noViewSelectedText: string;
    static Identifiers_noViewsAvailableText: string;
    static Identifiers_previewPrefix: string;
    static Identifiers_processIconPrefix: string;
    static Identifiers_workspacePrefix: string;
    static ImageWindow_backupFiles: boolean;
    static ImageWindow_createPreviewsFromCoreProperties: boolean;
    static ImageWindow_cursorTolerance: number;
    static ImageWindow_default24BitScreenLUT: boolean;
    static ImageWindow_defaultEmbedProperties: boolean;
    static ImageWindow_defaultEmbedThumbnails: boolean;
    static ImageWindow_defaultFileExtension: string;
    static ImageWindow_defaultHorizontalResolution: number;
    static ImageWindow_defaultMaskMode: number;
    static ImageWindow_defaultMasksShown: boolean;
    static ImageWindow_defaultMetricResolution: boolean;
    static ImageWindow_defaultTransparencyColor: number;
    static ImageWindow_defaultTransparencyMode: number;
    static ImageWindow_defaultVerticalResolution: number;
    static ImageWindow_downloadsDirectory: string;
    static ImageWindow_fastScreenRenditionThreshold: number;
    static ImageWindow_fastScreenRenditions: boolean;
    static ImageWindow_fileFormatWarnings: boolean;
    static ImageWindow_followDownloadLocations: boolean;
    static ImageWindow_highDPIRenditions: boolean;
    static ImageWindow_loadAstrometricSolutions: boolean;
    static ImageWindow_loadInitialProcessingFromCoreProperties: boolean;
    static ImageWindow_nativeFileDialogs: boolean;
    static ImageWindow_pinchSensitivity: number;
    static ImageWindow_proxyURL: string;
    static ImageWindow_rememberFileOpenType: boolean;
    static ImageWindow_rememberFileSaveType: boolean;
    static ImageWindow_showActiveSTFIndicators: boolean;
    static ImageWindow_showCaptionCurrentChannels: boolean;
    static ImageWindow_showCaptionFullPaths: boolean;
    static ImageWindow_showCaptionIdentifiers: boolean;
    static ImageWindow_showCaptionZoomRatios: boolean;
    static ImageWindow_strictFileSaveMode: boolean;
    static ImageWindow_swapCompression: boolean;
    static ImageWindow_swapDirectories: Array<any>;
    static ImageWindow_touchEvents: boolean;
    static ImageWindow_transparencyBrush: number;
    static ImageWindow_transparencyBrushBackgroundColor: number;
    static ImageWindow_transparencyBrushForegroundColor: number;
    static ImageWindow_useFileNamesAsImageIdentifiers: boolean;
    static ImageWindow_verboseNetworkOperations: boolean;
    static ImageWindow_wheelDirection: number;
    static ImageWindow_wheelStepAngle: number;
    static ImageWindow_zoomAtCursor: boolean;
    static MainWindow_acceptDroppedFiles: boolean;
    static MainWindow_animateCombo: boolean;
    static MainWindow_animateMenu: boolean;
    static MainWindow_animateToolBox: boolean;
    static MainWindow_animateToolTip: boolean;
    static MainWindow_animateWindows: boolean;
    static MainWindow_capitalizedMenuBars: boolean;
    static MainWindow_checkForUpdatesAtStartup: boolean;
    static MainWindow_confirmProgramTermination: boolean;
    static MainWindow_desktopSettingsAware: boolean;
    static MainWindow_doubleClickLaunchesOpenDialog: boolean;
    static MainWindow_expandFavoritesAtStartup: boolean;
    static MainWindow_expandMostUsedAtStartup: boolean;
    static MainWindow_expandRecentlyUsedAtStartup: boolean;
    static MainWindow_explodeIcons: boolean;
    static MainWindow_fadeAutoHideWindows: boolean;
    static MainWindow_fadeMenu: boolean;
    static MainWindow_fadeToolTip: boolean;
    static MainWindow_fadeWindows: boolean;
    static MainWindow_fadeWorkspaces: boolean;
    static MainWindow_fullScreenAtStartup: boolean;
    static MainWindow_highQualityWallpapers: boolean;
    static MainWindow_hoverableAutoHideWindows: boolean;
    static MainWindow_iconGridSpacing: number;
    static MainWindow_implodeIcons: boolean;
    static MainWindow_maxRecentFiles: number;
    static MainWindow_maxUsageListLength: number;
    static MainWindow_maximizeAtStartup: boolean;
    static MainWindow_nativeMenuBar: boolean;
    static MainWindow_openResourcesOnNewWebBrowserWindows: boolean;
    static MainWindow_openURLsWithInternalBrowser: boolean;
    static MainWindow_privateWebBrowsingMode: boolean;
    static MainWindow_showFavorites: boolean;
    static MainWindow_showMostUsed: boolean;
    static MainWindow_showRecentlyUsed: boolean;
    static MainWindow_showSplashAtStartup: boolean;
    static MainWindow_translucentAutoHideWindows: boolean;
    static MainWindow_translucentChildWindows: boolean;
    static MainWindow_translucentWindows: boolean;
    static MainWindow_useWallpapers: boolean;
    static MainWindow_wallpaperFile01: string;
    static MainWindow_wallpaperFile02: string;
    static MainWindow_wallpaperFile03: string;
    static MainWindow_wallpaperFile04: string;
    static MainWindow_wallpaperFile05: string;
    static MainWindow_wallpaperFile06: string;
    static MainWindow_wallpaperFile07: string;
    static MainWindow_wallpaperFile08: string;
    static MainWindow_wallpaperFile09: string;
    static MainWindow_wallpaperFile10: string;
    static MainWindow_windowButtonsOnTheLeft: boolean;
    static Process_alertOnProcessCompleted: boolean;
    static Process_autoSavePSMPeriod: number;
    static Process_backupFiles: boolean;
    static Process_consoleDelay: number;
    static Process_enableCUDAAcceleration: boolean;
    static Process_enableExecutionStatistics: boolean;
    static Process_enableLaunchStatistics: boolean;
    static Process_enableParallelCoreColorManagement: boolean;
    static Process_enableParallelCoreRendering: boolean;
    static Process_enableParallelModuleProcessing: boolean;
    static Process_enableParallelProcessing: boolean;
    static Process_enableThreadCPUAffinity: boolean;
    static Process_generateScriptComments: boolean;
    static Process_initCUDARuntimeAtStartup: boolean;
    static Process_maxConsoleLines: number;
    static Process_maxFileReadThreads: number;
    static Process_maxFileWriteThreads: number;
    static Process_maxModuleThreadPriority: number;
    static Process_maxProcessors: number;
    static Security_allowInsecureRepositories: boolean;
    static Security_allowUnsignedRepositories: boolean;
    static Security_allowUnsignedScriptExecution: boolean;
    static Security_enableLocalSigningIdentity: boolean;
    static Security_reportScriptSignatures: boolean;
    static Security_warnOnUnsignedCodeExecution: boolean;
}
