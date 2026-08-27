// #engine v8
// #feature-id    ProcessAutomation : Development > Process Automation Example
// #feature-info  <b>Process Automation Example</b><br/>Automating StarXTerminator, NoiseXTerminator, and PixelMath using TypeScript.

/**
 * ProcessAutomation.ts
 * 
 * Demonstrates strongly-typed execution of installed PixInsight processes.
 */
function runProcessAutomation(targetView: View): boolean {
    Console.show();
    Console.writeln(`✦ Running automation pipeline on view: ${targetView.id}`);

    // 1. Star Extraction with RC-Astro StarXTerminator
    const sxt = new StarXTerminator();
    sxt.unscreen = true;
    sxt.overlap = 0.2;
    sxt.stars = true;

    Console.writeln("Executing StarXTerminator...");
    if (!sxt.executeOn(targetView)) {
        Console.criticalln("StarXTerminator failed to execute.");
        return false;
    }

    // 2. Denoise with RC-Astro NoiseXTerminator
    const nxt = new NoiseXTerminator();
    nxt.denoise = 0.60;
    nxt.detail = 0.15;
    nxt.enable_color_separation = true;

    Console.writeln("Executing NoiseXTerminator...");
    if (!nxt.executeOn(targetView)) {
        Console.criticalln("NoiseXTerminator failed to execute.");
        return false;
    }

    // 3. PixelMath Blend
    const pm = new PixelMath();
    pm.expression = "$T * 1.05";
    pm.useSingleExpression = true;
    pm.rescale = false;

    Console.writeln("Executing PixelMath boost...");
    pm.executeOn(targetView);

    Console.writeln("✦ Pipeline completed successfully!");
    return true;
}

function executeProcessAutomation(): void {
    const activeWin = ImageWindow.activeWindow;
    if (activeWin.isNull) {
        Console.warningln("Please open an image view before running ProcessAutomation.");
        return;
    }
    runProcessAutomation(activeWin.mainView);
}

executeProcessAutomation();
