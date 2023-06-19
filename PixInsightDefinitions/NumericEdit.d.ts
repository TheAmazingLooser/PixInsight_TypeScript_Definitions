//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NumericEdit extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoEditWidth: boolean;
    edit: Edit;
    fixed: boolean;
    label: Label;
    lowerBound: number;
    precision: number;
    real: boolean;
    sciTriggerExp: number;
    scientific: boolean;
    sign: boolean;
    sizer: Sizer;
    upperBound: number;
    value: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION


    fixed: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enableFixedPrecision(fixed: boolean): void;

    /**
    DESCRIPTION


    sign: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enableFixedSign(sign: boolean): void;

    /**
    DESCRIPTION


    enable: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enableScientificNotation(enable: boolean): void;

    /**
    DESCRIPTION


    enable: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public enableValidatingRegExp(enable: boolean): void;

    /**
    DESCRIPTION


    digits: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setPrecision(digits: number): void;

    /**
    DESCRIPTION


    lowerBound: Number
    upperBound: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setRange(lowerBound: number, upperBound: number): void;

    /**
    DESCRIPTION


    real: Boolean

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setReal(real: boolean): void;

    /**
    DESCRIPTION


    exp10: int

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setScientificNotationTriggerExponent(exp10: number): void;

    /**
    DESCRIPTION


    value: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public setValue(value: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onValueUpdated: (value: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}
