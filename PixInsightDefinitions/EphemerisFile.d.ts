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
    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public close(): void;

    /**
    DESCRIPTION
    @param name: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public constantValue(name: string): number;

    /**
    DESCRIPTION
    @param name: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isConstantAvailable(name: string): boolean;

    /**
    DESCRIPTION
    @param object: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isObjectAvailable(object: string): boolean;
    /**
    DESCRIPTION
    @param object: String
    @param origin: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public isObjectAvailable(object: string, origin?: string): boolean;

    /**
    DESCRIPTION
    @param object: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public objectName(object: string): string;
    /**
    DESCRIPTION
    @param object: String
    @param origin: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public objectName(object: string, origin?: string): string;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public open(filePath: string): void;

    /**
    DESCRIPTION
    @param window: ImageWindow
    @param P: Position

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public visibleObjects(window: ImageWindow, P: Position): Array<any>;
    /**
    DESCRIPTION
    @param window: ImageWindow
    @param P: Position
    @param magMax: any
    @param magMin: any
    @param rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public visibleObjects(window: ImageWindow, P: Position, magMax?: any, magMin?: any, rect?: Rect): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param t: Date

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaAT(t: Date): number;

    /**
    DESCRIPTION
    @param isoTime: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaAT(isoTime: string): number;

    /**
    DESCRIPTION
    @param jd1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaAT(jd1: number): number;
    /**
    DESCRIPTION
    @param jd1: Number
    @param jd2: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaAT(jd1: number, jd2?: number): number;

    /**
    DESCRIPTION
    @param t: Date

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaT(t: Date): number;

    /**
    DESCRIPTION
    @param isoTime: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaT(isoTime: string): number;

    /**
    DESCRIPTION
    @param jd1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaT(jd1: number): number;
    /**
    DESCRIPTION
    @param jd1: Number
    @param jd2: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static deltaT(jd1: number, jd2?: number): number;



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
