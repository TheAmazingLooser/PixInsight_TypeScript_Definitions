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


    byteOffset: uint32

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


    byteOffset: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32

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


    byteOffset: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32

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


    byteOffset: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32

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


    byteOffset: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32

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


    byteOffset: uint32

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


    byteOffset: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32

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


    byteOffset: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32

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


    byteOffset: uint32
    value: float

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


    byteOffset: uint32
    value: float
    littleEndian: Boolean = false

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


    byteOffset: uint32
    value: double

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


    byteOffset: uint32
    value: double
    littleEndian: Boolean = false

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


    byteOffset: uint32
    value: int16

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


    byteOffset: uint32
    value: int16
    littleEndian: Boolean = false

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


    byteOffset: uint32
    value: int32

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


    byteOffset: uint32
    value: int32
    littleEndian: Boolean = false

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


    byteOffset: uint32
    value: int8

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


    byteOffset: uint32
    value: uint16

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


    byteOffset: uint32
    value: uint16
    littleEndian: Boolean = false

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


    byteOffset: uint32
    value: uint32

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


    byteOffset: uint32
    value: uint32
    littleEndian: Boolean = false

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


    byteOffset: uint32
    value: uint8

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
