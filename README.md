# 🌌 PixInsight V8 TypeScript Starter Template

[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PixInsight](https://img.shields.io/badge/PixInsight-1.9.4%20Build%201628-0A84FF)](https://pixinsight.com/)
[![Declarations](https://img.shields.io/badge/PJSR%20Declarations-8,877%20lines-blueviolet)](#)
[![Binary SHA-256](https://img.shields.io/badge/SHA--256-58c332e7...-grey)](#-build-verification--provenance)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An authoritative, production-ready **TypeScript development starter template** and comprehensive type declaration library (`pjsr.d.ts`) for **PixInsight 1.9.4+ (Google V8 ECMAScript Engine)**.

Write modern, type-safe astrophotography scripts with full IntelliSense, autocomplete, parameter checking, and inline JSDoc documentation inside VS Code or WebStorm, and compile directly into PixInsight V8-ready `.js` files.

---

> [!TIP]
> ### 📢 Requesting 3rd-Party Processes
> Don't see a commercial or community PixInsight process you use (e.g. *BlurXTerminator*, *StarNet2*, *GraXpert*, *MARS*, *GHS*, etc.)?
> Simply **open an Issue on GitHub** requesting the process name, and I will install/dump it into the live environment and publish updated type definitions!

---

## 🔍 Build Verification & Provenance

This definition release was extracted directly from live runtime introspection of PixInsight:

| Parameter | Dumped Runtime Specification |
| :--- | :--- |
| **PixInsight Release** | `PixInsight Core 1.9.4 Lockhart (Build 1628)` |
| **PCL Core Version** | `2.4.4.614` |
| **V8 Engine Version** | `Google V8 11.8.172.18` |
| **Host System** | `Windows 11 (x64)` |
| **Executable SHA-256** | `58c332e74888bd585e0003a33adb7ff89711669beab6c8f0576334e48b1a0af8` |
| **TypeScript Version** | `v7.0.2` |
| **Last Dumped** | `2026-08-27 17:45 UTC` |

> [!NOTE]
> You can verify your local `PixInsight.exe` binary against the SHA-256 checksum above in PowerShell:
> ```powershell
> Get-FileHash "C:\Program Files\PixInsight\bin\PixInsight.exe" -Algorithm SHA256
> ```

---

## ✨ Features

- **Authoritative PJSR Type Definitions (`types/pjsr.d.ts`)**:
  - **145 Core & UI Classes**: `Image`, `ImageWindow`, `View`, `Matrix`, `Vector`, `Dialog`, `Control`, `PushButton`, `VerticalSizer`, `MessageBox`, `Graphics`, `Font`, `Bitmap`, `File`, `Timer`, `XMLDocument`, etc.
  - **Inheritance Hierarchies**: Fully typed class inheritance (`Dialog extends Control`, `VerticalSizer extends Sizer`, `PushButton extends Control`, `Matrix extends Array`, `Vector extends Float64Array`).
  - **78 Enums with Exact Live Integer Values**: `ColorSpace`, `DataType`, `KeyModifier`, `UndoFlag`, `StdIcon`, `StdButton`, `PixelSampleType`, `ResizeMode`, etc.
  - **32 Installed 3rd-Party & Native Processes**: Strongly typed declarations for `StarXTerminator`, `NoiseXTerminator`, `BlurXTerminator`, `PixelMath`, `MultiscaleLinearTransform`, `HistogramTransformation`, `CurvesTransformation`, `StarNet2`, `SCNR`, etc.
  - **132+ Static Properties & 539+ Static Methods**: `ImageWindow.activeWindow`, `ImageWindow.open()`, `File.readTextFile()`, `Matrix.inverse()`, etc.
  - **8,877 Lines of Declarations**: Full JSDoc documentation, signatures, and parameter typing.

- **Modular Multi-File Architecture Support**:
  - Write clean, split-up codebase using standard TypeScript `import { ... } from './lib/...'` and `export`.
  - Built-in fast bundler automatically inlines and bundles all library dependencies from `src/lib/` into self-contained standalone `.js` scripts in `dist/`.
  - Reusable out-of-the-box libraries included: `src/lib/ui.ts` (BaseDialog, MessageBox helpers), `src/lib/astroMath.ts` (ImageStatistics, Matrix Unmixing), `src/lib/processHelper.ts` (StarXTerminator, NoiseXTerminator wrappers).

- **Automated PixInsight V8 Build Pipeline (`scripts/build.js`)**:
  - Automatically prepends `#engine v8` to all generated `.js` files.
  - Automatically translates commented directives (`// #feature-id ...`, `// #feature-icon ...`, `// #include ...`) into valid PixInsight preprocessor directives.
  - Built-in live file watcher (`npm run watch`).

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/TheAmazingLooser/PixInsight_TypeScript_Definitions.git
cd PixInsight_TypeScript_Definitions
npm install
```

### 2. Build Scripts
```bash
npm run build
```
This bundles and compiles all TypeScript files in `src/` into PixInsight-ready JavaScript files in `dist/`.

### 3. Run in PixInsight
In PixInsight, execute the compiled script via menu **Script > Execute Script File...** or from the PixInsight Process Console:
```
run "path/to/pixinsight-typescript-template/dist/ModularPipelineDemo.js"
```

### 4. Watch Mode (Live Reloading)
```bash
npm run watch
```
Any changes saved in `src/**/*.ts` will automatically recompile into `dist/` instantly.

---

## 📂 Project Structure

```
├── .vscode/                 # Pre-configured VS Code settings and build tasks
├── dist/                    # Compiled, bundled standalone PixInsight scripts (.js)
├── scripts/
│   └── build.js             # Automated multi-file bundler with #engine v8 header injection
├── src/                     # Your TypeScript source files (.ts)
│   ├── lib/                 # Reusable multi-file modular libraries (imported via TS)
│   │   ├── astroMath.ts     # Image statistics, matrix spectral unmixing
│   │   ├── processHelper.ts # Safe StarXTerminator & NoiseXTerminator wrappers
│   │   └── ui.ts            # BaseDialog, styled headers, MessageBox helpers
│   ├── ModularPipelineDemo.ts # Multi-file demo importing from ./lib/*
│   ├── InteractiveDialog.ts # Example GUI Dialog application
│   ├── MyFirstScript.ts     # Minimal starter template
│   └── ProcessAutomation.ts # StarXTerminator, NoiseXTerminator & PixelMath example
├── types/
│   └── pjsr.d.ts            # Master TypeScript declaration file (8,877 lines)
├── package.json             # NPM package scripts and configurations
├── tsconfig.json            # TypeScript compiler options targeting ES2022 / PJSR V8
└── README.md
```

---

## 💡 Code Examples

### 1. Modular Multi-File Script (`src/ModularPipelineDemo.ts`)
```typescript
// #engine v8
// #feature-id    ModularPipelineDemo : Development > Modular Pipeline Demo

// Import directly from your modular libraries!
import { BaseDialog, showInfo, showWarning } from './lib/ui';
import { getImageStatistics, unmixDualBandMatrix } from './lib/astroMath';
import { executeStarExtraction } from './lib/processHelper';

class SynthesizerDialog extends BaseDialog {
    constructor() {
        super("Modular Astrophotography Tool", "Built with clean multi-file libraries.");
    }

    protected override handleExecution(): void {
        const activeWin = ImageWindow.activeWindow;
        if (activeWin.isNull) {
            showWarning("No Image", "Please open an image first.");
            return;
        }

        const view = activeWin.mainView;
        const stats = getImageStatistics(view);
        Console.writeln(`Image Mean: ${stats.mean}, StdDev: ${stats.stdDev}`);

        // Matrix Unmixing & Star Removal
        unmixDualBandMatrix(view.image);
        executeStarExtraction(view);

        this.ok();
        showInfo("Done", `Processed: ${view.id}`);
    }
```

### 2. Minimal Script (`src/MyFirstScript.ts`)
```typescript
// #engine v8
// #feature-id    MyFirstScript : Development > My First TypeScript Script

function run(): void {
    Console.show();
    Console.writeln("✦ Starting TypeScript Script in PixInsight V8...");

    const activeWin = ImageWindow.activeWindow;
    if (activeWin.isNull) {
        Console.warningln("No active image window found.");
        return;
    }

    const view = activeWin.mainView;
    const img = view.image;

    Console.writeln(`View: ${view.id} (${img.width}x${img.height}, ${img.numberOfChannels} channels)`);
}

run();
```

### 3. Process Automation (`src/ProcessAutomation.ts`)
```typescript
// #engine v8
// #feature-id    ProcessAutomation : Development > Process Automation Example

function runPipeline(view: View): boolean {
    // 1. Star Extraction with RC-Astro StarXTerminator
    const sxt = new StarXTerminator();
    sxt.unscreen = true;
    sxt.overlap = 0.2;
    sxt.stars = true;

    if (!sxt.executeOn(view)) {
        Console.criticalln("StarXTerminator failed to execute.");
        return false;
    }

    // 2. Denoise with RC-Astro NoiseXTerminator
    const nxt = new NoiseXTerminator();
    nxt.denoise = 0.60;
    nxt.detail = 0.15;
    nxt.enable_color_separation = true;
    nxt.executeOn(view);

    // 3. PixelMath Boost
    const pm = new PixelMath();
    pm.expression = "$T * 1.05";
    pm.useSingleExpression = true;
    pm.executeOn(view);

    return true;
}
```

### 4. Modern GUI Dialog (`src/InteractiveDialog.ts`)
```typescript
// #engine v8
// #feature-id    InteractiveDialog : Development > Interactive Dialog Example

class SampleDialog extends Dialog {
    private label: Label;
    private button: PushButton;

    constructor() {
        super();
        this.windowTitle = "My Custom Tool";

        this.label = new Label(this);
        this.label.text = "Click to execute process:";

        this.button = new PushButton(this);
        this.button.text = "Execute";
        this.button.onClick = () => {
            const activeWin = ImageWindow.activeWindow;
            if (!activeWin.isNull) {
                Console.writeln(`Processing: ${activeWin.mainView.id}`);
                this.ok();
            } else {
                new MessageBox("Please open an image first.", "Warning", StdIcon.Warning).execute();
            }
        };

        const sizer = new VerticalSizer();
        sizer.margin = 12;
        sizer.spacing = 8;
        sizer.add(this.label);
        sizer.add(this.button);

        this.sizer = sizer;
        this.adjustToContents();
    }
}
```

---

## 🛠️ How to Add Preprocessor Directives

In TypeScript, preprocessor directives starting with `#` are commented so that the TypeScript compiler does not treat them as syntax errors. `scripts/build.js` automatically converts them into valid PixInsight preprocessor directives:

| In your `.ts` file | Compiled in output `.js` |
| :--- | :--- |
| `// #engine v8` | `#engine v8` |
| `// #feature-id MyTool : Cat > Tool` | `#feature-id MyTool : Cat > Tool` |
| `// #feature-icon @script_icons/Tool.svg` | `#feature-icon @script_icons/Tool.svg` |
| `// #include <pjsr/DataType.jsh>` | `#include <pjsr/DataType.jsh>` |

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
Feel free to use it for both open-source and commercial PixInsight script development!
