//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CosmeticCorrection extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    cfa: boolean;
    coldAutoCheck: boolean;
    coldAutoValue: number;
    coldDarkCheck: boolean;
    coldDarkLevel: number;
    defects: Array<any>;
    hotAutoCheck: boolean;
    hotAutoValue: number;
    hotDarkCheck: boolean;
    hotDarkLevel: number;
    masterDarkPath: string;
    outputDir: string;
    outputExtension: string;
    overwrite: boolean;
    postfix: string;
    prefix: string;
    targetFrames: Array<any>;
    transferFn: number;
    useAutoDetect: boolean;
    useDefectList: boolean;
    useMasterDark: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CosmeticCorrection: CosmeticCorrection);


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
    static cfa: boolean;
    static coldAutoCheck: boolean;
    static coldAutoValue: number;
    static coldDarkCheck: boolean;
    static coldDarkLevel: number;
    static defects: Array<any>;
    static hotAutoCheck: boolean;
    static hotAutoValue: number;
    static hotDarkCheck: boolean;
    static hotDarkLevel: number;
    static masterDarkPath: string;
    static outputDir: string;
    static outputExtension: string;
    static overwrite: boolean;
    static postfix: string;
    static prefix: string;
    static targetFrames: Array<any>;
    static transferFn: number;
    static useAutoDetect: boolean;
    static useDefectList: boolean;
    static useMasterDark: boolean;
}
