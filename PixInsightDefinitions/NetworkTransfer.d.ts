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
    @param fields: String

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
    @param seconds: int

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
    @param headers: Array

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
    @param url: String

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
    @param url: String
    @param userName: String = ""
    @param userPassword: String = ""

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
    @param useSSL: Boolean = true
    @param forceSSL: Boolean = true
    @param verifyPeer: Boolean = true
    @param verifyHost: Boolean = true

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
    @param url: String

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
    @param url: String
    @param userName: String = ""
    @param userPassword: String = ""

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
    @param mailFrom: String
    @param mailRecipients: Array

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
    @param uploadSize: Number = 0

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
