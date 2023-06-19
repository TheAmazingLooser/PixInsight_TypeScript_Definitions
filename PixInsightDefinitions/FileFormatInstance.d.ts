//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileFormatInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    canReadIncrementally: boolean;
    canWriteIncrementally: boolean;
    colorFilterArray: Array<any>;
    displayFunction: Array<any>;
    filePath: string;
    format: FileFormat;
    formatSpecificData: Object;
    iccProfile: ByteArray;
    imageFormatInfo: string;
    imageProperties: Array<any>;
    isOpen: boolean;
    keywords: Array<any>;
    properties: Array<any>;
    rgbws: RGBColorSystem;
    selectedImageIndex: number;
    thumbnail: Image;
    wasInexactRead: boolean;
    wasLossyWrite: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(format: FileFormat);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public close(): boolean;

    /**
    DESCRIPTION


    filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public create(filePath: string): boolean;
    /**
    DESCRIPTION


    filePath: String
    hints: String
    numberOfImages: int = 1

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public create(filePath: string, hints?: string, numberOfImages?: number /* 1 */): boolean;

    /**
    DESCRIPTION


    d: ImageDescription

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public createImage(d: ImageDescription): boolean;

    /**
    DESCRIPTION


    filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public open(filePath: string): Array<any>;
    /**
    DESCRIPTION


    filePath: String
    hints: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public open(filePath: string, hints?: string): Array<any>;

    /**
    DESCRIPTION


    startRow: int
    rowCount: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public read(startRow: number, rowCount: number): Matrix;
    /**
    DESCRIPTION


    startRow: int
    rowCount: int
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public read(startRow: number, rowCount: number, channel?: number /* 0 */): Matrix;

    /**
    DESCRIPTION


    Image: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public readImage(Image: Image): boolean;

    /**
    DESCRIPTION


    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public readImageProperty(id: string): Object | void;

    /**
    DESCRIPTION


    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public readProperty(id: string): Object | void;

    /**
    DESCRIPTION


    id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setImageId(id: string): boolean;

    /**
    DESCRIPTION


    d: ImageDescription

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setOptions(d: ImageDescription): boolean;

    /**
    DESCRIPTION


    buffer: Matrix
    startRow: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public write(buffer: Matrix, startRow: number): boolean;
    /**
    DESCRIPTION


    buffer: Matrix
    startRow: int
    channel: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public write(buffer: Matrix, startRow: number, channel?: number /* 0 */): boolean;

    /**
    DESCRIPTION


    Image: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public writeImage(Image: Image): boolean;

    /**
    DESCRIPTION


    id: String
    value: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public writeImageProperty(id: string, value: Object): boolean;
    /**
    DESCRIPTION


    id: String
    value: Object
    type: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public writeImageProperty(id: string, value: Object, type?: number): boolean;

    /**
    DESCRIPTION


    id: String
    value: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public writeProperty(id: string, value: Object): boolean;
    /**
    DESCRIPTION


    id: String
    value: Object
    type: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public writeProperty(id: string, value: Object, type?: number): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FileFormatInstance;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
