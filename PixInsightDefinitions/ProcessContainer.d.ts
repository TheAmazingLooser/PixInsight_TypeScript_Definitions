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
    @param instance: ProcessInstance

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
    @param index: uint

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
    @param index: uint

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
    @param index: uint

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
    @param index: uint
    @param disable: Boolean = true

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
    @param index: uint

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
    @param index: uint

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
    @param index: uint
    @param enable: Boolean = true

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
    @param index: uint

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
    @param index: uint
    @param instance: ProcessInstance

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
    @param index: uint

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
    @param index: uint
    @param invert: Boolean

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
    @param index: uint

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
    @param index: uint

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
    @param index: uint
    @param mask: ImageWindow

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
    @param index: uint
    @param mask: ImageWindow
    @param invert: Boolean = false

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
    @param index: uint
    @param maskId: String

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
    @param index: uint
    @param maskId: String
    @param invert: Boolean = false

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
