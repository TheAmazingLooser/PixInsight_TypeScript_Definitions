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


    public exportSigningKeysFile(outputFilePath: string, newPassword: string | ByteArray, filePath: string, password: string | ByteArray): void;


    public generateCodeSignatureFile(outputFilePath: string, inputFilePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;


    public generateCodeSignatureFile(outputFilePath: string, inputFilePath: string, keysFilePath: string, password: string | ByteArray): void;


    public generateLocalSigningKeysFile(outputFilePath: string, password: string | ByteArray): void;


    public generateScriptSignatureFile(outputFilePath: string, scriptFilePath: string, entitlements: Array<any>, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;


    public generateScriptSignatureFile(outputFilePath: string, scriptFilePath: string, entitlements: Array<any>, keysFilePath: string, password: string | ByteArray): void;


    public generateSigningKeysFile(outputFilePath: string, developerId: string, password: string | ByteArray): void;


    public generateXMLSignature(filePath: string, developerId: string, publicKey: ByteArray, privateKey: ByteArray): void;


    public generateXMLSignature(filePath: string, keysFilePath: string, password: string | ByteArray): void;


    public getCodeSignature(filePath: string): Object;


    public getScriptSignature(filePath: string): Object;


    public getXMLSignature(filePath: string): Object;


    public haveEntitlement(entitlement: string): boolean;


    public loadSigningKeysFile(filePath: string, password: string | ByteArray, publicKeyOnly: boolean /* false*/): Object;


    public submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string): void;
    public submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string, publicEmail: string): void;
    public submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string, publicEmail: string, url: string): void;
    public submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string, publicEmail: string, url: string, name: string): void;
    public submitCertifiedDeveloperData(developerId: string, publicKey: ByteArray, contactEmail: string, publicEmail: string, url: string, name: string, info: string): void;


    public submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string): void;
    public submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string, publicEmail: string): void;
    public submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string, publicEmail: string, url: string): void;
    public submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string, publicEmail: string, url: string, name: string): void;
    public submitCertifiedDeveloperDataWithSigningKeysFile(keysFilePath: string, password: string | ByteArray, contactEmail: string, publicEmail: string, url: string, name: string, info: string): void;


    public validPassword(password: string | ByteArray): boolean;




    //-------------------------
    //----static Properties----
    //-------------------------
}
