//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Function {


    //-------------------------
    //-------Properties--------
    //-------------------------
    arguments: Array<any>;
    /*"arguments.callee": Function*/
    /*"arguments.length": number*/
    caller: Function;
    length: number;
    name: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(arg1?: string, arg2?: string, arg3?: string, arg4?: string, arg5?: string, arg6?: string, arg7?: string, arg8?: string, arg9?: string, arg10?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(thisObject: any): void;
    /**
    DESCRIPTION


    thisObject: any
    arguments: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public apply(thisObject: any, arguments?: Array<any>): void;

    /**
    DESCRIPTION


    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public bind(thisObject: any): Function;
    /**
    DESCRIPTION


    ...arg: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public bind(...arg: any[]): Function;

    /**
    DESCRIPTION


    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public call(thisObject: any): void;
    /**
    DESCRIPTION


    ...arg: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public call(...arg: any[]): void;

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

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public valueOf(): string;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
