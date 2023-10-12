interface IWNTime extends IWNComponent {
    date: IWNDate;
    nativeDigit: boolean;
    displayFormat: string;
    valueElement: HTMLElement;
    inputFormat: string;
    hourLongStep: number;
    minuteLongStep: number;
    value: Date;
    setHour(value: number):void;
    setMinute(value: number): void;
    setSecond(value: number): void;
}