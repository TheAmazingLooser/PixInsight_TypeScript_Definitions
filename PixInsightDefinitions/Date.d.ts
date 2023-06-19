//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Date {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(msSinceUNIXEpoch: number);
    constructor(dateString: string);
    constructor(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number);


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
	public getDate(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getDay(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getFullYear(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getHours(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getMilliseconds(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getMinutes(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getMonth(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getSeconds(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getTime(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getTimezoneOffset(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCDate(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCDay(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCFullYear(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCHours(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCMilliseconds(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCMinutes(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCMonth(): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public getUTCSeconds(): number;

    /**
    DESCRIPTION
    @param propertyName: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public propertyIsEnumerable(propertyName: string): boolean;

    /**
    DESCRIPTION
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setDate(day: number): void;

    /**
    DESCRIPTION
    @param year: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFullYear(year: number): void;
    /**
    DESCRIPTION
    @param year: uint
    @param month: uint
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setFullYear(year: number, month?: number, day?: number): void;

    /**
    DESCRIPTION
    @param hour: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setHours(hour: number): void;
    /**
    DESCRIPTION
    @param hour: uint
    @param minute: uint
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setHours(hour: number, minute?: number, second?: number, millisecond?: number): void;

    /**
    DESCRIPTION
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMilliseconds(millisecond: number): void;

    /**
    DESCRIPTION
    @param minute: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinutes(minute: number): void;
    /**
    DESCRIPTION
    @param minute: uint
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMinutes(minute: number, second?: number, millisecond?: number): void;

    /**
    DESCRIPTION
    @param month: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMonth(month: number): void;
    /**
    DESCRIPTION
    @param month: uint
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setMonth(month: number, day?: number): void;

    /**
    DESCRIPTION
    @param second: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setSeconds(second: number): void;
    /**
    DESCRIPTION
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setSeconds(second: number, millisecond?: number): void;

    /**
    DESCRIPTION
    @param time: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setTime(time: number): void;

    /**
    DESCRIPTION
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCDate(day: number): void;

    /**
    DESCRIPTION
    @param year: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCFullYear(year: number): void;
    /**
    DESCRIPTION
    @param year: uint
    @param month: uint
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCFullYear(year: number, month?: number, day?: number): void;

    /**
    DESCRIPTION
    @param hour: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCHours(hour: number): void;
    /**
    DESCRIPTION
    @param hour: uint
    @param minute: uint
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCHours(hour: number, minute?: number, second?: number, millisecond?: number): void;

    /**
    DESCRIPTION
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCMilliseconds(millisecond: number): void;

    /**
    DESCRIPTION
    @param minute: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCMinutes(minute: number): void;
    /**
    DESCRIPTION
    @param minute: uint
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCMinutes(minute: number, second?: number, millisecond?: number): void;

    /**
    DESCRIPTION
    @param month: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCMonth(month: number): void;
    /**
    DESCRIPTION
    @param month: uint
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCMonth(month: number, day?: number): void;

    /**
    DESCRIPTION
    @param second: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCSeconds(second: number): void;
    /**
    DESCRIPTION
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public setUTCSeconds(second: number, millisecond?: number): void;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toDateString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toISOString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toJSON(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toLocaleDateString(): string;

    /**
    DESCRIPTION
    @param format: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toLocaleFormat(format: string): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toLocaleString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toLocaleTimeString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toSource(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toTimeString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public toUTCString(): string;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public valueOf(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param year: uint
    @param month: uint
    @param day: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static UTC(year: number, month: number, day: number): number;
    /**
    DESCRIPTION
    @param year: uint
    @param month: uint
    @param day: uint
    @param hour: uint
    @param minute: uint
    @param second: uint
    @param millisecond: uint

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static UTC(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number): number;

    /**
    DESCRIPTION
    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static now(): number;

    /**
    DESCRIPTION
    @param dateString: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static parse(dateString: string): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: Date;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
