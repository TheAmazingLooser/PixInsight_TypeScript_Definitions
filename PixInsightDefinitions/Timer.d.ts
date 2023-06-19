//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Timer {


    //-------------------------
    //-------Properties--------
    //-------------------------
    count: number;
    interval: number;
    isRunning: boolean;
    periodic: boolean;
    singleShot: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(interval?: number /* 1.0*/, periodic?: boolean /* true*/);


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
    public start(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public stop(): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onTimeout: () => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Timer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
