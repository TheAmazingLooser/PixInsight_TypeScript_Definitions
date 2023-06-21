//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileTransfer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bytesTransferred: number;
    isDownload: boolean;
    isUpload: boolean;
    localFilePath: string;
    ok: boolean;
    remoteURL: string;
    responseCode: number;
    totalSpeed: number;
    totalTime: number;


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------
    public perform(): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FileTransfer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
