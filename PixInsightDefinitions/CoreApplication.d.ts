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
    /**
    DESCRIPTION
    @param instance: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static activateInstance(instance: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static clearPendingMessages(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static firstInstanceAlive(): number;

    /**
    DESCRIPTION
    @param instance: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static instancePID(instance: number): string;

    /**
    DESCRIPTION
    @param instance: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static isInstanceAlive(instance: number): boolean;

    /**
    DESCRIPTION
    @param instance: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static isInstanceRunning(instance: number): boolean;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static launchInstance(): void;
    /**
    DESCRIPTION
    @param instance: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static launchInstance(instance?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static otherInstancesRunning(): boolean;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static processPendingMessages(): void;
    /**
    DESCRIPTION
    @param msec: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static processPendingMessages(msec?: number /* 0 */): void;

    /**
    DESCRIPTION
    @param instance: int
    @param message: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sendMessage(instance: number, message: string): boolean;
    /**
    DESCRIPTION
    @param instance: int
    @param message: String
    @param uniqueId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static sendMessage(instance: number, message: string, uniqueId?: string): boolean;

    /**
    DESCRIPTION
    @param instance: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
