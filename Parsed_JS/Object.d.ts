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
    public __defineGetter__(property: string, getter: Function): void;

    public __defineSetter__(property: string, setter: Function): void;

    public __lookupGetter__(property: string): Function;

    public __lookupSetter__(property: string): Function;

    public hasOwnProperty(property: string): boolean;

    public isPrototypeOf(obj: Object): boolean;

    public propertyIsEnumerable(property: string): boolean;

    public toLocaleString(): string;

    public toSource(): string;

    public toString(): string;

    public unwatch(property: string): void;

    public valueOf(): Object;

    public watch(property: string, handler: Function): void;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static create(proto: Object, propertiesObject?: Object): Object;

    public static defineProperties(obj: Object, props: Object): void;

    public static defineProperty(obj: Object, prop: string, descriptor: Object): void;

    public static freeze(obj: Object): Object;

    public static getOwnPropertyDescriptor(obj: Object, prop: string): Object;

    public static getOwnPropertyNames(obj: Object): Array;

    public static getPrototypeOf(obj: Object): Object;

    public static isExtensible(obj: Object): boolean;

    public static isFrozen(obj: Object): boolean;

    public static isSealed(obj: Object): boolean;

    public static keys(obj: Object): Array;

    public static preventExtensions(obj: Object): Object;

    public static seal(obj: Object): Object;



    //-------------------------
    //----static Properties----
    //-------------------------
    static __noSuchMethod__: Function;
    static __proto__: Object;
}
