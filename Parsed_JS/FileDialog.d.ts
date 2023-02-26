//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileDialog {


    //-------------------------
    //-------Properties--------
    //-------------------------
    caption: string;
    filters: Array;
    initialPath: string;
    selectedFileExtension: string;


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------
    public execute(): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static caption: string;
    static filters: Array;
    static initialPath: string;
    static selectedFileExtension: string;
}
