class WNTime implements IWNTime {
    public readonly nameType: string = 'WNTime';
    public element: HTMLFormElement;
    public date: IWNDate = new WNDate();

    public nativeDigit = wnConfig.nativeDigit || false;
    public displayFormat: string = 'HH:mm';
    public valueElement: HTMLElement;
    public inputFormat = 'hm';
    public hourLongStep = 5;
    public minuteLongStep = 15;

    private displayElement: HTMLElement;
    private ontextinput = false;
    private _selectlabel: HTMLLabelElement;
    private _inputhour: HTMLInputElement;
    private _inputminute: HTMLInputElement;
    private _inputsecond: HTMLInputElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.init();
        }
    }
    private init():void {
        if (this.element.hasAttribute('calendar')) this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo')) this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute('native-digit')) this.nativeDigit = WNparseBoolean(this.element.getAttribute('nativeDigit'), false);
        if (this.element.hasAttribute('input-format')) this.inputFormat = WNparseString(this.element.getAttribute('input-format'), 'hm');

        //Inputs
        if (this.element.hasAttribute('display-id')) this.displayElement = document.getElementById(this.element.getAttribute('display-id'));

        if (this.displayElement != undefined) {
            this.displayElement.addEventListener('input', () => { this.setValueFromDisplay(); });
            this.displayElement.addEventListener('change', () => { this.renderDisplay(); });
        }

        this.displayFormat = this.date.cultureInfo.DateTimeFormat.shortTimePattern;
        if (this.element.hasAttribute('display-format')) this.displayFormat = WNparseString(this.element.getAttribute('display-format'), this.date.cultureInfo.DateTimeFormat.shortTimePattern);

        if (this.element.hasAttribute('value-id')) this.valueElement = document.getElementById(this.element.getAttribute('value-id'));
        //---

        this.date.setDate(new Date(this.getElementValue(this.valueElement)));

        this.date.dateChanged = () => {
            let tDate = new WNDate(this.date);
            tDate.setDate(new Date(this.getElementValue(this.valueElement)));
            tDate.hour = this.date.hour;
            tDate.minute = this.date.minute;
            tDate.second = this.date.second;

            this.setElementValue(this.valueElement, this.setDateValue(this.date, this.valueElement));
            this.renderDisplay();
        };

        this.addObjects();
        this.refresh();
    }
    public get value() { return this.date.toDateTime(); }
    public set value(value: Date) { this.date.setDate(value); this.refresh(); }
    public setHour(value: number) {
        if (value > 24) value -= 24;
        if (value < 0) value += 24;

        this.date.hour = value;
        this.refresh();
    }
    public setMinute(value: number) {
        if (value > 59) value -= 60;
        if (value < 0) value += 60;

        this.date.minute = value;
        this.refresh();
    }
    public setSecond(value: number) {
        if (value > 59) value -= 60;
        if (value < 0) value += 60;

        this.date.second = value;
        this.refresh();
    }
    private addObjects() {
        if (!this.element.classList.contains('time'))
            this.element.classList.add('time');

        this._selectlabel = document.createElement('label');
        this._selectlabel.className = 'time-result';
        this.element.appendChild(this._selectlabel);

        let timeinput = document.createElement('div');
        timeinput.className = 'time-input';

        if (this.inputFormat.toLocaleLowerCase().includes('h')) {
            let a = this.addSection();
            a[1].addEventListener('click', (e) => {
                this.setHour(this.date.hour + this.hourLongStep);
                e.stopPropagation();
            });

            a[2].addEventListener('click', (e) => {
                this.setHour(this.date.hour + 1);
                e.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.setHour(parseInt((<HTMLInputElement>e.target).value));
            });
            a[4].addEventListener('click', (e) => {
                this.setHour(this.date.hour - 1);
                e.stopPropagation();
            });
            a[5].addEventListener('click', (e) => {
                this.setHour(this.date.hour - this.hourLongStep);
                e.stopPropagation();
            });

            this._inputhour = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.inputFormat.toLocaleLowerCase().includes('m')) {
            let a = this.addSection();
            a[1].addEventListener('click', (e) => {
                this.setMinute(this.date.minute + this.minuteLongStep);
                e.stopPropagation();
            });

            a[2].addEventListener('click', (e) => {
                this.setMinute(this.date.minute + 1);
                e.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.setMinute(parseInt((<HTMLInputElement>e.target).value));
            });
            a[4].addEventListener('click', (e) => {
                this.setMinute(this.date.minute - 1);
                e.stopPropagation();
            });
            a[5].addEventListener('click', (e) => {
                this.setMinute(this.date.minute - this.minuteLongStep);
                e.stopPropagation();
            });

            this._inputminute = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.inputFormat.toLocaleLowerCase().includes('s')) {
            let a = this.addSection();
            a[1].addEventListener('click', (e) => {
                this.setSecond(this.date.second + this.minuteLongStep);
                e.stopPropagation();
            });

            a[2].addEventListener('click', (e) => {
                this.setSecond(this.date.second + 1);
                e.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.setSecond(parseInt((<HTMLInputElement>e.target).value));
            });
            a[4].addEventListener('click', (e) => {
                this.setSecond(this.date.second - 1);
                e.stopPropagation();
            });
            a[5].addEventListener('click', (e) => {
                this.setSecond(this.date.second - this.minuteLongStep);
                e.stopPropagation();
            });

            this._inputsecond = a[3];
            timeinput.appendChild(a[0]);
        }

        this.element.appendChild(timeinput);
    }
    private addSection(): [HTMLDivElement, HTMLButtonElement, HTMLButtonElement, HTMLInputElement, HTMLButtonElement, HTMLButtonElement] {
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
    private refresh() {
        this._selectlabel.textContent = this.date.toString(this.date.cultureInfo.DateTimeFormat.longTimePattern, this.nativeDigit);
        if (this._inputhour != null)
            this._inputhour.value = this.date.hour.toString();
        if (this._inputminute != null)
            this._inputminute.value = this.date.minute.toString();
        if (this._inputsecond != null)
            this._inputsecond.value = this.date.second.toString();
    }
    private renderDisplay() {
        if (this.ontextinput)
            return;
        let ret1 = this.date.toString(this.displayFormat, false);

        if (this.displayElement != undefined) {
            this.setElementValue(this.displayElement, ret1);
        }
    }
    private setValueFromDisplay() {
        this.ontextinput = true;
        let ret = this.getElementValue(this.displayElement);
        this.date.setDateString(WNDenativeDigit(ret, this.date.cultureInfo));
        this.refresh();
        this.ontextinput = false;
    }
    private setElementValue(elem: HTMLElement, value: string) {
        if (elem != undefined)
            if (elem.localName == 'input')
                (<HTMLInputElement>elem).value = value;
            else
                elem.textContent = value;
    }
    private getElementValue(elem: HTMLElement): string {
        let ret = '';
        if (elem != undefined)
            if (elem.localName == 'input')
                ret = (<HTMLInputElement>elem).value;
            else
                ret = elem.textContent;
        return ret;
    }
    private setDateValue(date: IWNDate, valueElement: HTMLElement): string {
        let tDate = new WNDate(date);
        tDate.setDate(new Date(this.getElementValue(valueElement)));
        tDate.hour = date.hour;
        tDate.minute = date.minute;
        tDate.second = date.second;
        tDate.milliseconds = date.milliseconds;

        date.setYMD(tDate.year, tDate.month, tDate.day, tDate.hour, tDate.minute, tDate.second, tDate.milliseconds);

        return tDate.toDateTime().toISOString();
    }
}