//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class WebView extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundColor: number;
    hasSelection: boolean;
    selectedText: string;
    zoomFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public evaluateScript(sourceCode: string, language ?: string /*  "JavaScript"*/): void;

    public loadContent(url: string): void;

    public reload(): void;

    public requestHTML(): void;

    public requestPlainText(): void;

    public saveAsPDF(filePath: string, pageWidth ?: number /*  210*/, pageHeight ?: number /*  297*/, marginLeft ?: number /*  10*/, marginTop ?: number /*  10*/, marginRight ?: number /*  10*/, marginBottom ?: number /*  10*/, landscape ?: boolean /*  false*/): void;

    public setContent(data: ByteArray, mimeType?: string): void;

    public setHTML(html: string): void;

    public setPlainText(text: string): void;

    public stop(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static backgroundColor: number;
    static hasSelection: boolean;
    static selectedText: string;
    static zoomFactor: number;
}
