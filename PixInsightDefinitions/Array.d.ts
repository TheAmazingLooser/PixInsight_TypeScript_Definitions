//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Array<T> {


    //-------------------------
    //-------Properties--------
    //-------------------------
    index: number;
    input: string;
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(element_0: any, element_1?: any, element_2?: any, element_3?: any, element_4?: any, element_5?: any, element_6?: any, element_7?: any, element_8?: any, element_9?: any);
    constructor(length: number);


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
    public concat(): Array<any>;
    /**
    DESCRIPTION


    ...item: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public concat(...item: any[]): Array<any>;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public every(callback: Function): boolean;
    /**
    DESCRIPTION


    callback: Function
    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public every(callback: Function, thisObject?: any): boolean;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public filter(callback: Function): Array<any>;
    /**
    DESCRIPTION


    callback: Function
    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public filter(callback: Function, thisObject?: any): Array<any>;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEach(callback: Function): void;
    /**
    DESCRIPTION


    callback: Function
    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public forEach(callback: Function, thisObject?: any): void;

    /**
    DESCRIPTION


    searchItem: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public indexOf(searchItem: any): number;
    /**
    DESCRIPTION


    searchItem: any
    fromIndex: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public indexOf(searchItem: any, fromIndex?: number): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public join(): string;
    /**
    DESCRIPTION


    separator: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public join(separator?: string): string;

    /**
    DESCRIPTION


    searchItem: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public lastIndexOf(searchItem: any): number;
    /**
    DESCRIPTION


    searchItem: any
    fromIndex: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public lastIndexOf(searchItem: any, fromIndex?: number): number;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public map(callback: Function): Array<any>;
    /**
    DESCRIPTION


    callback: Function
    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public map(callback: Function, thisObject?: any): Array<any>;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public pop(): any /* item */;

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
    public push(): any /* item */;
    /**
    DESCRIPTION


    ...item: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public push(...item: any[]): any /* item */;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reduce(callback: Function): Object;
    /**
    DESCRIPTION


    callback: Function
    initialValue: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reduce(callback: Function, initialValue?: Object): Object;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reduceRight(callback: Function): Object;
    /**
    DESCRIPTION


    callback: Function
    initialValue: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reduceRight(callback: Function, initialValue?: Object): Object;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public reverse(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public shift(): any /* item */;

    /**
    DESCRIPTION


    start: uint
    end: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public slice(start: number, end: number): Array<any>;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public some(callback: Function): boolean;
    /**
    DESCRIPTION


    callback: Function
    thisObject: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public some(callback: Function, thisObject?: any): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sort(): void;
    /**
    DESCRIPTION


    compare: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sort(compare?: Function): void;

    /**
    DESCRIPTION


    start: uint
    deleteCount: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public splice(start: number, deleteCount: number): Array<any>;
    /**
    DESCRIPTION


    ...item: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public splice(...item: any[]): Array<any>;

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
    public unshift(): number;
    /**
    DESCRIPTION


    ...item: any[]

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public unshift(...item: any[]): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public valueOf(): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    obj: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static isArray(obj: Object): boolean;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Array<any>;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
