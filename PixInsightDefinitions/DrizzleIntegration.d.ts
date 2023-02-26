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
}
