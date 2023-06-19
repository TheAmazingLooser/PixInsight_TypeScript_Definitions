//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Position {


    //-------------------------
    //-------Properties--------
    //-------------------------
    CIO: number;
    CIP: Vector;
    CIP_ITRS: Vector;
    EO: number;
    ERA: number;
    GAST: number;
    TDB: Date;
    TT: Date;
    Teph: Date;
    UT1: Date;
    barycentricPositionOfEarth: Vector;
    barycentricPositionOfSun: Vector;
    barycentricVelocityOfEarth: Vector;
    cioBPNMatrix: Matrix;
    epsA: number;
    equinoxBPNMatrix: Matrix;
    heliocentricPositionOfEarth: Vector;
    isTopocentric: boolean;
    observer: ObserverPosition;
    polarMotionEnabled: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(t: Date, timescale?: string /* "TT"*/);
    constructor(isoTime: string, timescale?: string /* "TT"*/);
    constructor(jd1: number, jd2?: number /* 0*/, timescale?: string /* "TT"*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apparent(H: EphemerisHandle): Vector;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apparent(S: StarPosition): Vector;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apparentVisualMagnitude(H: EphemerisHandle): number | void;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public astrometric(H: EphemerisHandle): Vector;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public astrometric(S: StarPosition): Vector;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public canComputeApparentVisualMagnitude(H: EphemerisHandle): boolean;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public geometric(H: EphemerisHandle): Vector;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public geometric(S: StarPosition): Vector;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initCIOBasedParameters(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public initEquinoxBasedParameters(): void;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intermediate(H: EphemerisHandle): Vector;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public intermediate(S: StarPosition): Vector;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nutationAngles(): Array<any>;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public proper(H: EphemerisHandle): Vector;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public proper(S: StarPosition): Vector;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public true(H: EphemerisHandle): Vector;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public true(S: StarPosition): Vector;

    /**
    DESCRIPTION


    H: EphemerisHandle

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trueDistance(H: EphemerisHandle): number;

    /**
    DESCRIPTION


    S: StarPosition

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trueDistance(S: StarPosition): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    r: Vector
    eps: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static eclipticToEquatorial(r: Vector, eps: number): Vector;

    /**
    DESCRIPTION


    r: Vector
    se: Number
    ce: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static eclipticToEquatorial(r: Vector, se: number, ce: number): Vector;

    /**
    DESCRIPTION


    r: Vector
    eps: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static equatorialToEcliptic(r: Vector, eps: number): Vector;

    /**
    DESCRIPTION


    r: Vector
    se: Number
    ce: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static equatorialToEcliptic(r: Vector, se: number, ce: number): Vector;

    /**
    DESCRIPTION


    r: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static icrsEquatorialToGalactic(r: Vector): Vector;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Position;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
