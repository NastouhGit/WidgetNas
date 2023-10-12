interface IWNTooltip extends IWNComponent {
    delay: number;
    hideAfter: number;
    tooltipClass: string;
    events: string;
    lostEvents: string;
    show(): void;
    hide(): void
}