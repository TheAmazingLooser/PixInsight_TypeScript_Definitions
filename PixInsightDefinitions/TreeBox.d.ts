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
    @param node: TreeBoxNode

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
    @param col: int

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
    @param idx: int

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
    @param node: TreeBoxNode

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
    @param col: int

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
    @param col: int

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
    @param col: int

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
    @param col: int

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
    @param col: int

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
    @param col: int
    @param hide: Boolean = true

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
    @param idx: int
    @param node: TreeBoxNode

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
    @param col: int

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
    @param p: Point

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
    @param x: int
    @param y: int

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
    @param TreeBoxNode: TreeBoxNode

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
    @param idx: int

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
    @param col: int
    @param width: int

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
    @param col: int
    @param align: int

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
    @param col: int
    @param icon: Bitmap|String

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
    @param col: int
    @param txt: String

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
    @param width: int
    @param height: int

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
    @param size: int

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
    @param TreeBoxNode: TreeBoxNode

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
    @param col: int

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
    @param col: int
    @param show: Boolean = true

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
    @param col: int = 0
    @param ascending: Boolean = true

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
