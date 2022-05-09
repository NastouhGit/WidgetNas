class wntime {
    element: HTMLFormElement;
    Date: wnDate = new wnDate();

    NaitveDigit = WNDefaultNaitveDigit || false;
    DisplayElement: HTMLElement;
    DisplayFormat: string = 'HH:mm';
    ValueElement: HTMLElement;
    InputFormat = 'hm';
    HourLongStep = 5;
    MinuteLongStep = 15;

    private ontextinput = false;
    private _selectlabel: HTMLLabelElement;
    private _inputhour: HTMLInputElement;
    private _inputminute: HTMLInputElement;
    private _inputsecond: HTMLInputElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private Init() {
        if (this.element.hasAttribute('calendar'))
            this.Date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')() as wnCalendar;
        if (this.element.hasAttribute('cultureinfo'))
            this.Date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')() as wnCultureInfo;
        if (this.element.hasAttribute('naitvedigit'))
            this.NaitveDigit = WNparseBoolean(this.element.getAttribute('naitvedigit'), false);

        if (this.element.hasAttribute('input-format'))
            this.InputFormat = WNparseString(this.element.getAttribute('input-format'), 'hm');

        //Inputs
        if (this.element.hasAttribute('display-id'))
            this.DisplayElement = document.getElementById(this.element.getAttribute('display-id'));

        if (this.DisplayElement != undefined) {
            this.DisplayElement.addEventListener('input', () => { this.SetValueFromDisplay(); });
            this.DisplayElement.addEventListener('change', () => { this.RenderDisplay(); });
        }

        this.DisplayFormat = this.Date.CultureInfo.DateTimeFormat.ShortTimePattern;
        if (this.element.hasAttribute('display-format'))
            this.DisplayFormat = WNparseString(this.element.getAttribute('display-format'), this.Date.CultureInfo.DateTimeFormat.ShortTimePattern);

        if (this.element.hasAttribute('value-id'))
            this.ValueElement = document.getElementById(this.element.getAttribute('value-id'));
        //---

        this.Date.SetDate(new Date(this.GetElementValue(this.ValueElement)));

        this.Date.DateChanged = () => {
            let tDate = new wnDate(this.Date);
            tDate.SetDate(new Date(this.GetElementValue(this.ValueElement)));
            tDate.Hour = this.Date.Hour;
            tDate.Minute = this.Date.Minute;
            tDate.Second = this.Date.Second;

            this.SetElementValue(this.ValueElement, this.SetDateValue(this.Date, this.ValueElement));
            this.RenderDisplay();
        };

        this.AddObjects();
        this.refresh();
    }
    get value() { return this.Date.ToDateTime(); }
    set value(value: Date) { this.Date.SetDate(value); this.refresh(); }
    SetHour(value: number) {
        if (value > 24) value -= 24;
        if (value < 0) value += 24;

        this.Date.Hour = value;
        this.refresh();
    }
    SetMinute(value: number) {
        if (value > 59) value -= 60;
        if (value < 0) value += 60;

        this.Date.Minute = value;
        this.refresh();
    }
    SetSecond(value: number) {
        if (value > 59) value -= 60;
        if (value < 0) value += 60;

        this.Date.Second = value;
        this.refresh();
    }
    AddObjects() {
        if (!this.element.classList.contains('time'))
            this.element.classList.add('time');

        this._selectlabel = document.createElement('label');
        this._selectlabel.className = 'time-result';
        this.element.appendChild(this._selectlabel);

        let timeinput = document.createElement('div');
        timeinput.className = 'time-input';

        if (this.InputFormat.toLocaleLowerCase().includes('h')) {
            let a = this.AddSection();
            a[1].addEventListener('click', () => {
                this.SetHour(this.Date.Hour + this.HourLongStep);
                event.stopPropagation();
            });

            a[2].addEventListener('click', () => {
                this.SetHour(this.Date.Hour + 1);
                event.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.SetHour(parseInt((<HTMLInputElement>e.target).value));
            });
            a[4].addEventListener('click', () => {
                this.SetHour(this.Date.Hour - 1);
                event.stopPropagation();
            });
            a[5].addEventListener('click', () => {
                this.SetHour(this.Date.Hour - this.HourLongStep);
                event.stopPropagation();
            });

            this._inputhour = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.InputFormat.toLocaleLowerCase().includes('m')) {
            let a = this.AddSection();
            a[1].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute + this.MinuteLongStep);
                event.stopPropagation();
            });

            a[2].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute + 1);
                event.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.SetMinute(parseInt((<HTMLInputElement>e.target).value));
            });
            a[4].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute - 1);
                event.stopPropagation();
            });
            a[5].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute - this.MinuteLongStep);
                event.stopPropagation();
            });

            this._inputminute = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.InputFormat.toLocaleLowerCase().includes('s')) {
            let a = this.AddSection();
            a[1].addEventListener('click', () => {
                this.SetSecond(this.Date.Second + this.MinuteLongStep);
                event.stopPropagation();
            });

            a[2].addEventListener('click', () => {
                this.SetSecond(this.Date.Second + 1);
                event.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.SetSecond(parseInt((<HTMLInputElement>e.target).value));
            });
            a[4].addEventListener('click', () => {
                this.SetSecond(this.Date.Second - 1);
                event.stopPropagation();
            });
            a[5].addEventListener('click', () => {
                this.SetSecond(this.Date.Second - this.MinuteLongStep);
                event.stopPropagation();
            });

            this._inputsecond = a[3];
            timeinput.appendChild(a[0]);
        }

        this.element.appendChild(timeinput);
    }
    AddSection(): [HTMLDivElement, HTMLButtonElement, HTMLButtonElement, HTMLInputElement, HTMLButtonElement, HTMLButtonElement] {
        let div = document.createElement('div');

        let doubleup = document.createElement('button');
        div.appendChild(doubleup);

        let up = document.createElement('button');
        div.appendChild(up);

        let input = document.createElement('input');
        input.type = 'number';
        div.appendChild(input);

        let down = document.createElement('button');
        div.appendChild(down);

        let doubledown = document.createElement('button');
        div.appendChild(doubledown);
        return [div, doubleup, up, input, down, doubledown];
    }
    refresh() {
        this._selectlabel.textContent = this.Date.toString(this.Date.CultureInfo.DateTimeFormat.LongTimePattern, this.NaitveDigit);
        if (this._inputhour != null)
            this._inputhour.value = this.Date.Hour.toString();
        if (this._inputminute != null)
            this._inputminute.value = this.Date.Minute.toString();
        if (this._inputsecond != null)
            this._inputsecond.value = this.Date.Second.toString();
    }
    RenderDisplay() {
        if (this.ontextinput)
            return;
        let ret1 = this.Date.toString(this.DisplayFormat, this.NaitveDigit);

        if (this.DisplayElement != undefined) {
            this.SetElementValue(this.DisplayElement, ret1);
        }
    }
    SetValueFromDisplay() {
        this.ontextinput = true;
        let ret = this.GetElementValue(this.DisplayElement);
        this.Date.SetDateString(WNDeNaitveDigit(ret, this.Date.CultureInfo));
        this.refresh();
        this.ontextinput = false;
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
        tDate.Hour = date.Hour;
        tDate.Minute = date.Minute;
        tDate.Second = date.Second;
        tDate.Milliseconds = date.Milliseconds;

        date.SetYMD(tDate.Year, tDate.Month, tDate.Day, tDate.Hour, tDate.Minute, tDate.Second, tDate.Milliseconds);

        return tDate.ToDateTime().toISOString();
    }
}