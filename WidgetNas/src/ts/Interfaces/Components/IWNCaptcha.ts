interface IWNCaptcha extends IWNComponent {
    readonly value: { key: string, value: string };
    refresh(): Promise<void> | void;
    validate(): Promise<boolean> | boolean;
}