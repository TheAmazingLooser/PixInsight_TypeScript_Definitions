//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Security {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
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
	public static certifiedDevelopers(): Array<any>;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param newPassword: String|ByteArray
    @param filePath: String
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static exportSigningKeysFile(outputFilePath: string, newPassword: string | ByteArray, filePath: string, password: string | ByteArray): void;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param inputFilePath: String
    @param developerId: String
    @param publicKey: ByteArray
    @param privateKey: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateCodeSignatureFile(outputFilePath: string, inputFilePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param inputFilePath: String
    @param keysFilePath: String
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateCodeSignatureFile(outputFilePath: string, inputFilePath: string, keysFilePath: string, password: string | ByteArray): void;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateLocalSigningKeysFile(outputFilePath: string, password: string | ByteArray): void;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param scriptFilePath: String
    @param entitlements: Array
    @param developerId: String
    @param publicKey: ByteArray
    @param privateKey: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateScriptSignatureFile(outputFilePath: string, scriptFilePath: string, entitlements: Array<any>, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param scriptFilePath: String
    @param entitlements: Array
    @param keysFilePath: String
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateScriptSignatureFile(outputFilePath: string, scriptFilePath: string, entitlements: Array<any>, keysFilePath: string, password: string | ByteArray): void;

    /**
    DESCRIPTION
    @param outputFilePath: String
    @param developerId: String
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateSigningKeysFile(outputFilePath: string, developerId: string, password: string | ByteArray): void;

    /**
    DESCRIPTION
    @param filePath: String
    @param developerId: String
    @param publicKey: ByteArray
    @param privateKey: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateXMLSignature(filePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;

    /**
    DESCRIPTION
    @param filePath: String
    @param keysFilePath: String
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static generateXMLSignature(filePath: string, keysFilePath: string, password: string | ByteArray): void;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getCodeSignature(filePath: string): Object;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getScriptSignature(filePath: string): Object;

    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getXMLSignature(filePath: string): Object;

    /**
    DESCRIPTION
    @param entitlement: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static haveEntitlement(entitlement: string): boolean;

    /**
    DESCRIPTION
    @param filePath: String
    @param password: String|ByteArray
    @param publicKeyOnly: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static loadSigningKeysFile(filePath: string, password: string | ByteArray, publicKeyOnly: boolean /* false */): Object;

    /**
    DESCRIPTION
    @param developerId: String
    @param publicKey: ByteArray
    @param contactEmail: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string): void;
    /**
    DESCRIPTION
    @param developerId: String
    @param publicKey: ByteArray
    @param contactEmail: String
    @param publicEmail: String
    @param url: String
    @param name: String
    @param info: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string, publicEmail?: string, url?: string, name?: string, info?: string): void;

    /**
    DESCRIPTION
    @param keysFilePath: String
    @param password: String|ByteArray
    @param contactEmail: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string): void;
    /**
    DESCRIPTION
    @param keysFilePath: String
    @param password: String|ByteArray
    @param contactEmail: String
    @param publicEmail: String
    @param url: String
    @param name: String
    @param info: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string, publicEmail?: string, url?: string, name?: string, info?: string): void;

    /**
    DESCRIPTION
    @param password: String|ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static validPassword(password: string | ByteArray): boolean;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Security;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
