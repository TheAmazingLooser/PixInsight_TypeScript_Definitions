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
    public apparent(H: EphemerisHandle): Vector;

    public apparent(S: StarPosition): Vector;

    public apparentVisualMagnitude(H: EphemerisHandle): number | void;

    public astrometric(H: EphemerisHandle): Vector;

    public astrometric(S: StarPosition): Vector;

    public canComputeApparentVisualMagnitude(H: EphemerisHandle): boolean;

    public geometric(H: EphemerisHandle): Vector;

    public geometric(S: StarPosition): Vector;

    public initCIOBasedParameters(): void;

    public initEquinoxBasedParameters(): void;

    public intermediate(H: EphemerisHandle): Vector;

    public intermediate(S: StarPosition): Vector;

    public nutationAngles(): Array<any>;

    public proper(H: EphemerisHandle): Vector;

    public proper(S: StarPosition): Vector;

    public true(H: EphemerisHandle): Vector;

    public true(S: StarPosition): Vector;

    public trueDistance(H: EphemerisHandle): number;

    public trueDistance(S: StarPosition): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static eclipticToEquatorial(r: Vector, eps: number): Vector;

    public static eclipticToEquatorial(r: Vector, se: number, ce: number): Vector;

    public static equatorialToEcliptic(r: Vector, eps: number): Vector;

    public static equatorialToEcliptic(r: Vector, se: number, ce: number): Vector;

    public static icrsEquatorialToGalactic(r: Vector): Vector;



    //-------------------------
    //----static Properties----
    //-------------------------
    static CIO: number;
    static CIP: Vector;
    static CIP_ITRS: Vector;
    static EO: number;
    static ERA: number;
    static GAST: number;
    static TDB: Date;
    static TT: Date;
    static Teph: Date;
    static UT1: Date;
    static barycentricPositionOfEarth: Vector;
    static barycentricPositionOfSun: Vector;
    static barycentricVelocityOfEarth: Vector;
    static cioBPNMatrix: Matrix;
    static epsA: number;
    static equinoxBPNMatrix: Matrix;
    static heliocentricPositionOfEarth: Vector;
    static isTopocentric: boolean;
    static observer: ObserverPosition;
    static polarMotionEnabled: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
