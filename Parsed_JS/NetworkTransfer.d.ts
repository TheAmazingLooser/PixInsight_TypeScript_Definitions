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
    customHTTPHeaders: Array;
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

    public setCustomHTTPHeaders(headers: Array): void;

    public setProxyURL(url: string, userName?: string /* ""*/, userPassword?: string /* ""*/): void;

    public setSSL(useSSL?: boolean /* true*/, forceSSL?: boolean /* true*/, verifyPeer?: boolean /* true*/, verifyHost?: boolean /* true*/): void;

    public setURL(url: string, userName?: string /* ""*/, userPassword?: string /* ""*/): void;

    public smtp(mailFrom: string, mailRecipients: Array): boolean;

    public upload(uploadSize?: number /* 0*/): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static aborted: boolean;
    static bytesTransferred: number;
    static contentType: string;
    static customHTTPHeaders: Array;
    static errorInformation: string;
    static ok: boolean;
    static proxyURL: string;
    static responseCode: string;
    static totalSpeed: number;
    static totalTime: number;
    static url: string;
}
