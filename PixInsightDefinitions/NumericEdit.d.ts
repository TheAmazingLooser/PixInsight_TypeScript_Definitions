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
    @param fixed: Boolean

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
    @param sign: Boolean

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
    @param enable: Boolean

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
    @param enable: Boolean

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
    @param digits: int

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
    @param lowerBound: Number
    @param upperBound: Number

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
    @param real: Boolean

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
    @param exp10: int

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
    @param value: Number

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
