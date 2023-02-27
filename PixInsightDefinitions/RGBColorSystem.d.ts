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
    constructor(gamma: number /* 2.2*/, srgbGamma: boolean /* true*/, Y: Array<any> /* Y_srgb*/, x: Array<any> /* x_srgb*/, y: Array<any> /* y_srgb*/);
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
    public hsiSaturation(r: number, g: number, b: number): number;


    public hsiSaturation(rgb: Array<any>): number;


    public hsiToRGB(h: number, s: number, i: number): Array<any>;


    public hsiToRGB(hsi: Array<any>): Array<any>;


    public hsvSaturation(r: number, g: number, b: number): number;


    public hsvSaturation(rgb: Array<any>): number;


    public hsvToRGB(h: number, s: number, v: number): Array<any>;


    public hsvToRGB(hsv: Array<any>): Array<any>;


    public hue(r: number, g: number, b: number): number;


    public hue(rgb: Array<any>): number;


    public intensity(r: number, g: number, b: number): number;


    public intensity(rgb: Array<any>): number;


    public rgbToHSI(r: number, g: number, b: number): Array<any>;


    public rgbToHSI(rgb: Array<any>): Array<any>;


    public rgbToHSV(r: number, g: number, b: number): Array<any>;


    public rgbToHSV(rgb: Array<any>): Array<any>;


    public value(r: number, g: number, b: number): number;


    public value(rgb: Array<any>): number;




    //-------------------------
    //----static Properties----
    //-------------------------
    static Y: Array<any>;
    static gamma: number;
    static srgbGamma: boolean;
    static x: Array<any>;
    static y: Array<any>;
}
