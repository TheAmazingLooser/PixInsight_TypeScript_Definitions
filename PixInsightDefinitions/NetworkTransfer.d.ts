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
    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public closeConnection(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public download(): boolean;

    /**
    DESCRIPTION


    fields: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public post(fields: string): boolean;

    /**
    DESCRIPTION


    seconds: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setConnectionTimeout(seconds: number): void;

    /**
    DESCRIPTION


    headers: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setCustomHTTPHeaders(headers: Array<any>): void;

    /**
    DESCRIPTION


    url: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setProxyURL(url: string): void;
    /**
    DESCRIPTION


    url: String
    userName: String = ""
    userPassword: String = ""

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setProxyURL(url: string, userName?: string /* "" */, userPassword?: string /* "" */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSSL(): void;
    /**
    DESCRIPTION


    useSSL: Boolean = true
    forceSSL: Boolean = true
    verifyPeer: Boolean = true
    verifyHost: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setSSL(useSSL?: boolean /* true */, forceSSL?: boolean /* true */, verifyPeer?: boolean /* true */, verifyHost?: boolean /* true */): void;

    /**
    DESCRIPTION


    url: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setURL(url: string): void;
    /**
    DESCRIPTION


    url: String
    userName: String = ""
    userPassword: String = ""

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setURL(url: string, userName?: string /* "" */, userPassword?: string /* "" */): void;

    /**
    DESCRIPTION


    mailFrom: String
    mailRecipients: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public smtp(mailFrom: string, mailRecipients: Array<any>): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public upload(): boolean;
    /**
    DESCRIPTION


    uploadSize: Number = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public upload(uploadSize?: number /* 0 */): boolean;



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
