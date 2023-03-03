//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ChannelCombination extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array<any>;
    colorSpace: number;
    inheritAstrometricSolution: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ChannelCombination?: ChannelCombination);


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
    static channels: Array<any>;
    static colorSpace: number;
    static inheritAstrometricSolution: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    CIELab;
    CIELch;
    CIEXYZ;
    HSI;
    HSV;
    RGB;
}
