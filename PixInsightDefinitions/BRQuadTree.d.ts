//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class BRQuadTree {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bucketCapacity: number;
    objects: Array<any>;
    root: QuadTreeNode;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(objects?: Array<any>, bucketCapacity ?: number /*  40*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    rect: Rect
    dx: Number
    dy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public avgDist(rect: Rect, dx: number, dy: number): number;
    /**
    DESCRIPTION


    rect: Rect
    dx: Number
    dy: Number
    excludeRect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public avgDist(rect: Rect, dx: number, dy: number, excludeRect?: Rect): number;

    /**
    DESCRIPTION


    objects: any

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public build(objects: any): void;
    /**
    DESCRIPTION


    objects: any
    bucketCapacity: any
    Rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public build(objects: any, bucketCapacity?: any, Rect?: Rect): void;

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


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public height(): number;

    /**
    DESCRIPTION


    obj: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(obj: Object): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isEmpty(): boolean;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public isTree(): boolean;

    /**
    DESCRIPTION


    point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public leafNodeAt(point: Point): QuadTreeNode;

    /**
    DESCRIPTION


    rect: Rect
    dx: Number
    dy: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minDist(rect: Rect, dx: number, dy: number): number;
    /**
    DESCRIPTION


    rect: Rect
    dx: Number
    dy: Number
    excludeRect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public minDist(rect: Rect, dx: number, dy: number, excludeRect?: Rect): number;

    /**
    DESCRIPTION


    point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public nodeAt(point: Point): QuadTreeNode;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public numberOfLeafNodes(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public numberOfNodes(): number;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public regenerate(): void;
    /**
    DESCRIPTION


    bucketCapacity: any
    Rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public regenerate(bucketCapacity?: any, Rect?: Rect): void;

    /**
    DESCRIPTION


    obj: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public remove(obj: Object): void;

    /**
    DESCRIPTION


    point: Point

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public removeAtPoint(point: Point): void;

    /**
    DESCRIPTION


    rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public removeAtRect(rect: Rect): void;

    /**
    DESCRIPTION


    rect: Rect

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public search(rect: Rect): Array<any>;

    /**
    DESCRIPTION


    rect: Rect
    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public searchWithCallback(rect: Rect, callback: Function): void;
    /**
    DESCRIPTION


    rect: Rect
    callback: Function
    data: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public searchWithCallback(rect: Rect, callback: Function, data?: Object): void;

    /**
    DESCRIPTION


    callback: Function

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public traverse(callback: Function): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
