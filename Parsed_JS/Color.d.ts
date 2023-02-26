//-------------------------
//--------Constants--------
//-------------------------
/* declare const BLACK: Color.prototype.BLACK;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const BLUE: Color.prototype.BLUE;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GRAY: Color.prototype.GRAY;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const GREEN: Color.prototype.GREEN;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const RED: Color.prototype.RED;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const TRANSPARENT: Color.prototype.TRANSPARENT;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const WHITE: Color.prototype.WHITE;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


//-------------------------
//----------Class----------
//-------------------------
declare class Color {


    //-------------------------
    //-------Properties--------
    //-------------------------


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------
    public static alpha(rgba: number): number;

    public static alphaF(rgba: number): number;

    public static blue(rgba: number): number;

    public static blueF(rgba: number): number;

    public static clearAlpha(rgba: number): number;

    public static clearBlue(rgba: number): number;

    public static clearGreen(rgba: number): number;

    public static clearRed(rgba: number): number;

    public static green(rgba: number): number;

    public static greenF(rgba: number): number;

    public static hsiSaturation(rgba: number): number;

    public static hsvSaturation(rgba: number): number;

    public static hue(rgba: number): number;

    public static isGray(rgba: number): boolean;

    public static red(rgba: number): number;

    public static redF(rgba: number): number;

    public static rgbColorToHexString(rgb: number): string;

    public static rgbaColor(r: number, g: number, b: number, a: number): number;

    public static rgbaColorF(r: number, g: number, b: number, a: number): number;

    public static rgbaColorToHexString(rgba: number): string;

    public static setAlpha(rgba: number, a: number): number;

    public static setBlue(rgba: number, b: number): number;

    public static setGreen(rgba: number, g: number): number;

    public static setRed(rgba: number, r: number): number;

    public static value(rgba: number): number;



    //-------------------------
    //----static Properties----
    //-------------------------
}
