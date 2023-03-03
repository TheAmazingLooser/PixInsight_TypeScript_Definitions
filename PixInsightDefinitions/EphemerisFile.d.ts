//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class EphemerisFile {


    //-------------------------
    //-------Properties--------
    //-------------------------
    authors: string;
    briefDescription: string;
    constants: string;
    copyright: string;
    creationTime: Date;
    creatorApplication: string;
    creatorOS: string;
    description: string;
    endTime: Date;
    filePath: string;
    objects: Array<any>;
    organizationName: string;
    startTime: Date;
    title: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(filePath?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public close(): void;

    public constantValue(name: string): number;

    public isConstantAvailable(name: string): boolean;

    public isObjectAvailable(object: string): boolean;
    public isObjectAvailable(object: string, origin: string): boolean;

    public objectName(object: string): string;
    public objectName(object: string, origin: string): string;

    public open(filePath: string): void;

    public visibleObjects(window: ImageWindow, P: Position): Array<any>;
    public visibleObjects(window: ImageWindow, P: Position, magMax: any): Array<any>;
    public visibleObjects(window: ImageWindow, P: Position, magMax: any, magMin: any): Array<any>;
    public visibleObjects(window: ImageWindow, P: Position, magMax: any, magMin: any, rect: Rect): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static deltaAT(t: Date): number;

    public static deltaAT(isoTime: string): number;

    public static deltaAT(jd1: number): number;
    public static deltaAT(jd1: number, jd2: number): number;

    public static deltaT(t: Date): number;

    public static deltaT(isoTime: string): number;

    public static deltaT(jd1: number): number;
    public static deltaT(jd1: number, jd2: number): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: EphemerisFile;
    static fundamentalEphemeridesFilePath: string;
    static shortTermFundamentalEphemeridesFilePath: string;
    static asteroidEphemeridesFilePath: string;
    static shortTermAsteroidEphemeridesFilePath: string;
    static kboEphemeridesFilePath: string;
    static shortTermKBOEphemeridesFilePath: string;
    static nutationModelFilePath: string;
    static shortTermNutationModelFilePath: string;
    static deltaTDataFilePath: string;
    static deltaATDataFilePath: string;
    static cipITRSDataFilePath: string;
    static fundamentalEphemerides: EphemerisFile;
    static shortTermFundamentalEphemerides: EphemerisFile;
    static asteroidEphemerides: EphemerisFile;
    static shortTermAsteroidEphemerides: EphemerisFile;
    static kboEphemerides: EphemerisFile;
    static shortTermKBOEphemerides: EphemerisFile;
    static nutationModel: EphemerisFile;
    static shortTermNutationModel: EphemerisFile;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
