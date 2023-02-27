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
    public disposeFormatSpecificData(data: Object): void;






    public validateFormatSpecificData(data: Object): boolean;




    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static canEditPreferences: boolean;
    static canRead: boolean;
    static canReadIncrementally: boolean;
    static canStore16Bit: boolean;
    static canStore32Bit: boolean;
    static canStore64Bit: boolean;
    static canStore8Bit: boolean;
    static canStoreAlphaChannels: boolean;
    static canStoreColorFilterArrays: boolean;
    static canStoreComplex: boolean;
    static canStoreDComplex: boolean;
    static canStoreDisplayFunctions: boolean;
    static canStoreDouble: boolean;
    static canStoreFloat: boolean;
    static canStoreGrayscale: boolean;
    static canStoreICCProfiles: boolean;
    static canStoreImageProperties: boolean;
    static canStoreKeywords: boolean;
    static canStoreProperties: boolean;
    static canStoreRGBColor: boolean;
    static canStoreRGBWS: boolean;
    static canStoreResolution: boolean;
    static canStoreThumbnails: boolean;
    static canWrite: boolean;
    static canWriteIncrementally: boolean;
    static description: string;
    static fileExtensions: Array<any>;
    static icon: Bitmap;
    static implementation: string;
    static isDeprecated: boolean;
    static mimeTypes: Array<any>;
    static name: string;
    static smallIcon: Bitmap;
    static supportsCompression: boolean;
    static supportsMultipleImages: boolean;
    static supportsViewProperties: boolean;
    static usesFormatSpecificData: boolean;
    static version: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
