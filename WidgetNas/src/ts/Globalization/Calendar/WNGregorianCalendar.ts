class WNGregorianCalendar implements IWNCalendar {
    readonly leapMonth: number = 2;
    readonly monthsInYear: number = 12;
    readonly localeName: string = "gregory";

    private GREGORIAN_EPOCH = 1721425.5;
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
        return (this.GREGORIAN_EPOCH - 1) +
            (365 * (Year - 1)) +
            Math.floor((Year - 1) / 4) +
            (-Math.floor((Year - 1) / 100)) +
            Math.floor((Year - 1) / 400) +
            Math.floor((((367 * Month) - 362) / 12) +
                ((Month <= 2) ? 0 :
                    (this.isLeapYear(Year) ? -1 : -2)
                ) +
                Day);
    }
    getYearMontDayFromDays(jd: number): { year: number, month: number, day: number } {
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
        yearday = wjd - this.getDaysFromBase(year, 1, 1);
        leapadj = ((wjd < this.getDaysFromBase(year, 3, 1)) ? 0
            :
            (this.isLeapYear(year) ? 1 : 2)
        );
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - this.getDaysFromBase(year, month, 1)) + 1;

        return { year: year, month: month, day: day };
    }
}