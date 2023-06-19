//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Uint32Array extends ArrayBufferView {


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
    public set(array: any /* TypedArray */): void;
    public set(array: any /* TypedArray */, offset?: number /* 0 */): void;

    public set(array: Array<any>): void;
    public set(array: Array<any>, offset?: number /* 0 */): void;

    public subarray(begin: number): Uint32Array;
    public subarray(begin: number, end?: number): Uint32Array;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Uint32Array;
    static BYTES_PER_ELEMENT: number;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    BYTES_PER_ELEMENT;
}
