/**
 * src/lib/ui.ts
 * 
 * Reusable PJSR User Interface Library.
 * Provides standard dialog wrappers, message boxes, and layout helpers.
 */

/**
 * Displays a standardized Information MessageBox.
 */
export function showInfo(title: string, message: string): void {
    const msg = new MessageBox(message, title, StdIcon.Information, StdButton.Ok);
    msg.execute();
}

/**
 * Displays a standardized Warning MessageBox.
 */
export function showWarning(title: string, message: string): void {
    const msg = new MessageBox(message, title, StdIcon.Warning, StdButton.Ok);
    msg.execute();
}

/**
 * Displays a standardized Error/Critical MessageBox.
 */
export function showError(title: string, message: string): void {
    const msg = new MessageBox(message, title, StdIcon.Error, StdButton.Ok);
    msg.execute();
}

/**
 * Prompts the user for confirmation (Yes / No).
 * @returns true if user clicked Yes, false otherwise.
 */
export function askConfirmation(title: string, message: string): boolean {
    const msg = new MessageBox(message, title, StdIcon.Question, StdButton.Yes, StdButton.No);
    return msg.execute() === StdButton.Yes;
}

/**
 * Reusable Base Dialog class providing header, content area, and standard action buttons.
 */
export class BaseDialog extends Dialog {
    protected titleLabel: Label;
    protected descriptionLabel: Label;
    protected btnExecute: PushButton;
    protected btnCancel: PushButton;
    protected contentSizer: VerticalSizer;
    protected buttonSizer: HorizontalSizer;

    constructor(windowTitle: string, description?: string) {
        super();

        this.windowTitle = windowTitle;

        // Title Header
        this.titleLabel = new Label(this);
        this.titleLabel.text = `<b>${windowTitle}</b>`;
        this.titleLabel.useRichText = true;

        // Optional Description
        this.descriptionLabel = new Label(this);
        if (description) {
            this.descriptionLabel.text = description;
            this.descriptionLabel.useRichText = true;
        }

        // Action Buttons
        this.btnExecute = new PushButton(this);
        this.btnExecute.text = "Execute";
        this.btnExecute.defaultButton = true;
        this.btnExecute.onClick = () => this.handleExecution();

        this.btnCancel = new PushButton(this);
        this.btnCancel.text = "Cancel";
        this.btnCancel.onClick = () => this.cancel();

        // Button Layout
        this.buttonSizer = new HorizontalSizer();
        this.buttonSizer.spacing = 8;
        this.buttonSizer.addStretch();
        this.buttonSizer.add(this.btnExecute);
        this.buttonSizer.add(this.btnCancel);

        // Content Area (Subclasses add their controls here)
        this.contentSizer = new VerticalSizer();
        this.contentSizer.spacing = 8;

        // Main Layout
        const mainSizer = new VerticalSizer();
        mainSizer.margin = 12;
        mainSizer.spacing = 10;
        mainSizer.add(this.titleLabel);
        if (description) {
            mainSizer.add(this.descriptionLabel);
        }
        mainSizer.addSpacing(4);
        mainSizer.add(this.contentSizer);
        mainSizer.addSpacing(10);
        mainSizer.add(this.buttonSizer);

        this.sizer = mainSizer;
    }

    /**
     * Override in subclass to handle execution logic.
     */
    protected handleExecution(): void {
        this.ok();
    }
}
