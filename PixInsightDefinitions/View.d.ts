//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class View {


    //-------------------------
    //-------Properties--------
    //-------------------------
    canGoBackward: boolean;
    canGoForward: boolean;
    fullId: string;
    historyIndex: number;
    id: string;
    image: Image;
    initialProcessing: ProcessContainer;
    isMainView: boolean;
    isNull: boolean;
    isPreview: boolean;
    isView: boolean;
    isVirtual: boolean;
    processing: ProcessContainer;
    properties: Array<any>;
    stf: Array<any>;
    uniqueId: string;
    window: ImageWindow;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor();
    constructor(View: View);
    constructor(viewId: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public beginProcess(): void;
    public beginProcess(undoFlags: number): void;




    public computeOrFetchProperty(id: string): Object | void;


    public computeProperty(id: string): Object | void;


    public deleteProperty(id: string): boolean;




    public exportProperties(FileFormatInstance: FileFormatInstance): number;


    public hasProperty(id: string): boolean;


    public importProperties(FileFormatInstance: FileFormatInstance): string;


    public propertyAttributes(id: string): number | void;


    public propertyType(id: string): number | void;


    public propertyValue(id: string): Object | void;


    public setPropertyAttributes(id: string, attributes: number): boolean;


    public setPropertyValue(id: string, value: Object): boolean;
    public setPropertyValue(id: string, value: Object, type: number): boolean;
    public setPropertyValue(id: string, value: Object, type: number, attributes: number): boolean;




    //-------------------------
    //----static Functions-----
    //-------------------------
    public static viewById(id: string): View;




    //-------------------------
    //----static Properties----
    //-------------------------
    static canGoBackward: boolean;
    static canGoForward: boolean;
    static fullId: string;
    static historyIndex: number;
    static id: string;
    static image: Image;
    static initialProcessing: ProcessContainer;
    static isMainView: boolean;
    static isNull: boolean;
    static isPreview: boolean;
    static isView: boolean;
    static isVirtual: boolean;
    static processing: ProcessContainer;
    static properties: Array<any>;
    static stf: Array<any>;
    static uniqueId: string;
    static window: ImageWindow;


    //-------------------------
    //--------constants--------
    //-------------------------
}
