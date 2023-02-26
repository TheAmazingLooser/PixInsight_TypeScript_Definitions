//-------------------------
//--------Constants--------
//-------------------------
/* declare const CIELab: ChannelExtraction.prototype.CIELab;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CIELch: ChannelExtraction.prototype.CIELch;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CIEXYZ: ChannelExtraction.prototype.CIEXYZ;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const HSI: ChannelExtraction.prototype.HSI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const HSV: ChannelExtraction.prototype.HSV;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGB: ChannelExtraction.prototype.RGB;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SameAsSource: ChannelExtraction.prototype.SameAsSource;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f32: ChannelExtraction.prototype.f32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const f64: ChannelExtraction.prototype.f64;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i16: ChannelExtraction.prototype.i16;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i32: ChannelExtraction.prototype.i32;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const i8: ChannelExtraction.prototype.i8;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ChannelExtraction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array;
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
    static channels: Array;
    static colorSpace: number;
    static inheritAstrometricSolution: boolean;
    static sampleFormat: number;
}
