//-------------------------
//--------Constants--------
//-------------------------
/* declare const AssignDefaultProfile: AssignICCProfile.prototype.AssignDefaultProfile;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AssignNewProfile: AssignICCProfile.prototype.AssignNewProfile;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const LeaveUntagged: AssignICCProfile.prototype.LeaveUntagged;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(AssignICCProfile: AssignICCProfile);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static mode: number;
    static targetProfile: string;
}
