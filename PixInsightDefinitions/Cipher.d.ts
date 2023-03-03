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
    public decrypt(cipherText: ByteArray): ByteArray;

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
