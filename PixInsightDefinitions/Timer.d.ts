//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Timer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    count: number;
    interval: number;
    isRunning: boolean;
    periodic: boolean;
    singleShot: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(interval: number /* 1.0*/, periodic: boolean /* true*/);


    //-------------------------
    //--------Functions--------
    //-------------------------






    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static count: number;
    static interval: number;
    static isRunning: boolean;
    static periodic: boolean;
    static singleShot: boolean;
}
