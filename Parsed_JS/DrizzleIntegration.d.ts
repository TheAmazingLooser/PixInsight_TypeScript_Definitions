//-------------------------
//--------Constants--------
//-------------------------
/* declare const Abort: DrizzleIntegration.prototype.Abort;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AskUser: DrizzleIntegration.prototype.AskUser;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Continue: DrizzleIntegration.prototype.Continue;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Circular: DrizzleIntegration.prototype.Kernel_Circular;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Gaussian: DrizzleIntegration.prototype.Kernel_Gaussian;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Square: DrizzleIntegration.prototype.Kernel_Square;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Variable10: DrizzleIntegration.prototype.Kernel_Variable10;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Variable15: DrizzleIntegration.prototype.Kernel_Variable15;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Variable30: DrizzleIntegration.prototype.Kernel_Variable30;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Variable40: DrizzleIntegration.prototype.Kernel_Variable40;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Variable50: DrizzleIntegration.prototype.Kernel_Variable50;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const Kernel_Variable60: DrizzleIntegration.prototype.Kernel_Variable60;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    imageData: Array;
    inputData: Array;
    inputDirectory: string;
    inputHints: string;
    integratedPixels: uint64;
    integrationImageId: string;
    kernelFunction: number;
    kernelGridSize: number;
    noGUIMessages: boolean;
    numberOfChannels: number;
    onError: number;
    originX: number;
    originY: number;
    outputPixels: uint64;
    outputRangeHigh: number;
    outputRangeLow: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    scale: number;
    totalData: number;
    totalRejectedHighB: uint64;
    totalRejectedHighG: uint64;
    totalRejectedHighRK: uint64;
    totalRejectedLowB: uint64;
    totalRejectedLowG: uint64;
    totalRejectedLowRK: uint64;
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
    static imageData: Array;
    static inputData: Array;
    static inputDirectory: string;
    static inputHints: string;
    static integratedPixels: uint64;
    static integrationImageId: string;
    static kernelFunction: number;
    static kernelGridSize: number;
    static noGUIMessages: boolean;
    static numberOfChannels: number;
    static onError: number;
    static originX: number;
    static originY: number;
    static outputPixels: uint64;
    static outputRangeHigh: number;
    static outputRangeLow: number;
    static roiX0: number;
    static roiX1: number;
    static roiY0: number;
    static roiY1: number;
    static scale: number;
    static totalData: number;
    static totalRejectedHighB: uint64;
    static totalRejectedHighG: uint64;
    static totalRejectedHighRK: uint64;
    static totalRejectedLowB: uint64;
    static totalRejectedLowG: uint64;
    static totalRejectedLowRK: uint64;
    static truncateOnOutOfRange: boolean;
    static useROI: boolean;
    static weightImageId: string;
}
