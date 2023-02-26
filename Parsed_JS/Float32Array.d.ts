//-------------------------
//--------Constants--------
//-------------------------
/* declare const BYTES_PER_ELEMENT: Float32Array.prototype.BYTES_PER_ELEMENT;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Float32Array extends ArrayBufferView {


    //-------------------------
    //-------Properties--------
    //-------------------------
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(length: number);
    constructor(array: any /* TypedArray */);
    constructor(array: Array);
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public set(array: any /* TypedArray */, offset?: number /* 0*/): void;

    public set(array: Array, offset?: number /* 0*/): void;

    public subarray(begin: number, end?: number): Float32Array;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static length: number;
}
