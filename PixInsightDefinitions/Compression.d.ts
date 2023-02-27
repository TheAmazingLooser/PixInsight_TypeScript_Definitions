//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Compression {


    //-------------------------
    //-------Properties--------
    //-------------------------
    algorithmName: string;
    byteShuffling: boolean;
    checksums: boolean;
    compressionLevel: number;
    defaultCompressionLevel: number;
    itemSize: number;
    maxCompressionLevel: number;
    subblockSize: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(algorithm: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public compress(data: string | ByteArray | any /* TypedArray */): Array<any>;


    public uncompress(subblocks: Array<any>): ByteArray;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static algorithmName: string;
    static byteShuffling: boolean;
    static checksums: boolean;
    static compressionLevel: number;
    static defaultCompressionLevel: number;
    static itemSize: number;
    static maxCompressionLevel: number;
    static subblockSize: number;
}
