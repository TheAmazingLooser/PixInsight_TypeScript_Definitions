//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NetworkTransfer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aborted: boolean;
    bytesTransferred: number;
    contentType: string;
    customHTTPHeaders: Array<any>;
    errorInformation: string;
    ok: boolean;
    proxyURL: string;
    responseCode: string;
    totalSpeed: number;
    totalTime: number;
    url: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


    //-------------------------
    //--------Functions--------
    //-------------------------
    public closeConnection(): void;

    public download(): boolean;

    public post(fields: string): boolean;

    public setConnectionTimeout(seconds: number): void;

    public setCustomHTTPHeaders(headers: Array<any>): void;

    public setProxyURL(url: string): void;
    public setProxyURL(url: string, userName: string /* "" */): void;
    public setProxyURL(url: string, userName: string /* "" */, userPassword: string /* "" */): void;

    public setSSL(): void;
    public setSSL(useSSL: boolean /* true */): void;
    public setSSL(useSSL: boolean /* true */, forceSSL: boolean /* true */): void;
    public setSSL(useSSL: boolean /* true */, forceSSL: boolean /* true */, verifyPeer: boolean /* true */): void;
    public setSSL(useSSL: boolean /* true */, forceSSL: boolean /* true */, verifyPeer: boolean /* true */, verifyHost: boolean /* true */): void;

    public setURL(url: string): void;
    public setURL(url: string, userName: string /* "" */): void;
    public setURL(url: string, userName: string /* "" */, userPassword: string /* "" */): void;

    public smtp(mailFrom: string, mailRecipients: Array<any>): boolean;

    public upload(): boolean;
    public upload(uploadSize: number /* 0 */): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onDownloadDataAvailable: (data: ByteArray) => Boolean;
    public onTransferProgress: (dlTotal: number, dlCurrent: number, ulTotal: number, ulCurrent: number) => Boolean;
    public onUploadDataRequested: (maxSize: number) => ByteArray;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: NetworkTransfer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
