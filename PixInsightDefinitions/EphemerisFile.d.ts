//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class EphemerisFile {


    //-------------------------
    //-------Properties--------
    //-------------------------
    authors: string;
    briefDescription: string;
    constants: string;
    copyright: string;
    creationTime: Date;
    creatorApplication: string;
    creatorOS: string;
    description: string;
    endTime: Date;
    filePath: string;
    objects: Array<any>;
    organizationName: string;
    startTime: Date;
    title: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(filePath: string);


    //-------------------------
    //--------Functions--------
    //-------------------------


    public constantValue(name: string): number;


    public isConstantAvailable(name: string): boolean;


    public isObjectAvailable(object: string): boolean;
    public isObjectAvailable(object: string, origin: string): boolean;


    public objectName(object: string): string;
    public objectName(object: string, origin: string): string;


    public open(filePath: string): void;


    public visibleObjects(window: ImageWindow, P: Position): Array<any>;
    public visibleObjects(window: ImageWindow, P: Position, magMax: any): Array<any>;
    public visibleObjects(window: ImageWindow, P: Position, magMax: any, magMin: any): Array<any>;
    public visibleObjects(window: ImageWindow, P: Position, magMax: any, magMin: any, rect: Rect): Array<any>;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public deltaAT(t: Date): number;


    public deltaAT(isoTime: string): number;


    public deltaAT(jd1: number): number;
    public deltaAT(jd1: number, jd2: number): number;


    public deltaT(t: Date): number;


    public deltaT(isoTime: string): number;


    public deltaT(jd1: number): number;
    public deltaT(jd1: number, jd2: number): number;




    //-------------------------
    //----static Properties----
    //-------------------------
    static authors: string;
    static briefDescription: string;
    static constants: string;
    static copyright: string;
    static creationTime: Date;
    static creatorApplication: string;
    static creatorOS: string;
    static description: string;
    static endTime: Date;
    static filePath: string;
    static objects: Array<any>;
    static organizationName: string;
    static startTime: Date;
    static title: string;
}
