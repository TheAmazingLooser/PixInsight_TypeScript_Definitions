//-------------------------
//--------Constants--------
//-------------------------
/* declare const Image: Convolution.prototype.Image;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Library: Convolution.prototype.Library;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Parametric: Convolution.prototype.Parametric;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Convolution extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aspectRatio: number;
    filterSource: string;
    mode: number;
    rescaleHighPass: boolean;
    rotationAngle: number;
    shape: number;
    sigma: number;
    viewId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Convolution: Convolution);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static aspectRatio: number;
    static filterSource: string;
    static mode: number;
    static rescaleHighPass: boolean;
    static rotationAngle: number;
    static shape: number;
    static sigma: number;
    static viewId: string;
}
