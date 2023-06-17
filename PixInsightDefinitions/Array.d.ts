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
    public concat(): Array<any>;
    public concat(...item: any[]): Array<any>;

    public every(callback: Function): boolean;
    public every(callback: Function, thisObject: any): boolean;

    public filter(callback: Function): Array<any>;
    public filter(callback: Function, thisObject: any): Array<any>;

    public forEach(callback: Function): void;
    public forEach(callback: Function, thisObject: any): void;

    public indexOf(searchItem: any): number;
    public indexOf(searchItem: any, fromIndex: number): number;

    public join(): string;
    public join(separator: string): string;

    public lastIndexOf(searchItem: any): number;
    public lastIndexOf(searchItem: any, fromIndex: number): number;

    public map(callback: Function): Array<any>;
    public map(callback: Function, thisObject: any): Array<any>;

    public pop(): any /* item */;

    public propertyIsEnumerable(propertyName: string): boolean;

    public push(): any /* item */;
    public push(...item: any[]): any /* item */;

    public reduce(callback: Function): Object;
    public reduce(callback: Function, initialValue: Object): Object;

    public reduceRight(callback: Function): Object;
    public reduceRight(callback: Function, initialValue: Object): Object;

    public reverse(): void;

    public shift(): any /* item */;

    public slice(start: number, end: number): Array<any>;

    public some(callback: Function): boolean;
    public some(callback: Function, thisObject: any): boolean;

    public sort(): void;
    public sort(compare: Function): void;

    public splice(start: number, deleteCount: number): Array<any>;
    public splice(...item: any[]): Array<any>;

    public toLocaleString(): string;

    public toSource(): string;

    public toString(): string;

    public unshift(): number;
    public unshift(...item: any[]): number;

    public valueOf(): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------
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
