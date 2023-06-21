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
    public refresh(filePath?: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FileInfo;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
