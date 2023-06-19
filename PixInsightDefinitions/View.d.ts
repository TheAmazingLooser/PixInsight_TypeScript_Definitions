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


    undoFlags: uint

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


    id: String

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


    id: String

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


    id: String

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


    FileFormatInstance: FileFormatInstance

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


    id: String

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


    FileFormatInstance: FileFormatInstance

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


    id: String

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


    id: String

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


    id: String

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


    id: String
    attributes: uint

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


    id: String
    value: Object

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


    id: String
    value: Object
    type: uint
    attributes: uint

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


    id: String

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
