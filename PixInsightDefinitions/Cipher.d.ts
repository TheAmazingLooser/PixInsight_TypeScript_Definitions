//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Cipher {


    //-------------------------
    //-------Properties--------
    //-------------------------
    algorithmName: string;
    keyLength: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(algorithm: number, key: ByteArray);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param cipherText: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public decrypt(cipherText: ByteArray): ByteArray;

    /**
    DESCRIPTION
    @param plainText: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public encrypt(plainText: ByteArray): ByteArray;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Cipher;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
