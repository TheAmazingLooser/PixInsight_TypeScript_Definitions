//-------------------------
//--------Constants--------
//-------------------------


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
    structureWayTable: Array<any>;


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
    static structureWayTable: Array<any>;


    //-------------------------
    //--------constants--------
    //-------------------------
    Closing;
    Dilation;
    Erosion;
    Median;
    Midpoint;
    Opening;
    Selection;
}
