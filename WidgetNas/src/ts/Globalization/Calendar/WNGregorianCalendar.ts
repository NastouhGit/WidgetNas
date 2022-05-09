class wnGregorianCalendar implements wnCalendar {
    private GREGORIAN_EPOCH = 1721425.5;
    LeapMonth: number = 2;
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
        let dayDiff = this.GetDayOfYear(Year, Month, Day) + this.GetDayOfWeek(Year, 1, 1);
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    IsLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.IsLeapMonth(Year, Month) && Day === 29;
    }
    IsLeapMonth(Year: number, Month: number): boolean { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year: number): boolean {
        return ((Year % 4) == 0) &&
            (!(((Year % 100) == 0) && ((Year % 400) != 0)));
    }
    GetMonthsDays(mLeapYear: boolean) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    GetDaysFromBase(Year: number, Month: number, Day: number): number {
        return (this.GREGORIAN_EPOCH - 1) +
            (365 * (Year - 1)) +
            Math.floor((Year - 1) / 4) +
            (-Math.floor((Year - 1) / 100)) +
            Math.floor((Year - 1) / 400) +
            Math.floor((((367 * Month) - 362) / 12) +
                ((Month <= 2) ? 0 :
                    (this.IsLeapYear(Year) ? -1 : -2)
                ) +
                Day);
    }
    GetYearMontDayFromDays(jd: number): { Year: number, Month: number, Day: number } {
        let wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,
            yindex, year, yearday, leapadj, month, day;

        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = WNmod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = WNmod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = WNmod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        yearday = wjd - this.GetDaysFromBase(year, 1, 1);
        leapadj = ((wjd < this.GetDaysFromBase(year, 3, 1)) ? 0
            :
            (this.IsLeapYear(year) ? 1 : 2)
        );
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - this.GetDaysFromBase(year, month, 1)) + 1;

        return { Year: year, Month: month, Day: day };
    }
}