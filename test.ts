Console.writeln("Hello world from TypeScript!");

// Run NoiseXTermintor with following settings: Denoise 90% (0.9) and Detail 55% (0.55):
let nxt : NoiseXTerminator = new NoiseXTerminator();
nxt.denoise = 0.9;
nxt.detail = 0.55;

nxt.executeOn(View.viewById("test"));

JSON.stringify("cool");

let wv = new WebView();
wv.loadContent("http://www.google.com");
wv.show();