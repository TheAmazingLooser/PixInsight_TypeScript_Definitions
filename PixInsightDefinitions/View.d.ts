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

    public cancelProcess(): void;

    public computeOrFetchProperty(id: string): Object | void;

    public computeProperty(id: string): Object | void;

    public deleteProperty(id: string): boolean;

    public endProcess(): void;

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
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: View;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
