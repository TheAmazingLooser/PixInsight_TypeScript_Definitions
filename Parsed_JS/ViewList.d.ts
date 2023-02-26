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
    //----static Properties----
    //-------------------------
    static currentView: View;
    static excludeIdentifiersPattern: string;
    static excludedView: View;
    static includesMainViews: boolean;
    static includesPreviews: boolean;
}
