interface IWNDate {
    dateChanged: (t?: IWNDate) => void;

    cultureInfo: IWNCultureInfo;
    calendar: IWNCalendar;
    addDays(value: number): void;
    addHours(value: number): void;
    addMilliseconds(value: number): void;
    addMinutes(value: number): void;
    addMonths(value: number): void;
    addSeconds(value: number): void;
    addYears(value: number): void;
    addWeeks(value: number): void;

    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    milliseconds: number;
    readonly dayOfWeek: number;

    readonly dayOfYear: number;
    readonly daysInMonth: number;
    readonly daysInYear: number;
    readonly isLeapYear: boolean;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    readonly isLeapMonth: boolean;
    readonly isLeapDay: boolean;
    readonly weekOfYear: number;

    setDate(date: Date): void;
    setUTCDate(date: any): void;
    setDateYMD(Year: number, Month: number, Day: number, Hour: number, Minute: number, Second: number, Millisecond: number): void;
    setYMD(Year: number, Month: number, Day: number, Hour: number, Minute: number, Second: number, Millisecond: number): void;
    setDateNumber(jd: number): void;
    setDateString(s: string): void
    set(value: IWNDate): void;
    value(value: any): number;

    toDateTime(): Date;
    toNumber(): number;
    toNumberDate(): number;
    toNumberYMD(Year: number, Month: number, Day: number): number;
    toString(format?: string, nativeDigit?: boolean);
    toLongDateString(nativeDigit?: boolean): string;
    toShortDateString(nativeDigit?: boolean): string;
    toLongTimeString(nativeDigit?: boolean): string;
    toShortTimeString(nativeDigit?: boolean): string;
    convert(value: any, format?: string, nativeDigit?: boolean): string;

    lessThan(rhs: IWNDate): boolean;
    lessThanEqual(rhs: IWNDate): boolean;
    greaterThan(rhs: IWNDate): boolean;
    greaterThanEqual(rhs: IWNDate): boolean;
    equal(rhs: IWNDate): boolean;
    notEqual(rhs: IWNDate): boolean;
    lessThanExact(rhs: IWNDate): boolean;
    lessThanEqualExact(rhs: IWNDate): boolean;
    greaterThanExact(rhs: IWNDate): boolean;
    greaterThanEqualExact(rhs: IWNDate): boolean;
    equalExact(rhs: IWNDate): boolean;
    notEqualExact(rhs: IWNDate): boolean;
}