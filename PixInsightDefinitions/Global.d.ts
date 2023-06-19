    /**
    DESCRIPTION
    value: any
    ```javascript
    ```
    ```typescript
    ```
    */
/* declare function Number(value: any): number; */
    /**
    DESCRIPTION
    value: any
    ```javascript
    ```
    ```typescript
    ```
    */
/* declare function Object(value: any): Object; */
    /**
    DESCRIPTION
    text: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function cerr(text: string): void;
    /**
    DESCRIPTION
    ```javascript
    ```
    ```typescript
    ```
    */
declare function cflush(): void;
    /**
    DESCRIPTION
    text: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function cout(text: string): void;
    /**
    DESCRIPTION
    encodedURI: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function decodeURI(encodedURI: string): string;
    /**
    DESCRIPTION
    encodedURI: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function decodeURIComponent(encodedURI: string): string;
    /**
    DESCRIPTION
    URI: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function encodeURI(URI: string): string;
    /**
    DESCRIPTION
    uriComp: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function encodeURIComponent(uriComp: string): string;
    /**
    DESCRIPTION
    s: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function eval(s: string): Object;
    /**
    DESCRIPTION
    s: String
    Object: Object
    ```javascript
    ```
    ```typescript
    ```
    */
declare function eval(s: string, Object?: Object): Object;
    /**
    DESCRIPTION
    fmt: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function format(fmt: string): string;
    /**
    DESCRIPTION
    ...value: any[]
    ```javascript
    ```
    ```typescript
    ```
    */
declare function format(...value: any[]): string;
    /**
    DESCRIPTION
    ```javascript
    ```
    ```typescript
    ```
    */
declare function gc(): void;
    /**
    DESCRIPTION
    hardGC: Boolean = true
    ```javascript
    ```
    ```typescript
    ```
    */
declare function gc(hardGC?: boolean /* true */): void;
    /**
    DESCRIPTION
    ```javascript
    ```
    ```typescript
    ```
    */
declare function gcBytes(): number;
    /**
    DESCRIPTION
    varName: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function getEnvironmentVariable(varName: string): string;
    /**
    DESCRIPTION
    n: Number
    ```javascript
    ```
    ```typescript
    ```
    */
declare function isFinite(n: number): boolean;
    /**
    DESCRIPTION
    value: any
    ```javascript
    ```
    ```typescript
    ```
    */
declare function isNaN(value: any): boolean;
    /**
    DESCRIPTION
    filePath: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function loadResource(filePath: string): boolean;
    /**
    DESCRIPTION
    filePath: String
    rootPath: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function loadResource(filePath: string, rootPath?: string): boolean;
    /**
    DESCRIPTION
    what: String
    wildPattern: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function matchesWildSpecification(what: string, wildPattern: string): boolean;
    /**
    DESCRIPTION
    milliseconds: uint
    ```javascript
    ```
    ```typescript
    ```
    */
declare function msleep(milliseconds: number): void;
    /**
    DESCRIPTION
    s: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function parseFloat(s: string): number;
    /**
    DESCRIPTION
    s: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function parseInt(s: string): number;
    /**
    DESCRIPTION
    s: String
    radix: uint
    ```javascript
    ```
    ```typescript
    ```
    */
declare function parseInt(s: string, radix?: number): number;
    /**
    DESCRIPTION
    ```javascript
    ```
    ```typescript
    ```
    */
declare function processEvents(): void;
    /**
    DESCRIPTION
    excludeUserInputEvents: Boolean = false
    iterations: int = 1
    ```javascript
    ```
    ```typescript
    ```
    */
declare function processEvents(excludeUserInputEvents?: boolean /* false */, iterations?: number /* 1 */): void;
    /**
    DESCRIPTION
    s: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function replaceEnvironmentVariables(s: string): string;
    /**
    DESCRIPTION
    dirPath: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function searchDirectory(dirPath: string): Array<any>;
    /**
    DESCRIPTION
    dirPath: String
    recursive: Boolean = false
    ```javascript
    ```
    ```typescript
    ```
    */
declare function searchDirectory(dirPath: string, recursive?: boolean /* false */): Array<any>;
    /**
    DESCRIPTION
    seconds: Number
    ```javascript
    ```
    ```typescript
    ```
    */
declare function sleep(seconds: number): void;
    /**
    DESCRIPTION
    ```javascript
    ```
    ```typescript
    ```
    */
declare function systemOffsetFromUTC(): number;
    /**
    DESCRIPTION
    date: Date|String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function systemOffsetFromUTC(date?: Date | string): number;
    /**
    DESCRIPTION
    filePath: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function unloadResource(filePath: string): boolean;
    /**
    DESCRIPTION
    filePath: String
    rootPath: String
    ```javascript
    ```
    ```typescript
    ```
    */
declare function unloadResource(filePath: string, rootPath?: string): boolean;
declare var NaN: number;
declare var Infinity: number;
declare var corePlatform: string;
declare var coreId: string;
declare var coreLanguage: string;
declare var coreVersionMajor: number;
declare var coreVersionMinor: number;
declare var coreVersionRelease: number;
declare var coreVersionRevision: number;
declare var coreVersionBuild: number;
declare var coreVersionBeta: number;
declare var coreVersionLE: boolean;
declare var coreVersionCodename: string;
declare var coreFilePath: string;
declare var coreDirPath: string;
declare var coreBaseDirPath: string;
declare var coreAppDirPath: string;
declare var coreBinDirPath: string;
declare var coreEtcDirPath: string;
declare var coreRscDirPath: string;
declare var coreIncludeDirPath: string;
declare var coreSrcDirPath: string;
declare var coreLibDirPath: string;
declare var coreLibraryDirPath: string;
declare var coreDocDirPath: string;
declare var coreColorDirPath: string;
declare var pclId: string;
declare var pclVersionMajor: number;
declare var pclVersionMinor: number;
declare var pclVersionRelease: number;
declare var pclVersionBuild: number;
declare var pclVersionBeta: number;
declare var jsVersion: number;
declare var jsStrictMode: boolean;
declare var jsAbortable: boolean;
declare var jsAutoGC: boolean;
declare var jsArguments: Array<any>;
declare var jsScriptResult: boolean;
declare var console: Console;
declare var EMath: Math;
declare var count: number;
declare var arr: Array<any>;