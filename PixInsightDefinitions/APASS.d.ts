//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class APASS extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centerDec: number;
    centerRA: number;
    command: string;
    countIO: number;
    dataRelease: number;
    databaseFilePaths: Array<any>;
    databaseMagnitudeHigh: number;
    databaseMagnitudeLow: number;
    excessCount: number;
    exclusionFlags: number;
    generateBinaryOutput: boolean;
    generateTextOutput: boolean;
    inclusionFlags: number;
    isValid: boolean;
    magnitudeHigh: number;
    magnitudeLow: number;
    outputDataRelease: number;
    outputFilePath: string;
    radius: number;
    rejectCount: number;
    requiredFlags: number;
    sortBy: number;
    sourceLimit: number;
    sources: Array<any>;
    textFormat: number;
    textHeaders: number;
    timeDecode: number;
    timeIO: number;
    timeTotal: number;
    timeUncompress: number;
    verbosity: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(APASS?: APASS);


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
    static command: string;
    static countIO: number;
    static dataRelease: number;
    static databaseFilePaths: Array<any>;
    static databaseMagnitudeHigh: number;
    static databaseMagnitudeLow: number;
    static excessCount: number;
    static exclusionFlags: number;
    static generateBinaryOutput: boolean;
    static generateTextOutput: boolean;
    static inclusionFlags: number;
    static isValid: boolean;
    static magnitudeHigh: number;
    static magnitudeLow: number;
    static outputDataRelease: number;
    static outputFilePath: string;
    static radius: number;
    static rejectCount: number;
    static requiredFlags: number;
    static sortBy: number;
    static sourceLimit: number;
    static sources: Array<any>;
    static textFormat: number;
    static textHeaders: number;
    static timeDecode: number;
    static timeIO: number;
    static timeTotal: number;
    static timeUncompress: number;
    static verbosity: number;


    //-------------------------
    //--------constants--------
    //-------------------------
    DataRelease_10;
    DataRelease_9;
    DataRelease_BestAvailable;
    SortBy_B;
    SortBy_Dec;
    SortBy_DontSort;
    SortBy_RA;
    SortBy_V;
    SortBy_g;
    SortBy_i;
    SortBy_r;
    SortBy_z_s;
    TextFormat_CSV;
    TextFormat_Tabular;
    TextFormat_TabularCompound;
    TextHeaders_None;
    TextHeaders_SearchParameters;
    TextHeaders_SearchParametersAndTableColumns;
    TextHeaders_TableColumns;
}
