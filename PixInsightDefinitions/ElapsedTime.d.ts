//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ElapsedTime {


    //-------------------------
    //-------Properties--------
    //-------------------------
    text: string;
    value: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(t: ElapsedTime);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public reset(): void;

    public since(t: ElapsedTime): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static toString(seconds: number, width ?: number /*  0*/, precision ?: number /*  3*/): string;



    //-------------------------
    //----static Properties----
    //-------------------------
    static text: string;
    static value: number;
}
