interface IWNDateShow extends IWNComponent {
    element: HTMLElement;
    format: string;
    today: boolean;
    date: IWNDate;
    value: Date;
    refresh(): void;
}