//-------------------------
//--------Constants--------
//-------------------------
/* declare const DontCare: InverseFourierTransform.prototype.DontCare;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Rescale: InverseFourierTransform.prototype.Rescale;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Truncate: InverseFourierTransform.prototype.Truncate;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class InverseFourierTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    idOfFirstComponent: string;
    idOfSecondComponent: string;
    onOutOfRangeResult: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(InverseFourierTransform?: InverseFourierTransform);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static idOfFirstComponent: string;
    static idOfSecondComponent: string;
    static onOutOfRangeResult: number;
}
