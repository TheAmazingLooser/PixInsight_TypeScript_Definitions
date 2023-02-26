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
    environment: Array;
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
    constructor(program?: string, arguments?: Array);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public closeStandardError(): void;

    public closeStandardInput(): void;

    public closeStandardOutput(): void;

    public kill(): void;

    public redirectStandardError(fileName: string, append?: boolean /* false*/): void;

    public redirectStandardInput(fileName: string): void;

    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */, append?: boolean /* false*/): void;

    public redirectStandardOutput(process: ExternalProcess): void;

    public start(program: string, arguments?: Array): void;

    public terminate(): void;

    public waitForDataAvailable(ms?: number /* 6000*/): boolean;

    public waitForDataWritten(ms?: number /* 6000*/): boolean;

    public waitForFinished(ms?: number /* 6000*/): boolean;

    public waitForStarted(ms?: number /* 6000*/): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static execute(program: string, arguments?: Array): number;

    public static startDetached(program: string, arguments?: Array, workingDirectory?: string): number;

    public static startDetached(program: string, workingDirectory?: string): number;



    //-------------------------
    //----static Properties----
    //-------------------------
    static bytesAvailable: number;
    static bytesToWrite: number;
    static environment: Array;
    static error: number;
    static exitCode: number;
    static exitStatus: number;
    static isRunning: boolean;
    static isStarting: boolean;
    static outputData: ByteArray;
    static pid: number;
    static standardError: ByteArray;
    static standardInput: ByteArray | string;
    static standardOutput: ByteArray;
    static stderr: ByteArray;
    static stdin: ByteArray | string;
    static stdout: ByteArray;
    static workingDirectory: string;
}
