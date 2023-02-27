//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Superbias extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    columns: boolean;
    excludeLargeScale: boolean;
    medianTransform: boolean;
    multiscaleLayers: number;
    rows: boolean;
    superbiasViewId: string;
    superbiasViewId1: string;
    trimmingFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Superbias: Superbias);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static columns: boolean;
    static excludeLargeScale: boolean;
    static medianTransform: boolean;
    static multiscaleLayers: number;
    static rows: boolean;
    static superbiasViewId: string;
    static superbiasViewId1: string;
    static trimmingFactor: number;
}
