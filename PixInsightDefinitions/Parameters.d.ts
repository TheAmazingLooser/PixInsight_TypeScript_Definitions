//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Parameters {


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
    public static clear(): void;

    public static get(id: string): string;

    public static getBoolean(id: string): boolean;

    public static getInteger(id: string): number;
    public static getInteger(id: string, radix?: number /* 0 */): number;

    public static getReal(id: string): number;

    public static getString(id: string): string;

    public static getUInt(id: string): number;
    public static getUInt(id: string, radix?: number /* 0 */): number;

    public static has(id: string): boolean;

    public static remove(id: string): void;

    public static set(id: string, value: Object): void;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static isGlobalTarget: boolean;
    static isViewTarget: boolean;
    static targetView: any;


    //-------------------------
    //--------constants--------
    //-------------------------
}
