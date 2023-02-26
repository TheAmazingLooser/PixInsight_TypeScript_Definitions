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
    constants: Array;
    constructors: Array;
    eventHandlers: Array;
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
    methods: Array;
    objectsInherited: Array;
    objectsInheriting: Array;
    properties: Array;
    staticMethods: Array;
    staticProperties: Array;


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

    public static defineProperty(formalDescription: string, readOnly?: boolean /* false*/): void;

    public static defineStaticMethod(formalDescription: string): void;

    public static defineStaticProperty(formalDescription: string, readOnly?: boolean /* false*/): void;

    public static endObjectDefinition(): void;

    public static enterDefinitionContext(): void;

    public static inherit(objectId: string): void;

    public static leaveDefinitionContext(): void;

    public static objectDefined(objectId: string): boolean;



    //-------------------------
    //----static Properties----
    //-------------------------
    static constants: Array;
    static constructors: Array;
    static eventHandlers: Array;
    static hasConstants: boolean;
    static hasConstructors: boolean;
    static hasEventHandlers: boolean;
    static hasMethods: boolean;
    static hasProperties: boolean;
    static hasStaticMethods: boolean;
    static hasStaticProperties: boolean;
    static id: string;
    static inherits: boolean;
    static isCoreObject: boolean;
    static isExternalObject: boolean;
    static isNull: boolean;
    static methods: Array;
    static objectsInherited: Array;
    static objectsInheriting: Array;
    static properties: Array;
    static staticMethods: Array;
    static staticProperties: Array;
}
