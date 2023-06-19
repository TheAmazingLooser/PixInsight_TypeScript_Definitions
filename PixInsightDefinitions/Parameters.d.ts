//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Parameters {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static clear(): void;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static get(id: string): string;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getBoolean(id: string): boolean;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getInteger(id: string): number;
    /**
    DESCRIPTION
    @param id: String
    @param radix: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getInteger(id: string, radix?: number /* 0 */): number;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getReal(id: string): number;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getString(id: string): string;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getUInt(id: string): number;
    /**
    DESCRIPTION
    @param id: String
    @param radix: int = 0

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static getUInt(id: string, radix?: number /* 0 */): number;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static has(id: string): boolean;

    /**
    DESCRIPTION
    @param id: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static remove(id: string): void;

    /**
    DESCRIPTION
    @param id: String
    @param value: Object

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static set(id: string, value: Object): void;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static isGlobalTarget: boolean;
    static isViewTarget: boolean;
    static targetView: any;


    //-------------------------
    //--------constants--------
    //-------------------------
}
