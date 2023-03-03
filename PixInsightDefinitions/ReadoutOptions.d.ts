//-------------------------
//--------Constants--------
//-------------------------


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
    constructor(ReadoutOptions?: ReadoutOptions);


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


    //-------------------------
    //--------constants--------
    //-------------------------
    CIELab;
    CIELch;
    CIEXYZ;
    HSI;
    HSV;
    RGBK;
    RGBL;
    RGBY;
    maximum;
    mean;
    median;
    minimum;
}
