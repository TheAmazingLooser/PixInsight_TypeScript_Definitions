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
    objects: Array;
    organizationName: string;
    startTime: Date;
    title: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(filePath?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public close(): void;

    public constantValue(name: string): number;

    public isConstantAvailable(name: string): boolean;

    public isObjectAvailable(object: string, origin?: string): boolean;

    public objectName(object: string, origin?: string): string;

    public open(filePath: string): void;

    public visibleObjects(window: ImageWindow, P: Position, magMax?: any, magMin?: any, rect?: Rect): Array;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static deltaAT(t: Date): number;

    public static deltaAT(isoTime: string): number;

    public static deltaAT(jd1: number, jd2?: number): number;

    public static deltaT(t: Date): number;

    public static deltaT(isoTime: string): number;

    public static deltaT(jd1: number, jd2?: number): number;



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
    static objects: Array;
    static organizationName: string;
    static startTime: Date;
    static title: string;
}
