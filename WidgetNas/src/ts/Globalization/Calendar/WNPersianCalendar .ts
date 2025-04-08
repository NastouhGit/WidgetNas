class WNPersianCalendar implements IWNCalendar {
    readonly localeName: string = "persian";
    readonly leapMonth: number = 12;
    readonly monthsInYear: number = 12;

    private baseCalendar = new WNCalendarBase();

    getDayOfWeek(Year: number, Month: number, Day: number): number {
        return WNmod(Math.floor((this.persian_to_jd(Year, Month, Day) + 1.5+0.5)), 7);
    }
    getDayOfYear(Year: number, Month: number, Day: number): number {
        return this.persian_to_jd(Year, Month, Day) - this.persian_to_jd(Year, 1, 1);
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
        return (this.persian_to_jd(Year + 1, 1, 1) -
            this.persian_to_jd(Year, 1, 1)) > 365;

    }

    private persiana_year(jd) {
        var guess = this.baseCalendar.jd_to_gregorian(jd)[0] - 2,
            lasteq, nexteq, adr;

        lasteq = this.tehran_equinox_jd(guess);
        while (lasteq > jd) {
            guess--;
            lasteq = this.tehran_equinox_jd(guess);
        }
        nexteq = lasteq - 1;
        while (!((lasteq <= jd) && (jd < nexteq))) {
            lasteq = nexteq;
            guess++;
            nexteq = this.tehran_equinox_jd(guess);
        }
        adr = Math.round((lasteq - this.baseCalendar.PERSIAN_EPOCH) / this.baseCalendar.TropicalYear) + 1;

        return new Array(adr, lasteq);
    }
    private tehran_equinox_jd(year) {
        var ep, epg;

        var equJED, equJD, equAPP, dtTehran;

        equJED = this.baseCalendar.equinox(year, 0);

        equJD = equJED - (this.baseCalendar.deltat(year) / (24 * 60 * 60));

        equAPP = equJD + this.baseCalendar.equationOfTime(equJED);

        dtTehran = (52 + (30 / 60.0) + (0 / (60.0 * 60.0))) / 360;
        ep = equAPP + dtTehran;

        epg = Math.floor(ep);

        return epg;
    }
    private persian_to_jd(Year: number, Month: number, Day: number):number {
        var adr, equinox, guess, jd;

        guess = (this.baseCalendar.PERSIAN_EPOCH - 1) + (this.baseCalendar.TropicalYear * ((Year - 1) - 1));
        adr = new Array(Year - 1, 0);

        while (adr[0] < Year) {
            adr = this.persiana_year(guess);
            guess = adr[1] + (this.baseCalendar.TropicalYear + 2);
        }
        equinox = adr[1];

        jd = equinox +
            ((Month <= 7) ?
                ((Month - 1) * 31) :
                (((Month - 1) * 30) + 6)
            ) +
            (Day - 1);
        return jd;
    }
    getDaysFromBase(Year: number, Month: number, Day: number): number {
        return this.persian_to_jd(Year, Month,Day)+0.5;

    }
    getYearMonthDayFromDays(jd: number): { year: number, month: number, day: number } {
        var year, month, day,
            adr, equinox, yday;

        jd = Math.floor(jd) + 0.5;
        adr = this.persiana_year(jd);
        year = adr[0];
        equinox = adr[1];
        day = Math.floor((jd - equinox) / 30) + 1;

        yday = (Math.floor(jd) - this.persian_to_jd(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (Math.floor(jd) - this.persian_to_jd(year, month, 1)) + 1;
        return { year: year, month: month, day: day };

    }
    getMonthsDays(mLeapYear: boolean) {
        return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, mLeapYear ? 30 : 29, 0];
    }
}