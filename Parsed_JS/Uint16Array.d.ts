//-------------------------
//--------Constants--------
//-------------------------
/* declare const BYTES_PER_ELEMENT: Uint16Array.prototype.BYTES_PER_ELEMENT;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Uint16Array extends ArrayBufferView {


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

    public subarray(begin: number, end?: number): Uint16Array;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static length: number;
}
