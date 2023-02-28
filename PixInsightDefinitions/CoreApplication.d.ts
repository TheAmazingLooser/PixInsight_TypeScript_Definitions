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
    public static launchInstance(instance: number): void;

    public static otherInstancesRunning(): boolean;

    public static processPendingMessages(): void;
    public static processPendingMessages(msec: number /* 0*/): void;

    public static sendMessage(instance: number, message: string): boolean;
    public static sendMessage(instance: number, message: string, uniqueId: string): boolean;

    public static terminateInstance(instance: number): void;



    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
