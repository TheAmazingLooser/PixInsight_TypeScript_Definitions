//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DataView extends ArrayBufferView {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public getFloat32(byteOffset: number): number;
    public getFloat32(byteOffset: number, littleEndian: boolean /* false */): number;

    public getFloat64(byteOffset: number): number;
    public getFloat64(byteOffset: number, littleEndian: boolean /* false */): number;

    public getInt16(byteOffset: number): number;
    public getInt16(byteOffset: number, littleEndian: boolean /* false */): number;

    public getInt32(byteOffset: number): number;
    public getInt32(byteOffset: number, littleEndian: boolean /* false */): number;

    public getInt8(byteOffset: number): number;

    public getUint16(byteOffset: number): number;
    public getUint16(byteOffset: number, littleEndian: boolean /* false */): number;

    public getUint32(byteOffset: number): number;
    public getUint32(byteOffset: number, littleEndian: boolean /* false */): number;

    public getUint8(byteOffset: number): number;

    public setFloat32(byteOffset: number, value: number): void;
    public setFloat32(byteOffset: number, value: number, littleEndian: boolean /* false */): void;

    public setFloat64(byteOffset: number, value: number): void;
    public setFloat64(byteOffset: number, value: number, littleEndian: boolean /* false */): void;

    public setInt16(byteOffset: number, value: number): void;
    public setInt16(byteOffset: number, value: number, littleEndian: boolean /* false */): void;

    public setInt32(byteOffset: number, value: number): void;
    public setInt32(byteOffset: number, value: number, littleEndian: boolean /* false */): void;

    public setInt8(byteOffset: number, value: number): void;

    public setUint16(byteOffset: number, value: number): void;
    public setUint16(byteOffset: number, value: number, littleEndian: boolean /* false */): void;

    public setUint32(byteOffset: number, value: number): void;
    public setUint32(byteOffset: number, value: number, littleEndian: boolean /* false */): void;

    public setUint8(byteOffset: number, value: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: DataView;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
