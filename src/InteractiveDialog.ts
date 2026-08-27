// #engine v8
// #feature-id    InteractiveDialog : Development > Interactive Dialog Example
// #feature-info  <b>Interactive Dialog Example</b><br/>PJSR GUI Dialog developed in TypeScript with type checking.

/**
 * InteractiveDialog.ts
 * 
 * Demonstrates GUI development in PixInsight PJSR using TypeScript classes.
 */
class SampleConfigDialog extends Dialog {
    private labelTitle: Label;
    private labelInfo: Label;
    private btnExecute: PushButton;
    private btnClose: PushButton;

    constructor() {
        super();

        this.windowTitle = "PixInsight TypeScript Template";

        // Title Label
        this.labelTitle = new Label(this);
        this.labelTitle.text = "<b>TypeScript Development in PixInsight V8</b>";
        this.labelTitle.useRichText = true;

        // Info Label
        this.labelInfo = new Label(this);
        this.labelInfo.text = "This dialog was built with 100% type-safe TypeScript.";

        // Execute Button
        this.btnExecute = new PushButton(this);
        this.btnExecute.text = "Execute Action";
        this.btnExecute.onClick = () => {
            const activeWin = ImageWindow.activeWindow;
            if (!activeWin.isNull) {
                Console.writeln(`Processed active image: ${activeWin.mainView.id}`);
                const msg = new MessageBox(
                    `Action executed on: ${activeWin.mainView.id}`,
                    "Success",
                    StdIcon.Information,
                    StdButton.Ok
                );
                msg.execute();
            } else {
                const msg = new MessageBox(
                    "No active image window found in PixInsight.",
                    "Notice",
                    StdIcon.Warning,
                    StdButton.Ok
                );
                msg.execute();
            }
        };

        // Close Button
        this.btnClose = new PushButton(this);
        this.btnClose.text = "Close";
        this.btnClose.onClick = () => {
            this.ok();
        };

        // Button Sizer
        const buttonSizer = new HorizontalSizer();
        buttonSizer.spacing = 8;
        buttonSizer.addStretch();
        buttonSizer.add(this.btnExecute);
        buttonSizer.add(this.btnClose);

        // Main Layout Sizer
        const mainSizer = new VerticalSizer();
        mainSizer.margin = 12;
        mainSizer.spacing = 10;
        mainSizer.add(this.labelTitle);
        mainSizer.add(this.labelInfo);
        mainSizer.addSpacing(8);
        mainSizer.add(buttonSizer);

        this.sizer = mainSizer;
        this.adjustToContents();
    }
}

function launchInteractiveDialog(): void {
    Console.show();
    const dialog = new SampleConfigDialog();
    dialog.execute();
}

launchInteractiveDialog();
