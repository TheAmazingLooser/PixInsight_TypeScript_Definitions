# PixInsight TypeScript Definitions
PixInsight TypeScript Definitions is a project that provides TypeScript definitions for the PixInsight JavaScript Runtime (PJSR). With this project, you can transpile TypeScript code to the correct JavaScript code for the PixInsight JavaScript engine, allowing you to take advantage of all TypeScript benefits such as a typed language, autocompletions from High-Quality IDEs, and better error-handling.

All type definitions in this repository are automatically generated using a private generator. By using this project, you can write more reliable and maintainable code for PixInsight, while still benefiting from the advantages of TypeScript. TypeScript's biggest advantage over JavaScript is its strong typing system, which allows for better error detection, improved code quality and easier maintenance.
## Features

- Provides all defined classes including:
    - methods
    - static functions
    - event handlers
    - properties
    - static properties
    - constants (limited)
- Provides all globally defined vars from PI
- Provides all benefits from TypeScript

## Quickstart Guide
### Prerequisites

- Node.js and NPM (you can download them from https://nodejs.org/)
- TypeScript (you can install it globally by running npm install -g typescript)
- An IDE of your choice (such as Visual Studio Code, Sublime Text, or Atom)

Installation
- Clone the repository by running git clone https://github.com/TheAmazingLooser/PixInsight_TypeScript_Definitions.git in your terminal or by downloading the code as a zip file and extracting it wherever you like.
- Open the repository in your IDE.

Usage

- Write your TypeScript code in the root directory of the project.
- Open a terminal in the root directory of the project.
- Run the command tsc --project .\tsconfig.json to transpile your TypeScript code to JavaScript.
- The transpiled JavaScript files will be generated in the dist folder.
- You can now use these files in PixInsight.

That's it! With this project, you can enjoy all the benefits of TypeScript while working with the PixInsight JavaScript engine.
## Usage/Examples

Take the following TypeScript, transpile it on your own and see what it is doing!

```typescript
function main()
{
    var window: ImageWindow = ImageWindow.windows[0];

    if (window != null)
        Console.writeln("window: " + window.filePath);
}

// Create a new class as a test
class Test
{
    public static main()
    {
        Console.writeln("Static Hello, World!");
    }

    public main(){
        Console.writeln("Non-Static Hello, World!");
    }
}

// Extend the class and print a increasing number each time a new instance is created
class Test2 extends Test
{
    private static count: number = 0;

    public constructor()
    {
        super();
        Test2.count++;
        Console.writeln("Test2 count: " + Test2.count);
    }
}

// This is a comment
main();

Test.main();
var test = new Test();
test.main();

var test2 = new Test2();
var test3 = new Test2();
var test4 = new Test2();
```
