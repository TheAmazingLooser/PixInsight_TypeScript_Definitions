# PixInsight TypeScript Definitions
This repository provides you with an easy way to code scripts for PixInsight.
PixInsight is a Software-Program used for editing and processing astrophotography images.
It does provide a small JavaScript-Runtime to automate certain processes. But this JavaScript Runtime lacks documentation.
The only real way of getting PJSR (PixInsight JavaScript Runtime) information is via the ObjectExplorer in PixInsight.
This tool just gives an overview of what types are defined in the PJSR and what their Methods,... are.

## Known Bugs
- The parser does not correctly translates functions which do have a non-optional parameter following a optional one.
  The resulting funcions will have only optional ones (even tho this is per definition wrong).
  
- There are not constantces.
  PI uses a unique `#import`-system which is not represented in the default ES5-Standard and not reproduceable in TS.
  This leads to the need of declaring constances in TypeScript, which are currently missing as a whole!


# FAQ
## How are the definitions generated?
If you look at a definition-file, it seems obvious, that they have to be generated. And guess what,... They are!
To generate those following things need to be done:

1) Dump the whole PJSR (this is pretty easy since PI provides you an class to do all this work for you. The `TypeDescription`.
2) Convert the dumped data to the _.d.ts_ files.

This all might sound easy in theory, but it does get quite complicated once you get started with it.
The main complication here is, that the methods are just strings representing the function signature. (And BOY, they look uniform but they're not!)

If you want to get the same base-data I got: Here is the JavaScript (run it directly in PI) which I'm using to dump the PJSR into a JSON-File:
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

Before running this blindly, you need to _**change the File-Path**_ so that the file is actually saved, where you want it to be saved.

## A process is not in the definitions. Why?
This can happen. In order for me to generate information about a process, I do need to have it installed.
This not only trashes my PI installation, this would also overfill the definitions with useless processes over time.
If you want a very specific process to be part of the definitions, you can fork the repository and make a PR (pull request).
I'll review it and if it fits, approve it.

## How can I help to improve the parser/generator for the definitions?
The JSON-File is pretty final. There wont be any changes soon.
The parser for this very file (which also generates the definitions) is currently private.
If you're really interested in helping me improving this, you might want to know following things:
It's written is C#, if you cannot code in C#, you might not be able to help.

**I might port the parser to JS at some point**.
This would allow me to actually include a script in PI which then completely generates a TS-environment on a click.
But for that to come reality I definitely need to make the parser work like intended.
