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
    //----static Properties----
    //-------------------------
    static algorithmName: string;
    static keyLength: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
