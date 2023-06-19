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
    @param ...item: any[]

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
    @param callback: Function

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
    @param callback: Function
    @param thisObject: any

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
    @param callback: Function

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
    @param callback: Function
    @param thisObject: any

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
    @param callback: Function

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
    @param callback: Function
    @param thisObject: any

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
    @param searchItem: any

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
    @param searchItem: any
    @param fromIndex: int

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
    @param separator: String

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
    @param searchItem: any

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
    @param searchItem: any
    @param fromIndex: int

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
    @param callback: Function

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
    @param callback: Function
    @param thisObject: any

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
    @param propertyName: String

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
    @param ...item: any[]

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
    @param callback: Function

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
    @param callback: Function
    @param initialValue: Object

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
    @param callback: Function

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
    @param callback: Function
    @param initialValue: Object

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
    @param start: uint
    @param end: int

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
    @param callback: Function

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
    @param callback: Function
    @param thisObject: any

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
    @param compare: Function

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
    @param start: uint
    @param deleteCount: uint

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
    @param ...item: any[]

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
    @param ...item: any[]

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
    @param obj: Object

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
