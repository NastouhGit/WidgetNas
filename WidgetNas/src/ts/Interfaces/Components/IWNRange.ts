interface IWNRange extends IWNComponent {
    min: number;
    max: number;
    count: number;
    step: number;
    tooltip: string;
    format: string;
    unit: string;
    value: string;
    values: number[];

    refresh(): void;
    change: (t: IWNRange) => void;
}