class WNJulianCalendar implements IWNCalendar {
    readonly localeName: string = "julian";
    readonly leapMonth: number = 2;
    readonly monthsInYear: number = 12;

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
        let FirstWeekDay = this.getDayOfWeek(Year, 1, 1);
        let dayDiff = this.getDayOfYear(Year, Month, Day);
        dayDiff += FirstWeekDay;
        let weekNr = Math.ceil(dayDiff / 7);
        return weekNr;
    }
    isLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.isLeapMonth(Year, Month) && Day === 29;
    }
    isLeapMonth(Year: number, Month: number): boolean { return this.isLeapYear(Year) && Month === this.leapMonth; }
    isLeapYear(Year: number): boolean {
        return WNmod(Year, 4) == ((Year > 0) ? 0 : 3)
    }
    getMonthsDays(mLeapYear: boolean) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    getDaysFromBase(Year: number, Month: number, Day: number): number {
        /* Adjust negative common era years to the zero-based notation we use.  */

        if (Year < 1) {
            Year++;
        }

        /* Algorithm as given in Meeus, Astronomical Algorithms, Chapter 7, page 61 */

        if (Month <= 2) {
            Year--;
            Month += 12;
        }

        return ((Math.floor((365.25 * (Year + 4716))) +
            Math.floor((30.6001 * (Month + 1))) +
            Day) - 1524.5);
    }
    getYearMontDayFromDays(jd: number): { year: number, month: number, day: number } {
        let a, b, c, d, e, year, month, day;

        jd += 0.5;
        a = Math.floor(jd);
        b = a + 1524;
        c = Math.floor((b - 122.1) / 365.25);
        d = Math.floor(365.25 * c);
        e = Math.floor((b - d) / 30.6001);

        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
        day = b - d - Math.floor(30.6001 * e);

        /*  If year is less than 1, subtract one to convert from
            a zero based date system to the common era system in
            which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */

        if (year < 1) {
            year--;
        }

        return { year: year, month: month, day: day };
    }
}