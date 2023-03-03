//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class MessageBox {


    //-------------------------
    //-------Properties--------
    //-------------------------
    caption: string;
    defaultButton: number;
    escapeButton: number;
    firstButton: number;
    icon: number;
    result: number;
    secondButton: number;
    text: string;
    thirdButton: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(text?: string, caption?: string, icon?: number, button1?: number, button2?: number, button3?: number, defaultButton?: number, escapeButton?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public execute(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static caption: string;
    static defaultButton: number;
    static escapeButton: number;
    static firstButton: number;
    static icon: number;
    static result: number;
    static secondButton: number;
    static text: string;
    static thirdButton: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
