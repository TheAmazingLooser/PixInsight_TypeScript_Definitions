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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param H: EphemerisHandle

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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param H: EphemerisHandle

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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param H: EphemerisHandle

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
    @param S: StarPosition

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
    @param r: Vector
    @param eps: Number

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
    @param r: Vector
    @param se: Number
    @param ce: Number

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
    @param r: Vector
    @param eps: Number

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
    @param r: Vector
    @param se: Number
    @param ce: Number

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
    @param r: Vector

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
