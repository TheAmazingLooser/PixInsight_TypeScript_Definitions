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
    @param rect: Rect
    @param dx: Number
    @param dy: Number

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
    @param rect: Rect
    @param dx: Number
    @param dy: Number
    @param excludeRect: Rect

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
    @param objects: any

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
    @param objects: any
    @param bucketCapacity: any
    @param Rect: Rect

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
    @param obj: Object

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
    @param point: Point

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
    @param rect: Rect
    @param dx: Number
    @param dy: Number

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
    @param rect: Rect
    @param dx: Number
    @param dy: Number
    @param excludeRect: Rect

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
    @param point: Point

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
    @param bucketCapacity: any
    @param Rect: Rect

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
    @param obj: Object

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
    @param point: Point

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
    @param rect: Rect

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
    @param rect: Rect

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
    @param rect: Rect
    @param callback: Function

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
    @param rect: Rect
    @param callback: Function
    @param data: Object

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
    @param callback: Function

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
