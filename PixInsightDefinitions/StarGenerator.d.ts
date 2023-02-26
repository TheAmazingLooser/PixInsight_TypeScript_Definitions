//-------------------------
//--------Constants--------
//-------------------------
/* declare const Conformal: StarGenerator.prototype.Conformal;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Gnomonic: StarGenerator.prototype.Gnomonic;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Output_CSVFile: StarGenerator.prototype.Output_CSVFile;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Output_Image: StarGenerator.prototype.Output_Image;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class StarGenerator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centerDec: number;
    centerRA: number;
    epoch: number;
    focalLength: number;
    limitMagnitude: number;
    nonlinear: boolean;
    outputFilePath: string;
    outputMode: number;
    pixelSize: number;
    projectionSystem: number;
    sensorHeight: number;
    sensorWidth: number;
    starDatabasePath: string;
    starFWHM: number;
    targetMinimumValue: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarGenerator?: StarGenerator);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static centerDec: number;
    static centerRA: number;
    static epoch: number;
    static focalLength: number;
    static limitMagnitude: number;
    static nonlinear: boolean;
    static outputFilePath: string;
    static outputMode: number;
    static pixelSize: number;
    static projectionSystem: number;
    static sensorHeight: number;
    static sensorWidth: number;
    static starDatabasePath: string;
    static starFWHM: number;
    static targetMinimumValue: number;
}
