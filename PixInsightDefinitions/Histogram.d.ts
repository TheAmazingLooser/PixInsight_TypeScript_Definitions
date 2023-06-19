//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Histogram {


    //-------------------------
    //-------Properties--------
    //-------------------------
    entropy: number;
    isEmpty: boolean;
    lastLevel: number;
    normalizedPeakLevel: number;
    peakCount: number;
    peakLevel: number;
    resolution: number;
    totalCount: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(resolution: number);
    constructor(h: Histogram);
    constructor(img: Image);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param h: Histogram

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(h: Histogram): void;

    /**
    DESCRIPTION
    @param count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public clipHigh(count: number): number;

    /**
    DESCRIPTION
    @param count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public clipLow(count: number): number;

    /**
    DESCRIPTION
    @param level: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public count(level: number): number;

    /**
    DESCRIPTION
    @param img: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public generate(img: Image): void;

    /**
    DESCRIPTION
    @param normalizedLevel: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public histogramLevel(normalizedLevel: number): number;

    /**
    DESCRIPTION
    @param count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public normalizedClipHigh(count: number): number;

    /**
    DESCRIPTION
    @param count: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public normalizedClipLow(count: number): number;

    /**
    DESCRIPTION
    @param histogramLevel: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public normalizedLevel(histogramLevel: number): number;

    /**
    DESCRIPTION
    @param h: Histogram

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public resample(h: Histogram): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toArray(): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Histogram;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
