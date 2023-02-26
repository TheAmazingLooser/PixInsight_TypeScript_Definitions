//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ProcessInstance?: ProcessInstance);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(ProcessInstance: ProcessInstance): void;

    public canExecuteGlobal(): boolean;

    public canExecuteOn(view: View): boolean;

    public canExecuteOn(image: Image): boolean;

    public canLaunchInterface(): boolean;

    public canProcessGlobal(): boolean;

    public canProcessImages(): boolean;

    public canProcessViews(): boolean;

    public description(): string;

    public executeGlobal(): boolean;

    public executeOn(view: View, swapFile?: boolean /* true*/): boolean;

    public executeOn(image: Image, hints?: string /* ""*/): boolean;

    public executionTime(): number;

    public isAssignable(): boolean;

    public isHistoryUpdater(view: View): boolean;

    public isMaskable(view: View, mask: ImageWindow): boolean;

    public launch(): void;

    public launchInterface(): boolean;

    public processCategory(): string;

    public processId(): string;

    public readIcon(iconId: string): boolean;

    public setDescription(text: string): void;

    public startJD(): number;

    public toSource(language?: string /* "JavaScript"*/, varId?: string /* ""*/, indent?: number /* 0*/, flags?: number /* 0*/): string;

    public validate(): boolean;

    public writeIcon(iconId: string): boolean;

    public writeInstanceAddr(instanceAddr: string): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromIcon(iconId: string): ProcessInstance;

    public static icons(): Array<any>;

    public static iconsByProcessId(processId: string): Array<any>;



    //-------------------------
    //----static Properties----
    //-------------------------
}
