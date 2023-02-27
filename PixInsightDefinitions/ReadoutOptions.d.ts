//-------------------------
//--------Constants--------
//-------------------------
/* declare const CIELab: ReadoutOptions.prototype.CIELab;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CIELch: ReadoutOptions.prototype.CIELch;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const CIEXYZ: ReadoutOptions.prototype.CIEXYZ;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const HSI: ReadoutOptions.prototype.HSI;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const HSV: ReadoutOptions.prototype.HSV;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGBK: ReadoutOptions.prototype.RGBK;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGBL: ReadoutOptions.prototype.RGBL;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RGBY: ReadoutOptions.prototype.RGBY;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const maximum: ReadoutOptions.prototype.maximum;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const mean: ReadoutOptions.prototype.mean;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const median: ReadoutOptions.prototype.median;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const minimum: ReadoutOptions.prototype.minimum;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class ReadoutOptions extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    broadcast: boolean;
    coordinateItems: number;
    coordinatePrecision: number;
    data: number;
    integerRange: number;
    mode: number;
    precision: number;
    previewCenter: boolean;
    previewSize: number;
    previewZoomFactor: number;
    probeSize: number;
    real: boolean;
    showAlpha: boolean;
    showEclipticCoordinates: boolean;
    showEquatorialCoordinates: boolean;
    showGalacticCoordinates: boolean;
    showMask: boolean;
    showPreview: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ReadoutOptions: ReadoutOptions);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static broadcast: boolean;
    static coordinateItems: number;
    static coordinatePrecision: number;
    static data: number;
    static integerRange: number;
    static mode: number;
    static precision: number;
    static previewCenter: boolean;
    static previewSize: number;
    static previewZoomFactor: number;
    static probeSize: number;
    static real: boolean;
    static showAlpha: boolean;
    static showEclipticCoordinates: boolean;
    static showEquatorialCoordinates: boolean;
    static showGalacticCoordinates: boolean;
    static showMask: boolean;
    static showPreview: boolean;
}
