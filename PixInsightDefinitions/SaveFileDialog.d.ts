//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SaveFileDialog extends FileDialog {


    //-------------------------
    //-------Properties--------
    //-------------------------
    fileName: string;
    overwritePrompt: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


    //-------------------------
    //--------Functions--------
    //-------------------------
    public loadImageFilters(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static fileName: string;
    static overwritePrompt: boolean;
}
