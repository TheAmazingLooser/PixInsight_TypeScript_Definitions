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
    /**
    DESCRIPTION


    sourceCode: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public evaluateScript(sourceCode: string): void;
    /**
    DESCRIPTION


    sourceCode: String
    language: String = "JavaScript"

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public evaluateScript(sourceCode: string, language?: string /* "JavaScript" */): void;

    /**
    DESCRIPTION


    url: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public loadContent(url: string): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reload(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public requestHTML(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public requestPlainText(): void;

    /**
    DESCRIPTION


    filePath: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public saveAsPDF(filePath: string): void;
    /**
    DESCRIPTION


    filePath: String
    pageWidth: Number = 210
    pageHeight: Number = 297
    marginLeft: Number = 10
    marginTop: Number = 10
    marginRight: Number = 10
    marginBottom: Number = 10
    landscape: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public saveAsPDF(filePath: string, pageWidth?: number /* 210 */, pageHeight?: number /* 297 */, marginLeft?: number /* 10 */, marginTop?: number /* 10 */, marginRight?: number /* 10 */, marginBottom?: number /* 10 */, landscape?: boolean /* false */): void;

    /**
    DESCRIPTION


    data: ByteArray

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setContent(data: ByteArray): void;
    /**
    DESCRIPTION


    data: ByteArray
    mimeType: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setContent(data: ByteArray, mimeType?: string): void;

    /**
    DESCRIPTION


    html: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setHTML(html: string): void;

    /**
    DESCRIPTION


    text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setPlainText(text: string): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stop(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onHTMLAvailable: (html: string) => void;
    public onLoadFinished: (ok: boolean) => void;
    public onLoadProgress: (progress: number) => void;
    public onLoadStarted: () => void;
    public onPlainTextAvailable: (text: string) => void;
    public onScriptResultAvailable: (value: Object) => void;
    public onSelectionUpdated: () => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: WebView;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
