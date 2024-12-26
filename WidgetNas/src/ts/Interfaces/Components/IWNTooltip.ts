interface IWNTooltip extends IWNComponent {
    target: HTMLElement;
    delay: number;
    hideAfter: number;
    tooltipClass: string;
    events: string;
    lostEvents: string;
    autoShow(): void;
    show(): void;
    hide(): void
}