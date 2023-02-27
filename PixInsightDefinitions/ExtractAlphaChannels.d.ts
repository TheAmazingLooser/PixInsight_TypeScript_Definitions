//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ExtractAlphaChannels extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channelList: string;
    channels: number;
    delete: boolean;
    extract: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ExtractAlphaChannels?: ExtractAlphaChannels);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static channelList: string;
    static channels: number;
    static delete: boolean;
    static extract: boolean;


    //-------------------------
    //--------constants--------
    //-------------------------
    ActiveAlphaChannel;
    AllAlphaChannels;
    ChannelList;
}
