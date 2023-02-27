//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ChannelExtraction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array<any>;
    colorSpace: number;
    inheritAstrometricSolution: boolean;
    sampleFormat: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ChannelExtraction?: ChannelExtraction);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static channels: Array<any>;
    static colorSpace: number;
    static inheritAstrometricSolution: boolean;
    static sampleFormat: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    CIELab;
    CIELch;
    CIEXYZ;
    HSI;
    HSV;
    RGB;
    SameAsSource;
    f32;
    f64;
    i16;
    i32;
    i8;
}
