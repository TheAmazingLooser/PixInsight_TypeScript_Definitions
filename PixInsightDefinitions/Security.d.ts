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
    public static certifiedDevelopers(): Array<any>;

    public static exportSigningKeysFile(outputFilePath: string, newPassword: string | ByteArray, filePath: string, password: string | ByteArray): void;

    public static generateCodeSignatureFile(outputFilePath: string, inputFilePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;

    public static generateCodeSignatureFile(outputFilePath: string, inputFilePath: string, keysFilePath: string, password: string | ByteArray): void;

    public static generateLocalSigningKeysFile(outputFilePath: string, password: string | ByteArray): void;

    public static generateScriptSignatureFile(outputFilePath: string, scriptFilePath: string, entitlements: Array<any>, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;

    public static generateScriptSignatureFile(outputFilePath: string, scriptFilePath: string, entitlements: Array<any>, keysFilePath: string, password: string | ByteArray): void;

    public static generateSigningKeysFile(outputFilePath: string, developerId: string, password: string | ByteArray): void;

    public static generateXMLSignature(filePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;

    public static generateXMLSignature(filePath: string, keysFilePath: string, password: string | ByteArray): void;

    public static getCodeSignature(filePath: string): Object;

    public static getScriptSignature(filePath: string): Object;

    public static getXMLSignature(filePath: string): Object;

    public static haveEntitlement(entitlement: string): boolean;

    public static loadSigningKeysFile(filePath: string, password: string | ByteArray, publicKeyOnly ?: boolean /*  false*/): Object;

    public static submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string, publicEmail?: string, url?: string, name?: string, info?: string): void;

    public static submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string, publicEmail?: string, url?: string, name?: string, info?: string): void;

    public static validPassword(password: string | ByteArray): boolean;



    //-------------------------
    //----static Properties----
    //-------------------------
}
