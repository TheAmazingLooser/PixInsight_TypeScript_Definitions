//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class InverseFourierTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    idOfFirstComponent: string;
    idOfSecondComponent: string;
    onOutOfRangeResult: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(InverseFourierTransform?: InverseFourierTransform);


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
    static idOfFirstComponent: string;
    static idOfSecondComponent: string;
    static onOutOfRangeResult: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    DontCare;
    Rescale;
    Truncate;
}
