//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ScreenTransferFunction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    STF: Array<any>;
    interaction: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ScreenTransferFunction?: ScreenTransferFunction);


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
    static STF: Array<any>;
    static interaction: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Grayscale;
    SeparateChannels;
}
