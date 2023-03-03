//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarPosition {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    declination: number;
    delta: number;
    epoch: Date;
    muAlpha: number;
    muDelta: number;
    parallax: number;
    properMotionDec: number;
    properMotionRA: number;
    radialVelocity: number;
    rightAscension: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(alpha: number, delta: number, muAlpha ?: number /*  0*/, muDelta ?: number /*  0*/, parallax ?: number /*  0*/, radialVelocity ?: number /*  0*/, epoch ?: Date | string | number /*  2451545.0*/);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static alpha: number;
    static declination: number;
    static delta: number;
    static epoch: Date;
    static muAlpha: number;
    static muDelta: number;
    static parallax: number;
    static properMotionDec: number;
    static properMotionRA: number;
    static radialVelocity: number;
    static rightAscension: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
