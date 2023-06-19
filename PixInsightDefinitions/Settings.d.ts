//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Settings {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    key: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static canReadGlobal(key: string): boolean;

    /**
    DESCRIPTION


    key: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static canWriteGlobal(key: string): boolean;

    /**
    DESCRIPTION


    key: String
    dataType: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static read(key: string, dataType: number): Object;

    /**
    DESCRIPTION


    key: String
    dataType: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static readGlobal(key: string, dataType: number): Object;

    /**
    DESCRIPTION


    key: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static remove(key: string): boolean;

    /**
    DESCRIPTION


    key: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static removeGlobal(key: string): boolean;

    /**
    DESCRIPTION


    key: String
    dataType: int
    x: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static write(key: string, dataType: number, x: Object): void;

    /**
    DESCRIPTION


    key: String
    dataType: int
    x: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static writeGlobal(key: string, dataType: number, x: Object): void;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static lastReadOK: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
