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
    public add(value: number): void;
    public add(value: number, count: number): void;

    public add(s: string): void;

    public add(a: ByteArray): void;

    public assign(value: number): void;
    public assign(value: number, length: number): void;

    public assign(s: string): void;

    public assign(a: ByteArray): void;

    public at(index: number): number;

    public at(index: number, value: number): void;

    public binarySearch(value: number): number;
    public binarySearch(value: number, startIndex: number): number;
    public binarySearch(value: number, startIndex: number, endIndex: number): number;

    public clear(): void;

    public fill(value: number): void;

    public grow(index: number): void;
    public grow(index: number, count: number): void;

    public hash(): number;
    public hash(seed: number): number;
    public hash(seed: number, startIndex: number): number;
    public hash(seed: number, startIndex: number, count: number): number;

    public hash32(): number;
    public hash32(seed: number): number;
    public hash32(seed: number, startIndex: number): number;
    public hash32(seed: number, startIndex: number, count: number): number;

    public insert(index: number, value: number): void;
    public insert(index: number, value: number, count: number): void;

    public insert(index: number, s: string): void;

    public insert(index: number, a: ByteArray): void;

    public linearSearch(value: number): number;
    public linearSearch(value: number, startIndex: number): number;
    public linearSearch(value: number, startIndex: number, endIndex: number): number;

    public remove(index: number): void;
    public remove(index: number, count: number): void;

    public remove(): void;

    public replace(startIndex: number, endIndex: number, value: number): void;
    public replace(startIndex: number, endIndex: number, value: number, count: number): void;

    public replace(startIndex: number, endIndex: number, a: ByteArray): void;

    public replace(startIndex: number, endIndex: number, s: string): void;

    public reserve(count: number): void;

    public reverse(): void;

    public secureFill(): void;
    public secureFill(value: number /* 0*/): void;

    public sort(): void;

    public squeeze(): void;

    public swap(a: ByteArray): void;

    public toBase64(): string;
    public toBase64(startIndex: number): string;
    public toBase64(startIndex: number, count: number): string;

    public toFloat32Array(): Float32Array;
    public toFloat32Array(startIndex: number): Float32Array;
    public toFloat32Array(startIndex: number, count: number): Float32Array;

    public toFloat64Array(): Float64Array;
    public toFloat64Array(startIndex: number): Float64Array;
    public toFloat64Array(startIndex: number, count: number): Float64Array;

    public toHex(): string;
    public toHex(startIndex: number): string;
    public toHex(startIndex: number, count: number): string;

    public toInt16Array(): Int16Array;
    public toInt16Array(startIndex: number): Int16Array;
    public toInt16Array(startIndex: number, count: number): Int16Array;

    public toInt32Array(): Int32Array;
    public toInt32Array(startIndex: number): Int32Array;
    public toInt32Array(startIndex: number, count: number): Int32Array;

    public toInt8Array(): Int8Array;
    public toInt8Array(startIndex: number): Int8Array;
    public toInt8Array(startIndex: number, count: number): Int8Array;

    public toString(): string;
    public toString(startIndex: number): string;
    public toString(startIndex: number, count: number): string;

    public toURLEncoded(): string;
    public toURLEncoded(startIndex: number): string;
    public toURLEncoded(startIndex: number, count: number): string;

    public toUint16Array(): Uint16Array;
    public toUint16Array(startIndex: number): Uint16Array;
    public toUint16Array(startIndex: number, count: number): Uint16Array;

    public toUint32Array(): Uint32Array;
    public toUint32Array(startIndex: number): Uint32Array;
    public toUint32Array(startIndex: number, count: number): Uint32Array;

    public toUint8Array(): Uint8Array;
    public toUint8Array(startIndex: number): Uint8Array;
    public toUint8Array(startIndex: number, count: number): Uint8Array;

    public toUint8ClampedArray(): Uint8ClampedArray;
    public toUint8ClampedArray(startIndex: number): Uint8ClampedArray;
    public toUint8ClampedArray(startIndex: number, count: number): Uint8ClampedArray;

    public utf8ToString(): string;
    public utf8ToString(startIndex: number): string;
    public utf8ToString(startIndex: number, count: number): string;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromBase64(base64: string): ByteArray;

    public static fromByteValues(): ByteArray;
    public static fromByteValues(...b: any[]): ByteArray;

    public static fromHex(hex: string): ByteArray;

    public static fromURLEncoded(url: string): ByteArray;

    public static stringToLocal8Bit(str: string): ByteArray;
    public static stringToLocal8Bit(str: string, startIndex: number): ByteArray;
    public static stringToLocal8Bit(str: string, startIndex: number, count: number): ByteArray;

    public static stringToMBS(str: string): ByteArray;
    public static stringToMBS(str: string, startIndex: number): ByteArray;
    public static stringToMBS(str: string, startIndex: number, count: number): ByteArray;

    public static stringToUTF8(str: string): ByteArray;
    public static stringToUTF8(str: string, startIndex: number): ByteArray;
    public static stringToUTF8(str: string, startIndex: number, count: number): ByteArray;



    //-------------------------
    //----static Properties----
    //-------------------------
    static available: number;
    static capacity: number;
    static isEmpty: boolean;
    static length: number;
    static lowerBound: number;
    static upperBound: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
