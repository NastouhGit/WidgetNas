class WNDate implements IWNDate {
    private _Year: number;
    private _Month: number;
    private _Day: number;
    private _Hour: number;
    private _Minute: number;
    private _Second: number;
    private _Millisecond: number;
    private _DayOfWeek: number;

    public dateChanged: (t: IWNDate) => {};

    private GregorianCalnedar: IWNCalendar = new WNGregorianCalendar();

    public cultureInfo: IWNCultureInfo ;
    public calendar: IWNCalendar;
    constructor(lCultureInfo?: IWNCultureInfo  | IWNDate, lCalendar?: IWNCalendar, lDate?: Date) {
        this._Year = 0;
        this._Month = 0;
        this._Day = 0;
        this._Hour = 0;
        this._Minute = 0;
        this._Second = 0;
        this._Millisecond = 0;
        this._DayOfWeek = 0;
        this.dateChanged = undefined;

        if (lCultureInfo != undefined && (lCultureInfo as IWNDate).calendar != undefined) {
            let Template = lCultureInfo as IWNDate;
            this.cultureInfo = Template.cultureInfo;
            this.calendar = Template.calendar;
            this.setDateNumber(Template.toNumber());
        }
        else {
            if (!lCultureInfo)
                lCultureInfo = wnConfig.cultureInfo; // wnConfig.cultureInfo || new WNCultureInfo_en_US();

            if (!lCalendar)
                lCalendar = wnConfig.calendar; // wnConfig.calendar || new WNGregorianCalendar();

            this.cultureInfo = lCultureInfo as IWNCultureInfo;
            this.calendar = lCalendar;
            if (lDate != null)
                this.setDate(lDate);
        }
    }
    public addDays(value: number): void { this._Day += value; this.fixedDate(); }
    public addHours(value: number): void { this._Hour += value; this.fixedDate(); }
    public addMilliseconds(value: number): void { this._Millisecond += value; this.fixedDate(); }
    public addMinutes(value: number): void { this._Minute += value; this.fixedDate(); }
    public addMonths(value: number): void { this._Month += value; this.fixedDate(); }
    public addSeconds(value: number): void { this._Second += value; this.fixedDate(); }
    public addYears(value: number): void { this._Year += value; this.fixedDate(); }
    public addWeeks(value: number): void { this.addDays(value * 7); this.fixedDate(); }

    public set year(value: number) { this._Year = value; this.fixedDate(); }
    public get year() { return this._Year }
    public set month(value: number) { this._Month = value; this.fixedDate(); }
    public get month() { return this._Month }
    public set day(value: number) { this._Day = value; this.fixedDate(); }
    public get day() { return this._Day }

    public set hour(value: number) { this._Hour = value; this.fixedDate(); }
    public get hour() { return this._Hour }
    public set minute(value: number) { this._Minute = value; this.fixedDate(); }
    public get minute() { return this._Minute }
    public set second(value: number) { this._Second = value; this.fixedDate(); }
    public get second() { return this._Second }
    public set milliseconds(value: number) { this._Millisecond = value; this.fixedDate(); }
    public get milliseconds() { return this._Millisecond }

    public get dayOfWeek() { return this._DayOfWeek; }

    public get dayOfYear() { return this.calendar.getDayOfYear(this._Year, this._Month, this._Day); }
    public get daysInMonth() { return this.calendar.getDaysInMonth(this._Year, this._Month); }
    public get daysInYear() { return this.calendar.getDaysInYear(this._Year); }
    public get isLeapYear() { return this.calendar.isLeapYear(this._Year); }
    public get leapMonth() { return this.calendar.leapMonth; }
    public get monthsInYear() { return this.calendar.monthsInYear; }
    public get isLeapMonth() { return this.calendar.isLeapMonth(this._Year, this._Month); }
    public get isLeapDay() { return this.calendar.isLeapDay(this._Year, this._Month, this._Day); }
    public get weekOfYear() { return this.calendar.getWeekOfYear(this._Year, this._Month, this._Day); }

    public setDate(date: Date): void {
        if (date == undefined) {
            this.setDateNumber(undefined);
            return;
        }
        if (typeof (date) == 'string') date = new Date(date);
        if (date == undefined || isNaN(date.getTime())) {
            this.setDateNumber(undefined);
            return;
        }

        //Date Month Start From Zero
        
        let days = this.GregorianCalnedar.getDaysFromBase(date.getFullYear(), date.getMonth() + 1, date.getDate());
        let ret = this.calendar.getYearMonthDayFromDays(days);

        this._Year = ret.year;
        this._Month = ret.month;
        this._Day = ret.day;
        this._Hour = date.getHours();
        this._Minute = date.getMinutes();
        this._Second = date.getSeconds();
        this._Millisecond = date.getMilliseconds();
        this._DayOfWeek = this.calendar.getDayOfWeek(this._Year, this._Month, this._Day);

        this.dateChanged?.(this);
    }
    public setUTCDate(date: any): void {
        date = new Date(date);
        if (date == undefined || isNaN(date.getTime())) {
            this.setDateNumber(undefined);
            return;
        }

        //Date Month Start From Zero
        var offset = date.getTimezoneOffset();
        date = new Date(date.getTime() + offset * 60000);
        this.setDate(date);
    }
    public setDateYMD(Year: number, Month: number, Day: number, Hour: number = 0, Minute: number = 0, Second: number = 0, Millisecond: number = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
        this.fixedDate();
    }
    public setYMD(Year: number, Month: number, Day: number, Hour: number = 0, Minute: number = 0, Second: number = 0, Millisecond: number = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
        //Do not raise event and fixed date
    }
    public setDateNumber(jd: number) {
        if (jd === undefined) {
            this._Year = 0;
            this._Month = 0;
            this._Day = 0;
            this._Hour = 0;
            this._Minute = 0;
            this._Second = 0;
            this._Millisecond = 0;
            this._DayOfWeek = 0;
            this.dateChanged?.(this);
            return;
        }
        let ret = this.calendar.getYearMonthDayFromDays(jd);
        this._Year = ret.year;
        this._Month = ret.month;
        this._Day = ret.day;
        //jd -= 0.5; /* Astronomical to civil */
        let ij = (jd - Math.floor(jd)) * 1000000000;
        this._Hour = Math.floor(ij / 3600000);
        ij = ij % 3600000;
        this._Minute = Math.floor(ij / 60000);
        ij = ij % 60000;
        this._Second = Math.floor(ij / 1000);
        this._Millisecond = Math.round(ij % 1000);
        this._DayOfWeek = this.calendar.getDayOfWeek(this._Year, this._Month, this._Day);
        this.dateChanged?.(this);
    }
    public setDateString(s: string) {
        if (s == undefined) {
            this.setDateNumber(undefined);
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
            if (d.length < 4 && s.indexOf(this.cultureInfo.DateTimeFormat.timeSeparator) > -1) {
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
            if (s.indexOf(this.cultureInfo.DateTimeFormat.pmDesignator) > -1 && Hour < 13)
                Hour += 12;
        }
        if (Day > 31 && Year < Day) {
            [Year, Day] = [Day, Year];
        }
        this.setDateYMD(Year, Month, Day, Hour, Minute, Second, Millisecond);
    }
    public set(value: IWNDate) {
        if (this.calendar == value.calendar) {
            this.setDateYMD(value.year, value.month, value.day, value.hour, value.minute, value.second, value.milliseconds);
        }
        else
            this.setDateNumber(value.toNumber());
    }
    public set value(value: any) {
        if (value == undefined)
            this.setDateNumber(undefined);
        else if (typeof (value) == 'number')
            this.setDateNumber(value);
        else if (typeof (value) == 'object' && value.getDate != undefined)
            this.setDate(value);
        else if (typeof (value) == 'object' && value.toNumber != undefined)
            this.set(value);
        else if (typeof (value) == 'string')
            this.setDateString(value);
    }
    public get value(): any {
        return this.toNumber();
    }

    public toDateTime(): Date {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0) return null;
        let days = this.calendar.getDaysFromBase(this._Year, this._Month, this._Day);
        let ret = this.GregorianCalnedar.getYearMonthDayFromDays(days);
        return new Date(ret.year, ret.month - 1, ret.day, this._Hour, this._Minute, this._Second, this._Millisecond);
    }
    public toNumber(): number {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0) return null;
        let ret = this.calendar.getDaysFromBase(this._Year, this._Month, this._Day);
        ret += (this._Millisecond + this._Second * 1000 + this.minute * 60000 + this.hour * 3600000) / 1000000000;

        return ret;
    }
    public toNumberDate(): number {
        if (this.year == 0 && this.month == 0 && this.day == 0) return undefined;
        return this.calendar.getDaysFromBase(this._Year, this._Month, this._Day);
    }
    public toNumberYMD(Year: number, Month: number, Day: number): number {
        if (this.year == 0 && this.month == 0 && this.day == 0) return undefined;
        let ret = this.calendar.getDaysFromBase(Year, Month, Day);
        return ret;
    }
    public toString(format: string = this.cultureInfo.DateTimeFormat.fullDateTimePattern, nativeDigit: boolean = wnConfig.nativeDigit) {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0)
            return '';
        if (format == 'shortdatetime')
            format = this.cultureInfo.DateTimeFormat.shortDatePattern + ' ' + this.cultureInfo.DateTimeFormat.shortTimePattern;
        else if (format == 'shortdate')
            format = this.cultureInfo.DateTimeFormat.shortDatePattern;
        else if (format == 'shorttime')
            format = this.cultureInfo.DateTimeFormat.shortTimePattern;
        else if (format == 'longdatettime' || format == 'date' || format == '')
            format = this.cultureInfo.DateTimeFormat.longDatePattern + ' ' + this.cultureInfo.DateTimeFormat.longTimePattern;
        else if (format == 'longdate')
            format = this.cultureInfo.DateTimeFormat.longDatePattern;
        else if (format == 'longtime')
            format = this.cultureInfo.DateTimeFormat.longTimePattern;

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

        ret = ret.replace(/{M4}/g, (this.cultureInfo.DateTimeFormat.monthNames[this.calendar.localeName] || this.cultureInfo.DateTimeFormat.monthNames[0])[this._Month - 1]);
        ret = ret.replace(/{M3}/g, (this.cultureInfo.DateTimeFormat.abbreviatedMonthNames[this.calendar.localeName] || this.cultureInfo.DateTimeFormat.abbreviatedMonthNames[0])[this._Month - 1]);
        if (this._Month < 10)
            ret = ret.replace(/{M2}/g, '0' + this._Month.toString());
        else
            ret = ret.replace(/{M2}/g, this._Month.toString());
        ret = ret.replace(/{M1}/g, this._Month.toString());

        ret = ret.replace(/{d4}/g, this.cultureInfo.DateTimeFormat.dayNames[this._DayOfWeek]);
        ret = ret.replace(/{d3}/g, this.cultureInfo.DateTimeFormat.abbreviatedDayNames[this._DayOfWeek]);
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
            ret = ret.replace(/{tt}/g, this.cultureInfo.DateTimeFormat.pmDesignator);
        else
            ret = ret.replace(/{tt}/g, this.cultureInfo.DateTimeFormat.amDesignator);

        ret = WNnativeDigit(ret, this.cultureInfo, nativeDigit);
        return ret;
    }
    public toLongDateString(nativeDigit: boolean = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.longDatePattern, nativeDigit); }
    public toShortDateString(nativeDigit: boolean = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.shortDatePattern, nativeDigit); }
    public toLongTimeString(nativeDigit: boolean = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.longTimePattern, nativeDigit); }
    public toShortTimeString(nativeDigit: boolean = wnConfig.nativeDigit) { return this.toString(this.cultureInfo.DateTimeFormat.shortTimePattern, nativeDigit); }
    public convert(value: any, format: string = this.cultureInfo.DateTimeFormat.fullDateTimePattern, nativeDigit: boolean = wnConfig.nativeDigit): string { this.value = value; return this.toString(format, nativeDigit); }
    private fixedDate(): void {
        if (this.year == 0 && this.month == 0 && this.day == 0 && this.hour == 0 && this.minute == 0 && this.second == 0 && this.milliseconds == 0)
            return;
        [this._Millisecond, this._Second] = this.limitToRange(0, 999, this._Millisecond, this._Second);
        [this._Second, this._Minute] = this.limitToRange(0, 59, this._Second, this._Minute);
        [this._Minute, this._Hour] = this.limitToRange(0, 59, this._Minute, this._Hour);
        [this._Hour, this._Day] = this.limitToRange(0, 23, this._Hour, this._Day);

        for (var i = 0; i < 2; i++) {
            [this._Month, this._Year] = this.limitToRange(1, this.calendar.monthsInYear, this._Month, this._Year);
            [this._Day, this._Month] = this.limitToRange(1, this.calendar.getDaysInMonth(this._Year, this._Month), this._Day, this._Month);
        }

        this._DayOfWeek = this.calendar.getDayOfWeek(this._Year, this._Month, this._Day);
        this.dateChanged?.(this);
    }
    private limitToRange(Min: number, Max: number, Value: number, NextValue: number): [number, number] {
        let Range = Max - Min + 1;
        let mod = ((Value - Min) % Range) + Min;
        if (mod < Min) mod += Max;
        let div = (Value - mod) / Range;
        return [mod, NextValue + div];
    }

    public lessThan(rhs: IWNDate) {
        return this.toNumberDate() < rhs.toNumberDate();
    }
    public lessThanEqual(rhs: IWNDate) {
        return this.toNumberDate() <= rhs.toNumberDate();
    }
    public greaterThan(rhs: IWNDate) {
        return this.toNumberDate() > rhs.toNumberDate();
    }
    public greaterThanEqual(rhs: IWNDate) {
        return this.toNumberDate() >= rhs.toNumberDate();
    }
    public equal(rhs: IWNDate) {
        return this.toNumberDate() === rhs.toNumberDate();
    }
    public notEqual(rhs: IWNDate) {
        return this.toNumberDate() !== rhs.toNumberDate();
    }
    public lessThanExact(rhs: IWNDate) {
        return this.toNumber() < rhs.toNumber();
    }
    public lessThanEqualExact(rhs: IWNDate) {
        return this.toNumber() <= rhs.toNumber();
    }
    public greaterThanExact(rhs: IWNDate) {
        return this.toNumber() > rhs.toNumber();
    }
    public greaterThanEqualExact(rhs: IWNDate) {
        return this.toNumber() >= rhs.toNumber();
    }
    public equalExact(rhs: IWNDate) {
        return this.toNumber() === rhs.toNumber();
    }
    public notEqualExact(rhs: IWNDate) {
        return this.toNumber() !== rhs.toNumber();
    }
}