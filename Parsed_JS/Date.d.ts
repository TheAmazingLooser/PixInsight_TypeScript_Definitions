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
    constructor(year: number, month: number, day: number, hour?: number, minute: number, second: number, millisecond: number);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public getDate(): number;

    public getDay(): number;

    public getFullYear(): number;

    public getHours(): number;

    public getMilliseconds(): number;

    public getMinutes(): number;

    public getMonth(): number;

    public getSeconds(): number;

    public getTime(): number;

    public getTimezoneOffset(): number;

    public getUTCDate(): number;

    public getUTCDay(): number;

    public getUTCFullYear(): number;

    public getUTCHours(): number;

    public getUTCMilliseconds(): number;

    public getUTCMinutes(): number;

    public getUTCMonth(): number;

    public getUTCSeconds(): number;

    public propertyIsEnumerable(propertyName: string): boolean;

    public setDate(day: number): void;

    public setFullYear(year: number, month?: number, day?: number): void;

    public setHours(hour: number, minute?: number, second?: number, millisecond?: number): void;

    public setMilliseconds(millisecond: number): void;

    public setMinutes(minute: number, second?: number, millisecond?: number): void;

    public setMonth(month: number, day?: number): void;

    public setSeconds(second: number, millisecond?: number): void;

    public setTime(time: number): void;

    public setUTCDate(day: number): void;

    public setUTCFullYear(year: number, month?: number, day?: number): void;

    public setUTCHours(hour: number, minute?: number, second?: number, millisecond?: number): void;

    public setUTCMilliseconds(millisecond: number): void;

    public setUTCMinutes(minute: number, second?: number, millisecond?: number): void;

    public setUTCMonth(month: number, day?: number): void;

    public setUTCSeconds(second: number, millisecond?: number): void;

    public toDateString(): string;

    public toISOString(): string;

    public toJSON(): string;

    public toLocaleDateString(): string;

    public toLocaleFormat(format: string): string;

    public toLocaleString(): string;

    public toLocaleTimeString(): string;

    public toSource(): string;

    public toString(): string;

    public toTimeString(): string;

    public toUTCString(): string;

    public valueOf(): number;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static UTC(year: number, month: number, day: number, hour?: number, minute: number, second: number, millisecond: number): number;

    public static now(): number;

    public static parse(dateString: string): number;



    //-------------------------
    //----static Properties----
    //-------------------------
}
