//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ElapsedTime {


    //-------------------------
    //-------Properties--------
    //-------------------------
    text: string;
    value: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(t: ElapsedTime);


    //-------------------------
    //--------Functions--------
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
	public reset(): void;

    /**
    DESCRIPTION
    @param t: ElapsedTime

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public since(t: ElapsedTime): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param seconds: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static toString(seconds: number): string;
    /**
    DESCRIPTION
    @param seconds: Number
    @param width: int = 0
    @param precision: int = 3

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static toString(seconds: number, width?: number /* 0 */, precision?: number /* 3 */): string;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ElapsedTime;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
