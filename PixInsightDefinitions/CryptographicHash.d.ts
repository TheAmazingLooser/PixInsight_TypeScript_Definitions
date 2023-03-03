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
    public finalize(): ByteArray;

    public hash(ByteArray: ByteArray): ByteArray;

    public initialize(): void;

    public update(data: ByteArray): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: CryptographicHash;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
