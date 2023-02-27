//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PixelMath extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    cacheGeneratedImages: boolean;
    clearImageCacheAndExit: boolean;
    createNewImage: boolean;
    expression: string;
    expression0: string;
    expression1: string;
    expression2: string;
    expression3: string;
    generateOutput: boolean;
    newImageAlpha: boolean;
    newImageColorSpace: number;
    newImageHeight: number;
    newImageId: string;
    newImageSampleFormat: number;
    newImageWidth: number;
    optimization: boolean;
    outputData: Array<any>;
    rescale: boolean;
    rescaleLower: number;
    rescaleUpper: number;
    showNewImage: boolean;
    singleThreaded: boolean;
    symbols: string;
    truncate: boolean;
    truncateLower: number;
    truncateUpper: number;
    use64BitWorkingImage: boolean;
    useSingleExpression: boolean;
    variables: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(PixelMath?: PixelMath);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static cacheGeneratedImages: boolean;
    static clearImageCacheAndExit: boolean;
    static createNewImage: boolean;
    static expression: string;
    static expression0: string;
    static expression1: string;
    static expression2: string;
    static expression3: string;
    static generateOutput: boolean;
    static newImageAlpha: boolean;
    static newImageColorSpace: number;
    static newImageHeight: number;
    static newImageId: string;
    static newImageSampleFormat: number;
    static newImageWidth: number;
    static optimization: boolean;
    static outputData: Array<any>;
    static rescale: boolean;
    static rescaleLower: number;
    static rescaleUpper: number;
    static showNewImage: boolean;
    static singleThreaded: boolean;
    static symbols: string;
    static truncate: boolean;
    static truncateLower: number;
    static truncateUpper: number;
    static use64BitWorkingImage: boolean;
    static useSingleExpression: boolean;
    static variables: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Gray;
    RGB;
    SameAsTarget;
    f32;
    f64;
    i16;
    i32;
    i8;
}
