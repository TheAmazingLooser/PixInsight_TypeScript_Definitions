/**
 * src/lib/processHelper.ts
 * 
 * Reusable Process Automation Helpers.
 */

/**
 * Executes RC-Astro StarXTerminator safely on a target view.
 */
export function executeStarExtraction(view: View, unscreen: boolean = true): boolean {
    Console.writeln(`[ProcessHelper] Running StarXTerminator on view: ${view.id}...`);
    try {
        const sxt = new StarXTerminator();
        sxt.unscreen = unscreen;
        sxt.overlap = 0.2;
        sxt.stars = true;
        return sxt.executeOn(view);
    } catch (e: any) {
        Console.criticalln(`[ProcessHelper Error] StarXTerminator failed: ${e.message || e}`);
        return false;
    }
}

/**
 * Executes RC-Astro NoiseXTerminator safely on a target view.
 */
export function executeNoiseReduction(view: View, denoise: number = 0.65, detail: number = 0.15): boolean {
    Console.writeln(`[ProcessHelper] Running NoiseXTerminator on view: ${view.id}...`);
    try {
        const nxt = new NoiseXTerminator();
        nxt.denoise = denoise;
        nxt.detail = detail;
        nxt.enable_color_separation = true;
        return nxt.executeOn(view);
    } catch (e: any) {
        Console.criticalln(`[ProcessHelper Error] NoiseXTerminator failed: ${e.message || e}`);
        return false;
    }
}
