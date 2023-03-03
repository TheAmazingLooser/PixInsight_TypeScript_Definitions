//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PushButton extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    defaultButton: boolean;
    icon: Bitmap;
    iconHeight: number;
    iconWidth: number;
    pushed: boolean;
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
    public onClick: (checked: boolean) => void;
    public onPress: () => void;
    public onRelease: () => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: PushButton;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
