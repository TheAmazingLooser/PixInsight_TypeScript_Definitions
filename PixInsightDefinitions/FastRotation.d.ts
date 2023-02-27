//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FastRotation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    mode: number;
    noGUIMessages: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(FastRotation?: FastRotation);


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
    static noGUIMessages: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    HorizontalMirror;
    Rotate180;
    Rotate90CCW;
    Rotate90CW;
    VerticalMirror;
}
