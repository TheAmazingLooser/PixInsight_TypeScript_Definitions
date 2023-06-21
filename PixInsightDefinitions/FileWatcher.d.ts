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
    public addPath(path: string): void;

    public addPaths(paths: Array<any>): void;

    public clear(): void;

    public removePath(path: string): void;

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
