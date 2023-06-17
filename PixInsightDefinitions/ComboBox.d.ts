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
    public addItem(text: string): void;
    public addItem(text: string, icon: Bitmap | string): void;

    public clear(): void;

    public clearEditText(): void;

    public clearItemIcon(index: number): void;

    public clearItemText(index: number): void;

    public findItem(text: string): number;
    public findItem(text: string, fromIdx: number /* 0 */): number;
    public findItem(text: string, fromIdx: number /* 0 */, exactMatch: boolean /* false */): number;
    public findItem(text: string, fromIdx: number /* 0 */, exactMatch: boolean /* false */, caseSensitive: boolean /* false */): number;

    public hideList(): void;

    public insertItem(index: number, text: string): void;
    public insertItem(index: number, text: string, icon: Bitmap | string): void;

    public itemIcon(index: number): Bitmap;

    public itemText(index: number): string;

    public removeItem(index: number): void;

    public setItemIcon(index: number, Bitmap: Bitmap  |  string): void;

    public setItemText(index: number, string: string): void;

    public showList(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onEditTextUpdated: (text: string) => void;
    public onItemHighlighted: (itemIndex: number) => void;
    public onItemSelected: (itemIndex: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ComboBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
