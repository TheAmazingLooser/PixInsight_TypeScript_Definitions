//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TreeBox extends ScrollBox {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alternateRowColor: boolean;
    currentNode: TreeBoxNode;
    headerSorting: boolean;
    headerVisible: boolean;
    iconHeight: number;
    iconWidth: number;
    indentSize: number;
    multipleSelection: boolean;
    nodeDragging: boolean;
    nodeExpansion: boolean;
    numberOfChildren: number;
    numberOfColumns: number;
    rootDecoration: boolean;
    selectedNodes: Array<any>;
    uniformRowHeight: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public add(node: TreeBoxNode): void;

    public adjustColumnWidthToContents(col: number): void;

    public child(idx: number): TreeBoxNode;

    public childIndex(node: TreeBoxNode): number;

    public clear(): void;

    public columnWidth(col: number): number;

    public headerAlignment(col: number): number;

    public headerIcon(col: number): Bitmap;

    public headerText(col: number): string;

    public hideColumn(col: number): void;
    public hideColumn(col: number, hide: boolean /* true*/): void;

    public insert(idx: number, node: TreeBoxNode): void;

    public isColumnVisible(col: number): boolean;

    public nodeByPosition(p: Point): TreeBoxNode;

    public nodeByPosition(x: number, y: number): TreeBoxNode;

    public nodeRect(TreeBoxNode: TreeBoxNode): Rect;

    public remove(idx: number): void;

    public selectAllNodes(): void;

    public setColumnWidth(col: number, width: number): void;

    public setHeaderAlignment(col: number, align: number): void;

    public setHeaderIcon(col: number, icon: Bitmap | string): void;

    public setHeaderText(col: number, txt: string): void;

    public setIconSize(width: number, height: number): void;

    public setIconSize(size: number): void;

    public setNodeIntoView(TreeBoxNode: TreeBoxNode): void;

    public showColumn(col: number): void;
    public showColumn(col: number, show: boolean /* true*/): void;

    public sort(): void;
    public sort(col: number /* 0*/): void;
    public sort(col: number /* 0*/, ascending: boolean /* true*/): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onCurrentNodeUpdated: (currentItem: TreeBoxNode, oldItem: TreeBoxNode) => void;
    public onNodeActivated: (item: TreeBoxNode, columnIndex: number) => void;
    public onNodeClicked: (item: TreeBoxNode, columnIndex: number) => void;
    public onNodeCollapsed: (item: TreeBoxNode) => void;
    public onNodeDoubleClicked: (item: TreeBoxNode, columnIndex: number) => void;
    public onNodeEntered: (item: TreeBoxNode, columnIndex: number) => void;
    public onNodeExpanded: (item: TreeBoxNode) => void;
    public onNodeSelectionUpdated: () => void;
    public onNodeUpdated: (item: TreeBoxNode, columnIndex: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static alternateRowColor: boolean;
    static currentNode: TreeBoxNode;
    static headerSorting: boolean;
    static headerVisible: boolean;
    static iconHeight: number;
    static iconWidth: number;
    static indentSize: number;
    static multipleSelection: boolean;
    static nodeDragging: boolean;
    static nodeExpansion: boolean;
    static numberOfChildren: number;
    static numberOfColumns: number;
    static rootDecoration: boolean;
    static selectedNodes: Array<any>;
    static uniformRowHeight: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
}
