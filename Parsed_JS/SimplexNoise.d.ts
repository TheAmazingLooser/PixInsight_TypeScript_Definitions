//-------------------------
//--------Constants--------
//-------------------------
/* declare const Add: SimplexNoise.prototype.Add;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const And: SimplexNoise.prototype.And;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Copy: SimplexNoise.prototype.Copy;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Dif: SimplexNoise.prototype.Dif;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Div: SimplexNoise.prototype.Div;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Mul: SimplexNoise.prototype.Mul;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Nand: SimplexNoise.prototype.Nand;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Nor: SimplexNoise.prototype.Nor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Or: SimplexNoise.prototype.Or;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Pow: SimplexNoise.prototype.Pow;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Screen: SimplexNoise.prototype.Screen;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Sub: SimplexNoise.prototype.Sub;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Xnor: SimplexNoise.prototype.Xnor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Xor: SimplexNoise.prototype.Xor;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
}
