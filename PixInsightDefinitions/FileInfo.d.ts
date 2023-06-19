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
    /**
    DESCRIPTION
    @param info: FileInfo

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(info: FileInfo): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public clear(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public refresh(): void;
    /**
    DESCRIPTION
    @param filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
