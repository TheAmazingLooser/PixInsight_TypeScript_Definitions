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
    /**
    DESCRIPTION


    node: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(node: TreeBoxNode): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public adjustColumnWidthToContents(col: number): void;

    /**
    DESCRIPTION


    idx: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public child(idx: number): TreeBoxNode;

    /**
    DESCRIPTION


    node: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public childIndex(node: TreeBoxNode): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public clear(): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public columnWidth(col: number): number;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public headerAlignment(col: number): number;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public headerIcon(col: number): Bitmap;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public headerText(col: number): string;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hideColumn(col: number): void;
    /**
    DESCRIPTION


    col: int
    hide: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public hideColumn(col: number, hide?: boolean /* true */): void;

    /**
    DESCRIPTION


    idx: int
    node: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(idx: number, node: TreeBoxNode): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isColumnVisible(col: number): boolean;

    /**
    DESCRIPTION


    p: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nodeByPosition(p: Point): TreeBoxNode;

    /**
    DESCRIPTION


    x: int
    y: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nodeByPosition(x: number, y: number): TreeBoxNode;

    /**
    DESCRIPTION


    TreeBoxNode: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nodeRect(TreeBoxNode: TreeBoxNode): Rect;

    /**
    DESCRIPTION


    idx: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(idx: number): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public selectAllNodes(): void;

    /**
    DESCRIPTION


    col: int
    width: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setColumnWidth(col: number, width: number): void;

    /**
    DESCRIPTION


    col: int
    align: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setHeaderAlignment(col: number, align: number): void;

    /**
    DESCRIPTION


    col: int
    icon: Bitmap|String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setHeaderIcon(col: number, icon: Bitmap | string): void;

    /**
    DESCRIPTION


    col: int
    txt: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setHeaderText(col: number, txt: string): void;

    /**
    DESCRIPTION


    width: int
    height: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setIconSize(width: number, height: number): void;

    /**
    DESCRIPTION


    size: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setIconSize(size: number): void;

    /**
    DESCRIPTION


    TreeBoxNode: TreeBoxNode

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setNodeIntoView(TreeBoxNode: TreeBoxNode): void;

    /**
    DESCRIPTION


    col: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public showColumn(col: number): void;
    /**
    DESCRIPTION


    col: int
    show: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public showColumn(col: number, show?: boolean /* true */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sort(): void;
    /**
    DESCRIPTION


    col: int = 0
    ascending: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public sort(col?: number /* 0 */, ascending?: boolean /* true */): void;



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
    static prototype: TreeBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
