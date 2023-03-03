//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SubframeSelector extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    allowClusteredSources: boolean;
    approvalExpression: string;
    auxGraphProperty: number;
    brightThreshold: number;
    cameraGain: number;
    cameraResolution: number;
    dataUnit: number;
    fileCache: boolean;
    fileThreadOverload: number;
    graphProperty: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    maxDistortion: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxPSFFits: number;
    measurements: Array<any>;
    minStructureSize: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    nonInteractive: boolean;
    onError: number;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputKeyword: string;
    outputPostfix: string;
    outputPrefix: string;
    overwriteExistingFiles: boolean;
    peakResponse: number;
    pedestal: number;
    pedestalKeyword: string;
    pedestalMode: number;
    psfFit: number;
    psfFitCircular: boolean;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    routine: number;
    scaleUnit: number;
    sensitivity: number;
    siteLocalMidnight: number;
    sortProperty: number;
    structureLayers: number;
    subframeScale: number;
    subframes: Array<any>;
    trimmingFactor: number;
    upperLimit: number;
    useFileThreads: boolean;
    weightingExpression: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SubframeSelector?: SubframeSelector);


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
    static allowClusteredSources: boolean;
    static approvalExpression: string;
    static auxGraphProperty: number;
    static brightThreshold: number;
    static cameraGain: number;
    static cameraResolution: number;
    static dataUnit: number;
    static fileCache: boolean;
    static fileThreadOverload: number;
    static graphProperty: number;
    static hotPixelFilterRadius: number;
    static inputHints: string;
    static maxDistortion: number;
    static maxFileReadThreads: number;
    static maxFileWriteThreads: number;
    static maxPSFFits: number;
    static measurements: Array<any>;
    static minStructureSize: number;
    static noiseLayers: number;
    static noiseReductionFilterRadius: number;
    static nonInteractive: boolean;
    static onError: number;
    static outputDirectory: string;
    static outputExtension: string;
    static outputHints: string;
    static outputKeyword: string;
    static outputPostfix: string;
    static outputPrefix: string;
    static overwriteExistingFiles: boolean;
    static peakResponse: number;
    static pedestal: number;
    static pedestalKeyword: string;
    static pedestalMode: number;
    static psfFit: number;
    static psfFitCircular: boolean;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static routine: number;
    static scaleUnit: number;
    static sensitivity: number;
    static siteLocalMidnight: number;
    static sortProperty: number;
    static structureLayers: number;
    static subframeScale: number;
    static subframes: Array<any>;
    static trimmingFactor: number;
    static upperLimit: number;
    static useFileThreads: boolean;
    static weightingExpression: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    Altitude;
    ArcSeconds;
    AskUser;
    Azimuth;
    Bits10;
    Bits12;
    Bits14;
    Bits16;
    Bits8;
    Continue;
    DataNumber;
    Eccentricity;
    EccentricityMeanDev;
    Electron;
    FWHM;
    FWHMMeanDev;
    Gaussian;
    Index;
    Lorentzian;
    MStar;
    MeasureSubframes;
    Median;
    MedianMeanDev;
    Moffat10;
    Moffat15;
    Moffat25;
    Moffat4;
    Moffat6;
    Moffat8;
    NStar;
    Noise;
    NoiseRatio;
    Normalized;
    OutputSubframes;
    PSFCount;
    PSFFlux;
    PSFFluxPower;
    PSFSNR;
    PSFScale;
    PSFScaleSNR;
    PSFSignalWeight;
    PSFTotalMeanFlux;
    PSFTotalMeanPowerFlux;
    Pedestal_CustomKeyword;
    Pedestal_Keyword;
    Pedestal_Literal;
    Pixel;
    SNR;
    StarDetectionPreview;
    StarResidual;
    StarResidualMeanDev;
    Stars;
    Weight;
}
