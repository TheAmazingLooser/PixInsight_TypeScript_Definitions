//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ViewList extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    currentView: View;
    excludeIdentifiersPattern: string;
    excludedView: View;
    includesMainViews: boolean;
    includesPreviews: boolean;


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
    public getAll(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getMainViews(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public getPreviews(): void;

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


    view: View

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(view: View): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onCurrentViewUpdated: (view: View) => void;
    public onViewSelected: (view: View) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ViewList;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
