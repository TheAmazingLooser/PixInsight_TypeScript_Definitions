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
    public canReadGlobal(key: string): boolean;


    public canWriteGlobal(key: string): boolean;


    public read(key: string, dataType: number): Object;


    public readGlobal(key: string, dataType: number): Object;


    public remove(key: string): boolean;


    public removeGlobal(key: string): boolean;


    public write(key: string, dataType: number, x: Object): void;


    public writeGlobal(key: string, dataType: number, x: Object): void;




    //-------------------------
    //----static Properties----
    //-------------------------
}
