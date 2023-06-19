//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ProcessContainer extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isEmpty: boolean;
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    instance: ProcessInstance

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public add(instance: ProcessInstance): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public at(index: number): ProcessInstance;

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


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public delete(index: number): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public disable(index: number): void;
    /**
    DESCRIPTION


    index: uint
    disable: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public disable(index: number, disable?: boolean /* true */): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public disabled(index: number): boolean;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enable(index: number): void;
    /**
    DESCRIPTION


    index: uint
    enable: Boolean = true

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enable(index: number, enable?: boolean /* true */): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enabled(index: number): boolean;

    /**
    DESCRIPTION


    index: uint
    instance: ProcessInstance

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public insert(index: number, instance: ProcessInstance): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invertMask(index: number): void;
    /**
    DESCRIPTION


    index: uint
    invert: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public invertMask(index: number, invert?: boolean): void;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maskId(index: number): string;

    /**
    DESCRIPTION


    index: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public maskInverted(index: number): boolean;

    /**
    DESCRIPTION


    index: uint
    mask: ImageWindow

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setMask(index: number, mask: ImageWindow): void;
    /**
    DESCRIPTION


    index: uint
    mask: ImageWindow
    invert: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setMask(index: number, mask: ImageWindow, invert?: boolean /* false */): void;

    /**
    DESCRIPTION


    index: uint
    maskId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setMask(index: number, maskId: string): void;
    /**
    DESCRIPTION


    index: uint
    maskId: String
    invert: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setMask(index: number, maskId: string, invert?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ProcessContainer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
