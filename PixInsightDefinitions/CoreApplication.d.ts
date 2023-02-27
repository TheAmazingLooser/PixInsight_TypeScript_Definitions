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
    public activateInstance(instance: number): void;






    public instancePID(instance: number): string;


    public isInstanceAlive(instance: number): boolean;


    public isInstanceRunning(instance: number): boolean;


    public launchInstance(): void;
    public launchInstance(instance: number): void;




    public processPendingMessages(): void;
    public processPendingMessages(msec: number /* 0*/): void;


    public sendMessage(instance: number, message: string): boolean;
    public sendMessage(instance: number, message: string, uniqueId: string): boolean;


    public terminateInstance(instance: number): void;




    //-------------------------
    //----static Properties----
    //-------------------------
}
