interface IWNToast extends IWNComponent {
    timeout: number;
    beforeHide: (t: IWNToast) => boolean | Promise<boolean>;
    show(): void;
    toggle(): void;
    hide(): void;
}