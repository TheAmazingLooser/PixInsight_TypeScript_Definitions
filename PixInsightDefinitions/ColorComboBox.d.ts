//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ColorComboBox extends ComboBox {


    //-------------------------
    //-------Properties--------
    //-------------------------
    customRGBA: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public colorForIndex(index: number): number;




    public setCurrentColor(rgba: number): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static customRGBA: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
