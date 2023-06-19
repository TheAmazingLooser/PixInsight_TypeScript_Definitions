//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Object {


    //-------------------------
    //-------Properties--------
    //-------------------------
    __noSuchMethod__: Function;
    __proto__: Object;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(value?: void);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param property: String
    @param getter: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public __defineGetter__(property: string, getter: Function): void;

    /**
    DESCRIPTION
    @param property: String
    @param setter: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public __defineSetter__(property: string, setter: Function): void;

    /**
    DESCRIPTION
    @param property: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public __lookupGetter__(property: string): Function;

    /**
    DESCRIPTION
    @param property: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public __lookupSetter__(property: string): Function;

    /**
    DESCRIPTION
    @param property: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public hasOwnProperty(property: string): boolean;

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
	public isPrototypeOf(obj: Object): boolean;

    /**
    DESCRIPTION
    @param property: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public propertyIsEnumerable(property: string): boolean;

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
    @param property: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public unwatch(property: string): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public valueOf(): Object;

    /**
    DESCRIPTION
    @param property: String
    @param handler: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public watch(property: string, handler: Function): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param proto: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static create(proto: Object): Object;
    /**
    DESCRIPTION
    @param proto: Object
    @param propertiesObject: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static create(proto: Object, propertiesObject?: Object): Object;

    /**
    DESCRIPTION
    @param obj: Object
    @param props: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static defineProperties(obj: Object, props: Object): void;

    /**
    DESCRIPTION
    @param obj: Object
    @param prop: String
    @param descriptor: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static defineProperty(obj: Object, prop: string, descriptor: Object): void;

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
	public static freeze(obj: Object): Object;

    /**
    DESCRIPTION
    @param obj: Object
    @param prop: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getOwnPropertyDescriptor(obj: Object, prop: string): Object;

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
	public static getOwnPropertyNames(obj: Object): Array<any>;

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
	public static getPrototypeOf(obj: Object): Object;

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
	public static isExtensible(obj: Object): boolean;

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
	public static isFrozen(obj: Object): boolean;

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
	public static isSealed(obj: Object): boolean;

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
	public static keys(obj: Object): Array<any>;

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
	public static preventExtensions(obj: Object): Object;

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
	public static seal(obj: Object): Object;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Object;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
