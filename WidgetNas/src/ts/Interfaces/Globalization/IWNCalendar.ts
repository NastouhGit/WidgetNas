interface IWNCalendar {
    readonly localeName: string;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    getDayOfWeek(Year: number, Month: number, Day: number): number;
    getDayOfYear(Year: number, Month: number, Day: number): number;
    getDaysInMonth(Year: number, Month: number): number;
    getDaysInYear(Year: number): number;
    getWeekOfYear(Year: number, Month: number, Day: number): number;
    getDaysFromBase(Year: number, Month: number, Day: number): number;
    getYearMonthDayFromDays(mNum: number): { year: number, month: number, day: number };
    isLeapDay(Year: number, Month: number, Day: number): boolean;
    isLeapMonth(Year: number, Month: number): boolean;
    isLeapYear(Year: number): boolean;
}