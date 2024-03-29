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
    public static abort(): void;
    public static abort(dontAsk?: boolean /* false */): void;

    public static beginLog(): void;
    public static beginLog(filePath?: string): void;

    public static clear(): void;

    public static critical(): number;
    public static critical(...value: any[]): number;

    public static criticalln(): number;
    public static criticalln(...value: any[]): number;

    public static endLog(): ByteArray;

    public static flush(): void;

    public static hide(): void;
    public static hide(animate?: boolean /* true */): void;

    public static logText(): ByteArray;

    public static note(): number;
    public static note(...value: any[]): number;

    public static noteln(): number;
    public static noteln(...value: any[]): number;

    public static readChar(): number;

    public static readString(): string;

    public static resetStatus(): void;

    public static show(): void;
    public static show(animate?: boolean /* true */): void;

    public static warning(): number;
    public static warning(...value: any[]): number;

    public static warningln(): number;
    public static warningln(...value: any[]): number;

    public static write(): number;
    public static write(...value: any[]): number;

    public static writeln(): number;
    public static writeln(...value: any[]): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static abortEnabled: boolean;
    static abortRequested: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
