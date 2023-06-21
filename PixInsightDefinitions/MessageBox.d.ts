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
    static prototype: MessageBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
