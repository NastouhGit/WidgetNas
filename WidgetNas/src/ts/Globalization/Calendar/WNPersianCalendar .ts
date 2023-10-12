class WNPersianCalendar implements IWNCalendar {
    readonly localeName: string = "persian";
    readonly leapMonth: number = 12;
    readonly monthsInYear: number = 12;

    private PERSIAN_EPOCH: number = 1948320.5;
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
        let dayDiff = this.getDayOfYear(Year, Month, Day) + this.getDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    isLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.isLeapMonth(Year, Month) && Day === 30;
    }
    isLeapMonth(Year: number, Month: number): boolean { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year: number): boolean {
        return ((((((Year - ((Year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }
    getDaysFromBase(Year: number, Month: number, Day: number): number {
        let epbase, epyear;

        epbase = Year - ((Year >= 0) ? 474 : 473);
        epyear = 474 + WNmod(epbase, 2820);

        return Day +
            ((Month <= 7) ?
                ((Month - 1) * 31) :
                (((Month - 1) * 30) + 6)
            ) +
            Math.floor(((epyear * 682) - 110) / 2816) +
            (epyear - 1) * 365 +
            Math.floor(epbase / 2820) * 1029983 +
            (this.PERSIAN_EPOCH - 1);
    }
    getYearMontDayFromDays(jd: number): { year: number, month: number, day: number } {
        let year, month, day, depoch, cycle, cyear, ycycle,
            aux1, aux2, yday;

        jd = Math.floor(jd) + 0.5;

        depoch = jd - this.getDaysFromBase(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = WNmod(depoch, 1029983);
        if (cyear == 1029982) {
            ycycle = 2820;
        } else {
            aux1 = Math.floor(cyear / 366);
            aux2 = WNmod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
                aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if (year <= 0) {
            year--;
        }
        yday = (jd - this.getDaysFromBase(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.getDaysFromBase(year, month, 1)) + 1;

        return { year: year, month: month, day: day };
    }
    getMonthsDays(mLeapYear: boolean) {
        return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, mLeapYear ? 30 : 29, 0];
    }
}