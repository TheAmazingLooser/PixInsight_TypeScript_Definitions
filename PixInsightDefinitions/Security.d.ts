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


    outputFilePath: String
    newPassword: String|ByteArray
    filePath: String
    password: String|ByteArray

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


    outputFilePath: String
    inputFilePath: String
    developerId: String
    publicKey: ByteArray
    privateKey: ByteArray

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


    outputFilePath: String
    inputFilePath: String
    keysFilePath: String
    password: String|ByteArray

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


    outputFilePath: String
    password: String|ByteArray

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


    outputFilePath: String
    scriptFilePath: String
    entitlements: Array
    developerId: String
    publicKey: ByteArray
    privateKey: ByteArray

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


    outputFilePath: String
    scriptFilePath: String
    entitlements: Array
    keysFilePath: String
    password: String|ByteArray

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


    outputFilePath: String
    developerId: String
    password: String|ByteArray

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


    filePath: String
    developerId: String
    publicKey: ByteArray
    privateKey: ByteArray

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


    filePath: String
    keysFilePath: String
    password: String|ByteArray

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


    filePath: String

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


    filePath: String

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


    filePath: String

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


    entitlement: String

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


    filePath: String
    password: String|ByteArray
    publicKeyOnly: Boolean = false

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


    developerId: String
    publicKey: ByteArray
    contactEmail: String

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


    developerId: String
    publicKey: ByteArray
    contactEmail: String
    publicEmail: String
    url: String
    name: String
    info: String

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


    keysFilePath: String
    password: String|ByteArray
    contactEmail: String

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


    keysFilePath: String
    password: String|ByteArray
    contactEmail: String
    publicEmail: String
    url: String
    name: String
    info: String

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


    password: String|ByteArray

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
