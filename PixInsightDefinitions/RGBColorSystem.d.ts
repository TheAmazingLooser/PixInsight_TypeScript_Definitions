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


    rgbws: RGBColorSystem

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


    L: Number
    a: Number
    b: Number

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


    Lab: Array

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


    L: Number
    a: Number
    b: Number

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


    Lab: Array

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


    L: Number
    a: Number
    b: Number

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


    Lab: Array

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


    L: Number
    c: Number
    h: Number

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


    Lch: Array

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


    L: Number
    c: Number
    h: Number

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


    Lch: Array

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


    x: Number
    y: Number
    z: Number

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


    xyz: Array

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


    x: Number
    y: Number
    z: Number

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


    xyz: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    h: Number
    s: Number
    i: Number

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


    hsi: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    h: Number
    s: Number
    v: Number

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


    hsv: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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


    r: Number
    g: Number
    b: Number

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


    rgb: Array

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
