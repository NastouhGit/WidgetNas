class WNHijriCalendar implements IWNCalendar {
    readonly localeName: string = "islamic";
    readonly leapMonth: number = 12;
    readonly monthsInYear: number = 12;
    readonly hijriAdjustment = wnConfig.hijriAdjustment;
    private ISLAMIC_EPOCH = 1948439.5;
    ["constructor"](): IWNCalendar {
        return this as IWNCalendar;
    }
    constructor() {
        
    }
    getDayOfWeek(Year: number, Month: number, Day: number): number {
        return WNmod(Math.floor((this.getDaysFromBase(Year, Month, Day) + 1.5 - this.hijriAdjustment)), 7);
    }
    getDayOfYear(Year: number, Month: number, Day: number): number {
        return this.getDaysFromBase(Year, Month, Day) - this.getDaysFromBase(Year, 1, 1);
    }
    getDaysInMonth(Year: number, Month: number): number {
        return this.getMonthsDays(this.isLeapYear(Year))[Month - 1];
    }
    getDaysInYear(Year: number): number { return this.isLeapYear(Year) ? 355 : 354; }
    getWeekOfYear(Year: number, Month: number, Day: number): number {
        let dayDiff = this.getDayOfYear(Year, Month, Day) + this.getDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    isLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.isLeapMonth(Year, Month) && Day === 30;
    }
    isLeapMonth(Year: number, Month: number): boolean { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year: number): boolean {
        return (((Year * 11) + 14) % 30) < 11;
    }
    getDaysFromBase(Year: number, Month: number, Day: number): number {
        return (Day +
            Math.ceil(29.5 * (Month - 1)) +
            (Year - 1) * 354 +
            Math.floor((3 + (11 * Year)) / 30) +
            this.ISLAMIC_EPOCH) - 1;
    }

    getYearMonthDayFromDays(jd: number): { year: number, month: number, day: number } {
        let year, month, day;

        jd = Math.floor(jd) + 0.5 + this.hijriAdjustment;
        year = Math.floor(((30 * (jd - this.ISLAMIC_EPOCH)) + 10646) / 10631);
        month = Math.min(12,
            Math.ceil((jd - (29 + this.getDaysFromBase(year, 1, 1))) / 29.5) + 1);
        day = (jd - this.getDaysFromBase(year, month, 1)) + 1;
        return { year: year, month: month, day: day };
    }
    getMonthsDays(mLeapYear: boolean) {
        return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, mLeapYear ? 30 : 29, 0];
    }
}