//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Settings {


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
    public static canReadGlobal(key: string): boolean;


    public static canWriteGlobal(key: string): boolean;


    public static read(key: string, dataType: number): Object;


    public static readGlobal(key: string, dataType: number): Object;


    public static remove(key: string): boolean;


    public static removeGlobal(key: string): boolean;


    public static write(key: string, dataType: number, x: Object): void;


    public static writeGlobal(key: string, dataType: number, x: Object): void;




    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
