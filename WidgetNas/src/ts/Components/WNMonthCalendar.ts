class WNMonthCalendar implements IWNMonthCalendar {
    public readonly nameType: string = 'WNMonthCalendar';
    public element: HTMLElement;
    public nativeDigit = wnConfig.nativeDigit || false;

    public date: IWNDate = new WNDate();
    public secondDate: IWNDate = new WNDate();
    public dateRange: boolean = false;
    public onlyMonthYear: boolean = false;
    public allowComment: boolean = false;
    public allowDateHoliday: boolean = false;
    public autoClosePopup: boolean = true;
    public comment: WNDictionary = [];
    public noCommonComment: boolean = false;
    public displayFormat: string;

    public selectionChanged: (t: IWNMonthCalendar) => void;

    private displayElement: HTMLElement;
    private secondDisplayElement: HTMLElement;
    private valueElement: HTMLElement;
    private secondValueElement: HTMLElement;
    private dropdownElement: HTMLElement;

    private _ToDayDate: IWNDate;
    private _CurrentDate: IWNDate;
    private _SecondDate: IWNDate;
    private _ThirdDate: IWNDate;
    private _calendarname = '';
    private _monthyearcaption: HTMLLabelElement;
    private _selectmonthyear: HTMLDivElement;
    private _selectyear: HTMLDivElement;
    private _body: HTMLDivElement;
    private _lang: any;
    private _rangestate: number = 0;
    private _onTextInput = false;
    private _viewCount = 1;
    public get viewCount() { return this._viewCount }
    public set viewCount(value: number) {
        value = value < 1 ? 1 : value > 12 ? 12 : value;
        this._viewCount = value;
        this.refresh();
    }
    public get value() { return this.date.toDateTime(); }
    public set value(value: Date) {
        this.date.setDate(value);
        this._CurrentDate.set(this.date);
        this.refresh();
        this.renderDisplay();
    }
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.Init();
        }
    }
    private Init() {
        if (!this.element.classList.contains('calendar')) this.element.classList.add('calendar');
        if (this.element.hasAttribute('calendar')) this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo')) this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute('native-digit')) this.nativeDigit = WNparseBoolean(this.element.getAttribute('native-digit'), wnConfig.nativeDigit);
        if (this.element.hasAttribute('view-count')) this.viewCount = WNparseNumber(this.element.getAttribute('view-count'), 1);
        if (this.element.hasAttribute('date-range')) this.dateRange = WNparseBoolean(this.element.getAttribute('date-range'), false);
        if (this.element.hasAttribute('auto-close-popup')) this.autoClosePopup = WNparseBoolean(this.element.getAttribute('auto-close-popup'), false);
        if (this.element.hasAttribute('only-monthyear')) this.onlyMonthYear = WNparseBoolean(this.element.getAttribute('only-monthyear'), false);

        //Inputs
        if (this.element.hasAttribute('display-id')) this.displayElement = document.getElementById(this.element.getAttribute('display-id'));

        if (this.element.hasAttribute('second-display-id')) this.secondDisplayElement = document.getElementById(this.element.getAttribute('second-display-id'));

        if (this.displayElement != undefined) {
            this.displayElement.addEventListener('input', () => { this.setValueFromDisplay(); });
            this.displayElement.addEventListener('change', () => { this.renderDisplay(); });
        }

        if (this.secondDisplayElement != undefined) {
            this.secondDisplayElement.addEventListener('input', () => { this.setValueFromDisplay(); });
            this.secondDisplayElement.addEventListener('change', () => { this.renderDisplay(); });
        }
        if (this.onlyMonthYear)
            this.displayFormat = this.date.cultureInfo.DateTimeFormat.yearMonthPattern;
        else
            this.displayFormat = this.date.cultureInfo.DateTimeFormat.shortDatePattern;

        if (this.element.hasAttribute('display-format'))
            this.displayFormat = WNparseString(this.element.getAttribute('display-format'), this.date.cultureInfo.DateTimeFormat.shortDatePattern);

        if (this.element.hasAttribute('value-id'))
            this.valueElement = document.getElementById(this.element.getAttribute('value-id'));

        if (this.element.hasAttribute('second-value-id'))
            this.secondValueElement = document.getElementById(this.element.getAttribute('second-value-id'));

        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), "t");

        //---
        this._calendarname = this.date.calendar.localeName;
        this._lang = wnConfig.language;

        //Init Date Value
        this.date.setDate(new Date(this.getElementValue(this.valueElement)));

        this.date.dateChanged = () => {
            this.setElementValue(this.valueElement, this.setDateValue(this.date, this.valueElement));
            this.renderDisplay();
        };

        this.secondDate = new WNDate(this.date);
        this.secondDate.setDate(new Date(this.getElementValue(this.secondValueElement)));

        this.secondDate.dateChanged = () => {
            if (this.date.greaterThan(this.secondDate)) {
                let l = this.date.toNumber();
                this.date.set(this.secondDate);
                this.secondDate.setDateNumber(l);
                this.setElementValue(this.valueElement, this.setDateValue(this.date, this.valueElement));
            }
            if (this.secondValueElement)
                this.setElementValue(this.secondValueElement, this.setDateValue(this.secondDate, this.secondValueElement));
            this.renderDisplay();
        };

        this._CurrentDate = new WNDate(this.date);
        if (this.date.year == 0)
            this._CurrentDate.setDate(new Date());
        this._ToDayDate = new WNDate(this.date);
        this._ToDayDate.setDate(new Date());

        this._SecondDate = new WNDate(this.date);
        this._ThirdDate = new WNDate(this.date);

        if (this.element.hasAttribute('second-calendar')) this._SecondDate.calendar = WNCalendarFunction(this.element.getAttribute('second-calendar'));
        if (this.element.hasAttribute('second-cultureinfo')) this._SecondDate.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('second-cultureinfo'));

        if (this.element.hasAttribute('third-calendar')) this._ThirdDate.calendar = WNCalendarFunction(this.element.getAttribute('third-calendar'));
        if (this.element.hasAttribute('third-cultureinfo')) this._ThirdDate.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('third-cultureinfo'));

        //Comments
        if (this.element.hasAttribute('allow-comment'))
            this.allowComment = WNparseBoolean(this.element.getAttribute('allow-comment'), false);
        this.allowDateHoliday = this.allowComment;

        if (this.element.hasAttribute('allow-date-holiday'))
            this.allowDateHoliday = WNparseBoolean(this.element.getAttribute('allow-date-holiday'), false);
        if (this.element.hasAttribute('no-common-comment'))
            this.noCommonComment = WNparseBoolean(this.element.getAttribute('no-common-comment'), false);

        this.comment = [];

        let tmp = this.element.querySelectorAll<HTMLElement>('comment');
        for (var i = 0; i < tmp.length; i++) {
            let year = WNparseNumber(tmp[i].getAttribute('year'), 0);
            let month = WNparseNumber(tmp[i].getAttribute('month'), 0);
            let day = WNparseNumber(tmp[i].getAttribute('day'), 0);
            let holiday = WNparseBoolean(tmp[i].getAttribute('holiday'), false);
            let text = WNparseString(tmp[i].getAttribute('text'), '');
            this.comment.push({ 'year': year, 'month': month, 'day': day, 'holiday': holiday, 'text': text });
        }


        if (this.autoClosePopup) {
            this.findPopup();
        }
        this.addHead();
        this.addSelectMonthYear();

        //AddBody
        this._body = document.createElement('div');
        this._body.className = 'calendar-body';
        this._body.dir = this.element.dir;
        this.element.appendChild(this._body);

        if (this.onlyMonthYear) {
            this._selectmonthyear.classList.remove('hide');
            this._body.classList.add('hide');
        }

        this.refresh();
    }
    private findPopup() {
        let elem = this.element.parentElement;
        while (elem) {
            if (elem.classList.contains('dropdown')) {
                {
                    this.dropdownElement = elem;
                    break;
                }
            }
            elem = elem.parentElement;
        }
    }

    private previousMonths() {
        this._CurrentDate.addMonths(-this._viewCount);
        this.refresh();
    }
    private nextMonths() {
        this._CurrentDate.addMonths(this._viewCount);
        this.refresh();
    }
    private now() {
        this._CurrentDate.set(this._ToDayDate);
        this.refresh();
    }

    private selectDate(date: number) {
        if (this._rangestate < 12) {
            this.date.setDateNumber(date);
            this.secondDate.setDateNumber(date);
        }
        else {
            this.secondDate.setDateNumber(date);
        }
        this._CurrentDate.setDateNumber(date);
        this.refresh();
        let rangestatecheck = this.dateRange ? 21 : 10;

        if (this._rangestate > rangestatecheck) {
            this._rangestate = 0;
            this.selectionChanged?.(this);
            if (this.autoClosePopup && this.dropdownElement) {
                if (this.onlyMonthYear || (!this.onlyMonthYear && this._selectmonthyear.classList.contains('hide')))
                    this.dropdownElement.classList.remove("show");
            }
            if (!this.onlyMonthYear) {
                this._selectmonthyear.classList.add('hide');
                this._body.classList.remove('hide');
            }
        }
    }
    private setMonth(Month: number) {

        if (this._rangestate < 11)
            this._rangestate = Math.floor(this._rangestate / 10) * 10 + 1;
        else
            this._rangestate = Math.floor(this._rangestate / 10) * 10 + 2;


        this._CurrentDate.month = Month;
        this.refresh();
    }
    private setYear(Year: number) {

        if (this._rangestate < 11)
            this._rangestate = 10 + WNmod(this._rangestate, 10);
        else
            this._rangestate = 20 + WNmod(this._rangestate, 10);

        this._CurrentDate.year = Year;
        this.refresh();
    }
    private showMonthYear() {
        let months = WNGetNodesList(".calendar-select-month>button", this._selectmonthyear);
        for (var i = 0; i < months.length; i++) {
            months[i].classList.remove('button-active');
            if (i == this._CurrentDate.month - 1)
                months[i].classList.add('button-active');
        }
        this._selectyear.innerHTML = '';
        let tStartYear = Math.round(this._CurrentDate.year / 50) * 50 - 50;
        for (var i = tStartYear; i < tStartYear + 100; i++) {
            let button = document.createElement('button');
            button.textContent = WNnativeDigit(i, this.date.cultureInfo, this.nativeDigit);
            const t = i;
            button.addEventListener('click', (e) => {
                this.setYear(t);
                if (this.onlyMonthYear) {
                    this._CurrentDate.day = Math.floor(this._CurrentDate.daysInMonth / 2);
                }
                this.selectDate(this._CurrentDate.toNumber());
                e.stopPropagation();
            });
            if (t == this._CurrentDate.year) {
                button.classList.add('button-active');
            }

            this._selectyear.appendChild(button);
        }
        //this._selectmonthyear.classList.remove('hide');
        //this._body.classList.add('hide');

        let selectedIndexYear = this._CurrentDate.year - tStartYear;
        let ac = this._selectyear.querySelector('.button-active');
        let r = selectedIndexYear / Math.floor(this._selectyear.clientWidth / ac.clientWidth);
        r = r * ac.clientHeight;
        //let st = this._selectyear.scrollTop - this._selectyear.clientHeight / 2;
        let sb = this._selectyear.scrollTop + this._selectyear.clientHeight / 2;
        /*if (r < st)*/
        if (r > sb)
            this._selectyear.scrollTop = r - this._selectyear.scrollTop;
        else
            this._selectyear.scrollTop = r;
    }
    private addHead() {
        let calendarhead = document.createElement('div');
        calendarhead.className = 'calendar-head';
        calendarhead.dir = this.element.dir;

        let prev = document.createElement('button');
        prev.className = 'previous-button';
        prev.addEventListener('click', (e) => {
            this.previousMonths();
            e.stopPropagation();
        })
        calendarhead.appendChild(prev);

        let now = document.createElement('button');
        now.className = 'now-button';
        now.addEventListener('click', (e) => {
            this.now();
            e.stopPropagation();
        })
        calendarhead.appendChild(now);

        this._monthyearcaption = document.createElement('label');
        calendarhead.appendChild(this._monthyearcaption);

        if (!this.onlyMonthYear) {
            let showMonthYear = document.createElement('button');
            showMonthYear.className = 'dropdown-toggle month-button';
            showMonthYear.addEventListener('click', (e) => {
                this._rangestate = 0;
                this._selectmonthyear.classList.toggle('hide');
                this._body.classList.toggle('hide');
                this.showMonthYear();

                e.stopPropagation();
            })
            calendarhead.appendChild(showMonthYear);
        }

        let next = document.createElement('button');
        next.className = 'next-button';
        next.addEventListener('click', (e) => {
            this.nextMonths();
            e.stopPropagation();
        })
        calendarhead.appendChild(next);
        this.element.appendChild(calendarhead);
    }
    private addSelectMonthYear() {
        this._selectmonthyear = document.createElement('div');
        this._selectmonthyear.className = 'calendar-select-monthyear hide';
        this._selectmonthyear.dir = this.element.dir;

        let selectmonth = document.createElement('div');
        selectmonth.dir = this.element.dir;
        selectmonth.className = 'calendar-select-month';
        for (var i = 0; i <= this.date.cultureInfo.DateTimeFormat.monthNames[this._calendarname].length; i++) {
            let button = document.createElement('button');
            let s = this.date.cultureInfo.DateTimeFormat.monthNames[this._calendarname][i];
            if (s != '') {
                button.textContent = s;
                const t = i + 1;
                button.addEventListener('click', (e) => {
                    this.setMonth(t);
                    (<HTMLButtonElement>e.target).classList.add('button-active');
                    e.stopPropagation();
                    this.selectDate(this._CurrentDate.toNumber());
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
    private addMonthView(showDate: IWNDate, addWeekName: boolean) {
        let monthbody = document.createElement('div');
        monthbody.className = 'calendar-month';
        monthbody.dir = this.element.dir;

        let _holidayIndex = 0;
        for (var i = this.date.cultureInfo.DateTimeFormat.firstDayOfWeek; i < this.date.cultureInfo.DateTimeFormat.firstDayOfWeek + 7; i++) {
            let wdidx = i < 7 ? i : i - 7;
            if (wdidx == this.date.cultureInfo.DateTimeFormat.holiday) {
                _holidayIndex = i - this.date.cultureInfo.DateTimeFormat.firstDayOfWeek;
                break;
            }
        }

        //Add Weeknames
        if (addWeekName) {
            let weekname = document.createElement('div');
            weekname.dir = this.element.dir;
            weekname.className = 'calendar-weekname';
            for (var i = this.date.cultureInfo.DateTimeFormat.firstDayOfWeek; i < this.date.cultureInfo.DateTimeFormat.firstDayOfWeek + 7; i++) {
                let wdidx = i < 7 ? i : i - 7;
                let name = document.createElement('span');
                name.textContent = this.date.cultureInfo.DateTimeFormat.shortestDayNames[wdidx];
                if (wdidx == this.date.cultureInfo.DateTimeFormat.holiday) {
                    name.className = 'holiday';
                    _holidayIndex = i - this.date.cultureInfo.DateTimeFormat.firstDayOfWeek;
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
        monthname.textContent = this.date.cultureInfo.DateTimeFormat.monthNames[this._calendarname][showDate.month - 1];
        dayview.appendChild(monthname);

        let weeknumber = document.createElement('div');
        weeknumber.className = 'calendar-week-number';
        weeknumber.dir = this.element.dir;
        showDate.day = 1;
        let startweeknumber = showDate.weekOfYear;
        showDate.day = showDate.daysInMonth;
        let endweeknumber = showDate.weekOfYear;
        for (var i = startweeknumber; i <= endweeknumber; i++) {
            let name = document.createElement('span');
            name.textContent = WNnativeDigit(i, this.date.cultureInfo, this.nativeDigit);
            weeknumber.appendChild(name);
        }
        dayview.appendChild(weeknumber);

        //Add Days
        let days = document.createElement('div');
        days.dir = this.element.dir;
        days.className = 'calendar-days';
        showDate.day = 1;
        let skip = (7 - this.date.cultureInfo.DateTimeFormat.firstDayOfWeek + showDate.dayOfWeek) % 7;

        for (var i = 0; i < skip; i++) {
            let button = document.createElement('button');
            button.className = 'readonly';
            days.appendChild(button);
        }

        let n1 = this.date.toNumberDate();
        let n2 = this.secondDate.toNumberDate();
        for (var i = 1; i <= showDate.daysInMonth; i++) {
            showDate.day = i;
            let button = document.createElement('button');
            if (((i + skip - 1) % 7) == _holidayIndex)
                button.classList.add('holiday');
            let s = WNnativeDigit(i, this.date.cultureInfo, this.nativeDigit);
            if (this._SecondDate.calendar != this.date.calendar) {
                this._SecondDate.setDateNumber(showDate.toNumberDate());
                s += '<span>' + WNnativeDigit(this._SecondDate.day, this._SecondDate.cultureInfo, this.nativeDigit) + '</span>';
            }
            if (this._ThirdDate.calendar != this.date.calendar) {
                this._ThirdDate.setDateNumber(showDate.toNumberDate());
                s += '<span>' + WNnativeDigit(this._ThirdDate.day, this._ThirdDate.cultureInfo, this.nativeDigit) + '</span>';
            }
            button.innerHTML = s;
            if (showDate.year == this._ToDayDate.year && showDate.month == this._ToDayDate.month && showDate.day == this._ToDayDate.day)
                button.classList.add('today');

            const t = showDate.toNumberDate();
            button.addEventListener('click', (e) => {
                if (!this.dateRange)
                    this._rangestate = 11;
                else
                    this._rangestate = (this._rangestate >= 11) ? 22 : 11;
                this.selectDate(t);
                e.stopPropagation();
            })
            if (this.dateRange) {
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
            if (this.allowDateHoliday || this.allowComment) {
                let comment = this.getAllowComment(showDate.toNumber());
                if (comment[1]) //Holday
                    button.classList.add('holiday');
                if (comment[0] && this.allowComment) //Comment
                {
                    button.setAttribute('wn-tooltip', comment[0]);
                    button.setAttribute('wn-tooltip-class', 'tooltip-arrow w-max-1500r');
                    new WNTooltip(button);
                }
            }
        }

        dayview.appendChild(days);

        monthbody.appendChild(dayview);

        this._body.appendChild(monthbody);
    }
    private refresh() {
        if (!this._body) return;

        this._monthyearcaption.textContent = this._CurrentDate.toString('MMMM yyyy');
        this._body.innerHTML = '';
        let tDate = new WNDate(this._CurrentDate);
        if (this._CurrentDate.toNumber() == null)
            tDate.setDate(new Date());
        tDate.day = 1;
        if (this.onlyMonthYear) {
            tDate.day = Math.floor(tDate.daysInMonth / 2);
        }
        else {
            if (WNmod(this._viewCount, 2) == 1)
                tDate.addMonths(Math.trunc(this._viewCount / -2))
            else {
                if (tDate.greaterThanEqual(this.secondDate))
                    tDate.addMonths(-this._viewCount);
                else if (this.date.year > 0 && this.secondDate.year > 0) {
                    if (tDate.greaterThanEqual(this.date) && tDate.lessThanEqual(this.secondDate)) {
                        if ((this.secondDate.toNumber() - this.date.toNumber()) / 30 < this._viewCount)
                            tDate.set(this.date);
                        else
                            tDate.set(this.secondDate);
                    }
                }
            }
            for (var i = 0; i < this._viewCount; i++) {
                this.addMonthView(tDate, i == 0 || this.element.classList.contains('calendar-horizontal'));
                tDate.day = 1;
                tDate.addMonths(1);
            }
        }
        this.showMonthYear();
    }
    private getAllowComment(date: number): [string, boolean] {
        if (this._lang == null || this._lang == undefined)
            return ['', false];

        let ln = this._lang["cdd"];
        let holiday = false;
        let tooltip = '';
        if (ln != null && !this.noCommonComment) {
            for (let ci in ln) {
                let m = new WNDate();
                m.calendar = WNCalendarFunction(ci);
                m.setDateNumber(date);
                if (ln[ci] != undefined) {
                    let f = ln[ci].filter(e => e.month == m.month && e.day == m.day);
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

        let m = new WNDate(this.date);
        m.setDateNumber(date);
        let f = this.comment.filter(e => e.month == m.month && e.day == m.day);
        for (var i = 0; i < f.length; i++) {
            let add = true;
            if (f[i].year != undefined && f[i].year > 0 && f[i].year != m.year)
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
    private renderDisplay() {
        if (this._onTextInput)
            return;
        let ret1 = this.date.toString(this.displayFormat, false);
        let ret2 = this.secondDate.toString(this.displayFormat, false);

        if (this.displayElement != undefined) {
            if (this.dateRange) {
                if (this.secondDisplayElement == undefined) {
                    this.setElementValue(this.displayElement, ret1 + ' ~ ' + ret2);
                }
                else {
                    this.setElementValue(this.displayElement, ret1);
                    this.setElementValue(this.secondDisplayElement, ret2);
                }
            }
            else
                this.setElementValue(this.displayElement, ret1);
        }
    }
    private setValueFromDisplay() {
        this._onTextInput = true;
        let ret = ['', ''];
        ret[0] = this.getElementValue(this.displayElement);
        if (this.dateRange) {
            ret[1] = this.getElementValue(this.secondDisplayElement);
        }
        if (ret[0].includes('~'))
            ret = ret[0].split('~');
        this.date.setDateString(WNDenativeDigit(ret[0], this.date.cultureInfo));
        this.secondDate.setDateString(WNDenativeDigit(ret[1], this.date.cultureInfo));

        this._CurrentDate.set(this.date);
        this.refresh();
        this._onTextInput = false;
    }

    private setElementValue(elem: HTMLElement, value: string) {
        if (elem != undefined)
            if (elem.localName == 'input')
                (<HTMLInputElement>elem).value = value;
            else
                elem.textContent = value;
    }
    private getElementValue(elem: HTMLElement): string {
        if (!elem)
            return '';
        let ret = '';
        if (elem.localName == 'input')
            ret = (<HTMLInputElement>elem).value;
        else
            ret = elem.textContent;
        return ret;
    }
    private setDateValue(date: IWNDate, ValueElement: HTMLElement): string {
        if (!ValueElement) return '';
        let tDate = new WNDate(date);
        tDate.setDate(new Date(this.getElementValue(ValueElement)));
        tDate.setYMD(date.year, date.month, date.day);

        date.setYMD(tDate.year, tDate.month, tDate.day, tDate.hour, tDate.minute, tDate.second, tDate.milliseconds);

        return tDate.toDateTime().toISOString();
    }
}