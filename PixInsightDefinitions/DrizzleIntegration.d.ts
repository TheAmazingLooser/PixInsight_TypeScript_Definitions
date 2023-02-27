//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DrizzleIntegration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    cfaPattern: string;
    closePreviousImages: boolean;
    dropShrink: number;
    enableAdaptiveNormalization: boolean;
    enableCFA: boolean;
    enableImageWeighting: boolean;
    enableLocalDistortion: boolean;
    enableLocalNormalization: boolean;
    enableRejection: boolean;
    enableSurfaceSplines: boolean;
    imageData: Array<any>;
    inputData: Array<any>;
    inputDirectory: string;
    inputHints: string;
    integratedPixels: number;
    integrationImageId: string;
    kernelFunction: number;
    kernelGridSize: number;
    noGUIMessages: boolean;
    numberOfChannels: number;
    onError: number;
    originX: number;
    originY: number;
    outputPixels: number;
    outputRangeHigh: number;
    outputRangeLow: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    scale: number;
    totalData: number;
    totalRejectedHighB: number;
    totalRejectedHighG: number;
    totalRejectedHighRK: number;
    totalRejectedLowB: number;
    totalRejectedLowG: number;
    totalRejectedLowRK: number;
    truncateOnOutOfRange: boolean;
    useROI: boolean;
    weightImageId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DrizzleIntegration?: DrizzleIntegration);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static cfaPattern: string;
    static closePreviousImages: boolean;
    static dropShrink: number;
    static enableAdaptiveNormalization: boolean;
    static enableCFA: boolean;
    static enableImageWeighting: boolean;
    static enableLocalDistortion: boolean;
    static enableLocalNormalization: boolean;
    static enableRejection: boolean;
    static enableSurfaceSplines: boolean;
    static imageData: Array<any>;
    static inputData: Array<any>;
    static inputDirectory: string;
    static inputHints: string;
    static integratedPixels: number;
    static integrationImageId: string;
    static kernelFunction: number;
    static kernelGridSize: number;
    static noGUIMessages: boolean;
    static numberOfChannels: number;
    static onError: number;
    static originX: number;
    static originY: number;
    static outputPixels: number;
    static outputRangeHigh: number;
    static outputRangeLow: number;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static scale: number;
    static totalData: number;
    static totalRejectedHighB: number;
    static totalRejectedHighG: number;
    static totalRejectedHighRK: number;
    static totalRejectedLowB: number;
    static totalRejectedLowG: number;
    static totalRejectedLowRK: number;
    static truncateOnOutOfRange: boolean;
    static useROI: boolean;
    static weightImageId: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    AskUser;
    Continue;
    Kernel_Circular;
    Kernel_Gaussian;
    Kernel_Square;
    Kernel_Variable10;
    Kernel_Variable15;
    Kernel_Variable30;
    Kernel_Variable40;
    Kernel_Variable50;
    Kernel_Variable60;
}
