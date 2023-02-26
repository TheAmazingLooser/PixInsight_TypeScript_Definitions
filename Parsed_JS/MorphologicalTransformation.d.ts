//-------------------------
//--------Constants--------
//-------------------------
/* declare const Closing: MorphologicalTransformation.prototype.Closing;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Dilation: MorphologicalTransformation.prototype.Dilation;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Erosion: MorphologicalTransformation.prototype.Erosion;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Median: MorphologicalTransformation.prototype.Median;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Midpoint: MorphologicalTransformation.prototype.Midpoint;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Opening: MorphologicalTransformation.prototype.Opening;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Selection: MorphologicalTransformation.prototype.Selection;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class MorphologicalTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    highThreshold: number;
    interlacingDistance: number;
    lowThreshold: number;
    numberOfIterations: number;
    operator: number;
    selectionPoint: number;
    structureName: string;
    structureSize: number;
    structureWayTable: Array;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MorphologicalTransformation?: MorphologicalTransformation);


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
    static highThreshold: number;
    static interlacingDistance: number;
    static lowThreshold: number;
    static numberOfIterations: number;
    static operator: number;
    static selectionPoint: number;
    static structureName: string;
    static structureSize: number;
    static structureWayTable: Array;
}
