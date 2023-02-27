//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Dialog extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    result: number;
    userResizable: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public done(retCode: number): void;












    //-------------------------
    //----static Functions-----
    //-------------------------
    public static browseScriptDocumentation(scriptName: string): boolean;
    public static browseScriptDocumentation(scriptName: string, title: string): boolean;
    public static browseScriptDocumentation(scriptName: string, title: string, width: number, height: number): boolean;


    public static openBrowser(uri: string): void;
    public static openBrowser(uri: string, title: string): void;
    public static openBrowser(uri: string, title: string, width: number, height: number): void;




    //-------------------------
    //----static Properties----
    //-------------------------
    static result: number;
    static userResizable: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
