//-------------------------
//--------Constants--------
//-------------------------
/* declare const Grayscale: NewImage.prototype.Grayscale;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGB: NewImage.prototype.RGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: NewImage.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: NewImage.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: NewImage.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: NewImage.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i8: NewImage.prototype.i8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
}
