//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarDetector {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bkgDelta: number;
    hotPixelFilterRadius: number;
    invert: boolean;
    mask: Image;
    maxDistortion: number;
    noiseReductionFilterRadius: number;
    peakResponse: number;
    sensitivity: number;
    structureLayers: number;
    upperLimit: number;
    xyStretch: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param map: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getStructureMap(map: Image): void;

    /**
    DESCRIPTION
    @param image: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public stars(image: Image): Array<any>;

    /**
    DESCRIPTION
    @param image: Image

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public test(image: Image): void;
    /**
    DESCRIPTION
    @param image: Image
    @param createStarMaskWindow: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public test(image: Image, createStarMaskWindow?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public progressCallback: (count: number, total: number) => Boolean;


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
