//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GradientMergeMosaic extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    blackPoint: number;
    generateMask: boolean;
    nFeatherRadius: number;
    nShrinkCount: number;
    targetFrames: Array<any>;
    type: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GradientMergeMosaic?: GradientMergeMosaic);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static blackPoint: number;
    static generateMask: boolean;
    static nFeatherRadius: number;
    static nShrinkCount: number;
    static targetFrames: Array<any>;
    static type: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Average;
    Overlay;
}
