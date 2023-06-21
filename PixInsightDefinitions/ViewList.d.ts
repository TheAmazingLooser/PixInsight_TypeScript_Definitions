//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ViewList extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    currentView: View;
    excludeIdentifiersPattern: string;
    excludedView: View;
    includesMainViews: boolean;
    includesPreviews: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public getAll(): void;

    public getMainViews(): void;

    public getPreviews(): void;

    public reload(): void;

    public remove(view: View): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onCurrentViewUpdated: (view: View) => void;
    public onViewSelected: (view: View) => void;


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ViewList;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
