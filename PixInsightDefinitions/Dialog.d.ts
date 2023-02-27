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
    constructor(parent: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public done(retCode: number): void;












    //-------------------------
    //----static Functions-----
    //-------------------------
    public browseScriptDocumentation(scriptName: string): boolean;
    public browseScriptDocumentation(scriptName: string, title: string): boolean;
    public browseScriptDocumentation(scriptName: string, title: string, width: number, height: number): boolean;


    public openBrowser(uri: string): void;
    public openBrowser(uri: string, title: string): void;
    public openBrowser(uri: string, title: string, width: number, height: number): void;




    //-------------------------
    //----static Properties----
    //-------------------------
    static result: number;
    static userResizable: boolean;
}
