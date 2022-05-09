class wncalendar {
    element: HTMLFormElement;
    Date: wnDate = new wnDate();
    Date2: wnDate = new wnDate();
    NaitveDigit = WNDefaultNaitveDigit || false;
    DateRange: boolean = false;
    OnlyMonthYear: boolean = false;
    AllowComment: boolean = false;
    AllowDateHoliday: boolean = false;
    Comment: WNDictionary = [];
    NoCommonComment: boolean = false;
    DisplayElement: HTMLElement;
    Display2Element: HTMLElement;
    DisplayFormat: string;
    ValueElement: HTMLElement;
    Value2Element: HTMLElement;

    private ToDayDate: wnDate;
    private CurrentDate: wnDate;
    private SecondDate: wnDate;
    private ThirdDate: wnDate;
    private _calendarname = '';
    private _monthyearcaption: HTMLLabelElement;
    private _selectmonthyear: HTMLDivElement;
    private _selectyear: HTMLDivElement;
    private _body: HTMLDivElement;
    private _lang: any;
    private _rangestate = 0;
    private ontextinput = false;
    private _viewcount = 1;
    get viewcount() { return this._viewcount }
    set viewcount(value: number) {
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        this._viewcount = value;
        this.refresh();
    }

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private Init() {
        if (!this.element.classList.contains('calendar'))
            this.element.classList.add('calendar');

        if (this.element.hasAttribute('calendar'))
            this.Date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')() as wnCalendar;
        if (this.element.hasAttribute('cultureinfo'))
            this.Date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')() as wnCultureInfo;
        if (this.element.hasAttribute('naitvedigit'))
            this.NaitveDigit = WNparseBoolean(this.element.getAttribute('naitvedigit'), false);
        if (this.element.hasAttribute('viewcount')) {
            this._viewcount = WNparseNumber(this.element.getAttribute('viewcount'), 1);
            if (this._viewcount < 1) this._viewcount = 1;
        }
        if (this.element.hasAttribute('daterange'))
            this.DateRange = WNparseBoolean(this.element.getAttribute('daterange'), false);
        if (this.element.hasAttribute('onlymonthyear'))
            this.OnlyMonthYear = WNparseBoolean(this.element.getAttribute('onlymonthyear'), false);

        //Inputs
        if (this.element.hasAttribute('display-id'))
            this.DisplayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.element.hasAttribute('display2-id'))
            this.Display2Element = document.getElementById(this.element.getAttribute('display2-id'));

        if (this.DisplayElement != undefined) {
            this.DisplayElement.addEventListener('input', () => { this.SetValueFromDisplay(); });
            this.DisplayElement.addEventListener('change', () => { this.RenderDisplay(); });
        }
        if (this.Display2Element != undefined) {
            this.Display2Element.addEventListener('input', () => { this.SetValueFromDisplay(); });
            this.Display2Element.addEventListener('change', () => { this.RenderDisplay(); });
        }

        this.DisplayFormat = this.Date.CultureInfo.DateTimeFormat.ShortDatePattern;
        if (this.element.hasAttribute('display-format'))
            this.DisplayFormat = WNparseString(this.element.getAttribute('display-format'), this.Date.CultureInfo.DateTimeFormat.ShortDatePattern);

        if (this.element.hasAttribute('value-id')) {
            this.ValueElement = document.getElementById(this.element.getAttribute('value-id'));
        }
        if (this.element.hasAttribute('value2-id')) {
            this.Value2Element = document.getElementById(this.element.getAttribute('value2-id'));
        }
        //---
        this._calendarname = this.Date.Calendar.constructor.name;
        this._lang = WNlang[this.Date.CultureInfo.TwoLetterISOLanguageName || WNDefaultLanguage];

        this.Date.SetDate(new Date(this.GetElementValue(this.ValueElement)));

        this.Date.DateChanged = () => {
            this.SetElementValue(this.ValueElement, this.SetDateValue(this.Date, this.ValueElement));
            this.RenderDisplay();
        };
        this.Date2 = new wnDate(this.Date);
        this.Date2.SetDate(new Date(this.GetElementValue(this.Value2Element)));

        this.Date2.DateChanged = () => {
            if (this.Date.GreaterThan(this.Date2)) {
                let l = this.Date.ToNumber();
                this.Date.Set(this.Date2);
                this.Date2.SetDateNumber(l);
                this.SetElementValue(this.ValueElement, this.SetDateValue(this.Date, this.ValueElement));
            }
            if (this.Value2Element != undefined)
                this.SetElementValue(this.Value2Element, this.SetDateValue(this.Date2, this.Value2Element));
            this.RenderDisplay();
        };

        this.CurrentDate = new wnDate(this.Date);
        if (this.Date.Year == 0)
            this.CurrentDate.SetDate(new Date());
        this.ToDayDate = new wnDate(this.Date);
        this.ToDayDate.SetDate(new Date());

        this.SecondDate = new wnDate(this.Date);
        this.ThirdDate = new wnDate(this.Date);

        if (this.element.hasAttribute('second-calendar'))
            this.SecondDate.Calendar = Function('return new ' + this.element.getAttribute('second-calendar') + '()')() as wnCalendar;
        if (this.element.hasAttribute('second-cultureinfo'))
            this.SecondDate.CultureInfo = Function('return new ' + this.element.getAttribute('second-cultureinfo') + '()')() as wnCultureInfo;

        if (this.element.hasAttribute('third-calendar'))
            this.ThirdDate.Calendar = Function('return new ' + this.element.getAttribute('third-calendar') + '()')() as wnCalendar;
        if (this.element.hasAttribute('third-cultureinfo'))
            this.ThirdDate.CultureInfo = Function('return new ' + this.element.getAttribute('third-cultureinfo') + '()')() as wnCultureInfo;

        //Comments
        if (this.element.hasAttribute('allowcomment'))
            this.AllowComment = WNparseBoolean(this.element.getAttribute('allowcomment'), false);
        this.AllowDateHoliday = this.AllowComment;

        if (this.element.hasAttribute('allowdateholiday'))
            this.AllowDateHoliday = WNparseBoolean(this.element.getAttribute('allowdateholiday'), false);
        if (this.element.hasAttribute('nocommoncomment'))
            this.NoCommonComment = WNparseBoolean(this.element.getAttribute('nocommoncomment'), false);

        this.Comment = [];

        let tmp = this.element.querySelectorAll<HTMLElement>('comment');
        for (var i = 0; i < tmp.length; i++) {
            let year = WNparseNumber(tmp[i].getAttribute('year'), 0);
            let month = WNparseNumber(tmp[i].getAttribute('month'), 0);
            let day = WNparseNumber(tmp[i].getAttribute('day'), 0);
            let holiday = WNparseBoolean(tmp[i].getAttribute('holiday'), false);
            let text = WNparseString(tmp[i].getAttribute('text'), '');
            this.Comment.push({ 'year': year, 'month': month, 'day': day, 'holiday': holiday, 'text': text });
        }
        this.AddHead();
        this.AddSelectMonthYear();

        //AddBody
        this._body = document.createElement('div');
        this._body.className = 'calendar-body';
        this._body.dir = this.element.dir;
        this.element.appendChild(this._body);

        this.refresh();
    }
    get value() { return this.Date.ToDateTime(); }
    set value(value: Date) {
        this.Date.SetDate(value);
        this.CurrentDate.Set(this.Date);
        this.refresh();
        this.RenderDisplay();
    }
    previous() {
        this.CurrentDate.AddMonths(-this._viewcount);
        this.refresh();
    }
    next() {
        this.CurrentDate.AddMonths(this._viewcount);
        this.refresh();
    }
    now() {
        this.CurrentDate.Set(this.ToDayDate);
        this.refresh();
    }
    SelectDate(date: number) {
        if (this.DateRange) {
            if (this._rangestate == 0) {
                this.Date.SetDateNumber(date);
                this.Date2.SetDateNumber(date);
                this._rangestate = 1;
                event.stopPropagation();
            }
            else {
                this.Date2.SetDateNumber(date);
                this._rangestate = 0;
            }
        }
        else {
            this.Date.SetDateNumber(date);
        }
        this.CurrentDate.Set(this.Date);
        this.refresh();
    }
    SetMonth(Month: number) {
        this.CurrentDate.Month = Month;
        this._selectmonthyear.classList.add('hide');
        this.refresh();
    }
    SetYear(Year: number) {
        this.CurrentDate.Year = Year;
        this.refresh();
    }
    showmonthyear() {
        if (this._body.classList.contains('hide')) {
            this._selectmonthyear.classList.add('hide');
            this._body.classList.remove('hide');
            return;
        }
        let months = WNGetNodesList(".calendar-select-month>button", this._selectmonthyear);
        for (var i = 0; i < months.length; i++) {
            months[i].classList.remove('button-active');
            if (i == this.CurrentDate.Month - 1)
                months[i].classList.add('button-active');
        }
        this._selectyear.innerHTML = '';
        for (var i = this.CurrentDate.Year - 50; i < this.CurrentDate.Year + 50; i++) {
            let button = document.createElement('button');
            button.textContent = WNNaitveDigit(i, this.Date.CultureInfo, this.NaitveDigit);
            const t = i;
            button.addEventListener('click', () => {
                this.SetYear(t);
                if (this.OnlyMonthYear) {
                    this.CurrentDate.Day = Math.floor(this.CurrentDate.DaysInMonth / 2);
                    this.SelectDate(this.CurrentDate.ToNumber());
                }
                else {
                    this._selectmonthyear.classList.add('hide');
                    this._body.classList.remove('hide');
                    event.stopPropagation();
                }
            })
            if (t == this.CurrentDate.Year) {
                button.classList.add('button-active');
            }

            this._selectyear.appendChild(button);
        }
        this._selectmonthyear.classList.remove('hide');
        this._body.classList.add('hide');

        this._selectyear.scrollTop = (this._selectyear.scrollHeight - this._selectyear.clientHeight) / 2;
    }
    AddHead() {
        let calendarhead = document.createElement('div');
        calendarhead.className = 'calendar-head';
        calendarhead.dir = this.element.dir;

        let prev = document.createElement('button');
        prev.className = 'primary';
        prev.addEventListener('click', () => {
            this.previous();
            event.stopPropagation();
        })
        calendarhead.appendChild(prev);

        let now = document.createElement('button');
        now.className = 'secondary';
        now.addEventListener('click', () => {
            this.now();
            event.stopPropagation();
        })
        calendarhead.appendChild(now);

        this._monthyearcaption = document.createElement('label');
        calendarhead.appendChild(this._monthyearcaption);

        if (!this.OnlyMonthYear) {
            let showmonthyear = document.createElement('button');
            showmonthyear.className = 'dropdown-toggle secondary';
            showmonthyear.addEventListener('click', () => {
                this.showmonthyear();
                event.stopPropagation();
            })
            calendarhead.appendChild(showmonthyear);
        }

        let next = document.createElement('button');
        next.className = 'primary';
        next.addEventListener('click', () => {
            this.next();
            event.stopPropagation();
        })
        calendarhead.appendChild(next);
        this.element.appendChild(calendarhead);
    }
    AddSelectMonthYear() {
        this._selectmonthyear = document.createElement('div');
        this._selectmonthyear.className = 'calendar-select-monthyear hide';
        this._selectmonthyear.dir = this.element.dir;

        let selectmonth = document.createElement('div');
        selectmonth.dir = this.element.dir;
        selectmonth.className = 'calendar-select-month';
        for (var i = 0; i <= this.Date.CultureInfo.DateTimeFormat.MonthNames[this._calendarname].length; i++) {
            let button = document.createElement('button');
            let s = this.Date.CultureInfo.DateTimeFormat.MonthNames[this._calendarname][i];
            if (s != '') {
                button.textContent = s;
                const t = i + 1;
                button.addEventListener('click', (e) => {
                    this._selectmonthyear.classList.add('hide');
                    this._body.classList.remove('hide');
                    this.SetMonth(t);
                    (<HTMLButtonElement>e.target).classList.add('button-active');
                    event.stopPropagation();
                })
                selectmonth.appendChild(button);
            }
        }
        this._selectmonthyear.appendChild(selectmonth);

        this._selectyear = document.createElement('div');
        this._selectyear.className = 'calendar-select-year';
        this._selectyear.dir = this.element.dir;

        this._selectmonthyear.appendChild(this._selectyear);

        this.element.appendChild(this._selectmonthyear);
    }
    AddMonthView(showDate: wnDate, addWeekName: boolean) {
        let monthbody = document.createElement('div');
        monthbody.className = 'calendar-month';
        monthbody.dir = this.element.dir;

        let _holidayIndex = 0;
        for (var i = this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek; i < this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek + 7; i++) {
            let wdidx = i < 7 ? i : i - 7;
            if (wdidx == this.Date.CultureInfo.DateTimeFormat.Holiday) {
                _holidayIndex = i - this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek;
                break;
            }
        }

        //Add Weeknames
        if (addWeekName) {
            let weekname = document.createElement('div');
            weekname.dir = this.element.dir;
            weekname.className = 'calendar-weekname';
            for (var i = this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek; i < this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek + 7; i++) {
                let wdidx = i < 7 ? i : i - 7;
                let name = document.createElement('span');
                name.textContent = this.Date.CultureInfo.DateTimeFormat.ShortestDayNames[wdidx];
                if (wdidx == this.Date.CultureInfo.DateTimeFormat.Holiday) {
                    name.className = 'holiday';
                    _holidayIndex = i - this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek;
                }
                weekname.appendChild(name);
            }
            monthbody.appendChild(weekname);
        }
        //Add Month Name and Week Number
        let dayview = document.createElement('div');
        dayview.dir = this.element.dir;
        dayview.className = 'calendar-dayview';
        //Month
        let monthname = document.createElement('div');
        monthname.className = 'calendar-month-name';
        monthname.dir = this.element.dir;
        monthname.textContent = this.Date.CultureInfo.DateTimeFormat.MonthNames[this._calendarname][showDate.Month - 1];
        dayview.appendChild(monthname);

        let weeknumber = document.createElement('div');
        weeknumber.className = 'calendar-week-number';
        weeknumber.dir = this.element.dir;
        showDate.Day = 1;
        let startweeknumber = showDate.WeekOfYear;
        showDate.Day = showDate.DaysInMonth;
        let endweeknumber = showDate.WeekOfYear;
        for (var i = startweeknumber; i <= endweeknumber; i++) {
            let name = document.createElement('span');
            name.textContent = WNNaitveDigit(i, this.Date.CultureInfo, this.NaitveDigit);
            weeknumber.appendChild(name);
        }
        dayview.appendChild(weeknumber);

        //Add Days
        let days = document.createElement('div');
        days.dir = this.element.dir;
        days.className = 'calendar-days';
        showDate.Day = 1;
        let skip = (7 - this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek + showDate.DayOfWeek) % 7;

        for (var i = 0; i < skip; i++) {
            let button = document.createElement('button');
            button.className = 'readonly';
            days.appendChild(button);
        }

        let n1 = this.Date.ToNumberDate();
        let n2 = this.Date2.ToNumberDate();
        for (var i = 1; i <= showDate.DaysInMonth; i++) {
            showDate.Day = i;
            let button = document.createElement('button');
            if (((i + skip - 1) % 7) == _holidayIndex)
                button.classList.add('holiday');
            let s = WNNaitveDigit(i, this.Date.CultureInfo, this.NaitveDigit);
            if (this.SecondDate.Calendar != this.Date.Calendar) {
                this.SecondDate.SetDateNumber(showDate.ToNumberDate());
                s += '<span>' + WNNaitveDigit(this.SecondDate.Day, this.SecondDate.CultureInfo, this.NaitveDigit) + '</span>';
            }
            if (this.ThirdDate.Calendar != this.Date.Calendar) {
                this.ThirdDate.SetDateNumber(showDate.ToNumberDate());
                s += '<span>' + WNNaitveDigit(this.ThirdDate.Day, this.ThirdDate.CultureInfo, this.NaitveDigit) + '</span>';
            }
            button.innerHTML = s;
            if (showDate.Year == this.ToDayDate.Year && showDate.Month == this.ToDayDate.Month && showDate.Day == this.ToDayDate.Day)
                button.classList.add('today');

            const t = showDate.ToNumberDate();
            button.addEventListener('click', () => { this.SelectDate(t); })
            if (this.DateRange) {
                if (t == n1 && n1 == n2)
                    button.classList.add('active');
                else if (t == n1 && n1 != n2) {
                    button.classList.add('sel-start');
                }
                else if (t > n1 && t < n2)
                    button.classList.add('sel');
                else if (t == n2)
                    button.classList.add('sel-end');

                if (button.className.includes('sel'))
                    button.classList.remove('today');
            }
            else {
                if (t == n1)
                    button.classList.add('active');
            }
            days.appendChild(button);
            if (this.AllowDateHoliday || this.AllowComment) {
                let comment = this.GetAllowComment(showDate.ToNumber());
                if (comment[1]) //Holday
                    button.classList.add('holiday');
                if (comment[0] && this.AllowComment) //Comment
                {
                    button.setAttribute('wn-tooltip', comment[0]);
                    button.setAttribute('wn-tooltip-class', 'tooltip-arrow w-max-1500r');
                    new wntooltip(button);
                }
            }
        }

        dayview.appendChild(days);

        monthbody.appendChild(dayview);

        this._body.appendChild(monthbody);
    }
    refresh() {
        this._monthyearcaption.textContent = this.CurrentDate.toString('MMMM yyyy');
        this._body.innerHTML = '';
        let tDate = new wnDate(this.CurrentDate);
        tDate.Day = 1;
        if (this.OnlyMonthYear) {
            tDate.Day = Math.floor(tDate.DaysInMonth / 2);
            this.showmonthyear();
        }
        else {
            if (this._viewcount > 2)
                tDate.AddMonths(Math.trunc(this._viewcount / -2))
            for (var i = 0; i < this._viewcount; i++) {
                this.AddMonthView(tDate, i == 0 || this.element.classList.contains('calendar-horizontal'));
                tDate.Day = 1;
                tDate.AddMonths(1);
            }
        }
    }
    GetAllowComment(date: number): [string, boolean] {
        if (this._lang == null || this._lang == undefined)
            return ['', false];

        let ln = this._lang["cdd"];
        let holiday = false;
        let tooltip = '';
        if (ln != null && !this.NoCommonComment) {
            for (let ci in ln) {
                let m = new wnDate();
                m.Calendar = Function('return new ' + ci + '()')() as wnCalendar;
                m.SetDateNumber(date);
                if (ln[ci] != undefined) {
                    let f = ln[ci].filter(e => e.month == m.Month && e.day == m.Day);
                    for (var i = 0; i < f.length; i++) {
                        if (f[i]['holiday'] == true) {
                            holiday = true;
                            tooltip += '<b class="error-text">' + f[i]['text'] + '</b><br/>';
                        }
                        else
                            tooltip += f[i]['text'] + '<br/>';
                    }
                }
                tooltip = tooltip.trim() + '<hr/>';
            }
        }

        let m = new wnDate(this.Date);
        m.SetDateNumber(date);
        let f = this.Comment.filter(e => e.month == m.Month && e.day == m.Day);
        for (var i = 0; i < f.length; i++) {
            let add = true;
            if (f[i].year != undefined && f[i].year > 0 && f[i].year != m.Year)
                add = false;
            if (add) {
                if (f[i]['holiday'] == true) {
                    holiday = true;
                    tooltip += '<b class="error-text">' + f[i]['text'] + '</b><br/>';
                }
                else
                    tooltip += f[i]['text'] + '<br/>';
            }
        }
        tooltip = tooltip.replace(' - ', '<br/>');
        while (tooltip.includes('<hr/><hr/>'))
            tooltip = tooltip.replace('<hr/><hr/>', '<hr/>');
        while (tooltip.endsWith('<hr/>'))
            tooltip = tooltip.substring(0, tooltip.length - 5);
        while (tooltip.startsWith('<hr/>'))
            tooltip = tooltip.substring(5);
        return [tooltip, holiday];
    }
    RenderDisplay() {
        if (this.ontextinput)
            return;
        let ret1 = this.Date.toString(this.DisplayFormat, this.NaitveDigit);
        let ret2 = this.Date2.toString(this.DisplayFormat, this.NaitveDigit);

        if (this.DisplayElement != undefined) {
            if (this.DateRange) {
                if (this.Display2Element == undefined) {
                    this.SetElementValue(this.DisplayElement, ret1 + ' ~ ' + ret2);
                }
                else {
                    this.SetElementValue(this.DisplayElement, ret1);
                    this.SetElementValue(this.Display2Element, ret2);
                }
            }
            else
                this.SetElementValue(this.DisplayElement, ret1);
        }
    }
    SetValueFromDisplay() {
        this.ontextinput = true;
        let ret = ['', ''];
        ret[0] = this.GetElementValue(this.DisplayElement);
        if (this.DateRange) {
            ret[1] = this.GetElementValue(this.Display2Element);
        }
        if (ret[0].includes('~'))
            ret = ret[0].split('~');
        this.Date.SetDateString(WNDeNaitveDigit(ret[0], this.Date.CultureInfo));
        this.Date2.SetDateString(WNDeNaitveDigit(ret[1], this.Date.CultureInfo));

        this.CurrentDate.Set(this.Date);
        this.refresh();
        this.ontextinput = false;
    }
    SetValueFromValue() {
        this.ontextinput = true;
        this.Date.SetDate(new Date(this.GetElementValue(this.ValueElement)));
        if (this.DateRange) {
            this.Date2.SetDate(new Date(this.GetElementValue(this.Value2Element)));
        }
        this.CurrentDate.Set(this.Date);
        this.refresh();
        this.ontextinput = false;
        this.RenderDisplay();
    }
    SetElementValue(elem: HTMLElement, value: string) {
        if (elem != undefined)
            if (elem.localName == 'input')
                (<HTMLInputElement>elem).value = value;
            else
                elem.textContent = value;
    }
    GetElementValue(elem: HTMLElement): string {
        let ret = '';
        if (elem != undefined)
            if (elem.localName == 'input')
                ret = (<HTMLInputElement>elem).value;
            else
                ret = elem.textContent;
        return ret;
    }
    SetDateValue(date: wnDate, ValueElement: HTMLElement): string {
        let tDate = new wnDate(date);
        tDate.SetDate(new Date(this.GetElementValue(ValueElement)));
        tDate.SetYMD(date.Year, date.Month, date.Day);

        date.SetYMD(tDate.Year, tDate.Month, tDate.Day, tDate.Hour, tDate.Minute, tDate.Second, tDate.Milliseconds);

        return tDate.ToDateTime().toISOString();
    }
}