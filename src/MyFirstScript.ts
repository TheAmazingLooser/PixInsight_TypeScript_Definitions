// #engine v8
// #feature-id    MyFirstScript : Development > My First TypeScript Script
// #feature-icon  @script_icons_dir/Development.svg
// #feature-info  <b>My First TypeScript Script</b><br/>A template PixInsight V8 script written in TypeScript.

/**
 * MyFirstScript.ts
 * 
 * Simple starter script demonstrating PixInsight V8 TypeScript development.
 */
function runMyFirstScript(): void {
    Console.show();
    Console.writeln("✦ Starting My First PixInsight TypeScript Script...");

    const activeWin = ImageWindow.activeWindow;
    if (activeWin.isNull) {
        Console.warningln("No active image window found. Open an image in PixInsight to inspect properties.");
        return;
    }

    const view = activeWin.mainView;
    const img = view.image;

    Console.writeln(`Image View ID: ${view.id}`);
    Console.writeln(`Dimensions: ${img.width} x ${img.height} pixels`);
    Console.writeln(`Channels: ${img.numberOfChannels} (${img.colorSpace === ColorSpace.RGB ? "RGB Color" : "Grayscale"})`);
    Console.writeln(`Sample Format: ${img.bitsPerSample}-bit ${img.sampleType === PixelSampleType.Float ? "Floating Point" : "Integer"}`);

    // Matrix sample
    const M = new Matrix([1.0, 0.0, 0.0, 1.0], 2, 2);
    Console.writeln(`Identity 2x2 Matrix rows: ${M.rows}, cols: ${M.cols}`);

    Console.writeln("✦ Script executed successfully!");
}

runMyFirstScript();
