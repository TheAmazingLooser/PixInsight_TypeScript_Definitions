//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FITSKeyword {


    //-------------------------
    //-------Properties--------
    //-------------------------
    comment: string;
    isBoolean: boolean;
    isNull: boolean;
    isNumeric: boolean;
    isString: boolean;
    name: string;
    numericValue: number;
    strippedValue: string;
    value: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(name: string, value: string, comment?: string);
    constructor(k: FITSKeyword);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    k: FITSKeyword

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(k: FITSKeyword): void;

    /**
    DESCRIPTION


    name: String
    value: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(name: string, value: string): void;
    /**
    DESCRIPTION


    name: String
    value: String
    comment: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(name: string, value: string, comment?: string): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toArray(): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toString(): string;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public trim(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: FITSKeyword;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
