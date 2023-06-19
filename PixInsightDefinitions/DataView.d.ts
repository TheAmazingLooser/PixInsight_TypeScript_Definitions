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
    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getFloat32(byteOffset: number): number;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getFloat32(byteOffset: number, littleEndian?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getFloat64(byteOffset: number): number;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getFloat64(byteOffset: number, littleEndian?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getInt16(byteOffset: number): number;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getInt16(byteOffset: number, littleEndian?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getInt32(byteOffset: number): number;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getInt32(byteOffset: number, littleEndian?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getInt8(byteOffset: number): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUint16(byteOffset: number): number;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUint16(byteOffset: number, littleEndian?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUint32(byteOffset: number): number;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUint32(byteOffset: number, littleEndian?: boolean /* false */): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUint8(byteOffset: number): number;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: float

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFloat32(byteOffset: number, value: number): void;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: float
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFloat32(byteOffset: number, value: number, littleEndian?: boolean /* false */): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: double

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFloat64(byteOffset: number, value: number): void;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: double
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFloat64(byteOffset: number, value: number, littleEndian?: boolean /* false */): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: int16

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setInt16(byteOffset: number, value: number): void;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: int16
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setInt16(byteOffset: number, value: number, littleEndian?: boolean /* false */): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: int32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setInt32(byteOffset: number, value: number): void;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: int32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setInt32(byteOffset: number, value: number, littleEndian?: boolean /* false */): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: int8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setInt8(byteOffset: number, value: number): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: uint16

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUint16(byteOffset: number, value: number): void;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: uint16
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUint16(byteOffset: number, value: number, littleEndian?: boolean /* false */): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: uint32

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUint32(byteOffset: number, value: number): void;
    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: uint32
    @param littleEndian: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUint32(byteOffset: number, value: number, littleEndian?: boolean /* false */): void;

    /**
    DESCRIPTION
    @param byteOffset: uint32
    @param value: uint8

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
