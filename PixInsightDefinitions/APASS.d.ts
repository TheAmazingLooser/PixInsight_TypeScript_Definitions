//-------------------------
//--------Constants--------
//-------------------------
/* declare const DataRelease_10: APASS.prototype.DataRelease_10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DataRelease_9: APASS.prototype.DataRelease_9;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DataRelease_BestAvailable: APASS.prototype.DataRelease_BestAvailable;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_B: APASS.prototype.SortBy_B;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_Dec: APASS.prototype.SortBy_Dec;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_DontSort: APASS.prototype.SortBy_DontSort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_RA: APASS.prototype.SortBy_RA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_V: APASS.prototype.SortBy_V;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_g: APASS.prototype.SortBy_g;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_i: APASS.prototype.SortBy_i;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_r: APASS.prototype.SortBy_r;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_z_s: APASS.prototype.SortBy_z_s;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextFormat_CSV: APASS.prototype.TextFormat_CSV;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextFormat_Tabular: APASS.prototype.TextFormat_Tabular;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextFormat_TabularCompound: APASS.prototype.TextFormat_TabularCompound;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_None: APASS.prototype.TextHeaders_None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_SearchParameters: APASS.prototype.TextHeaders_SearchParameters;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_SearchParametersAndTableColumns: APASS.prototype.TextHeaders_SearchParametersAndTableColumns;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_TableColumns: APASS.prototype.TextHeaders_TableColumns;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(APASS: APASS);


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
}
