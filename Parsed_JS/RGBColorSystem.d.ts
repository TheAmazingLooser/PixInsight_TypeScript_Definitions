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
    Y: Array;
    gamma: number;
    srgbGamma: boolean;
    x: Array;
    y: Array;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(gamma?: number /* 2.2*/, srgbGamma?: boolean /* true*/, Y?: Array /* Y_srgb*/, x?: Array /* x_srgb*/, y?: Array /* y_srgb*/);
    constructor(rgbws: RGBColorSystem);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public assign(rgbws: RGBColorSystem): void;

    public cieLabToCIELch(L: number, a: number, b: number): Array;

    public cieLabToCIELch(Lab: Array): Array;

    public cieLabToCIEXYZ(L: number, a: number, b: number): Array;

    public cieLabToCIEXYZ(Lab: Array): Array;

    public cieLabToRGB(L: number, a: number, b: number): Array;

    public cieLabToRGB(Lab: Array): Array;

    public cieLchToCIELab(L: number, c: number, h: number): Array;

    public cieLchToCIELab(Lch: Array): Array;

    public cieLchToRGB(L: number, c: number, h: number): Array;

    public cieLchToRGB(Lch: Array): Array;

    public cieXYZToCIELab(x: number, y: number, z: number): Array;

    public cieXYZToCIELab(xyz: Array): Array;

    public cieXYZToRGB(x: number, y: number, z: number): Array;

    public cieXYZToRGB(xyz: Array): Array;

    public lightness(r: number, g: number, b: number): number;

    public lightness(rgb: Array): number;

    public rgbToCIELab(r: number, g: number, b: number): Array;

    public rgbToCIELab(rgb: Array): Array;

    public rgbToCIELch(r: number, g: number, b: number): Array;

    public rgbToCIELch(rgb: Array): Array;

    public rgbToCIEXYZ(r: number, g: number, b: number): Array;

    public rgbToCIEXYZ(rgb: Array): Array;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static hsiSaturation(r: number, g: number, b: number): number;

    public static hsiSaturation(rgb: Array): number;

    public static hsiToRGB(h: number, s: number, i: number): Array;

    public static hsiToRGB(hsi: Array): Array;

    public static hsvSaturation(r: number, g: number, b: number): number;

    public static hsvSaturation(rgb: Array): number;

    public static hsvToRGB(h: number, s: number, v: number): Array;

    public static hsvToRGB(hsv: Array): Array;

    public static hue(r: number, g: number, b: number): number;

    public static hue(rgb: Array): number;

    public static intensity(r: number, g: number, b: number): number;

    public static intensity(rgb: Array): number;

    public static rgbToHSI(r: number, g: number, b: number): Array;

    public static rgbToHSI(rgb: Array): Array;

    public static rgbToHSV(r: number, g: number, b: number): Array;

    public static rgbToHSV(rgb: Array): Array;

    public static value(r: number, g: number, b: number): number;

    public static value(rgb: Array): number;



    //-------------------------
    //----static Properties----
    //-------------------------
    static Y: Array;
    static gamma: number;
    static srgbGamma: boolean;
    static x: Array;
    static y: Array;
}
