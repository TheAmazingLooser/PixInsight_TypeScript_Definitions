//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Pen {


    //-------------------------
    //-------Properties--------
    //-------------------------
    brush: Brush;
    cap: number;
    color: number;
    isEmpty: boolean;
    isSolid: boolean;
    join: number;
    style: number;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(color?: number /* 0xff000000*/, width?: number /* 0*/, style?: number /* PenStyle_Solid*/, cap?: number /* PenCap_Flat*/, join?: number /* PenJoin_Miter*/);
    constructor(p: Pen);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    p: Pen

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public assign(p: Pen): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Pen;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
