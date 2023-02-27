//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class BlurXTerminator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    adjust_halos: number;
    ai_file: string;
    auto_nonstellar_psf: boolean;
    correct_first: boolean;
    correct_only: boolean;
    lum_only: boolean;
    nonstellar_psf_diameter: number;
    nonstellar_then_stellar: boolean;
    sharpen_nonstellar: number;
    sharpen_stars: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(BlurXTerminator?: BlurXTerminator);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static adjust_halos: number;
    static ai_file: string;
    static auto_nonstellar_psf: boolean;
    static correct_first: boolean;
    static correct_only: boolean;
    static lum_only: boolean;
    static nonstellar_psf_diameter: number;
    static nonstellar_then_stellar: boolean;
    static sharpen_nonstellar: number;
    static sharpen_stars: number;


    //-------------------------
    //--------constants--------
    //-------------------------
}
