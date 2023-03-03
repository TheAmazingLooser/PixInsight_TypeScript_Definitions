//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IndigoMount extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    AlignmentMethod: number;
    Command: number;
    PierSide: number;
    SlewRate: number;
    alignmentConfig: number;
    alignmentModelFile: string;
    apparentTargetDec: number;
    apparentTargetRA: number;
    currentDec: number;
    currentLST: number;
    currentRA: number;
    deviceName: string;
    enableAlignmentCorrection: boolean;
    geographicLatitude: number;
    syncCelestialDec: number;
    syncCelestialRA: number;
    syncLST: number;
    syncTelescopeDec: number;
    syncTelescopeRA: number;
    targetDec: number;
    targetRA: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoMount?: IndigoMount);


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
    static AlignmentMethod: number;
    static Command: number;
    static PierSide: number;
    static SlewRate: number;
    static alignmentConfig: number;
    static alignmentModelFile: string;
    static apparentTargetDec: number;
    static apparentTargetRA: number;
    static currentDec: number;
    static currentLST: number;
    static currentRA: number;
    static deviceName: string;
    static enableAlignmentCorrection: boolean;
    static geographicLatitude: number;
    static syncCelestialDec: number;
    static syncCelestialRA: number;
    static syncLST: number;
    static syncTelescopeDec: number;
    static syncTelescopeRA: number;
    static targetDec: number;
    static targetRA: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    AlignmentMethod_AnalyticalModel;
    AlignmentMethod_None;
    AlignmentMethod_ServerModel;
    Command_FitPointingModel;
    Command_GoTo;
    Command_MoveEastStart;
    Command_MoveEastStop;
    Command_MoveNorthStart;
    Command_MoveNorthStop;
    Command_MoveSouthStart;
    Command_MoveSouthStop;
    Command_MoveWestStart;
    Command_MoveWestStop;
    Command_Park;
    Command_ParkDefault;
    Command_Sync;
    Command_TestSync;
    Command_Unpark;
    PierSide_East;
    PierSide_None;
    PierSide_West;
    SlewRate_Centering;
    SlewRate_Find;
    SlewRate_Guide;
    SlewRate_Max;
}
