//-------------------------
//--------Constants--------
//-------------------------


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
    constructor(Convolution?: Convolution);


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


    //-------------------------
    //--------constants--------
    //-------------------------
    Image;
    Library;
    Parametric;
}
