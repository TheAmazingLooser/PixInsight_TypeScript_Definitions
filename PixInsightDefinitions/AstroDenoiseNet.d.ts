//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AstroDenoiseNet extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    mask: boolean;
    stride: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AstroDenoiseNet?: AstroDenoiseNet);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static mask: boolean;
    static stride: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Stride_128;
    Stride_16;
    Stride_256;
    Stride_32;
    Stride_64;
    Stride_8;
}
