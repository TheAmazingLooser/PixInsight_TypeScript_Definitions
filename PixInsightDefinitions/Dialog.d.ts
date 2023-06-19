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
    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cancel(): void;

    /**
    DESCRIPTION
    @param retCode: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public done(retCode: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public execute(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public newInstance(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public ok(): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public open(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param scriptName: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static browseScriptDocumentation(scriptName: string): boolean;
    /**
    DESCRIPTION
    @param scriptName: String
    @param title: String
    @param width: int
    @param height: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static browseScriptDocumentation(scriptName: string, title: string, width: number, height: number): boolean;

    /**
    DESCRIPTION
    @param uri: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static openBrowser(uri: string): void;
    /**
    DESCRIPTION
    @param uri: String
    @param title: String
    @param width: int
    @param height: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
