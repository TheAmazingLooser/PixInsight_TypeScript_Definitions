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
    /**
    DESCRIPTION
    @param data: String|ByteArray|TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public compress(data: string | ByteArray | any /* TypedArray */): Array<any>;

    /**
    DESCRIPTION
    @param subblocks: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public uncompress(subblocks: Array<any>): ByteArray;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Compression;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
