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
    public apply(thisObject: any): void;
    public apply(thisObject: any, arguments: Array<any>): void;

    public bind(thisObject: any): Function;
    public bind(...arg: any[]): Function;

    public call(thisObject: any): void;
    public call(...arg: any[]): void;

    public propertyIsEnumerable(propertyName: string): boolean;

    public toLocaleString(): string;

    public toSource(): string;

    public toString(): string;

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
