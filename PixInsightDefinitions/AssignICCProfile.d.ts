//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AssignICCProfile extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    mode: number;
    targetProfile: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AssignICCProfile?: AssignICCProfile);


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
    static mode: number;
    static targetProfile: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AssignDefaultProfile;
    AssignNewProfile;
    LeaveUntagged;
}
