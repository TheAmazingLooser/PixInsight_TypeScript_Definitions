//-------------------------
//--------Constants--------
//-------------------------
/* declare const Grayscale: ScreenTransferFunction.prototype.Grayscale;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SeparateChannels: ScreenTransferFunction.prototype.SeparateChannels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ScreenTransferFunction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    STF: Array<any>;
    interaction: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ScreenTransferFunction?: ScreenTransferFunction);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static STF: Array<any>;
    static interaction: number;
}
