//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TreeBoxNode {


    //-------------------------
    //-------Properties--------
    //-------------------------
    checkable: boolean;
    checked: boolean;
    enabled: boolean;
    expanded: boolean;
    numberOfChildren: number;
    parent: TreeBoxNode;
    parentTree: TreeBox;
    selectable: boolean;
    selected: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(TreeBox: any, idx?: number);
    constructor(TreeBoxNode: any, idx?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public add(node: TreeBoxNode): void;

    public alignment(col: number): number;

    public backgroundColor(col: number): number;

    public child(index: number): TreeBoxNode;

    public clearIcon(col: number): void;

    public font(col: number): Font;

    public icon(col: number): Bitmap;

    public insert(index: number, node: TreeBoxNode): void;

    public remove(index: number): void;

    public setAlignment(col: number, align: number): void;

    public setBackgroundColor(col: number, rgba: number): void;

    public setFont(col: number, font: Font): void;

    public setIcon(col: number, icon: Bitmap | string): void;

    public setText(col: number, txt: string): void;

    public setTextColor(col: number, rgba: number): void;

    public setToolTip(col: number, tip: string): void;

    public text(col: number): string;

    public textColor(col: number): number;

    public toolTip(col: number): string;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static checkable: boolean;
    static checked: boolean;
    static enabled: boolean;
    static expanded: boolean;
    static numberOfChildren: number;
    static parent: TreeBoxNode;
    static parentTree: TreeBox;
    static selectable: boolean;
    static selected: boolean;
}
