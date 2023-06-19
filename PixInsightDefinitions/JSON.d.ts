//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class JSON {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param text: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public parse(text: string): Object;
    /**
    DESCRIPTION
    @param text: String
    @param reviver: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public parse(text: string, reviver?: Function): Object;

    /**
    DESCRIPTION
    @param value: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public stringify(value: Object): string;
    /**
    DESCRIPTION
    @param value: Object
    @param replacer: Function|Array
    @param space: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public stringify(value: Object, replacer?: Function | Array<any>, space?: string): string;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
