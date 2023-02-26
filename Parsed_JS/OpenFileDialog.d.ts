//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class OpenFileDialog extends FileDialog {


    //-------------------------
    //-------Properties--------
    //-------------------------
    fileName: string;
    fileNames: Array;
    multipleSelections: boolean;


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
    static fileNames: Array;
    static multipleSelections: boolean;
}
