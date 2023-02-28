//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileInfo {


    //-------------------------
    //-------Properties--------
    //-------------------------
    attributes: number;
    completeSuffix: string;
    directory: string;
    drive: string;
    exists: boolean;
    extension: string;
    groupId: number;
    isDirectory: boolean;
    isExecutable: boolean;
    isFile: boolean;
    isHidden: boolean;
    isReadable: boolean;
    isSymbolicLink: boolean;
    isWritable: boolean;
    lastAccessed: Date;
    lastModified: Date;
    name: string;
    nameAndExtension: string;
    nameAndSuffix: string;
    numberOfHardLinks: number;
    path: string;
    size: number;
    suffix: string;
    symbolicLinkTarget: string;
    timeCreated: Date;
    userId: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(filePath: string);
    constructor(info: FileInfo);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(info: FileInfo): void;

    public clear(): void;

    public refresh(): void;
    public refresh(filePath: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static attributes: number;
    static completeSuffix: string;
    static directory: string;
    static drive: string;
    static exists: boolean;
    static extension: string;
    static groupId: number;
    static isDirectory: boolean;
    static isExecutable: boolean;
    static isFile: boolean;
    static isHidden: boolean;
    static isReadable: boolean;
    static isSymbolicLink: boolean;
    static isWritable: boolean;
    static lastAccessed: Date;
    static lastModified: Date;
    static name: string;
    static nameAndExtension: string;
    static nameAndSuffix: string;
    static numberOfHardLinks: number;
    static path: string;
    static size: number;
    static suffix: string;
    static symbolicLinkTarget: string;
    static timeCreated: Date;
    static userId: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
