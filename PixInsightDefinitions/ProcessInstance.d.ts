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




    public canExecuteOn(view: View): boolean;


    public canExecuteOn(image: Image): boolean;














    public executeOn(view: View): boolean;
    public executeOn(view: View, swapFile: boolean /* true*/): boolean;


    public executeOn(image: Image): boolean;
    public executeOn(image: Image, hints: string /* ""*/): boolean;






    public isHistoryUpdater(view: View): boolean;


    public isMaskable(view: View, mask: ImageWindow): boolean;










    public readIcon(iconId: string): boolean;


    public setDescription(text: string): void;




    public toSource(): string;
    public toSource(language: string /* "JavaScript"*/): string;
    public toSource(language: string /* "JavaScript"*/, varId: string /* ""*/): string;
    public toSource(language: string /* "JavaScript"*/, varId: string /* ""*/, indent: number /* 0*/): string;
    public toSource(language: string /* "JavaScript"*/, varId: string /* ""*/, indent: number /* 0*/, flags: number /* 0*/): string;




    public writeIcon(iconId: string): boolean;


    public writeInstanceAddr(instanceAddr: string): boolean;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public static fromIcon(iconId: string): ProcessInstance;




    public static iconsByProcessId(processId: string): Array<any>;




    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
