//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NewImage extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    colorSpace: number;
    height: number;
    id: string;
    numberOfChannels: number;
    sampleFormat: number;
    v0: number;
    v1: number;
    v2: number;
    va: number;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(NewImage?: NewImage);


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
    static colorSpace: number;
    static height: number;
    static id: string;
    static numberOfChannels: number;
    static sampleFormat: number;
    static v0: number;
    static v1: number;
    static v2: number;
    static va: number;
    static width: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Grayscale;
    RGB;
    f32;
    f64;
    i16;
    i32;
    i8;
}
