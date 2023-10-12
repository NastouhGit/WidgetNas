interface IWNCollapse extends IWNComponent {
    element: HTMLElement;
    target: string;
    remove: string;
    targetMode: targetModeEnum;

    beforecollapse: (t) => boolean;
    aftercollapse: (t) => void;
    collapse(): void;
}
type targetModeEnum = "toggle" | "show" | "hide";
