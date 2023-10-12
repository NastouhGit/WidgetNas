interface IWNMonthCalendar extends IWNComponent {
    element: HTMLElement;

    nativeDigit: boolean;

    date: IWNDate;
    secondDate: IWNDate;
    dateRange: boolean;
    onlyMonthYear: boolean;
    allowComment: boolean;
    allowDateHoliday: boolean;
    comment: WNDictionary;
    noCommonComment: boolean;
    autoClosePopup: boolean;

    viewCount: number;
    displayFormat: string;

    selectionChanged: (t: IWNMonthCalendar) => void;
}
type WNDictionary = { [id: string]: any; };