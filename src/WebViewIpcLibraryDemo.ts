// #engine v8
// #feature-id    WebViewIpcLibraryDemo : Development > WebView Processing Workspace
// #feature-info  <b>WebView Processing Workspace</b><br/>A native PixInsight image-processing workflow with a secure WebView interface and integrated DevTools.

import { PixInsightWebViewBridge } from "./lib/webviewIpc/index";

type PipelineState = "pending" | "running" | "completed" | "skipped" | "failed";

interface RuntimeProcess extends ProcessInstance {
  [key: string]: any;
}

interface ProcessCapability {
  id: string;
  label: string;
  available: boolean;
}

interface PipelineEvent {
  step: string;
  state: PipelineState;
  message: string;
  progress: number;
}

interface StarExtractionResult {
  processLabel: string;
  starWindow: ImageWindow;
  starlessWindow: ImageWindow;
}

const STAR_EXTRACTORS: Array<{ names: string[]; label: string }> = [
  { names: ["StarXTerminator"], label: "StarXTerminator" },
  { names: ["StarNet2", "StarNet2Process"], label: "StarNet 2" },
  { names: ["StarNet", "StarNetProcess"], label: "StarNet (Legacy)" }
];

const DENOISERS: Array<{ names: string[]; label: string }> = [
  // Only engines with a verified in-place denoising parameter contract belong
  // here. Unknown defaults are more dangerous than deliberately skipping a step.
  { names: ["NoiseXTerminator"], label: "NoiseXTerminator" }
];

const WORKFLOW_STEPS = [
  { id: "load", number: "01", title: "Load image", detail: "Select and open a supported image file" },
  { id: "deconvolution", number: "02", title: "Optical correction", detail: "Apply BlurXTerminator when available" },
  { id: "stretch", number: "03", title: "Automatic stretch", detail: "Compute and apply a robust linked auto-STF" },
  { id: "stars", number: "04", title: "Star extraction", detail: "Select the best available extraction engine" },
  { id: "denoise", number: "05", title: "Starless denoise", detail: "Apply a detected modern denoising process" },
  { id: "enhance", number: "06", title: "Contrast and color", detail: "Local contrast plus CIE L*c*h* color boost" },
  { id: "starColor", number: "07", title: "Star color", detail: "Apply restrained chroma enhancement to stars" },
  { id: "recombine", number: "08", title: "Recombine", detail: "Add stars with PixelMath and clean up" }
];

