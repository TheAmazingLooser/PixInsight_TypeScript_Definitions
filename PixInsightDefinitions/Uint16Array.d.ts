//-------------------------
//--------Constants--------
//-------------------------


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
    constructor(array: Array<any>);
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public set(array: any /* TypedArray */): void;
    public set(array: any /* TypedArray */, offset?: number /* 0 */): void;

    public set(array: Array<any>): void;
    public set(array: Array<any>, offset?: number /* 0 */): void;

    public subarray(begin: number): Uint16Array;
    public subarray(begin: number, end?: number): Uint16Array;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Uint16Array;
    static BYTES_PER_ELEMENT: number;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    BYTES_PER_ELEMENT;
}
