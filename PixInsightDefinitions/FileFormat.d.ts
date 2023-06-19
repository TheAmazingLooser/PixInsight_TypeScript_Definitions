//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileFormat {


    //-------------------------
    //-------Properties--------
    //-------------------------
    canEditPreferences: boolean;
    canRead: boolean;
    canReadIncrementally: boolean;
    canStore16Bit: boolean;
    canStore32Bit: boolean;
    canStore64Bit: boolean;
    canStore8Bit: boolean;
    canStoreAlphaChannels: boolean;
    canStoreColorFilterArrays: boolean;
    canStoreComplex: boolean;
    canStoreDComplex: boolean;
    canStoreDisplayFunctions: boolean;
    canStoreDouble: boolean;
    canStoreFloat: boolean;
    canStoreGrayscale: boolean;
    canStoreICCProfiles: boolean;
    canStoreImageProperties: boolean;
    canStoreKeywords: boolean;
    canStoreProperties: boolean;
    canStoreRGBColor: boolean;
    canStoreRGBWS: boolean;
    canStoreResolution: boolean;
    canStoreThumbnails: boolean;
    canWrite: boolean;
    canWriteIncrementally: boolean;
    description: string;
    fileExtensions: Array<any>;
    icon: Bitmap;
    implementation: string;
    isDeprecated: boolean;
    mimeTypes: Array<any>;
    name: string;
    smallIcon: Bitmap;
    supportsCompression: boolean;
    supportsMultipleImages: boolean;
    supportsViewProperties: boolean;
    usesFormatSpecificData: boolean;
    version: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(nameExtOrMime: string, toRead?: boolean /* false*/, toWrite?: boolean /* false*/);
    constructor(fmt: FileFormat);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    data: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public disposeFormatSpecificData(data: Object): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public editPreferences(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public queryFormatStatus(): string;

    /**
    DESCRIPTION


    data: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public validateFormatSpecificData(data: Object): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FileFormat;
    static formats: Array<any>;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
