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
    /**
    DESCRIPTION


    objectId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inheritedBy(objectId: string): boolean;

    /**
    DESCRIPTION


    objectId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public inheritsFrom(objectId: string): boolean;



    //-------------------------
    //----static Functions-----
    //-------------------------
    /**
    DESCRIPTION


    objectId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static beginObjectDefinition(objectId: string): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static clearAll(): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineConstant(formalDescription: string): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineConstructor(formalDescription: string): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineEventHandler(formalDescription: string): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineIncludedFile(formalDescription: string): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineMethod(formalDescription: string): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineProperty(formalDescription: string): void;
    /**
    DESCRIPTION


    formalDescription: String
    readOnly: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineProperty(formalDescription: string, readOnly?: boolean /* false */): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineStaticMethod(formalDescription: string): void;

    /**
    DESCRIPTION


    formalDescription: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineStaticProperty(formalDescription: string): void;
    /**
    DESCRIPTION


    formalDescription: String
    readOnly: Boolean = false

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static defineStaticProperty(formalDescription: string, readOnly?: boolean /* false */): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static endObjectDefinition(): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static enterDefinitionContext(): void;

    /**
    DESCRIPTION


    objectId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static inherit(objectId: string): void;

    /**
    DESCRIPTION


    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
    public static leaveDefinitionContext(): void;

    /**
    DESCRIPTION


    objectId: String

    ```javascript
    // TODO: Add JavaScript Example
    
    ```
    ```typescript
    // TODO: Add TypeScript Example
    
    ```
    */
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
