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


    public since(t: ElapsedTime): number;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public toString(seconds: number): string;
    public toString(seconds: number, width: number /* 0*/): string;
    public toString(seconds: number, width: number /* 0*/, precision: number /* 3*/): string;




    //-------------------------
    //----static Properties----
    //-------------------------
    static text: string;
    static value: number;
}
