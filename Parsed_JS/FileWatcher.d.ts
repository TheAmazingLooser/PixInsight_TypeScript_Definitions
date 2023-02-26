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
    directories: Array;
    files: Array;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(paths: Array);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public addPath(path: string): void;

    public addPaths(paths: Array): void;

    public clear(): void;

    public removePath(path: string): void;

    public removePaths(paths: Array): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static directories: Array;
    static files: Array;
}
