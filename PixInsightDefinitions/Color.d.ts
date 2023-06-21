//-------------------------
//--------Constants--------
//-------------------------


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

    public static setAlpha(rgba: number, number: number): number;

    public static setBlue(rgba: number, number: number): number;

    public static setGreen(rgba: number, number: number): number;

    public static setRed(rgba: number, number: number): number;

    public static value(rgba: number): number;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
    BLACK;
    BLUE;
    GRAY;
    GREEN;
    RED;
    TRANSPARENT;
    WHITE;
}
