//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Int16Array extends ArrayBufferView {


    //-------------------------
    //-------Properties--------
    //-------------------------
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(length: number);
    constructor(array: any /* TypedArray */);
    constructor(array: Array<any>);
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param array: TypedArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public set(array: any /* TypedArray */): void;
    /**
    DESCRIPTION
    @param array: TypedArray
    @param offset: uint32 = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public set(array: any /* TypedArray */, offset?: number /* 0 */): void;

    /**
    DESCRIPTION
    @param array: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public set(array: Array<any>): void;
    /**
    DESCRIPTION
    @param array: Array
    @param offset: uint32 = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public set(array: Array<any>, offset?: number /* 0 */): void;

    /**
    DESCRIPTION
    @param begin: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public subarray(begin: number): Int16Array;
    /**
    DESCRIPTION
    @param begin: int
    @param end: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public subarray(begin: number, end?: number): Int16Array;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Int16Array;
    static BYTES_PER_ELEMENT: number;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    BYTES_PER_ELEMENT;
}
