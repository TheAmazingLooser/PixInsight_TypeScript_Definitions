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
    public static browseScriptDocumentation(scriptName: string): boolean;
    public static browseScriptDocumentation(scriptName: string, title: string): boolean;
    public static browseScriptDocumentation(scriptName: string, title: string, width: number, height: number): boolean;

    public static openBrowser(uri: string): void;
    public static openBrowser(uri: string, title: string): void;
    public static openBrowser(uri: string, title: string, width: number, height: number): void;



    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onExecute: () => void;
    public onReturn: (retVal: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Dialog;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
