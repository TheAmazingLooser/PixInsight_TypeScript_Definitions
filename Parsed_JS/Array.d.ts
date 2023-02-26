//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Array {


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
    public concat(item1?: any, item2?: any, item3?: any, item4?: any, item5?: any, item6?: any, item7?: any, item8?: any, item9?: any, item10?: any): Array;

    public every(callback: Function, thisObject?: any): boolean;

    public filter(callback: Function, thisObject?: any): Array;

    public forEach(callback: Function, thisObject?: any): void;

    public indexOf(searchItem: any, fromIndex?: number): number;

    public join(separator?: string): string;

    public lastIndexOf(searchItem: any, fromIndex?: number): number;

    public map(callback: Function, thisObject?: any): Array;

    public pop(): any /* item */;

    public propertyIsEnumerable(propertyName: string): boolean;

    public push(item1?: any, item2?: any, item3?: any, item4?: any, item5?: any, item6?: any, item7?: any, item8?: any, item9?: any, item10?: any): any /* item */;

    public reduce(callback: Function, initialValue?: Object): Object;

    public reduceRight(callback: Function, initialValue?: Object): Object;

    public reverse(): void;

    public shift(): any /* item */;

    public slice(start: number, end: number): Array;

    public some(callback: Function, thisObject?: any): boolean;

    public sort(compare?: Function): void;

    public splice(start: number, deleteCount: number, item1?: any, item2?: any, item3?: any, item4?: any, item5?: any, item6?: any, item7?: any, item8?: any): Array;

    public toLocaleString(): string;

    public toSource(): string;

    public toString(): string;

    public unshift(item1?: any, item2?: any, item3?: any, item4?: any, item5?: any, item6?: any, item7?: any, item8?: any, item9?: any, item10?: any): number;

    public valueOf(): Array;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static isArray(obj: Object): boolean;



    //-------------------------
    //----static Properties----
    //-------------------------
    static index: number;
    static input: string;
    static length: number;
}
