//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CryptographicHash {


    //-------------------------
    //-------Properties--------
    //-------------------------
    algorithmName: string;
    hashLength: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(algorithm: number);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public hash(ByteArray: ByteArray): ByteArray;




    public update(data: ByteArray): void;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static algorithmName: string;
    static hashLength: number;
}
