//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    allowClusteredSources: boolean;
    brightThreshold: number;
    clampingThreshold: number;
    descriptorsPerStar: number;
    distortionAmplitude: number;
    distortionCorrection: boolean;
    distortionMapPostfix: string;
    distortionMaxIterations: number;
    distortionModel: string;
    distortionTolerance: number;
    extrapolateLocalDistortion: boolean;
    fileThreadOverload: number;
    fitPSF: number;
    frameAdaptation: boolean;
    generateDistortionMaps: boolean;
    generateDrizzleData: boolean;
    generateMasks: boolean;
    hotPixelFilterRadius: number;
    inheritAstrometricSolution: boolean;
    inputHints: string;
    intersection: number;
    invert: boolean;
    linearClampingThreshold: number;
    localDistortion: boolean;
    localDistortionRegularization: number;
    localDistortionRejection: number;
    localDistortionRejectionWindow: number;
    localDistortionScale: number;
    localDistortionTolerance: number;
    localMaximaDetectionLimit: number;
    maskPostfix: string;
    matcherTolerance: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxStarDistortion: number;
    maxStars: number;
    memoryLoadControl: boolean;
    memoryLoadLimit: number;
    minStructureSize: number;
    mode: number;
    noGUIMessages: boolean;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    onError: number;
    outputData: Array<any>;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    outputSampleFormat: number;
    overwriteExistingFiles: boolean;
    peakResponse: number;
    pixelInterpolation: number;
    polygonSides: number;
    propagateAstrometricSolutions: boolean;
    psfTolerance: number;
    randomizeMosaic: boolean;
    ransacMaxIterations: number;
    ransacMaximizeInliers: number;
    ransacMaximizeOverlapping: number;
    ransacMaximizeRegularity: number;
    ransacMinimizeError: number;
    ransacTolerance: number;
    referenceImage: string;
    referenceIsFile: boolean;
    restrictToPreviews: boolean;
    scaleTolerance: number;
    sensitivity: number;
    splineSmoothness: number;
    structureLayers: number;
    targets: Array<any>;
    trianglesPerStar: number;
    undistortedReference: boolean;
    upperLimit: number;
    useBrightnessRelations: boolean;
    useFileThreads: boolean;
    useScaleDifferences: boolean;
    useSurfaceSplines: boolean;
    useTriangles: boolean;
    writeKeywords: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarAlignment?: StarAlignment);


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
    static brightThreshold: number;
    static clampingThreshold: number;
    static descriptorsPerStar: number;
    static distortionAmplitude: number;
    static distortionCorrection: boolean;
    static distortionMapPostfix: string;
    static distortionMaxIterations: number;
    static distortionModel: string;
    static distortionTolerance: number;
    static extrapolateLocalDistortion: boolean;
    static fileThreadOverload: number;
    static fitPSF: number;
    static frameAdaptation: boolean;
    static generateDistortionMaps: boolean;
    static generateDrizzleData: boolean;
    static generateMasks: boolean;
    static hotPixelFilterRadius: number;
    static inheritAstrometricSolution: boolean;
    static inputHints: string;
    static intersection: number;
    static invert: boolean;
    static linearClampingThreshold: number;
    static localDistortion: boolean;
    static localDistortionRegularization: number;
    static localDistortionRejection: number;
    static localDistortionRejectionWindow: number;
    static localDistortionScale: number;
    static localDistortionTolerance: number;
    static localMaximaDetectionLimit: number;
    static maskPostfix: string;
    static matcherTolerance: number;
    static maxFileReadThreads: number;
    static maxFileWriteThreads: number;
    static maxStarDistortion: number;
    static maxStars: number;
    static memoryLoadControl: boolean;
    static memoryLoadLimit: number;
    static minStructureSize: number;
    static mode: number;
    static noGUIMessages: boolean;
    static noiseLayers: number;
    static noiseReductionFilterRadius: number;
    static onError: number;
    static outputData: Array<any>;
    static outputDirectory: string;
    static outputExtension: string;
    static outputHints: string;
    static outputPostfix: string;
    static outputPrefix: string;
    static outputSampleFormat: number;
    static overwriteExistingFiles: boolean;
    static peakResponse: number;
    static pixelInterpolation: number;
    static polygonSides: number;
    static propagateAstrometricSolutions: boolean;
    static psfTolerance: number;
    static randomizeMosaic: boolean;
    static ransacMaxIterations: number;
    static ransacMaximizeInliers: number;
    static ransacMaximizeOverlapping: number;
    static ransacMaximizeRegularity: number;
    static ransacMinimizeError: number;
    static ransacTolerance: number;
    static referenceImage: string;
    static referenceIsFile: boolean;
    static restrictToPreviews: boolean;
    static scaleTolerance: number;
    static sensitivity: number;
    static splineSmoothness: number;
    static structureLayers: number;
    static targets: Array<any>;
    static trianglesPerStar: number;
    static undistortedReference: boolean;
    static upperLimit: number;
    static useBrightnessRelations: boolean;
    static useFileThreads: boolean;
    static useScaleDifferences: boolean;
    static useSurfaceSplines: boolean;
    static useTriangles: boolean;
    static writeKeywords: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    Always;
    AskUser;
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    Continue;
    CubicBSplineFilter;
    DrawMatchedStars;
    DrawPutativeStarMatches;
    DrawStars;
    FitPSF_Always;
    FitPSF_DistortionOnly;
    FitPSF_Never;
    Lanczos3;
    Lanczos4;
    Lanczos5;
    MitchellNetravaliFilter;
    MosaicOnly;
    NearestNeighbor;
    NoIntersection;
    OutputMatrix;
    RegisterMatch;
    RegisterUnion;
    RegisterUnionSeparate;
    SameAsTarget;
    StructureMap;
    Structures;
    f32;
    f64;
    i16;
    i32;
    i8;
}
