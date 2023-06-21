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
    public static toString(seconds: number): string;
    public static toString(seconds: number, width?: number /* 0 */, precision?: number /* 3 */): string;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ElapsedTime;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
