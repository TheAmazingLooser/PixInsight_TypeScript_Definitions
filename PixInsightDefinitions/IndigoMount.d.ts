//-------------------------
//--------Constants--------
//-------------------------
/* declare const AlignmentMethod_AnalyticalModel: IndigoMount.prototype.AlignmentMethod_AnalyticalModel;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AlignmentMethod_None: IndigoMount.prototype.AlignmentMethod_None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AlignmentMethod_ServerModel: IndigoMount.prototype.AlignmentMethod_ServerModel;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_FitPointingModel: IndigoMount.prototype.Command_FitPointingModel;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_GoTo: IndigoMount.prototype.Command_GoTo;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveEastStart: IndigoMount.prototype.Command_MoveEastStart;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveEastStop: IndigoMount.prototype.Command_MoveEastStop;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveNorthStart: IndigoMount.prototype.Command_MoveNorthStart;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveNorthStop: IndigoMount.prototype.Command_MoveNorthStop;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveSouthStart: IndigoMount.prototype.Command_MoveSouthStart;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveSouthStop: IndigoMount.prototype.Command_MoveSouthStop;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveWestStart: IndigoMount.prototype.Command_MoveWestStart;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_MoveWestStop: IndigoMount.prototype.Command_MoveWestStop;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_Park: IndigoMount.prototype.Command_Park;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_ParkDefault: IndigoMount.prototype.Command_ParkDefault;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_Sync: IndigoMount.prototype.Command_Sync;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_TestSync: IndigoMount.prototype.Command_TestSync;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Command_Unpark: IndigoMount.prototype.Command_Unpark;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PierSide_East: IndigoMount.prototype.PierSide_East;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PierSide_None: IndigoMount.prototype.PierSide_None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const PierSide_West: IndigoMount.prototype.PierSide_West;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SlewRate_Centering: IndigoMount.prototype.SlewRate_Centering;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SlewRate_Find: IndigoMount.prototype.SlewRate_Find;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SlewRate_Guide: IndigoMount.prototype.SlewRate_Guide;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SlewRate_Max: IndigoMount.prototype.SlewRate_Max;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(IndigoMount: IndigoMount);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
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
}
