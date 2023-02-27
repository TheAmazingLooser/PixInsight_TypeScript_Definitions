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
    devices: Array<any>;
    getCommandParameters: string;
    getCommandResult: string;
    newProperties: Array<any>;
    properties: Array<any>;
    serverCommand: string;
    serverConnect: boolean;
    serverHostName: string;
    serverPort: number;
    verbosity: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoDeviceController: IndigoDeviceController);


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
    static devices: Array<any>;
    static getCommandParameters: string;
    static getCommandResult: string;
    static newProperties: Array<any>;
    static properties: Array<any>;
    static serverCommand: string;
    static serverConnect: boolean;
    static serverHostName: string;
    static serverPort: number;
    static verbosity: number;
}
