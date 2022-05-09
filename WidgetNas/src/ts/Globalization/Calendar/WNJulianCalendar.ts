class wnJulianCalendar implements wnCalendar {
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
        let FirstWeekDay = this.GetDayOfWeek(Year, 1, 1);
        let dayDiff = this.GetDayOfYear(Year, Month, Day);
        dayDiff += FirstWeekDay;
        let weekNr = Math.ceil(dayDiff / 7);
        return weekNr;
    }
    IsLeapDay(Year: number, Month: number, Day: number): boolean {
        return this.IsLeapMonth(Year, Month) && Day === 29;
    }
    IsLeapMonth(Year: number, Month: number): boolean { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year: number): boolean {
        return WNmod(Year, 4) == ((Year > 0) ? 0 : 3)
    }
    GetMonthsDays(mLeapYear: boolean) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    GetDaysFromBase(Year: number, Month: number, Day: number): number {
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
    GetYearMontDayFromDays(jd: number): { Year: number, Month: number, Day: number } {
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

        return { Year: year, Month: month, Day: day };
    }
}