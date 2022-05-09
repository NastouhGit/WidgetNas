class wnDate {
    private _Year: number;
    private _Month: number;
    private _Day: number;
    private _Hour: number;
    private _Minute: number;
    private _Second: number;
    private _Millisecond: number;
    private _DayOfWeek: number;

    DateChanged?: { (): void; }

    private GregorianCalnedar: wnCalendar = new wnGregorianCalendar();

    CultureInfo: wnCultureInfo;
    Calendar: wnCalendar;
    constructor(lCultureInfo?: wnCultureInfo | wnDate, lCalendar?: wnCalendar, lDate?: Date) {
        this._Year = 0;
        this._Month = 0;
        this._Day = 0;
        this._Hour = 0;
        this._Minute = 0;
        this._Second = 0;
        this._Millisecond = 0;
        this._DayOfWeek = 0;
        this.DateChanged = undefined;

        if (lCultureInfo != undefined && (lCultureInfo as wnDate).Calendar != undefined) {
            let Template = lCultureInfo as wnDate;
            this.CultureInfo = Template.CultureInfo;
            this.Calendar = Template.Calendar;
            this.SetDateNumber(Template.ToNumber());
        }
        else {
            if (!lCultureInfo)
                lCultureInfo = WNDefaultCultureInfo || new wnCultureInfo_en_US();

            if (!lCalendar)
                lCalendar = WNDefaultCalendar || new wnGregorianCalendar();

            this.CultureInfo = lCultureInfo as wnCultureInfo;
            this.Calendar = lCalendar;
            if (lDate != null)
                this.SetDate(lDate);
        }
    }
    AddDays(value: number) { this._Day += value; this.FixedDate(); }
    AddHours(value: number) { this._Hour += value; this.FixedDate(); }
    AddMilliseconds(value: number) { this._Millisecond += value; this.FixedDate(); }
    AddMinutes(value: number) { this._Minute += value; this.FixedDate(); }
    AddMonths(value: number) { this._Month += value; this.FixedDate(); }
    AddSeconds(value: number) { this._Second += value; this.FixedDate(); }
    AddYears(value: number) { this._Year += value; this.FixedDate(); }
    AddWeeks(value: number) { this.AddDays(value * 7); this.FixedDate(); }

    set Year(value: number) { this._Year = value; this.FixedDate(); }
    get Year() { return this._Year }
    set Month(value: number) { this._Month = value; this.FixedDate(); }
    get Month() { return this._Month }
    set Day(value: number) { this._Day = value; this.FixedDate(); }
    get Day() { return this._Day }

    set Hour(value: number) { this._Hour = value; this.FixedDate(); }
    get Hour() { return this._Hour }
    set Minute(value: number) { this._Minute = value; this.FixedDate(); }
    get Minute() { return this._Minute }
    set Second(value: number) { this._Second = value; this.FixedDate(); }
    get Second() { return this._Second }
    set Milliseconds(value: number) { this._Millisecond = value; this.FixedDate(); }
    get Milliseconds() { return this._Millisecond }

    get DayOfWeek() { return this._DayOfWeek; }

    get DayOfYear() { return this.Calendar.GetDayOfYear(this._Year, this._Month, this._Day); }
    get DaysInMonth() { return this.Calendar.GetDaysInMonth(this._Year, this._Month); }
    get DaysInYear() { return this.Calendar.GetDaysInYear(this._Year); }
    get IsLeapYear() { return this.Calendar.IsLeapYear(this._Year); }
    get LeapMonth() { return this.Calendar.LeapMonth; }
    get MonthsInYear() { return this.Calendar.MonthsInYear; }
    get IsLeapMonth() { return this.Calendar.IsLeapMonth(this._Year, this._Month); }
    get IsLeapDay() { return this.Calendar.IsLeapDay(this._Year, this._Month, this._Day); }
    get WeekOfYear() { return this.Calendar.GetWeekOfYear(this._Year, this._Month, this._Day); }

    SetDate(date: Date) {
        if (date == undefined || isNaN(date.getTime())) {
            this.SetDateNumber(undefined);
            return;
        }

        //Date Month Start From Zero
        let days = this.GregorianCalnedar.GetDaysFromBase(date.getFullYear(), date.getMonth() + 1, date.getDate());
        let ret = this.Calendar.GetYearMontDayFromDays(days);

        this._Year = ret.Year;
        this._Month = ret.Month;
        this._Day = ret.Day;
        this._Hour = date.getHours();
        this._Minute = date.getMinutes();
        this._Second = date.getSeconds();
        this._Millisecond = date.getMilliseconds();
        this._DayOfWeek = this.Calendar.GetDayOfWeek(this._Year, this._Month, this._Day);

        if (this.DateChanged != undefined) this.DateChanged();
    }
    SetDateYMD(Year: number, Month: number, Day: number, Hour: number = 0, Minute: number = 0, Second: number = 0, Millisecond: number = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
        this.FixedDate();
    }
    SetYMD(Year: number, Month: number, Day: number, Hour: number = 0, Minute: number = 0, Second: number = 0, Millisecond: number = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
        //Do not raise event and fixed date
    }
    SetDateNumber(jd: number) {
        if (jd === undefined) {
            this._Year = 0;
            this._Month = 0;
            this._Day = 0;
            this._Hour = 0;
            this._Minute = 0;
            this._Second = 0;
            this._Millisecond = 0;
            this._DayOfWeek = 0;
            if (this.DateChanged != undefined) this.DateChanged();
            return;
        }
        let ret = this.Calendar.GetYearMontDayFromDays(jd);
        this._Year = ret.Year;
        this._Month = ret.Month;
        this._Day = ret.Day;
        jd -= 0.5; /* Astronomical to civil */
        let ij = (jd - Math.floor(jd)) * 1000000000;
        this._Hour = Math.floor(ij / 3600000);
        ij = ij % 3600000;
        this._Minute = Math.floor(ij / 60000);
        ij = ij % 60000;
        this._Second = Math.floor(ij / 1000);
        this._Millisecond = Math.round(ij % 1000);
        this._DayOfWeek = this.Calendar.GetDayOfWeek(this._Year, this._Month, this._Day);
        if (this.DateChanged != undefined) this.DateChanged();
    }
    SetDateString(s: string) {
        if (s == undefined) {
            this.SetDateNumber(undefined);
            return;
        }
        let Year = 0;
        let Month = 0;
        let Day = 0;
        let Hour = 0;
        let Minute = 0;
        let Second = 0;
        let Millisecond = 0;

        s = decodeURIComponent(s).trim();
        let d = s.match(/(\d+)/ig);
        if (d != null) {
            if (d.length < 4 && s.indexOf(this.CultureInfo.DateTimeFormat.TimeSeparator) > -1) {
                if (d.length>0)
                    Hour = parseInt(d[0]);
                if (d.length > 1)
                    Minute = parseInt(d[1]);
                if (d.length > 2)
                    Second = parseInt(d[2]);
            }
            else {
                if (d.length > 2) {
                    Year = parseInt(d[0]);
                    Month = parseInt(d[1]);
                    Day = parseInt(d[2]);
                }
                if (d.length > 4) {
                    Hour = parseInt(d[3]);
                    Minute = parseInt(d[4]);
                }
                if (d.length > 5) {
                    Second = parseInt(d[5]);
                }
                if (d.length > 6) {
                    Millisecond = parseInt(d[6]);
                }
            }
            if (s.indexOf(this.CultureInfo.DateTimeFormat.PMDesignator) > -1 && Hour < 13)
                Hour += 12;
        }
        if (Day > 31 && Year < Day) {
            [Year, Day] = [Day, Year];
        }
        this.SetDateYMD(Year, Month, Day, Hour, Minute, Second, Millisecond);
    }
    Set(value: wnDate) {
        if (this.Calendar == value.Calendar) {
            this.SetDateYMD(value.Year, value.Month, value.Day, value.Hour, value.Minute, value.Second, value.Milliseconds);
        }
        else
            this.SetDateNumber(value.ToNumber());
    }
    set Value(value: any) {
        if (value == undefined)
            this.SetDateNumber(undefined);
        else if (typeof (value) == 'number')
            this.SetDateNumber(value);
        else if (typeof (value) == 'object' && value.getDate != undefined)
            this.SetDate(value);
        else if (typeof (value) == 'object' && value.ToNumber != undefined)
            this.Set(value);
        else if (typeof (value) == 'string')
            this.SetDateString(value);
    }
    get Value(): any {
        return this.ToNumber();
    }

    ToDateTime(): Date {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0) return undefined;
        let days = this.Calendar.GetDaysFromBase(this._Year, this._Month, this._Day);
        let ret = this.GregorianCalnedar.GetYearMontDayFromDays(days);
        return new Date(ret.Year, ret.Month - 1, ret.Day, this._Hour, this._Minute, this._Second, this._Millisecond);
    }
    ToNumber(): number {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0) return undefined;
        let ret = this.Calendar.GetDaysFromBase(this._Year, this._Month, this._Day);
        ret += (this._Millisecond + this._Second * 1000 + this.Minute * 60000 + this.Hour * 3600000) / 1000000000;

        return ret;
    }
    ToNumberDate(): number {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0) return undefined;
        return this.Calendar.GetDaysFromBase(this._Year, this._Month, this._Day);
    }
    ToNumberYMD(Year: number, Month: number, Day: number): number {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0) return undefined;
        let ret = this.Calendar.GetDaysFromBase(Year, Month, Day);
        return ret;
    }
    toString(format: string = this.CultureInfo.DateTimeFormat.FullDateTimePattern, naitvedigit: boolean = WNDefaultNaitveDigit) {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0)
            return '';
        if (format == 'shortdatetime')
            format = this.CultureInfo.DateTimeFormat.ShortDatePattern + ' ' + this.CultureInfo.DateTimeFormat.ShortTimePattern;
        else if (format == 'shortdate')
            format = this.CultureInfo.DateTimeFormat.ShortDatePattern;
        else if (format == 'shorttime')
            format = this.CultureInfo.DateTimeFormat.ShortTimePattern;
        else if (format == 'longdatettime')
            format = this.CultureInfo.DateTimeFormat.LongDatePattern + ' ' + this.CultureInfo.DateTimeFormat.LongTimePattern;
        else if (format == 'longdate')
            format = this.CultureInfo.DateTimeFormat.LongDatePattern;
        else if (format == 'longtime')
            format = this.CultureInfo.DateTimeFormat.LongTimePattern;

        let ret = format;
        ret = ret.replace(/yyyy/g, '{u1}');
        ret = ret.replace(/yy/g, '{u2}');
        ret = ret.replace(/y/g, '{u1}');
        ret = ret.replace(/u/g, 'y');

        ret = ret.replace(/MMMM/g, '{u4}');
        ret = ret.replace(/MMM/g, '{u3}');
        ret = ret.replace(/MM/g, '{u2}');
        ret = ret.replace(/M/g, '{u1}');
        ret = ret.replace(/u/g, 'M');

        ret = ret.replace(/dddd/g, '{u4}');
        ret = ret.replace(/ddd/g, '{u3}');
        ret = ret.replace(/dd/g, '{u2}');
        ret = ret.replace(/d/g, '{u1}');
        ret = ret.replace(/u/g, 'd');

        ret = ret.replace(/hh/g, '{u2}');
        ret = ret.replace(/h/g, '{u1}');
        ret = ret.replace(/u/g, 'h');

        ret = ret.replace(/HH/g, '{u2}');
        ret = ret.replace(/H/g, '{u1}');
        ret = ret.replace(/u/g, 'H');

        ret = ret.replace(/mm/g, '{u2}');
        ret = ret.replace(/m/g, '{u1}');
        ret = ret.replace(/u/g, 'm');

        ret = ret.replace(/ss/g, '{u2}');
        ret = ret.replace(/s/g, '{u1}');
        ret = ret.replace(/u/g, 's');

        ret = ret.replace(/f/g, '{f}');
        ret = ret.replace(/tt/g, '{tt}');

        ret = ret.replace(/{y2}/g, (this._Year % 100).toString());
        ret = ret.replace(/{y1}/g, this._Year.toString());

        ret = ret.replace(/{M4}/g, (this.CultureInfo.DateTimeFormat.MonthNames[this.Calendar.constructor.name] || this.CultureInfo.DateTimeFormat.MonthNames[0])[this._Month - 1]);
        ret = ret.replace(/{M3}/g, (this.CultureInfo.DateTimeFormat.AbbreviatedMonthNames[this.Calendar.constructor.name] || this.CultureInfo.DateTimeFormat.AbbreviatedMonthNames[0])[this._Month - 1]);
        if (this._Month < 10)
            ret = ret.replace(/{M2}/g, '0' + this._Month.toString());
        else
            ret = ret.replace(/{M2}/g, this._Month.toString());
        ret = ret.replace(/{M1}/g, this._Month.toString());

        ret = ret.replace(/{d4}/g, this.CultureInfo.DateTimeFormat.DayNames[this._DayOfWeek]);
        ret = ret.replace(/{d3}/g, this.CultureInfo.DateTimeFormat.AbbreviatedDayNames[this._DayOfWeek]);
        if (this._Day < 10)
            ret = ret.replace(/{d2}/g, '0' + this._Day);
        else
            ret = ret.replace(/{d2}/g, this._Day.toString());
        ret = ret.replace(/{d1}/g, this._Day.toString());

        if (this._Hour % 12 < 10)
            ret = ret.replace(/{h2}/g, '0' + this._Hour % 12);
        else
            ret = ret.replace(/{h2}/g, (this._Hour % 12).toString());
        ret = ret.replace(/{h1}/g, (this._Hour % 12).toString());

        if (this._Hour < 10)
            ret = ret.replace(/{H2}/g, '0' + this._Hour.toString());
        else
            ret = ret.replace(/{H2}/g, this._Hour.toString());
        ret = ret.replace(/{H1}/g, this._Hour.toString());

        if (this._Minute < 10)
            ret = ret.replace(/{m2}/g, '0' + this._Minute.toString());
        else
            ret = ret.replace(/{m2}/g, this._Minute.toString());
        ret = ret.replace(/{m1}/g, this._Minute.toString());

        if (this._Second < 10)
            ret = ret.replace(/{s2}/g, '0' + this._Second.toString());
        else
            ret = ret.replace(/{s2}/g, this._Second.toString());
        ret = ret.replace(/{s1}/g, this._Second.toString());

        ret = ret.replace(/{f}/g, this._Millisecond.toString());

        if (this._Hour > 11)
            ret = ret.replace(/{tt}/g, this.CultureInfo.DateTimeFormat.PMDesignator);
        else
            ret = ret.replace(/{tt}/g, this.CultureInfo.DateTimeFormat.AMDesignator);

        ret = WNNaitveDigit(ret, this.CultureInfo, naitvedigit);
        return ret;
    }
    toLongDateString(naitvedigit: boolean = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.LongDatePattern, naitvedigit); }
    toShortDateString(naitvedigit: boolean = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.ShortDatePattern, naitvedigit); }
    toLongTimeString(naitvedigit: boolean = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.LongTimePattern, naitvedigit); }
    toShortTimeString(naitvedigit: boolean = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.ShortTimePattern, naitvedigit); }
    Convert(value: any, format: string = this.CultureInfo.DateTimeFormat.FullDateTimePattern, naitvedigit: boolean = WNDefaultNaitveDigit): string { this.Value = value; return this.toString(format, naitvedigit); }
    FixedDate() {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0)
            return;
        [this._Millisecond, this._Second] = this.LimitToRange(0, 999, this._Millisecond, this._Second);
        [this._Second, this._Minute] = this.LimitToRange(0, 59, this._Second, this._Minute);
        [this._Minute, this._Hour] = this.LimitToRange(0, 59, this._Minute, this._Hour);
        [this._Hour, this._Day] = this.LimitToRange(0, 23, this._Hour, this._Day);

        for (var i = 0; i < 2; i++) {
            [this._Month, this._Year] = this.LimitToRange(1, this.Calendar.MonthsInYear, this._Month, this._Year);
            [this._Day, this._Month] = this.LimitToRange(1, this.Calendar.GetDaysInMonth(this._Year, this._Month), this._Day, this._Month);
        }

        this._DayOfWeek = this.Calendar.GetDayOfWeek(this._Year, this._Month, this._Day);
        if (this.DateChanged != undefined) this.DateChanged();
    }
    private LimitToRange(Min: number, Max: number, Value: number, NextValue: number): [number, number] {
        let Range = Max - Min + 1;
        let mod = ((Value - Min) % Range) + Min;
        if (mod < Min) mod += Max;
        let div = (Value - mod) / Range;
        return [mod, NextValue + div];
    }

    LessThan(rhs: wnDate) {
        return this.ToNumberDate() < rhs.ToNumberDate();
    }
    LessThanEqual(rhs: wnDate) {
        return this.ToNumberDate() <= rhs.ToNumberDate();
    }
    GreaterThan(rhs: wnDate) {
        return this.ToNumberDate() > rhs.ToNumberDate();
    }
    GreaterThanEqual(rhs: wnDate) {
        return this.ToNumberDate() >= rhs.ToNumberDate();
    }
    Equal(rhs: wnDate) {
        return this.ToNumberDate() === rhs.ToNumberDate();
    }
    NotEqual(rhs: wnDate) {
        return this.ToNumberDate() !== rhs.ToNumberDate();
    }
    LessThanExact(rhs: wnDate) {
        return this.ToNumber() < rhs.ToNumber();
    }
    LessThanEqualExact(rhs: wnDate) {
        return this.ToNumber() <= rhs.ToNumber();
    }
    GreaterThanExact(rhs: wnDate) {
        return this.ToNumber() > rhs.ToNumber();
    }
    GreaterThanEqualExact(rhs: wnDate) {
        return this.ToNumber() >= rhs.ToNumber();
    }
    EqualExact(rhs: wnDate) {
        return this.ToNumber() === rhs.ToNumber();
    }
    NotEqualExact(rhs: wnDate) {
        return this.ToNumber() !== rhs.ToNumber();
    }
}