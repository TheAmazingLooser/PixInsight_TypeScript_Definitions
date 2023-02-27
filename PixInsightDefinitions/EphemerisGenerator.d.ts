//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class EphemerisGenerator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    B_V: number;
    B_V_defined: boolean;
    D: number;
    D_defined: boolean;
    G: number;
    H: number;
    KBOsFilePath: string;
    M: number;
    O: number;
    T: number;
    a: number;
    asteroidsFilePath: string;
    databaseFilePath: string;
    databaseFormatName: string;
    denseOutputToleranceFactor: number;
    e: number;
    endTimeJD: number;
    ephemerisToleranceFactor: number;
    epochJD: number;
    excludeCoreAsteroids: boolean;
    figureEffects: boolean;
    fundamentalFilePath: string;
    i: number;
    objectId: string;
    objectName: string;
    objects: string;
    outputXEPHFile: boolean;
    outputXEPHFilePath: string;
    overwriteExistingFiles: boolean;
    q: number;
    relativisticPerturbations: boolean;
    separateEarthMoonPerturbers: boolean;
    startTimeJD: number;
    useAsteroidPerturbers: boolean;
    useKBOPerturbers: boolean;
    useRegularExpressions: boolean;
    velocityExpansions: boolean;
    vx: number;
    vy: number;
    vz: number;
    w: number;
    workingMode: number;
    x: number;
    y: number;
    z: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(EphemerisGenerator?: EphemerisGenerator);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static B_V: number;
    static B_V_defined: boolean;
    static D: number;
    static D_defined: boolean;
    static G: number;
    static H: number;
    static KBOsFilePath: string;
    static M: number;
    static O: number;
    static T: number;
    static a: number;
    static asteroidsFilePath: string;
    static databaseFilePath: string;
    static databaseFormatName: string;
    static denseOutputToleranceFactor: number;
    static e: number;
    static endTimeJD: number;
    static ephemerisToleranceFactor: number;
    static epochJD: number;
    static excludeCoreAsteroids: boolean;
    static figureEffects: boolean;
    static fundamentalFilePath: string;
    static i: number;
    static objectId: string;
    static objectName: string;
    static objects: string;
    static outputXEPHFile: boolean;
    static outputXEPHFilePath: string;
    static overwriteExistingFiles: boolean;
    static q: number;
    static relativisticPerturbations: boolean;
    static separateEarthMoonPerturbers: boolean;
    static startTimeJD: number;
    static useAsteroidPerturbers: boolean;
    static useKBOPerturbers: boolean;
    static useRegularExpressions: boolean;
    static velocityExpansions: boolean;
    static vx: number;
    static vy: number;
    static vz: number;
    static w: number;
    static workingMode: number;
    static x: number;
    static y: number;
    static z: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    WorkingMode_DatabaseObjects;
    WorkingMode_OrbitalElements;
    WorkingMode_StateVectors;
}
