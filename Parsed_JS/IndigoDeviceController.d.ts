//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IndigoDeviceController extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    abort: boolean;
    devices: Array;
    getCommandParameters: string;
    getCommandResult: string;
    newProperties: Array;
    properties: Array;
    serverCommand: string;
    serverConnect: boolean;
    serverHostName: string;
    serverPort: number;
    verbosity: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoDeviceController?: IndigoDeviceController);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static abort: boolean;
    static devices: Array;
    static getCommandParameters: string;
    static getCommandResult: string;
    static newProperties: Array;
    static properties: Array;
    static serverCommand: string;
    static serverConnect: boolean;
    static serverHostName: string;
    static serverPort: number;
    static verbosity: number;
}
