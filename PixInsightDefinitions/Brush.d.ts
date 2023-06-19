//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Brush {


    //-------------------------
    //-------Properties--------
    //-------------------------
    color: number;
    isEmpty: boolean;
    isSolid: boolean;
    isStippled: boolean;
    stipple: Bitmap;
    style: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(color?: number /* 0xff000000*/, style?: number /* BrushStyle_Solid*/);
    constructor(b: Brush);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    br: Brush

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(br: Brush): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Brush;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
