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
    arguments: Array;
    /*arguments.callee: Function*/
    /*arguments.length: number*/
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
    public apply(thisObject: any, arguments?: Array): void;

    public bind(thisObject: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any, arg9?: any): Function;

    public call(thisObject: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any, arg9?: any): void;

    public propertyIsEnumerable(propertyName: string): boolean;

    public toLocaleString(): string;

    public toSource(): string;

    public toString(): string;

    public valueOf(): string;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static arguments: Array;
    /* staticarguments.callee: Function*/
    /* staticarguments.length: number*/
    static caller: Function;
    static length: number;
    static name: string;
}
