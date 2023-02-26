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
    fileNames: Array<any>;
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
    static fileNames: Array<any>;
    static multipleSelections: boolean;
}
