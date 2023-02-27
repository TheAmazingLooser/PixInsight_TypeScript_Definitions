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
    constructor(program: string, arguments: Array<any>);


    //-------------------------
    //--------Functions--------
    //-------------------------








    public redirectStandardError(fileName: string): void;
    public redirectStandardError(fileName: string, append: boolean /* false*/): void;


    public redirectStandardInput(fileName: string): void;


    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */): void;
    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */, append: boolean /* false*/): void;


    public redirectStandardOutput(process: ExternalProcess): void;


    public start(program: string): void;
    public start(program: string, arguments: Array<any>): void;




    public waitForDataAvailable(): boolean;
    public waitForDataAvailable(ms: number /* 6000*/): boolean;


    public waitForDataWritten(): boolean;
    public waitForDataWritten(ms: number /* 6000*/): boolean;


    public waitForFinished(): boolean;
    public waitForFinished(ms: number /* 6000*/): boolean;


    public waitForStarted(): boolean;
    public waitForStarted(ms: number /* 6000*/): boolean;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public execute(program: string): number;
    public execute(program: string, arguments: Array<any>): number;


    public startDetached(program: string): number;
    public startDetached(program: string, arguments: Array<any>): number;
    public startDetached(program: string, arguments: Array<any>, workingDirectory: string): number;


    public startDetached(program: string): number;
    public startDetached(program: string, workingDirectory: string): number;




    //-------------------------
    //----static Properties----
    //-------------------------
    static bytesAvailable: number;
    static bytesToWrite: number;
    static environment: Array<any>;
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
