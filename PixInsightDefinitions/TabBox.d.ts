//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TabBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    currentPageControl: Control;
    currentPageIndex: number;
    leftControl: Control;
    numberOfPages: number;
    rightControl: Control;
    tabPosition: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public addPage(page: Control, label: string): void;
    public addPage(page: Control, label: string, icon?: Bitmap | string): void;

    public clearControls(): void;
    public clearControls(clearLeft: boolean, clearRight: boolean): void;

    public clearPageIcon(index: number): void;

    public disablePage(index: number): void;
    public disablePage(index: number, disable?: boolean /* true */): void;

    public enablePage(index: number): void;
    public enablePage(index: number, enable?: boolean /* true */): void;

    public insertPage(index: number, page: Control, label: string): void;
    public insertPage(index: number, page: Control, label: string, icon?: Bitmap | string): void;

    public isPageEnabled(index: number): boolean;

    public pageControlByIndex(index: number): Control;

    public pageIcon(index: number): Bitmap;

    public pageLabel(index: number): string;

    public pageToolTip(index: number): string;

    public removePage(index: number): void;

    public setPageIcon(index: number, icon: Bitmap | string): void;

    public setPageLabel(index: number, label: string): void;

    public setPageToolTip(index: number, tip: string): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onPageSelected: (pageIndex: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: TabBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
