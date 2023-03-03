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

    public currentColor(): number;

    public setCurrentColor(rgba: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onColorSelected: (rgba: number) => void;
    public onCurrentColorChanged: (rgba: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static customRGBA: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
