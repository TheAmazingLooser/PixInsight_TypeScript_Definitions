//-------------------------
//--------Constants--------
//-------------------------


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
    //-----event-handlers------
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


    //-------------------------
    //--------constants--------
    //-------------------------
    Conformal;
    Gnomonic;
    Output_CSVFile;
    Output_Image;
}
