//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SurfaceSimplifier {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centroidInclusionEnabled: boolean;
    rejectFraction: number;
    rejectionEnabled: boolean;
    tolerance: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(tolerance?: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    x: Vector
    y: Vector
    z: Vector

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public simplify(x: Vector, y: Vector, z: Vector): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: SurfaceSimplifier;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
