//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ComboBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoCompletion: boolean;
    currentItem: number;
    editEnabled: boolean;
    editText: string;
    iconHeight: number;
    iconWidth: number;
    maxVisibleItemCount: number;
    minItemCharWidth: number;
    numberOfItems: number;
    popupToolTip: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public addItem(text: string, icon?: Bitmap | string): void;

    public clear(): void;

    public clearEditText(): void;

    public clearItemIcon(index: number): void;

    public clearItemText(index: number): void;

    public findItem(text: string, fromIdx?: number /* 0*/, exactMatch?: boolean /* false*/, caseSensitive?: boolean /* false*/): number;

    public hideList(): void;

    public insertItem(index: number, text: string, icon?: Bitmap | string): void;

    public itemIcon(index: number): Bitmap;

    public itemText(index: number): string;

    public removeItem(index: number): void;

    public setItemIcon(index: number, param_1: Bitmap | string): void;

    public setItemText(index: number, String: string): void;

    public showList(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static autoCompletion: boolean;
    static currentItem: number;
    static editEnabled: boolean;
    static editText: string;
    static iconHeight: number;
    static iconWidth: number;
    static maxVisibleItemCount: number;
    static minItemCharWidth: number;
    static numberOfItems: number;
    static popupToolTip: string;
}
