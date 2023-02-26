//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Console {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    public static beginLog(filePath?: string): void;

    public static clear(): void;

    public static critical(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static criticalln(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static endLog(): ByteArray;

    public static flush(): void;

    public static hide(animate?: boolean /* true*/): void;

    public static logText(): ByteArray;

    public static note(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static noteln(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static readChar(): number;

    public static readString(): string;

    public static show(animate?: boolean /* true*/): void;

    public static warning(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static warningln(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static write(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;

    public static writeln(value1?: any, value2?: any, value3?: any, value4?: any, value5?: any, value6?: any, value7?: any, value8?: any, value9?: any, value10?: any): number;



    //-------------------------
    //----static Properties----
    //-------------------------
}
