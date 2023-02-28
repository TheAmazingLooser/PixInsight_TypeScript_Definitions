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
    //----static Properties----
    //-------------------------
    static bytesTransferred: number;
    static isDownload: boolean;
    static isUpload: boolean;
    static localFilePath: string;
    static ok: boolean;
    static remoteURL: string;
    static responseCode: number;
    static totalSpeed: number;
    static totalTime: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
