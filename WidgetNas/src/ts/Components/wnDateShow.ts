class wndateshow {
    element: HTMLFormElement;
    format = '';
    today = false;
    Date: wnDate = new wnDate();

    private _value: Date;

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
        this.format = this.Date.CultureInfo.DateTimeFormat.FullDateTimePattern;
        if (this.element.hasAttribute('format'))
            this.format = this.element.getAttribute('format');
        if (this.element.hasAttribute('today'))
            this.today = WNparseBoolean(this.element.getAttribute('today'), false);
        if (this.today && this.format == this.Date.CultureInfo.DateTimeFormat.FullDateTimePattern) {
            this.format = this.Date.CultureInfo.DateTimeFormat.LongDatePattern;
        }
        if (this.element.hasAttribute('interval')) {
            setInterval(() => {
                this.Date.SetDate(new Date());
            }, WNparseNumber(this.element.getAttribute('interval')));
        }
        if (this.element.localName == 'input')
            this.value = new Date(this.element.value);
        else
            this.value = new Date(this.element.innerText);
        //this.Date.SetDate(this._value);
        this.Date.DateChanged = () => { this.refresh(); };
    }
    get value() { return this._value; }
    set value(value: Date) { this._value = value; this.Date.SetDate(this._value); this.refresh(); }
    refresh() {
        if (this.today)
            this.Date.SetDate(new Date());
        let disp = this.Date.toString(this.format);
        if (this.element.localName == 'input') {
            this.element.value = disp;
        }
        else
            this.element.innerHTML = disp;
    }
}