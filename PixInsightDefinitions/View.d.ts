//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class View {


    //-------------------------
    //-------Properties--------
    //-------------------------
    canGoBackward: boolean;
    canGoForward: boolean;
    fullId: string;
    historyIndex: number;
    id: string;
    image: Image;
    initialProcessing: ProcessContainer;
    isMainView: boolean;
    isNull: boolean;
    isPreview: boolean;
    isView: boolean;
    isVirtual: boolean;
    processing: ProcessContainer;
    properties: Array<any>;
    stf: Array<any>;
    uniqueId: string;
    window: ImageWindow;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(View: View);
    constructor(viewId: string);


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
	public beginProcess(): void;
    /**
    DESCRIPTION
    @param undoFlags: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public beginProcess(undoFlags?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cancelProcess(): void;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public computeOrFetchProperty(id: string): Object | void;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public computeProperty(id: string): Object | void;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public deleteProperty(id: string): boolean;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public endProcess(): void;

    /**
    DESCRIPTION
    @param FileFormatInstance: FileFormatInstance

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public exportProperties(FileFormatInstance: FileFormatInstance): number;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hasProperty(id: string): boolean;

    /**
    DESCRIPTION
    @param FileFormatInstance: FileFormatInstance

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public importProperties(FileFormatInstance: FileFormatInstance): string;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public propertyAttributes(id: string): number | void;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public propertyType(id: string): number | void;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public propertyValue(id: string): Object | void;

    /**
    DESCRIPTION
    @param id: String
    @param attributes: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setPropertyAttributes(id: string, attributes: number): boolean;

    /**
    DESCRIPTION
    @param id: String
    @param value: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setPropertyValue(id: string, value: Object): boolean;
    /**
    DESCRIPTION
    @param id: String
    @param value: Object
    @param type: uint
    @param attributes: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setPropertyValue(id: string, value: Object, type?: number, attributes?: number): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static viewById(id: string): View;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: View;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
