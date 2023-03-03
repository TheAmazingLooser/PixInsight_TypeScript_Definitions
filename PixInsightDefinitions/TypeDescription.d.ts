//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TypeDescription {


    //-------------------------
    //-------Properties--------
    //-------------------------
    constants: Array<any>;
    constructors: Array<any>;
    eventHandlers: Array<any>;
    hasConstants: boolean;
    hasConstructors: boolean;
    hasEventHandlers: boolean;
    hasMethods: boolean;
    hasProperties: boolean;
    hasStaticMethods: boolean;
    hasStaticProperties: boolean;
    id: string;
    inherits: boolean;
    isCoreObject: boolean;
    isExternalObject: boolean;
    isNull: boolean;
    methods: Array<any>;
    objectsInherited: Array<any>;
    objectsInheriting: Array<any>;
    properties: Array<any>;
    staticMethods: Array<any>;
    staticProperties: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(id: string);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public inheritedBy(objectId: string): boolean;

    public inheritsFrom(objectId: string): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    public static beginObjectDefinition(objectId: string): void;

    public static clearAll(): void;

    public static defineConstant(formalDescription: string): void;

    public static defineConstructor(formalDescription: string): void;

    public static defineEventHandler(formalDescription: string): void;

    public static defineIncludedFile(formalDescription: string): void;

    public static defineMethod(formalDescription: string): void;

    public static defineProperty(formalDescription: string): void;
    public static defineProperty(formalDescription: string, readOnly: boolean /* false*/): void;

    public static defineStaticMethod(formalDescription: string): void;

    public static defineStaticProperty(formalDescription: string): void;
    public static defineStaticProperty(formalDescription: string, readOnly: boolean /* false*/): void;

    public static endObjectDefinition(): void;

    public static enterDefinitionContext(): void;

    public static inherit(objectId: string): void;

    public static leaveDefinitionContext(): void;

    public static objectDefined(objectId: string): boolean;



    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: TypeDescription;
    static objects: Array<any>;
    static coreObjects: Array<any>;
    static externalObjects: Array<any>;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}
