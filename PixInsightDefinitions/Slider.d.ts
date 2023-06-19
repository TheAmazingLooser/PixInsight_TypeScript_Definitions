//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Slider extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    maxValue: number;
    minValue: number;
    normalizedValue: number;
    pageSize: number;
    stepSize: number;
    tickInterval: number;
    tickStyle: number;
    tracking: boolean;
    value: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control, vertical?: boolean /* false*/);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param minValue: int
    @param maxValue: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setRange(minValue: number, maxValue: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onRangeUpdated: (minValue: number, maxValue: number) => void;
    public onValueUpdated: (value: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Slider;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
