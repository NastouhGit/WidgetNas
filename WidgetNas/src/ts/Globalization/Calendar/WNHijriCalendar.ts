class wnHijriCalendar implements wnCalendar {
    private ISLAMIC_EPOCH = 1948439.5;
    HijriAdjustment = WNDefaultHijriAdjustment;
    LeapMonth: number = 12;
    MonthsInYear: number = 12;
    constructor() {
    }

    GetDayOfWeek(Year: number, Month: number, Day: number): number {
        return WNmod(Math.floor((this.GetDaysFromBase(Year, Month, Day) + 1.5 - this.HijriAdjustment)), 7);
    }
    GetDayOfYear(Year: number, Month: number, Day: number): number {
        return this.GetDaysFromBase(Year, Month, Day) - this.GetDaysFromBase(Year, 1, 1);
    }
    GetDaysInMonth(Year: number, Month: number): number {
        return this.GetMonthsDays(this.IsLeapYear(Year))[Month - 1];
    }
    GetDaysInYear(Year: number): number { return this.IsLeapYear(Year) ? 355 : 354; }
    GetWeekOfYear(Year: number, Month: number, Day: number): number {
        let dayDiff = this.GetDayOfYear(Year, Month, Day) + this.GetDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    IsLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.IsLeapMonth(Year, Month) && Day === 30;
    }
    IsLeapMonth(Year: number, Month: number): boolean { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year: number): boolean {
        return (((Year * 11) + 14) % 30) < 11;
    }
    GetDaysFromBase(Year: number, Month: number, Day: number): number {
        return (Day +
            Math.ceil(29.5 * (Month - 1)) +
            (Year - 1) * 354 +
            Math.floor((3 + (11 * Year)) / 30) +
            this.ISLAMIC_EPOCH) - 1;
    }

    GetYearMontDayFromDays(jd: number): { Year: number, Month: number, Day: number } {
        let year, month, day;

        jd = Math.floor(jd) + 0.5 + this.HijriAdjustment;
        year = Math.floor(((30 * (jd - this.ISLAMIC_EPOCH)) + 10646) / 10631);
        month = Math.min(12,
            Math.ceil((jd - (29 + this.GetDaysFromBase(year, 1, 1))) / 29.5) + 1);
        day = (jd - this.GetDaysFromBase(year, month, 1)) + 1;

        return { Year: year, Month: month, Day: day };
    }
    GetMonthsDays(mLeapYear: boolean) {
        return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, mLeapYear ? 30 : 29, 0];
    }
}