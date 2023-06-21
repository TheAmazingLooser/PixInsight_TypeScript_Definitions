//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ExternalProcess {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bytesAvailable: number;
    bytesToWrite: number;
    environment: Array<any>;
    error: number;
    exitCode: number;
    exitStatus: number;
    isRunning: boolean;
    isStarting: boolean;
    outputData: ByteArray;
    pid: number;
    standardError: ByteArray;
    standardInput: ByteArray | string;
    standardOutput: ByteArray;
    stderr: ByteArray;
    stdin: ByteArray | string;
    stdout: ByteArray;
    workingDirectory: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(program?: string, arguments?: Array<any>);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public closeStandardError(): void;

    public closeStandardInput(): void;

    public closeStandardOutput(): void;

    public kill(): void;

    public redirectStandardError(fileName: string): void;
    public redirectStandardError(fileName: string, append?: boolean /* false */): void;

    public redirectStandardInput(fileName: string): void;

    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */): void;
    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */, append?: boolean /* false */): void;

    public redirectStandardOutput(process: ExternalProcess): void;

    public start(program: string): void;
    public start(program: string, arguments?: Array<any>): void;

    public terminate(): void;

    public waitForDataAvailable(): boolean;
    public waitForDataAvailable(ms?: number /* 6000 */): boolean;

    public waitForDataWritten(): boolean;
    public waitForDataWritten(ms?: number /* 6000 */): boolean;

    public waitForFinished(): boolean;
    public waitForFinished(ms?: number /* 6000 */): boolean;

    public waitForStarted(): boolean;
    public waitForStarted(ms?: number /* 6000 */): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static execute(program: string): number;
    public static execute(program: string, arguments?: Array<any>): number;

    public static startDetached(program: string): number;
    public static startDetached(program: string, arguments?: Array<any>, workingDirectory?: string): number;

    public static startDetached(program: string): number;
    public static startDetached(program: string, workingDirectory?: string): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onError: (errorCode: number) => void;
    public onFinished: (exitCode: number, exitStatus: number) => void;
    public onStandardErrorDataAvailable: () => void;
    public onStandardOutputDataAvailable: () => void;
    public onStarted: () => void;
    public onStateChanged: (newState: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ExternalProcess;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
