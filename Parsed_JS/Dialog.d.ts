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
    public cancel(): void;

    public done(retCode: number): void;

    public execute(): number;

    public newInstance(): void;

    public ok(): void;

    public open(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static browseScriptDocumentation(scriptName: string, title?: string, width?: number, height: number): boolean;

    public static openBrowser(uri: string, title?: string, width?: number, height: number): void;



    //-------------------------
    //----static Properties----
    //-------------------------
    static result: number;
    static userResizable: boolean;
}
