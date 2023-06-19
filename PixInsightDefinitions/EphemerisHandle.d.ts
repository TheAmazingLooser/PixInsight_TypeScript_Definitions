//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class EphemerisHandle {


    //-------------------------
    //-------Properties--------
    //-------------------------
    B_V: number | void;
    D: number | void;
    G: number | void;
    H: number | void;
    endTime: Date;
    hasDerivative: boolean;
    objectId: string;
    objectName: string;
    originId: string;
    startTime: Date;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent: EphemerisFile, object: string, origin?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    Date: Date

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVector(Date: Date): Vector;

    /**
    DESCRIPTION


    isoTime: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVector(isoTime: string): Vector;

    /**
    DESCRIPTION


    jd1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVector(jd1: number): Vector;
    /**
    DESCRIPTION


    jd1: Number
    jd2: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVector(jd1: number, jd2?: number /* 0 */): Vector;

    /**
    DESCRIPTION


    Date: Date

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVectors(Date: Date): Array<any>;

    /**
    DESCRIPTION


    isoTime: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVectors(isoTime: string): Array<any>;

    /**
    DESCRIPTION


    jd1: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVectors(jd1: number): Array<any>;
    /**
    DESCRIPTION


    jd1: Number
    jd2: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stateVectors(jd1: number, jd2?: number /* 0 */): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: EphemerisHandle;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
