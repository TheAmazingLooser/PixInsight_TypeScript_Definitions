//-------------------------
//--------Constants--------
//-------------------------
/* declare const ActiveAlphaChannel: ExtractAlphaChannels.prototype.ActiveAlphaChannel;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const AllAlphaChannels: ExtractAlphaChannels.prototype.AllAlphaChannels;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.
/* declare const ChannelList: ExtractAlphaChannels.prototype.ChannelList;*/ // TODO: Implement this correctly so that it will translate to JS with using CLASS_NAME.prototype.CONSTANT_NAME.


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
    constructor(ExtractAlphaChannels: ExtractAlphaChannels);


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
}
