//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileFind {


    //-------------------------
    //-------Properties--------
    //-------------------------
    attributes: number;
    created: Date;
    groupId: number;
    isDirectory: boolean;
    isFile: boolean;
    isHidden: boolean;
    isSymbolicLink: boolean;
    isValid: boolean;
    lastAccessed: Date;
    lastModified: Date;
    name: string;
    numberOfLinks: number;
    searchPath: string;
    size: number;
    userId: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(filePath: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public begin(path: string): boolean;

    public end(): void;

    public next(): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static attributes: number;
    static created: Date;
    static groupId: number;
    static isDirectory: boolean;
    static isFile: boolean;
    static isHidden: boolean;
    static isSymbolicLink: boolean;
    static isValid: boolean;
    static lastAccessed: Date;
    static lastModified: Date;
    static name: string;
    static numberOfLinks: number;
    static searchPath: string;
    static size: number;
    static userId: number;
}
