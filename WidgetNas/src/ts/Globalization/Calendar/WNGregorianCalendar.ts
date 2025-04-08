class WNGregorianCalendar implements IWNCalendar {
    readonly leapMonth: number = 2;
    readonly monthsInYear: number = 12;
    readonly localeName: string = "gregory";
    private baseCalendar = new WNCalendarBase();
    ["constructor"](): IWNCalendar {
        return this as IWNCalendar;
    }

    getDayOfWeek(Year: number, Month: number, Day: number): number {
        return WNmod(Math.floor((this.getDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    getDayOfYear(Year: number, Month: number, Day: number): number {
        return this.getDaysFromBase(Year, Month, Day) - this.getDaysFromBase(Year, 1, 1);
    }
    getDaysInMonth(Year: number, Month: number): number {
        return this.getMonthsDays(this.isLeapYear(Year))[Month - 1];
    }
    getDaysInYear(Year: number): number { return this.isLeapYear(Year) ? 366 : 365; }
    getWeekOfYear(Year: number, Month: number, Day: number): number {
        let dayDiff = this.getDayOfYear(Year, Month, Day) + this.getDayOfWeek(Year, 1, 1);
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    isLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.isLeapMonth(Year, Month) && Day === 29;
    }
    isLeapMonth(Year: number, Month: number): boolean { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year: number): boolean {
        return ((Year % 4) == 0) &&
            (!(((Year % 100) == 0) && ((Year % 400) != 0)));
    }
    getMonthsDays(mLeapYear: boolean) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    getDaysFromBase(Year: number, Month: number, Day: number): number {
        return this.baseCalendar.gregorian_to_jd(Year, Month, Day);

    }
    getYearMonthDayFromDays(jd: number): { year: number, month: number, day: number } {
        let r = this.baseCalendar.jd_to_gregorian(jd);
        return { year: r[0], month: r[1], day: r[2] };
        
    }
}