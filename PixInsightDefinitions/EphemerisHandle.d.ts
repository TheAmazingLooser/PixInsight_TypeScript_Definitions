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
    public stateVector(Date: Date): Vector;

    public stateVector(isoTime: string): Vector;

    public stateVector(jd1: number): Vector;
    public stateVector(jd1: number, jd2?: number /* 0 */): Vector;

    public stateVectors(Date: Date): Array<any>;

    public stateVectors(isoTime: string): Array<any>;

    public stateVectors(jd1: number): Array<any>;
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
