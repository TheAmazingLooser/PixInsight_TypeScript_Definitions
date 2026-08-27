// #engine v8
// #feature-id    ModularPipelineDemo : Development > Modular Pipeline Demo
// #feature-info  <b>Modular Pipeline Demo</b><br/>Demonstrates clean multi-file TypeScript architecture with imported libraries.

/**
 * ModularPipelineDemo.ts
 * 
 * Demonstrates importing reusable UI, Math, and Process helper modules.
 */

import { BaseDialog, showInfo, showWarning } from './lib/ui';
import { getImageStatistics, unmixDualBandMatrix } from './lib/astroMath';
import { executeStarExtraction, executeNoiseReduction } from './lib/processHelper';

class SynthesizerAppDialog extends BaseDialog {
    private viewLabel: Label;

    constructor() {
        super(
            "Modular Astronomical Pipeline",
            "This application is built with a modular, multi-file TypeScript architecture."
        );

        const activeWin = ImageWindow.activeWindow;
        this.viewLabel = new Label(this);
        if (!activeWin.isNull) {
            this.viewLabel.text = `Target View: <b>${activeWin.mainView.id}</b>`;
        } else {
            this.viewLabel.text = "Target View: <i>No active image open</i>";
        }
        this.viewLabel.useRichText = true;

        this.contentSizer.add(this.viewLabel);
        this.adjustToContents();
    }

    protected override handleExecution(): void {
        const activeWin = ImageWindow.activeWindow;
        if (activeWin.isNull) {
            showWarning("No Active Window", "Please open an image view first.");
            return;
        }

        const view = activeWin.mainView;
        Console.show();
        Console.writeln("✦ Starting Modular Processing Pipeline...");

        // 1. Math Library - Compute Image Statistics
        const stats = getImageStatistics(view);
        Console.writeln(`[Stats] Mean: ${stats.mean.toFixed(6)}, StdDev: ${stats.stdDev.toFixed(6)}`);

        // 2. Math Library - Spectral Matrix Unmixing
        unmixDualBandMatrix(view.image);

        // 3. Process Library - Extract Stars & Denoise
        executeStarExtraction(view);
        executeNoiseReduction(view, 0.5, 0.1);

        this.ok();
        showInfo("Pipeline Completed", `Successfully processed view: ${view.id}`);
    }
}

function run(): void {
    Console.show();
    const dialog = new SynthesizerAppDialog();
    dialog.execute();
}

run();
