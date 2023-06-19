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
    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public closeStandardError(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public closeStandardInput(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public closeStandardOutput(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public kill(): void;

    /**
    DESCRIPTION


    fileName: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redirectStandardError(fileName: string): void;
    /**
    DESCRIPTION


    fileName: String
    append: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redirectStandardError(fileName: string, append?: boolean /* false */): void;

    /**
    DESCRIPTION


    fileName: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redirectStandardInput(fileName: string): void;

    /**
    DESCRIPTION


    fileName: String&

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */): void;
    /**
    DESCRIPTION


    fileName: String&
    append: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redirectStandardOutput(fileName: string /* !!!Call by Reference!!! */, append?: boolean /* false */): void;

    /**
    DESCRIPTION


    process: ExternalProcess

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public redirectStandardOutput(process: ExternalProcess): void;

    /**
    DESCRIPTION


    program: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public start(program: string): void;
    /**
    DESCRIPTION


    program: String
    arguments: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public start(program: string, arguments?: Array<any>): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public terminate(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForDataAvailable(): boolean;
    /**
    DESCRIPTION


    ms: int = 6000

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForDataAvailable(ms?: number /* 6000 */): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForDataWritten(): boolean;
    /**
    DESCRIPTION


    ms: int = 6000

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForDataWritten(ms?: number /* 6000 */): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForFinished(): boolean;
    /**
    DESCRIPTION


    ms: int = 6000

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForFinished(ms?: number /* 6000 */): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForStarted(): boolean;
    /**
    DESCRIPTION


    ms: int = 6000

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public waitForStarted(ms?: number /* 6000 */): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    program: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static execute(program: string): number;
    /**
    DESCRIPTION


    program: String
    arguments: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static execute(program: string, arguments?: Array<any>): number;

    /**
    DESCRIPTION


    program: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static startDetached(program: string): number;
    /**
    DESCRIPTION


    program: String
    arguments: Array
    workingDirectory: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static startDetached(program: string, arguments?: Array<any>, workingDirectory?: string): number;

    /**
    DESCRIPTION


    program: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static startDetached(program: string): number;
    /**
    DESCRIPTION


    program: String
    workingDirectory: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
