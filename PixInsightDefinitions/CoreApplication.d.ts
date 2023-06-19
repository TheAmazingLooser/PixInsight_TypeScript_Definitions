//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CoreApplication {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    public static activateInstance(instance: number): void;

    public static clearPendingMessages(): void;

    public static firstInstanceAlive(): number;

    public static instancePID(instance: number): string;

    public static isInstanceAlive(instance: number): boolean;

    public static isInstanceRunning(instance: number): boolean;

    public static launchInstance(): void;
    public static launchInstance(instance?: number): void;

    public static otherInstancesRunning(): boolean;

    public static processPendingMessages(): void;
    public static processPendingMessages(msec?: number /* 0 */): void;

    public static sendMessage(instance: number, message: string): boolean;
    public static sendMessage(instance: number, message: string, uniqueId?: string): boolean;

    public static terminateInstance(instance: number): void;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: CoreApplication;
    static platform: string;
    static programName: string;
    static language: string;
    static versionMajor: number;
    static versionMinor: number;
    static versionRelease: number;
    static versionRevision: number;
    static versionBuild: number;
    static versionBeta: number;
    static versionLE: boolean;
    static versionCodename: string;
    static filePath: string;
    static dirPath: string;
    static baseDirPath: string;
    static appDirPath: string;
    static binDirPath: string;
    static etcDirPath: string;
    static rscDirPath: string;
    static includeDirPath: string;
    static srcDirPath: string;
    static libDirPath: string;
    static libraryDirPath: string;
    static docDirPath: string;
    static colorDirPath: string;
    static agentName: string;
    static caBundleFilePath: string;
    static startTime: Date;
    static instance: number;
    static pid: string;
    static hasPendingMessages: boolean;
    static numberOfPendingMessages: number;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
