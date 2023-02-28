# PixInsight TypeScript Definitions
This repository provides TypeScript definitions to be able to code scripts for PixInsight.
PixInsight is a software program for editing and processing astrophotographic images.
It provides a small JavaScript runtime to automate certain processes. However, this JavaScript runtime lacks documentation.
The only real way to get information about the PJSR (PixInsight JavaScript Runtime) is through the ObjectExplorer in PixInsight.
This tool only gives an overview of what types are defined in the PJSR and what their methods,... are.

## Known bugs
  
- Constant variables are not working properly.
  PI uses a unique `#import`-system which is not represented in the standard ES5 and cannot be reproduced in TypeScript.
  This leads to the problem, that you can use a constant in TS but it might not be available in PI (PJSR). I recommend using the value directly!


# FAQ
## How are definitions generated?
When you look at a definition file, it seems obvious that they are generated. And guess what... They are!
To generate them, the following things are needed

1) Dump the whole PJSR (this is quite easy, since PI provides you with a class that does all this work for you. The `TypeDescription`.
2) Convert the dumped data into _.d.ts_ files.

This all sounds simple in theory, but it gets quite complicated once you start doing it.
The main complication here is that the methods are just strings representing the function signature. (And BOY, they look uniform, but they're not!)

If you want to get the same basic data I have: Here's the JavaScript (run directly in PI) I use to dump the PJSR into a JSON file:
```js
var a = {};

function process(arra)
{
   for (var element of arra ) {
      //Console.writeln(JSON.stringify(element));
      try {
         if (TypeDescription.objectDefined(element))
         {
            var typeDesc = new TypeDescription(element);

            var obj = {
               id: typeDesc.id,
               inherits: typeDesc.inherits,
               isCoreObject: typeDesc.isCoreObject,
               isExternalObject: typeDesc.isExternalObject,
               isNull: typeDesc.isNull,
               constants: typeDesc.constants,
               constructors: typeDesc.constructors,
               eventHandlers: typeDesc.eventHandlers,
               methods: typeDesc.methods,
               objectsInherited: typeDesc.objectsInherited,
               objectsInheriting: typeDesc.objectsInheriting,
               properties: typeDesc.properties,
               staticMethods: typeDesc.staticMethods,
               staticProperties: typeDesc.staticProperties
            };

            a[element] = obj;
         } else {
            // the element is undefined.
            // In all my testing this never acutally happened.
            // It seems that PI automatically register everything via the TypeDescription-Class
         }
      } catch(ex) {
         // This is a possibility but should never happen.
         // Just in case it does happen it would be good to log atleast the class-name where it happened.
         a[element] = "Error Pasing this class";
      }
   }
}

process(TypeDescription.objects);

var f = new File();
f.createForWriting("D:/temp/pi_classes_dump.json");
f.outText(JSON.stringify(a, null, 4));
f.flush();
f.close();

```

Before you run this blindly, you need to _**change the file path**_ so that the file is actually stored where you want it.

## A process is not in the definitions. Why not?
This can happen. In order for me to generate information about a process, I need to have it installed.
Not only would this trash up my PI installation, it would also over time fill the definitions with useless processes.
If you want a very specific process to be part of the definitions, you can fork the repository and make a PR (pull request).
I'll look at it, and if it fits, I'll approve it.

## How can I help improve the parser/generator for the definitions?
The JSON file is pretty final. There will be no changes to this in the near future.
The parser for that file (which also generates the definitions) is currently private.
If you're really interested in helping me improve it, you might want to know the following:
It's written in C#, so if you can't code in C#, you might not be able to help.

**I may port the parser to JavaScript at some point.**
This would allow me to actually include a script in PI that would generate a complete TypeScript environment in one click.
But for that to become a reality, I definitely need to get the parser to work as intended first before porting it.
