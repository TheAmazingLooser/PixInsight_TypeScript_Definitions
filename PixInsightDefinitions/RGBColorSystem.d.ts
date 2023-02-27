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
    public assign(rgbws: RGBColorSystem): void;


    public cieLabToCIELch(L: number, a: number, b: number): Array<any>;


    public cieLabToCIELch(Lab: Array<any>): Array<any>;


    public cieLabToCIEXYZ(L: number, a: number, b: number): Array<any>;


    public cieLabToCIEXYZ(Lab: Array<any>): Array<any>;


    public cieLabToRGB(L: number, a: number, b: number): Array<any>;


    public cieLabToRGB(Lab: Array<any>): Array<any>;


    public cieLchToCIELab(L: number, c: number, h: number): Array<any>;


    public cieLchToCIELab(Lch: Array<any>): Array<any>;


    public cieLchToRGB(L: number, c: number, h: number): Array<any>;


    public cieLchToRGB(Lch: Array<any>): Array<any>;


    public cieXYZToCIELab(x: number, y: number, z: number): Array<any>;


    public cieXYZToCIELab(xyz: Array<any>): Array<any>;


    public cieXYZToRGB(x: number, y: number, z: number): Array<any>;


    public cieXYZToRGB(xyz: Array<any>): Array<any>;


    public lightness(r: number, g: number, b: number): number;


    public lightness(rgb: Array<any>): number;


    public rgbToCIELab(r: number, g: number, b: number): Array<any>;


    public rgbToCIELab(rgb: Array<any>): Array<any>;


    public rgbToCIELch(r: number, g: number, b: number): Array<any>;


    public rgbToCIELch(rgb: Array<any>): Array<any>;


    public rgbToCIEXYZ(r: number, g: number, b: number): Array<any>;


    public rgbToCIEXYZ(rgb: Array<any>): Array<any>;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public static hsiSaturation(r: number, g: number, b: number): number;


    public static hsiSaturation(rgb: Array<any>): number;


    public static hsiToRGB(h: number, s: number, i: number): Array<any>;


    public static hsiToRGB(hsi: Array<any>): Array<any>;


    public static hsvSaturation(r: number, g: number, b: number): number;


    public static hsvSaturation(rgb: Array<any>): number;


    public static hsvToRGB(h: number, s: number, v: number): Array<any>;


    public static hsvToRGB(hsv: Array<any>): Array<any>;


    public static hue(r: number, g: number, b: number): number;


    public static hue(rgb: Array<any>): number;


    public static intensity(r: number, g: number, b: number): number;


    public static intensity(rgb: Array<any>): number;


    public static rgbToHSI(r: number, g: number, b: number): Array<any>;


    public static rgbToHSI(rgb: Array<any>): Array<any>;


    public static rgbToHSV(r: number, g: number, b: number): Array<any>;


    public static rgbToHSV(rgb: Array<any>): Array<any>;


    public static value(r: number, g: number, b: number): number;


    public static value(rgb: Array<any>): number;




    //-------------------------
    //----static Properties----
    //-------------------------
    static Y: Array<any>;
    static gamma: number;
    static srgbGamma: boolean;
    static x: Array<any>;
    static y: Array<any>;


    //-------------------------
    //--------constants--------
    //-------------------------
}
