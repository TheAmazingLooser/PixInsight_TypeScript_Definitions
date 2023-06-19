//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ByteArray {


    //-------------------------
    //-------Properties--------
    //-------------------------
    available: number;
    capacity: number;
    isEmpty: boolean;
    length: number;
    lowerBound: number;
    upperBound: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(length: number, value?: number);
    constructor(a: ByteArray, startIndex?: number, count?: number);
    constructor(a: any /* TypedArray */, startIndex?: number, endIndex?: number);
    constructor(s: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(value: number): void;
    /**
    DESCRIPTION


    value: uint8
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(value: number, count?: number): void;

    /**
    DESCRIPTION


    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(s: string): void;

    /**
    DESCRIPTION


    a: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(a: ByteArray): void;

    /**
    DESCRIPTION


    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(value: number): void;
    /**
    DESCRIPTION


    value: uint8
    length: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(value: number, length?: number): void;

    /**
    DESCRIPTION


    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(s: string): void;

    /**
    DESCRIPTION


    a: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(a: ByteArray): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public at(index: number): number;

    /**
    DESCRIPTION


    index: uint
    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public at(index: number, value: number): void;

    /**
    DESCRIPTION


    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public binarySearch(value: number): number;
    /**
    DESCRIPTION


    value: uint8
    startIndex: uint
    endIndex: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public binarySearch(value: number, startIndex?: number, endIndex?: number): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public clear(): void;

    /**
    DESCRIPTION


    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public fill(value: number): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public grow(index: number): void;
    /**
    DESCRIPTION


    index: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public grow(index: number, count?: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hash(): number;
    /**
    DESCRIPTION


    seed: uint
    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hash(seed?: number, startIndex?: number, count?: number): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hash32(): number;
    /**
    DESCRIPTION


    seed: uint
    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hash32(seed?: number, startIndex?: number, count?: number): number;

    /**
    DESCRIPTION


    index: uint
    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(index: number, value: number): void;
    /**
    DESCRIPTION


    index: uint
    value: uint8
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(index: number, value: number, count?: number): void;

    /**
    DESCRIPTION


    index: uint
    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(index: number, s: string): void;

    /**
    DESCRIPTION


    index: uint
    a: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(index: number, a: ByteArray): void;

    /**
    DESCRIPTION


    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public linearSearch(value: number): number;
    /**
    DESCRIPTION


    value: uint8
    startIndex: uint
    endIndex: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public linearSearch(value: number, startIndex?: number, endIndex?: number): number;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(index: number): void;
    /**
    DESCRIPTION


    index: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(index: number, count?: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(): void;

    /**
    DESCRIPTION


    startIndex: uint
    endIndex: uint
    value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replace(startIndex: number, endIndex: number, value: number): void;
    /**
    DESCRIPTION


    startIndex: uint
    endIndex: uint
    value: uint8
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replace(startIndex: number, endIndex: number, value: number, count?: number): void;

    /**
    DESCRIPTION


    startIndex: uint
    endIndex: uint
    a: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replace(startIndex: number, endIndex: number, a: ByteArray): void;

    /**
    DESCRIPTION


    startIndex: uint
    endIndex: uint
    s: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public replace(startIndex: number, endIndex: number, s: string): void;

    /**
    DESCRIPTION


    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reserve(count: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reverse(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public secureFill(): void;
    /**
    DESCRIPTION


    value: uint8 = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public secureFill(value?: number /* 0 */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sort(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public squeeze(): void;

    /**
    DESCRIPTION


    a: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public swap(a: ByteArray): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toBase64(): string;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toBase64(startIndex?: number, count?: number): string;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat32Array(): Float32Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat32Array(startIndex?: number, count?: number): Float32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat64Array(): Float64Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toFloat64Array(startIndex?: number, count?: number): Float64Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toHex(): string;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toHex(startIndex?: number, count?: number): string;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toInt16Array(): Int16Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toInt16Array(startIndex?: number, count?: number): Int16Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toInt32Array(): Int32Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toInt32Array(startIndex?: number, count?: number): Int32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toInt8Array(): Int8Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toInt8Array(startIndex?: number, count?: number): Int8Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toString(): string;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toString(startIndex?: number, count?: number): string;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toURLEncoded(): string;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toURLEncoded(startIndex?: number, count?: number): string;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint16Array(): Uint16Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint16Array(startIndex?: number, count?: number): Uint16Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint32Array(): Uint32Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint32Array(startIndex?: number, count?: number): Uint32Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint8Array(): Uint8Array;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint8Array(startIndex?: number, count?: number): Uint8Array;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint8ClampedArray(): Uint8ClampedArray;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toUint8ClampedArray(startIndex?: number, count?: number): Uint8ClampedArray;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public utf8ToString(): string;
    /**
    DESCRIPTION


    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public utf8ToString(startIndex?: number, count?: number): string;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    base64: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromBase64(base64: string): ByteArray;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromByteValues(): ByteArray;
    /**
    DESCRIPTION


    ...b: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromByteValues(...b: any[]): ByteArray;

    /**
    DESCRIPTION


    hex: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromHex(hex: string): ByteArray;

    /**
    DESCRIPTION


    url: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static fromURLEncoded(url: string): ByteArray;

    /**
    DESCRIPTION


    str: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static stringToLocal8Bit(str: string): ByteArray;
    /**
    DESCRIPTION


    str: String
    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static stringToLocal8Bit(str: string, startIndex?: number, count?: number): ByteArray;

    /**
    DESCRIPTION


    str: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static stringToMBS(str: string): ByteArray;
    /**
    DESCRIPTION


    str: String
    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static stringToMBS(str: string, startIndex?: number, count?: number): ByteArray;

    /**
    DESCRIPTION


    str: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static stringToUTF8(str: string): ByteArray;
    /**
    DESCRIPTION


    str: String
    startIndex: uint
    count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static stringToUTF8(str: string, startIndex?: number, count?: number): ByteArray;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ByteArray;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
