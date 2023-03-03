//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SectionBar extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checkBox: CheckBox;
    section: Control;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control, title?: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public enableCheckBox(): void;

    public hasCheckBox(): boolean;

    public hasSection(): boolean;

    public isChecked(): boolean;

    public isCollapsed(): boolean;

    public isExpanded(): boolean;

    public setSection(section: Control): void;

    public setTitle(title: string): void;

    public title(): string;

    public toggleSection(): void;

    public updateSection(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onCheckSection: (bar: SectionBar) => void;
    public onToggleSection: (bar: SectionBar, toggleBegin: boolean) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static checkBox: CheckBox;
    static section: Control;


    //-------------------------
    //--------constants--------
    //-------------------------
}
