//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SpinBox extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alignment: number;
    autoAdjustWidth: boolean;
    editable: boolean;
    maxValue: number;
    minValue: number;
    minimumValueText: string;
    normalizedValue: number;
    prefix: string;
    stepSize: number;
    suffix: string;
    value: number;
    wrapping: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


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
    static prototype: SpinBox;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
