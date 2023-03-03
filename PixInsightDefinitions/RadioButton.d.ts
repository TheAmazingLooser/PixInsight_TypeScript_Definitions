//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RadioButton extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checked: boolean;
    state: number;
    text: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onCheck: (checked: boolean) => void;
    public onClick: (checked: boolean) => void;
    public onPress: () => void;
    public onRelease: () => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: RadioButton;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
