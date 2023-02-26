//-------------------------
//--------Constants--------
//-------------------------
/* declare const DataRelease_2: Gaia.prototype.DataRelease_2;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DataRelease_3: Gaia.prototype.DataRelease_3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DataRelease_3_SP: Gaia.prototype.DataRelease_3_SP;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DataRelease_BestAvailable: Gaia.prototype.DataRelease_BestAvailable;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const DataRelease_E3: Gaia.prototype.DataRelease_E3;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_Dec: Gaia.prototype.SortBy_Dec;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_DontSort: Gaia.prototype.SortBy_DontSort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_G: Gaia.prototype.SortBy_G;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_G_BP: Gaia.prototype.SortBy_G_BP;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_G_RP: Gaia.prototype.SortBy_G_RP;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_Parallax: Gaia.prototype.SortBy_Parallax;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const SortBy_RA: Gaia.prototype.SortBy_RA;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextFormat_CSV: Gaia.prototype.TextFormat_CSV;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextFormat_Tabular: Gaia.prototype.TextFormat_Tabular;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextFormat_TabularCompound: Gaia.prototype.TextFormat_TabularCompound;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_None: Gaia.prototype.TextHeaders_None;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_SearchParameters: Gaia.prototype.TextHeaders_SearchParameters;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_SearchParametersAndTableColumns: Gaia.prototype.TextHeaders_SearchParametersAndTableColumns;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TextHeaders_TableColumns: Gaia.prototype.TextHeaders_TableColumns;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Gaia extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centerDec: number;
    centerRA: number;
    command: string;
    countIO: number;
    dataRelease: number;
    databaseFilePaths: Array<any>;
    databaseHasMeanSpectrumData: boolean;
    databaseMagnitudeHigh: number;
    databaseMagnitudeLow: number;
    databaseSpectrumBits: number;
    databaseSpectrumCount: number;
    databaseSpectrumStart: number;
    databaseSpectrumStep: number;
    excessCount: number;
    exclusionFlags: number;
    generateBinaryOutput: boolean;
    generateTextOutput: boolean;
    inclusionFlags: number;
    isValid: boolean;
    magnitudeHigh: number;
    magnitudeLow: number;
    normalizeSpectrum: boolean;
    outputDataRelease: number;
    outputFilePath: string;
    photonFluxUnits: boolean;
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
    constructor(Gaia?: Gaia);


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
    static databaseHasMeanSpectrumData: boolean;
    static databaseMagnitudeHigh: number;
    static databaseMagnitudeLow: number;
    static databaseSpectrumBits: number;
    static databaseSpectrumCount: number;
    static databaseSpectrumStart: number;
    static databaseSpectrumStep: number;
    static excessCount: number;
    static exclusionFlags: number;
    static generateBinaryOutput: boolean;
    static generateTextOutput: boolean;
    static inclusionFlags: number;
    static isValid: boolean;
    static magnitudeHigh: number;
    static magnitudeLow: number;
    static normalizeSpectrum: boolean;
    static outputDataRelease: number;
    static outputFilePath: string;
    static photonFluxUnits: boolean;
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
