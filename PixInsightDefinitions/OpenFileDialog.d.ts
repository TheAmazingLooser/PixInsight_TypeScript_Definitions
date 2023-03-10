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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: OpenFileDialog;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
