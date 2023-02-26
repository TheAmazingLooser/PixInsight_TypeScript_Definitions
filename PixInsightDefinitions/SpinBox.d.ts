//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SpinBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alignment: number;
    autoAdjustWidth: boolean;
    editable: boolean;
    maxValue: number;
    minValue: number;
    minimumValueText: string;
    normalizedValue: number;
    prefix: string;
    stepSize: number;
    suffix: string;
    value: number;
    wrapping: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public setRange(minValue: number, maxValue: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static alignment: number;
    static autoAdjustWidth: boolean;
    static editable: boolean;
    static maxValue: number;
    static minValue: number;
    static minimumValueText: string;
    static normalizedValue: number;
    static prefix: string;
    static stepSize: number;
    static suffix: string;
    static value: number;
    static wrapping: boolean;
}
