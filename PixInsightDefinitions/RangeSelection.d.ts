//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RangeSelection extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    fuzziness: number;
    highRange: number;
    invert: boolean;
    lowRange: number;
    screening: boolean;
    smoothness: number;
    toLightness: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(RangeSelection?: RangeSelection);


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
    static fuzziness: number;
    static highRange: number;
    static invert: boolean;
    static lowRange: number;
    static screening: boolean;
    static smoothness: number;
    static toLightness: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
