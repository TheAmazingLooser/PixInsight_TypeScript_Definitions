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
    colorFilterArray: Array;
    displayFunction: Array;
    filePath: string;
    format: FileFormat;
    formatSpecificData: Object;
    iccProfile: ByteArray;
    imageFormatInfo: string;
    imageProperties: Array;
    isOpen: boolean;
    keywords: Array;
    properties: Array;
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
    public close(): boolean;

    public create(filePath: string, hints?: string, numberOfImages?: number /* 1*/): boolean;

    public createImage(d: ImageDescription): boolean;

    public open(filePath: string, hints?: string): Array;

    public read(startRow: number, rowCount: number, channel?: number /* 0*/): Matrix;

    public readImage(Image: Image): boolean;

    public readImageProperty(id: string): Object | void;

    public readProperty(id: string): Object | void;

    public setImageId(id: string): boolean;

    public setOptions(d: ImageDescription): boolean;

    public write(buffer: Matrix, startRow: number, channel?: number /* 0*/): boolean;

    public writeImage(Image: Image): boolean;

    public writeImageProperty(id: string, value: Object, type?: number): boolean;

    public writeProperty(id: string, value: Object, type?: number): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static canReadIncrementally: boolean;
    static canWriteIncrementally: boolean;
    static colorFilterArray: Array;
    static displayFunction: Array;
    static filePath: string;
    static format: FileFormat;
    static formatSpecificData: Object;
    static iccProfile: ByteArray;
    static imageFormatInfo: string;
    static imageProperties: Array;
    static isOpen: boolean;
    static keywords: Array;
    static properties: Array;
    static rgbws: RGBColorSystem;
    static selectedImageIndex: number;
    static thumbnail: Image;
    static wasInexactRead: boolean;
    static wasLossyWrite: boolean;
}
