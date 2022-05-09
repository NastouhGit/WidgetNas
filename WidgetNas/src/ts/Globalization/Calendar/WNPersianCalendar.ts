class wnPersianCalendar implements wnCalendar {
    private PERSIAN_EPOCH: number = 1948320.5;

    LeapMonth: number = 12;
    MonthsInYear: number = 12;
    constructor() {
    }

    GetDayOfWeek(Year: number, Month: number, Day: number): number {
        return WNmod(Math.floor((this.GetDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    GetDayOfYear(Year: number, Month: number, Day: number): number {
        return this.GetDaysFromBase(Year, Month, Day) - this.GetDaysFromBase(Year, 1, 1);
    }
    GetDaysInMonth(Year: number, Month: number): number {
        return this.GetMonthsDays(this.IsLeapYear(Year))[Month - 1];
    }
    GetDaysInYear(Year: number): number { return this.IsLeapYear(Year) ? 366 : 365; }
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
        return ((((((Year - ((Year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }
    GetDaysFromBase(Year: number, Month: number, Day: number): number {
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

    GetYearMontDayFromDays(jd: number): { Year: number, Month: number, Day: number } {
        let year, month, day, depoch, cycle, cyear, ycycle,
            aux1, aux2, yday;

        jd = Math.floor(jd) + 0.5;

        depoch = jd - this.GetDaysFromBase(475, 1, 1);
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
        yday = (jd - this.GetDaysFromBase(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.GetDaysFromBase(year, month, 1)) + 1;

        return { Year: year, Month: month, Day: day };
    }
    GetMonthsDays(mLeapYear: boolean) {
        return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, mLeapYear ? 30 : 29, 0];
    }
}