//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RegExp {


    //-------------------------
    //-------Properties--------
    //-------------------------
    global: boolean;
    ignoreCase: boolean;
    lastIndex: number;
    multiline: boolean;
    source: string;
    sticky: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(pattern: string, flags?: string);


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
    public exec(): Array<any>;
    /**
    DESCRIPTION


    str: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public exec(str?: string): Array<any>;

    /**
    DESCRIPTION


    propertyName: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public propertyIsEnumerable(propertyName: string): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public test(): boolean;
    /**
    DESCRIPTION


    str: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public test(str?: string): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toLocaleString(): string;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public toSource(): string;

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



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: RegExp;
    static input: string;
    static multiline: boolean;
    static lastMatch: string;
    static lastParen: string;
    static leftContext: string;
    static rightContext: string;
    static "$1": string;
    static "$2": string;
    static "$3": string;
    static "$4": string;
    static "$5": string;
    static "$6": string;
    static "$7": string;
    static "$8": string;
    static "$9": string;
    static "$_": string;
    static "$*": boolean;
    static "$&": string;
    static "$+": string;
    static "$`": string;
    static "$'": string;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
