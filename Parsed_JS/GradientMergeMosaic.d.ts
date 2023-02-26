//-------------------------
//--------Constants--------
//-------------------------
/* declare const Average: GradientMergeMosaic.prototype.Average;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Overlay: GradientMergeMosaic.prototype.Overlay;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    targetFrames: Array;
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
    static targetFrames: Array;
    static type: number;
}
