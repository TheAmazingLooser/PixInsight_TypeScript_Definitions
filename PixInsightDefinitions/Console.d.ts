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
    public beginLog(): void;
    public beginLog(filePath: string): void;




    public critical(): number;
    public critical(...value: any[]): number;


    public criticalln(): number;
    public criticalln(...value: any[]): number;






    public hide(): void;
    public hide(animate: boolean /* true*/): void;




    public note(): number;
    public note(...value: any[]): number;


    public noteln(): number;
    public noteln(...value: any[]): number;






    public show(): void;
    public show(animate: boolean /* true*/): void;


    public warning(): number;
    public warning(...value: any[]): number;


    public warningln(): number;
    public warningln(...value: any[]): number;


    public write(): number;
    public write(...value: any[]): number;


    public writeln(): number;
    public writeln(...value: any[]): number;




    //-------------------------
    //----static Properties----
    //-------------------------
}
