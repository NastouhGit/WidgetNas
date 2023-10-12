interface IWNConfig {
    nativeDigit: boolean;
    calendar: IWNCalendar;
    cultureInfo: IWNCultureInfo;
    locale: Intl.Locale;
    dateTimeFormat: Intl.DateTimeFormat;
    numberFormat: Intl.NumberFormat;
    hijriAdjustment: number;
    language: {};
    authorizationToken: string;
    baseFetchUri: string;
}