/** Professional, self-contained browser interface for the processing workspace. */
const DEMO_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Processing Workspace</title>
  <style>
    :root { color-scheme: dark; --bg:#0b0e13; --surface:#121720; --surface2:#171d27; --line:#283140; --text:#e7ebf0; --muted:#8f9aaa; --blue:#5b8def; --blue2:#80a8f8; --green:#44b78b; --amber:#d7a84b; --red:#df6b73; }
    * { box-sizing:border-box; }
    html, body { min-height:100%; }
    body { margin:0; background:var(--bg); color:var(--text); font:13px/1.45 Inter, "Segoe UI", system-ui, sans-serif; }
    .shell { max-width:1180px; margin:0 auto; padding:30px; }
    .topbar { display:flex; align-items:center; justify-content:space-between; padding-bottom:24px; border-bottom:1px solid var(--line); }
    .eyebrow { color:var(--blue2); font-size:10px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; }
    h1 { margin:4px 0 3px; font-size:24px; font-weight:600; letter-spacing:-.02em; }
    .subtitle { color:var(--muted); }
    .connection { display:flex; align-items:center; gap:8px; color:var(--muted); font-size:12px; }
    .dot { width:7px; height:7px; border-radius:50%; background:var(--green); box-shadow:0 0 0 4px rgba(68,183,139,.1); }
    .grid { display:grid; grid-template-columns:minmax(0,1.55fr) minmax(280px,.75fr); gap:20px; margin-top:22px; }
    .panel { background:var(--surface); border:1px solid var(--line); border-radius:8px; overflow:hidden; }
    .panel-head { display:flex; align-items:center; justify-content:space-between; padding:16px 18px; border-bottom:1px solid var(--line); }
    .panel-title { font-weight:600; }
    .panel-caption { margin-top:2px; color:var(--muted); font-size:11px; }
    .workflow { padding:8px 18px 14px; }
    .step { position:relative; display:grid; grid-template-columns:34px 1fr auto; gap:12px; min-height:66px; align-items:center; border-bottom:1px solid rgba(40,49,64,.65); }
    .step:last-child { border-bottom:0; }
    .step-number { color:#687486; font:600 11px/1 ui-monospace, monospace; }
    .step-title { font-weight:550; }
    .step-message { margin-top:2px; color:var(--muted); font-size:11px; }
    .state { min-width:72px; padding:4px 8px; border:1px solid var(--line); border-radius:10px; color:var(--muted); text-align:center; font-size:10px; font-weight:700; letter-spacing:.05em; text-transform:uppercase; }
    .step.running .state { color:var(--blue2); border-color:rgba(91,141,239,.5); background:rgba(91,141,239,.1); }
    .step.completed .state { color:#67c9a5; border-color:rgba(68,183,139,.45); background:rgba(68,183,139,.08); }
    .step.skipped .state { color:var(--amber); border-color:rgba(215,168,75,.4); }
    .step.failed .state { color:var(--red); border-color:rgba(223,107,115,.5); background:rgba(223,107,115,.08); }
    .progress { height:3px; background:#0e1218; }
    .progress > div { width:0; height:100%; background:var(--blue); transition:width .25s ease; }
    .actions { display:flex; align-items:center; gap:12px; padding:18px; border-top:1px solid var(--line); background:var(--surface2); }
    button { appearance:none; border:0; border-radius:5px; padding:10px 16px; background:var(--blue); color:white; font:600 12px inherit; cursor:pointer; }
    button:hover { background:#6b99f1; }
    button:disabled { cursor:not-allowed; opacity:.48; }
    .action-note { color:var(--muted); font-size:11px; }
    .capabilities { padding:14px 18px; }
    .capability-group + .capability-group { margin-top:18px; }
    .group-title { margin-bottom:8px; color:var(--muted); font-size:10px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; }
    .capability { display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(40,49,64,.55); }
    .capability:last-child { border-bottom:0; }
    .badge { padding:3px 7px; border-radius:9px; font-size:9px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
    .available { color:#67c9a5; background:rgba(68,183,139,.1); }
    .missing { color:#788394; background:rgba(120,131,148,.09); }
    .summary { margin-top:20px; padding:16px 18px; background:var(--surface); border:1px solid var(--line); border-radius:8px; }
    .summary-row { display:flex; gap:18px; align-items:flex-start; }
    .summary-label { min-width:110px; color:var(--muted); font-size:11px; }
    #activity { color:#c5ccd6; white-space:pre-wrap; font:11px/1.6 ui-monospace, "Cascadia Mono", monospace; }
    @media (max-width:820px) { .grid { grid-template-columns:1fr; } .shell { padding:18px; } }
  </style>
</head>
<body>
  <main class="shell">
    <header class="topbar">
      <div><div class="eyebrow">PixInsight Automation</div><h1>Image Processing Workspace</h1><div class="subtitle">Runtime-adaptive starless processing and recombination pipeline</div></div>
      <div class="connection"><span class="dot"></span><span id="connectionText">Host connected</span></div>
    </header>
    <section class="grid">
      <div class="panel">
        <div class="panel-head"><div><div class="panel-title">Processing workflow</div><div class="panel-caption">Operations run sequentially with safe capability fallbacks</div></div><div id="overallState" class="state">Ready</div></div>
        <div class="progress"><div id="progressBar"></div></div>
        <div id="workflow" class="workflow"></div>
        <div class="actions"><button id="runButton">Load image and process</button><span class="action-note">The source image remains open if a stage cannot complete safely.</span></div>
      </div>
      <aside class="panel">
        <div class="panel-head"><div><div class="panel-title">Process availability</div><div class="panel-caption">Detected from the active PixInsight runtime</div></div></div>
        <div id="capabilities" class="capabilities"><div class="group-title">Scanning runtime…</div></div>
      </aside>
    </section>
    <section class="summary"><div class="summary-row"><div class="summary-label">Pipeline activity</div><div id="activity">Ready. Select “Load image and process” to begin.</div></div></section>
  </main>
  <noscript>This workspace requires JavaScript.</noscript>
</body>
</html>`;

/**
 * Application behavior is injected explicitly after the host IPC client is
 * ready. PixInsight WebView.setHTML() renders inline markup but does not execute
 * embedded script blocks consistently, so relying on an HTML <script> is unsafe.
 */
const DEMO_APP_JS = `(function() {
  'use strict';
  if (window.__PI_PROCESSING_WORKSPACE__) return JSON.stringify({ channel: 'workspace-app', ready: true, reused: true });
  try {
    var steps = ${JSON.stringify(WORKFLOW_STEPS)};
    var workflow = document.getElementById('workflow');
    var activityLines = [];
    var runButton = document.getElementById('runButton');
    if (!workflow || !runButton || !window.PixInsight) throw new Error('WORKSPACE_DOM_OR_IPC_MISSING');

    function renderWorkflow() {
      workflow.innerHTML = steps.map(function(step) {
        return '<div class="step pending" id="step-' + step.id + '"><div class="step-number">' + step.number + '</div><div><div class="step-title">' + step.title + '</div><div class="step-message">' + step.detail + '</div></div><div class="state">Pending</div></div>';
      }).join('');
    }

    function updateStep(event) {
      var row = document.getElementById('step-' + event.step);
      if (row) {
        row.className = 'step ' + event.state;
        row.querySelector('.state').textContent = event.state;
        row.querySelector('.step-message').textContent = event.message;
      }
      document.getElementById('progressBar').style.width = Math.max(0, Math.min(100, event.progress)) + '%';
      document.getElementById('overallState').textContent = event.state === 'failed' ? 'Failed' : event.progress >= 100 ? 'Complete' : 'Running';
      activityLines.unshift(new Date().toLocaleTimeString() + '  ' + event.message);
      activityLines = activityLines.slice(0, 6);
      document.getElementById('activity').textContent = activityLines.join('\\n');
    }

    function renderCapabilities(data) {
      function group(title, entries) {
        return '<div class="capability-group"><div class="group-title">' + title + '</div>' + entries.map(function(item) {
          return '<div class="capability"><span>' + item.label + '</span><span class="badge ' + (item.available ? 'available' : 'missing') + '">' + (item.available ? 'Available' : 'Not found') + '</span></div>';
        }).join('') + '</div>';
      }
      document.getElementById('capabilities').innerHTML = group('Star extraction', data.starExtractors) + group('Enhancement engines', data.enhancement);
    }

    function resetWorkflow() {
      renderWorkflow();
      activityLines = [];
      document.getElementById('progressBar').style.width = '0%';
      document.getElementById('overallState').textContent = 'Running';
    }

    renderWorkflow();
    document.getElementById('connectionText').textContent = 'Host connected';
    window.PixInsight.on('pipelineStep', updateStep);
    window.PixInsight.on('capabilities', renderCapabilities);

    runButton.addEventListener('click', function() {
      console.log('[Workspace UI] Load and process clicked');
      var button = this;
      resetWorkflow();
      button.disabled = true;
      button.textContent = 'Processing…';
      window.PixInsight.call('__client_log__', { level: 'info', message: '[Workspace UI] Button click received; queueing loadAndProcess.' });
      window.PixInsight.call('loadAndProcess', null, 3600000).then(function(result) {
        if (result.cancelled) {
          document.getElementById('overallState').textContent = 'Cancelled';
          document.getElementById('activity').textContent = 'No image was selected.';
        } else {
          document.getElementById('overallState').textContent = 'Complete';
        }
      }).catch(function(error) {
        document.getElementById('overallState').textContent = 'Failed';
        document.getElementById('activity').textContent = error.message || String(error);
        console.error('[Workspace UI] Processing request failed', error);
      }).then(function() {
        button.disabled = false;
        button.textContent = 'Load image and process';
      });
    });

    window.PixInsight.call('__client_log__', { level: 'info', message: '[Workspace UI] Bootstrap complete; requesting capabilities.' });
    window.PixInsight.call('getProcessingCapabilities').then(renderCapabilities).catch(function(error) {
      document.getElementById('connectionText').textContent = 'Host unavailable';
      document.getElementById('capabilities').textContent = error.message || String(error);
      console.error('[Workspace UI] Capability request failed', error);
    });

    window.__PI_PROCESSING_WORKSPACE__ = true;
    return JSON.stringify({ channel: 'workspace-app', ready: true, stepCount: steps.length });
  } catch (error) {
    var message = error && error.message ? error.message : String(error);
    var connection = document.getElementById('connectionText');
    var capabilities = document.getElementById('capabilities');
    var activity = document.getElementById('activity');
    if (connection) connection.textContent = 'UI initialization failed';
    if (capabilities) capabilities.textContent = message;
    if (activity) activity.textContent = message;
    console.error('[Workspace Bootstrap]', error);
    return JSON.stringify({ channel: 'workspace-app', ready: false, error: message });
  }
})()`;

/** Retrieves an optional process constructor from the running PixInsight instance. */
function getRuntimeConstructor(names: string[]): any | null {
  try {
    const runtime = globalThis as any;
    for (const name of names) {
      if (typeof runtime[name] === "function") return runtime[name];
    }
    return null;
  } catch (error: any) {
    return null;
  }
}

/** Instantiates a real runtime process; declarations alone are never treated as availability. */
function instantiateProcess(names: string[]): RuntimeProcess | null {
  try {
    const Constructor = getRuntimeConstructor(names);
    if (!Constructor) return null;
    const instance = new Constructor() as RuntimeProcess;
    return instance && typeof instance.executeOn === "function" ? instance : null;
  } catch (error: any) {
    return null;
  }
}

/** Returns whether at least one runtime constructor in a compatibility group is usable. */
function isProcessAvailable(names: string[]): boolean {
  try {
    return instantiateProcess(names) !== null;
  } catch (error: any) {
    return false;
  }
}

/** Assigns the first parameter name implemented by the installed process version. */
function setFirstExisting(process: RuntimeProcess, names: string[], value: any): string | null {
  try {
    for (const name of names) {
      if (name in process) {
        process[name] = value;
        return name;
      }
    }
    return null;
  } catch (error: any) {
    return null;
  }
}

/** Executes a process only when the runtime reports that the target is compatible. */
function executeProcess(process: RuntimeProcess, view: View): boolean {
  try {
    if (typeof process.canExecuteOn === "function" && process.canExecuteOn(view) === false) return false;
    return process.executeOn(view, false) === true;
  } catch (error: any) {
    Console.warningln(`[Processing Workspace] ${error.message || error}`);
    return false;
  }
}

/** Creates a collision-resistant, PixelMath-safe temporary view identifier. */
function temporaryViewId(prefix: string): string {
  try {
    const uuid = String(("" as any).UUID()).replace(/[^a-zA-Z0-9]/g, "").substring(0, 12);
    return `${prefix}_${uuid || Date.now()}`;
  } catch (error: any) {
    return `${prefix}_${Date.now()}`;
  }
}

/** Creates a hidden, script-owned pixel copy for transactional restoration. */
function cloneImageWindow(source: ImageWindow, prefix: string): ImageWindow {
  try {
    const image = source.mainView.image;
    const copy = new ImageWindow(
      image.width,
      image.height,
      image.numberOfNominalChannels,
      image.bitsPerSample,
      image.sampleType === PixelSampleType.Float,
      image.isColor,
      temporaryViewId(prefix)
    );
    copy.mainView.beginProcess(UndoFlag.PixelData);
    try {
      copy.mainView.image.assign(image);
      copy.mainView.endProcess();
    } catch (error: any) {
      copy.mainView.cancelProcess();
      copy.forceClose();
      throw error;
    }
    copy.hide();
    return copy;
  } catch (error: any) {
    throw new Error(`Could not create processing backup: ${error.message || error}`);
  }
}

/** Restores target pixels after a failed destructive extractor attempt. */
function restoreImage(target: ImageWindow, backup: ImageWindow): void {
  try {
    target.mainView.beginProcess(UndoFlag.PixelData);
    try {
      target.mainView.image.assign(backup.mainView.image);
      target.mainView.endProcess();
    } catch (error: any) {
      target.mainView.cancelProcess();
      throw error;
    }
  } catch (error: any) {
    throw new Error(`Could not restore target image: ${error.message || error}`);
  }
}

/** Captures live image windows so process-created outputs can be identified behaviorally. */
function snapshotWindows(): Map<string, ImageWindow> {
  try {
    const result = new Map<string, ImageWindow>();
    for (const window of ImageWindow.windows as ImageWindow[]) {
      if (window && !window.isNull && !window.isClosed && !window.mainView.isNull) {
        result.set(window.mainView.uniqueId, window);
      }
    }
    return result;
  } catch (error: any) {
    return new Map<string, ImageWindow>();
  }
}

/** Finds the most plausible same-size star image created by an extraction process. */
function findCreatedStarWindow(before: Map<string, ImageWindow>, target: ImageWindow): ImageWindow | null {
  try {
    const candidates: ImageWindow[] = [];
    const targetImage = target.mainView.image;
    for (const window of ImageWindow.windows as ImageWindow[]) {
      if (!window || window.isNull || window.isClosed || window === target || before.has(window.mainView.uniqueId)) continue;
      const image = window.mainView.image;
      if (
        image.width === targetImage.width &&
        image.height === targetImage.height &&
        image.numberOfNominalChannels === targetImage.numberOfNominalChannels
      ) candidates.push(window);
    }
    candidates.sort((left, right) => {
      const leftStar = /star/i.test(left.mainView.id) ? 1 : 0;
      const rightStar = /star/i.test(right.mainView.id) ? 1 : 0;
      return rightStar - leftStar;
    });
    return candidates.length > 0 ? candidates[0] : null;
  } catch (error: any) {
    return null;
  }
}

/** Closes all process-created windows except a specifically retained output. */
function closeCreatedWindows(before: Map<string, ImageWindow>, keep?: ImageWindow | null): void {
  try {
    for (const window of ImageWindow.windows as ImageWindow[]) {
      if (!window || window.isNull || window.isClosed || window === keep) continue;
      if (!before.has(window.mainView.uniqueId)) window.forceClose();
    }
  } catch (error: any) {
    Console.warningln(`Could not release extractor output: ${error.message || error}`);
  }
}

/** Computes a compact image signature to verify destructive process behavior. */
function imageSignature(window: ImageWindow): string {
  try {
    const image = window.mainView.image;
    return `${image.mean().toFixed(12)}:${image.stdDev().toFixed(12)}`;
  } catch (error: any) {
    return "unavailable";
  }
}

/** Derives a regular additive stars image from backup minus the starless target. */
function deriveStarImage(backup: ImageWindow, starless: ImageWindow): ImageWindow {
  try {
    const starWindow = cloneImageWindow(backup, "workflow_stars");
    const pixelMath = new PixelMath();
    pixelMath.expression = `$T - ${starless.mainView.id}`;
    pixelMath.useSingleExpression = true;
    pixelMath.createNewImage = false;
    pixelMath.generateOutput = true;
    pixelMath.rescale = false;
    pixelMath.truncate = true;
    pixelMath.truncateLower = 0;
    pixelMath.truncateUpper = 1;
    if (!pixelMath.executeOn(starWindow.mainView, false)) {
      starWindow.forceClose();
      throw new Error("PixelMath could not derive a star image.");
    }
    return starWindow;
  } catch (error: any) {
    throw error;
  }
}

/** Applies conservative BlurXTerminator defaults when the installed module is usable. */
function applyBlurXTerminator(view: View): boolean {
  try {
    const process = instantiateProcess(["BlurXTerminator"]);
    if (!process) return false;
    setFirstExisting(process, ["auto_nonstellar_psf"], true);
    setFirstExisting(process, ["auto_nonstellar_radius"], true);
    setFirstExisting(process, ["correct_only"], false);
    setFirstExisting(process, ["sharpen_stars"], 0.2);
    setFirstExisting(process, ["sharpen_nonstellar"], 0.3);
    return executeProcess(process, view);
  } catch (error: any) {
    return false;
  }
}

/** Computes and permanently applies a linked automatic display function. */
function applyAutoStretch(view: View): void {
  try {
    const displayFunction = view.image.computeAutoStretch(undefined, undefined, -2.8, 0.25, true);
    if (!displayFunction || displayFunction.length === 0) throw new Error("Auto-stretch calculation returned no data.");
    view.beginProcess(UndoFlag.PixelData);
    try {
      view.image.applyDisplayFunction(displayFunction);
      view.endProcess();
    } catch (error: any) {
      view.cancelProcess();
      throw error;
    }
    view.stf = [
      [0, 1, 0.5, 0, 1], [0, 1, 0.5, 0, 1],
      [0, 1, 0.5, 0, 1], [0, 1, 0.5, 0, 1]
    ];
  } catch (error: any) {
    throw new Error(`Automatic stretch failed: ${error.message || error}`);
  }
}

/** Extracts stars with the best detected engine and transactional fallback behavior. */
function extractStars(target: ImageWindow, backup: ImageWindow): StarExtractionResult | null {
  try {
    for (const candidate of STAR_EXTRACTORS) {
      const process = instantiateProcess(candidate.names);
      if (!process) continue;
      restoreImage(target, backup);
      const before = snapshotWindows();
      const signatureBefore = imageSignature(target);

      // Each engine has a separate adapter because similarly named parameters
      // across StarXTerminator and StarNet do not share a universal contract.
      if (candidate.names[0] === "StarXTerminator") {
        setFirstExisting(process, ["unscreen_stars", "unscreen"], false);
        if ("output_stars" in process) process.output_stars = true;
        else if ("stars" in process) process.stars = true;
        setFirstExisting(process, ["remove_stars"], true);
        setFirstExisting(process, ["overlap"], 0.2);
      } else {
        // StarNet generations reliably produce a starless target. Stars are
        // derived from the transactional backup, avoiding unknown mask flags.
        setFirstExisting(process, ["mask"], false);
      }

      if (!executeProcess(process, target.mainView)) {
        closeCreatedWindows(before);
        continue;
      }
      let starlessWindow = target;
      let starWindow = findCreatedStarWindow(before, target);
      if (imageSignature(target) === signatureBefore && starWindow) {
        // A same-sized process output is more likely StarNet's starless result
        // when the original target was not modified.
        starlessWindow = starWindow;
        starWindow = null;
      }
      if (imageSignature(starlessWindow) === signatureBefore) {
        closeCreatedWindows(before);
        continue;
      }
      if (!starWindow) starWindow = deriveStarImage(backup, starlessWindow);
      if (starWindow && !starWindow.isNull && !starWindow.isClosed) {
        if (starlessWindow !== target) restoreImage(target, starlessWindow);
        closeCreatedWindows(before, starWindow);
        return { processLabel: candidate.label, starWindow, starlessWindow: target };
      }
      closeCreatedWindows(before);
    }
    restoreImage(target, backup);
    return null;
  } catch (error: any) {
    restoreImage(target, backup);
    return null;
  }
}

/** Applies the first safe, available modern denoiser to the starless image. */
function applyModernDenoiser(view: View): string | null {
  try {
    for (const candidate of DENOISERS) {
      const process = instantiateProcess(candidate.names);
      if (!process) continue;
      if (candidate.names[0] === "NoiseXTerminator") {
        setFirstExisting(process, ["denoise"], 0.6);
        setFirstExisting(process, ["detail"], 0.15);
        setFirstExisting(process, ["enable_color_separation"], true);
      }
      if (executeProcess(process, view)) return candidate.label;
    }
    return null;
  } catch (error: any) {
    return null;
  }
}

/** Applies mild local contrast and CIE L*c*h* colorfulness enhancement. */
function enhanceStarless(view: View): void {
  try {
    const localContrast = instantiateProcess(["LocalHistogramEqualization"]);
    if (localContrast) {
      setFirstExisting(localContrast, ["radius"], 64);
      setFirstExisting(localContrast, ["amount"], 0.22);
      setFirstExisting(localContrast, ["slopeLimit"], 1.6);
      setFirstExisting(localContrast, ["circularKernel"], true);
      executeProcess(localContrast, view);
    }

    if (view.image.isColor) {
      const curves = new CurvesTransformation();
      // c* is CIE L*c*h* colorfulness: this boosts LAB chroma without shifting hue.
      curves.c = [[0, 0], [0.25, 0.31], [0.5, 0.58], [0.75, 0.81], [1, 1]];
      // Mild L* S-curve adds contrast without crushing the endpoints.
      curves.L = [[0, 0], [0.25, 0.21], [0.5, 0.5], [0.75, 0.79], [1, 1]];
      if (!curves.executeOn(view, false)) throw new Error("LAB curves did not execute.");
    }
  } catch (error: any) {
    throw new Error(`Contrast/color enhancement failed: ${error.message || error}`);
  }
}

/** Boosts star chroma while preserving star brightness and core structure. */
function enhanceStars(view: View): void {
  try {
    if (!view.image.isColor) return;
    const curves = new CurvesTransformation();
    curves.c = [[0, 0], [0.25, 0.33], [0.5, 0.60], [0.75, 0.82], [1, 1]];
    if (!curves.executeOn(view, false)) throw new Error("Star color curves did not execute.");
  } catch (error: any) {
    throw new Error(`Star color enhancement failed: ${error.message || error}`);
  }
}

/** Recombines regular stars additively and closes only the confirmed star window. */
function recombineStars(starless: ImageWindow, stars: ImageWindow): void {
  try {
    const pixelMath = new PixelMath();
    pixelMath.expression = `$T + ${stars.mainView.id}`;
    pixelMath.useSingleExpression = true;
    pixelMath.createNewImage = false;
    pixelMath.generateOutput = true;
    pixelMath.rescale = false;
    pixelMath.truncate = true;
    pixelMath.truncateLower = 0;
    pixelMath.truncateUpper = 1;
    if (!pixelMath.executeOn(starless.mainView, false)) throw new Error("PixelMath recombination failed.");
    if (!stars.isClosed) stars.forceClose();
  } catch (error: any) {
    throw new Error(`Star recombination failed: ${error.message || error}`);
  }
}

/** Main native dialog wrapping the WebView, bridge, pipeline, and DevTools. */
class WebViewProcessingDialog extends Dialog {
  private readonly webView: WebView;
  private readonly bridge: PixInsightWebViewBridge;
  private readonly devToolsButton: PushButton;
  private readonly devToolsMenu: Menu;
  private readonly toggleDevToolsItem: MenuItem;
  private processing: boolean = false;

  /** Constructs the professional processing workspace and registers its RPC surface. */
  constructor() {
    super();
    this.windowTitle = "WebView Image Processing Workspace";
    this.userResizable = true;
    this.width = 1120;
    this.height = 760;

    this.webView = new WebView(this);
    this.bridge = new PixInsightWebViewBridge(
      this.webView,
      {
        allowLocalOnly: true,
        allowedOrigins: ["file:" + String.fromCharCode(47, 47), "data:", "about:blank"],
        allowUnregisteredMethods: false,
        maxMessageAgeMs: 3600000
      },
      {
        enabled: true,
        hotkeyToggle: true,
        requireTrustedOrigin: true,
        allowExpressionEval: true,
        allowDomEdits: true
      }
    );

    this.bridge.bindDevToolsHotkey(this);
    const devToolsPanel = this.bridge.attachDevToolsPanel(this);
    this.devToolsMenu = new Menu(this);
    this.devToolsMenu.text = "Developer";
    this.toggleDevToolsItem = new MenuItem("Toggle WebView DevTools", undefined as any, "F12");
    this.toggleDevToolsItem.onTrigger = () => this.bridge.toggleDevTools();
    this.devToolsMenu.addItem(this.toggleDevToolsItem);
    this.devToolsButton = new PushButton(this);
    this.devToolsButton.text = "Developer";
    this.devToolsButton.toolTip = "Open the WebView developer menu. F12 toggles DevTools.";
    this.devToolsButton.onClick = () => this.devToolsMenu.execute();

    const toolbar = new HorizontalSizer();
    toolbar.margin = 6;
    toolbar.addStretch();
    toolbar.add(this.devToolsButton);
    const content = new HorizontalSizer();
    content.spacing = 6;
    content.add(this.webView, 100);
    if (devToolsPanel) content.add(devToolsPanel, 55);
    const layout = new VerticalSizer();
    layout.margin = 0;
    layout.add(toolbar);
    layout.add(content, 100);
    this.sizer = layout;

    this.bridge.registerHandler("getProcessingCapabilities", () => this.getCapabilities());
    this.bridge.registerHandler("loadAndProcess", () => this.loadAndProcess());
    this.bridge.onClientReady(() => {
      try {
        Console.writeln("[Workspace Debug] Injecting application behavior.");
        this.webView.evaluateScript(DEMO_APP_JS);
      } catch (error: any) {
        Console.criticalln(`[Workspace Debug] Application injection failed: ${error.message || error}`);
      }
    });
    // Load content only after the bridge owns WebView callbacks. Otherwise a
    // fast data-document load can finish before runtime injection is observable.
    this.webView.setHTML(DEMO_HTML);
    this.bridge.start(40);
  }

  /** Reports runtime-tested process availability to the WebView. */
  private getCapabilities(): { starExtractors: ProcessCapability[]; enhancement: ProcessCapability[] } {
    try {
      return {
        starExtractors: STAR_EXTRACTORS.map(candidate => ({
          id: candidate.names[0], label: candidate.label, available: isProcessAvailable(candidate.names)
        })),
        enhancement: [
          { id: "BlurXTerminator", label: "BlurXTerminator", available: isProcessAvailable(["BlurXTerminator"]) },
          ...DENOISERS.map(candidate => ({ id: candidate.names[0], label: candidate.label, available: isProcessAvailable(candidate.names) }))
        ]
      };
    } catch (error: any) {
      return { starExtractors: [], enhancement: [] };
    }
  }

  /** Emits one live workflow transition and flushes native events to the WebView. */
  private report(step: string, state: PipelineState, message: string, progress: number): void {
    try {
      const event: PipelineEvent = { step, state, message, progress };
      Console.writeln(`[Processing Workspace] ${message}`);
      this.bridge.emit("pipelineStep", event);
      CoreApplication.processEvents(true, 4);
    } catch (error: any) {
      Console.warningln(`Pipeline reporting failed: ${error.message || error}`);
    }
  }

  /** Runs the complete runtime-adaptive image workflow after native file selection. */
  private loadAndProcess(): { cancelled?: boolean; completed?: boolean; viewId?: string } {
    let backup: ImageWindow | null = null;
    let stars: ImageWindow | null = null;
    let activeStep = "load";
    let activeProgress = 0;
    try {
      if (this.processing) throw new Error("A processing workflow is already running.");
      this.processing = true;
      // The RPC request has already been dequeued. Pause bridge polling while
      // native processes run so CoreApplication.processEvents() cannot reenter
      // the request pump; outbound progress events still use evaluateScript().
      this.bridge.stop();
      this.bridge.emit("capabilities", this.getCapabilities());
      activeStep = "load";
      activeProgress = 3;
      this.report("load", "running", "Waiting for image selection…", 3);

      const dialog = new OpenFileDialog();
      dialog.caption = "Select an image to process";
      dialog.multipleSelections = false;
      dialog.loadImageFilters();
      if (!dialog.execute()) {
        this.report("load", "skipped", "Image selection cancelled", 0);
        return { cancelled: true };
      }

      const opened = ImageWindow.open(dialog.filePath) as ImageWindow[];
      if (!opened || opened.length === 0 || opened[0].isNull) throw new Error("PixInsight could not open the selected image.");
      const target = opened[0];
      // The workflow deliberately processes one image. Close additional images
      // from multi-image containers instead of leaving unmanaged windows open.
      for (let index = 1; index < opened.length; index++) {
        if (opened[index] && !opened[index].isNull && !opened[index].isClosed) opened[index].forceClose();
      }
      target.show();
      target.bringToFront();
      this.report("load", "completed", `Loaded ${target.mainView.id}`, 12);

      activeStep = "deconvolution";
      activeProgress = 16;
      this.report("deconvolution", "running", "Checking BlurXTerminator runtime…", 16);
      if (applyBlurXTerminator(target.mainView)) {
        this.report("deconvolution", "completed", "BlurXTerminator applied", 25);
      } else {
        this.report("deconvolution", "skipped", "BlurXTerminator unavailable or incompatible", 25);
      }

      activeStep = "stretch";
      activeProgress = 29;
      this.report("stretch", "running", "Computing linked automatic stretch…", 29);
      applyAutoStretch(target.mainView);
      this.report("stretch", "completed", "Automatic stretch applied to image data", 38);

      backup = cloneImageWindow(target, "workflow_backup");
      activeStep = "stars";
      activeProgress = 42;
      this.report("stars", "running", "Selecting an available star-extraction engine…", 42);
      const extraction = extractStars(target, backup);
      if (!extraction) {
        this.report("stars", "failed", "No compatible star-extraction process completed", 42);
        throw new Error("No available star-extraction process produced a valid starless image.");
      }
      stars = extraction.starWindow;
      this.report("stars", "completed", `${extraction.processLabel} created starless and star images`, 55);

      activeStep = "denoise";
      activeProgress = 59;
      this.report("denoise", "running", "Checking modern denoising engines…", 59);
      const denoiser = applyModernDenoiser(target.mainView);
      if (denoiser) this.report("denoise", "completed", `${denoiser} applied to the starless image`, 68);
      else this.report("denoise", "skipped", "No compatible modern denoiser was available", 68);

      activeStep = "enhance";
      activeProgress = 72;
      this.report("enhance", "running", "Applying local contrast and CIE L*c*h* color boost…", 72);
      enhanceStarless(target.mainView);
      this.report("enhance", "completed", "Starless contrast and LAB-derived chroma enhanced", 81);

      activeStep = "starColor";
      activeProgress = 84;
      this.report("starColor", "running", "Enhancing star chroma…", 84);
      enhanceStars(stars.mainView);
      this.report("starColor", "completed", stars.mainView.image.isColor ? "Star color enhanced" : "Grayscale stars required no color boost", 89);

      activeStep = "recombine";
      activeProgress = 93;
      this.report("recombine", "running", "Recombining stars with PixelMath…", 93);
      recombineStars(target, stars);
      stars = null;
      if (backup && !backup.isClosed) backup.forceClose();
      backup = null;
      target.show();
      target.bringToFront();
      this.report("recombine", "completed", `Workflow complete — final view: ${target.mainView.id}`, 100);
      return { completed: true, viewId: target.mainView.id };
    } catch (error: any) {
      this.report(activeStep, "failed", error.message || String(error), activeProgress);
      // Preserve useful star/backup intermediates on failure for diagnosis.
      if (stars && !stars.isClosed) stars.show();
      if (backup && !backup.isClosed) backup.show();
      throw error;
    } finally {
      this.processing = false;
      this.bridge.start(40);
    }
  }

  /** Stops bridge resources before the owner dialog is released. */
  public destroy(): void {
    try {
      this.bridge.destroy();
    } catch (error: any) {
      Console.warningln(`Workspace shutdown failed: ${error.message || error}`);
    }
  }
}

/** Script entry point. */
function main(): void {
  Console.show();
  Console.writeln("Starting WebView Image Processing Workspace…");
  const dialog = new WebViewProcessingDialog();
  try {
    dialog.execute();
  } finally {
    dialog.destroy();
  }
}

main();
