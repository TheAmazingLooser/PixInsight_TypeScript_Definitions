//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SimplexNoise extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    offsetX: number;
    offsetY: number;
    operator: number;
    scale: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SimplexNoise?: SimplexNoise);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static amount: number;
    static offsetX: number;
    static offsetY: number;
    static operator: number;
    static scale: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    Add;
    And;
    Copy;
    Dif;
    Div;
    Mul;
    Nand;
    Nor;
    Or;
    Pow;
    Screen;
    Sub;
    Xnor;
    Xor;
}
