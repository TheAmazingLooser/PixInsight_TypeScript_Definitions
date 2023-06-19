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
    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public finalize(): ByteArray;

    /**
    DESCRIPTION
    @param ByteArray: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hash(ByteArray: ByteArray): ByteArray;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public initialize(): void;

    /**
    DESCRIPTION
    @param data: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
