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
    /**
    DESCRIPTION
    @param path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public begin(path: string): boolean;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public end(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public next(): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FileFind;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
