//-------------------------
//--------Constants--------
//-------------------------
/* declare const Abort: StarAlignment.prototype.Abort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Always: StarAlignment.prototype.Always;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AskUser: StarAlignment.prototype.AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Auto: StarAlignment.prototype.Auto;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicBSpline: StarAlignment.prototype.BicubicBSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BicubicSpline: StarAlignment.prototype.BicubicSpline;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Bilinear: StarAlignment.prototype.Bilinear;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CatmullRomSplineFilter: StarAlignment.prototype.CatmullRomSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Continue: StarAlignment.prototype.Continue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CubicBSplineFilter: StarAlignment.prototype.CubicBSplineFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DrawMatchedStars: StarAlignment.prototype.DrawMatchedStars;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DrawPutativeStarMatches: StarAlignment.prototype.DrawPutativeStarMatches;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DrawStars: StarAlignment.prototype.DrawStars;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FitPSF_Always: StarAlignment.prototype.FitPSF_Always;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FitPSF_DistortionOnly: StarAlignment.prototype.FitPSF_DistortionOnly;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const FitPSF_Never: StarAlignment.prototype.FitPSF_Never;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos3: StarAlignment.prototype.Lanczos3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos4: StarAlignment.prototype.Lanczos4;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Lanczos5: StarAlignment.prototype.Lanczos5;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MitchellNetravaliFilter: StarAlignment.prototype.MitchellNetravaliFilter;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const MosaicOnly: StarAlignment.prototype.MosaicOnly;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NearestNeighbor: StarAlignment.prototype.NearestNeighbor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const NoIntersection: StarAlignment.prototype.NoIntersection;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const OutputMatrix: StarAlignment.prototype.OutputMatrix;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RegisterMatch: StarAlignment.prototype.RegisterMatch;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RegisterUnion: StarAlignment.prototype.RegisterUnion;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RegisterUnionSeparate: StarAlignment.prototype.RegisterUnionSeparate;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SameAsTarget: StarAlignment.prototype.SameAsTarget;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const StructureMap: StarAlignment.prototype.StructureMap;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Structures: StarAlignment.prototype.Structures;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: StarAlignment.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: StarAlignment.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: StarAlignment.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: StarAlignment.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i8: StarAlignment.prototype.i8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(StarAlignment: StarAlignment);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
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
}
