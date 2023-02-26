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
    public add(value: number, count?: number): void;

    public add(s: string): void;

    public add(a: ByteArray): void;

    public assign(value: number, length?: number): void;

    public assign(s: string): void;

    public assign(a: ByteArray): void;

    public at(index: number): number;

    public at(index: number, value: number): void;

    public binarySearch(value: number, startIndex?: number, endIndex?: number): number;

    public clear(): void;

    public fill(value: number): void;

    public grow(index: number, count?: number): void;

    public hash(seed?: number, startIndex?: number, count?: number): number;

    public hash32(seed?: number, startIndex?: number, count?: number): number;

    public insert(index: number, value: number, count?: number): void;

    public insert(index: number, s: string): void;

    public insert(index: number, a: ByteArray): void;

    public linearSearch(value: number, startIndex?: number, endIndex?: number): number;

    public remove(index: number, count?: number): void;

    public remove(): void;

    public replace(startIndex: number, endIndex: number, value: number, count?: number): void;

    public replace(startIndex: number, endIndex: number, a: ByteArray): void;

    public replace(startIndex: number, endIndex: number, s: string): void;

    public reserve(count: number): void;

    public reverse(): void;

    public secureFill(value?: number): void;

    public sort(): void;

    public squeeze(): void;

    public swap(a: ByteArray): void;

    public toBase64(startIndex?: number, count?: number): string;

    public toFloat32Array(startIndex?: number, count?: number): Float32Array;

    public toFloat64Array(startIndex?: number, count?: number): Float64Array;

    public toHex(startIndex?: number, count?: number): string;

    public toInt16Array(startIndex?: number, count?: number): Int16Array;

    public toInt32Array(startIndex?: number, count?: number): Int32Array;

    public toInt8Array(startIndex?: number, count?: number): Int8Array;

    public toString(startIndex?: number, count?: number): string;

    public toURLEncoded(startIndex?: number, count?: number): string;

    public toUint16Array(startIndex?: number, count?: number): Uint16Array;

    public toUint32Array(startIndex?: number, count?: number): Uint32Array;

    public toUint8Array(startIndex?: number, count?: number): Uint8Array;

    public toUint8ClampedArray(startIndex?: number, count?: number): Uint8ClampedArray;

    public utf8ToString(startIndex?: number, count?: number): string;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromBase64(base64: string): ByteArray;

    public static fromByteValues(b1?: number, b2?: number, b3?: number, b4?: number, b5?: number, b6?: number, b7?: number, b8?: number, b9?: number, b10?: number): ByteArray;

    public static fromHex(hex: string): ByteArray;

    public static fromURLEncoded(url: string): ByteArray;

    public static stringToLocal8Bit(str: string, startIndex?: number, count?: number): ByteArray;

    public static stringToMBS(str: string, startIndex?: number, count?: number): ByteArray;

    public static stringToUTF8(str: string, startIndex?: number, count?: number): ByteArray;



    //-------------------------
    //----static Properties----
    //-------------------------
    static available: number;
    static capacity: number;
    static isEmpty: boolean;
    static length: number;
    static lowerBound: number;
    static upperBound: number;
}
