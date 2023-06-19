//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RGBColorSystem {


    //-------------------------
    //-------Properties--------
    //-------------------------
    Y: Array<any>;
    gamma: number;
    srgbGamma: boolean;
    x: Array<any>;
    y: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(gamma?: number /* 2.2*/, srgbGamma?: boolean /* true*/, Y?: Array<any> /* Y_srgb*/, x?: Array<any> /* x_srgb*/, y?: Array<any> /* y_srgb*/);
    constructor(rgbws: RGBColorSystem);


    //-------------------------
    //--------Functions--------
    //-------------------------
    /**
    DESCRIPTION
    @param rgbws: RGBColorSystem

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public assign(rgbws: RGBColorSystem): void;

    /**
    DESCRIPTION
    @param L: Number
    @param a: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLabToCIELch(L: number, a: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param Lab: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLabToCIELch(Lab: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param L: Number
    @param a: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLabToCIEXYZ(L: number, a: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param Lab: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLabToCIEXYZ(Lab: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param L: Number
    @param a: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLabToRGB(L: number, a: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param Lab: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLabToRGB(Lab: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param L: Number
    @param c: Number
    @param h: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLchToCIELab(L: number, c: number, h: number): Array<any>;

    /**
    DESCRIPTION
    @param Lch: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLchToCIELab(Lch: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param L: Number
    @param c: Number
    @param h: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLchToRGB(L: number, c: number, h: number): Array<any>;

    /**
    DESCRIPTION
    @param Lch: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieLchToRGB(Lch: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param x: Number
    @param y: Number
    @param z: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieXYZToCIELab(x: number, y: number, z: number): Array<any>;

    /**
    DESCRIPTION
    @param xyz: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieXYZToCIELab(xyz: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param x: Number
    @param y: Number
    @param z: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieXYZToRGB(x: number, y: number, z: number): Array<any>;

    /**
    DESCRIPTION
    @param xyz: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public cieXYZToRGB(xyz: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public lightness(r: number, g: number, b: number): number;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public lightness(rgb: Array<any>): number;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rgbToCIELab(r: number, g: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rgbToCIELab(rgb: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rgbToCIELch(r: number, g: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rgbToCIELch(rgb: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rgbToCIEXYZ(r: number, g: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public rgbToCIEXYZ(rgb: Array<any>): Array<any>;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsiSaturation(r: number, g: number, b: number): number;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsiSaturation(rgb: Array<any>): number;

    /**
    DESCRIPTION
    @param h: Number
    @param s: Number
    @param i: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsiToRGB(h: number, s: number, i: number): Array<any>;

    /**
    DESCRIPTION
    @param hsi: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsiToRGB(hsi: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsvSaturation(r: number, g: number, b: number): number;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsvSaturation(rgb: Array<any>): number;

    /**
    DESCRIPTION
    @param h: Number
    @param s: Number
    @param v: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsvToRGB(h: number, s: number, v: number): Array<any>;

    /**
    DESCRIPTION
    @param hsv: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hsvToRGB(hsv: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hue(r: number, g: number, b: number): number;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static hue(rgb: Array<any>): number;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static intensity(r: number, g: number, b: number): number;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static intensity(rgb: Array<any>): number;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rgbToHSI(r: number, g: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rgbToHSI(rgb: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rgbToHSV(r: number, g: number, b: number): Array<any>;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static rgbToHSV(rgb: Array<any>): Array<any>;

    /**
    DESCRIPTION
    @param r: Number
    @param g: Number
    @param b: Number

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static value(r: number, g: number, b: number): number;

    /**
    DESCRIPTION
    @param rgb: Array

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
	public static value(rgb: Array<any>): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: RGBColorSystem;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
