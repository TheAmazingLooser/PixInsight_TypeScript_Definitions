//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FileWatcher {


    //-------------------------
    //-------Properties--------
    //-------------------------
    directories: Array<any>;
    files: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(paths: Array<any>);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public addPath(path: string): void;

    /**
    DESCRIPTION


    paths: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public addPaths(paths: Array<any>): void;

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


    path: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public removePath(path: string): void;

    /**
    DESCRIPTION


    paths: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public removePaths(paths: Array<any>): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onDirectoryChanged: (dirPath: string) => void;
    public onFileChanged: (filePath: string) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FileWatcher;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
