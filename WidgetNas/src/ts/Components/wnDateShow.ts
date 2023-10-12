class WNDateShow implements IWNDateShow {
    public readonly nameType: string = 'WNDateShow';
    public element: HTMLElement;
    public format = '';
    public today = false;
    public date: IWNDate = new WNDate();

    private _value: Date;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.init();
        }
    }
    private init() {
        if (this.element.hasAttribute('calendar'))
            this.date.calendar = WNCalendarFunction( this.element.getAttribute('calendar') );
        if (this.element.hasAttribute('cultureinfo'))
            this.date.cultureInfo = WNCultureInfoFunction( this.element.getAttribute('cultureinfo') );
        this.format = this.date.cultureInfo.DateTimeFormat.fullDateTimePattern;
        if (this.element.hasAttribute('format'))
            this.format = this.element.getAttribute('format');
        if (this.element.hasAttribute('today'))
            this.today = WNparseBoolean(this.element.getAttribute('today'), false);
        if (this.today && this.format == this.date.cultureInfo.DateTimeFormat.fullDateTimePattern) {
            this.format = this.date.cultureInfo.DateTimeFormat.longDatePattern;
        }
        if (this.element.hasAttribute('interval')) {
            setInterval(() => {
                this.date.setDate(new Date());
            }, WNparseNumber(this.element.getAttribute('interval')));
        }
        if (this.element.localName == 'input')
            this.value = new Date((this.element as HTMLInputElement).value);
        else
            this.value = new Date(this.element.innerText);
        //this.date.setDate(this._value);
        this.date.dateChanged = () => { this.refresh(); };
    }
    get value() { return this._value; }
    set value(value: Date) { this._value = value; this.date.setDate(this._value); this.refresh(); }
    refresh() {
        if (this.today)
            this.date.setDate(new Date());
        let disp = this.date.toString(this.format);
        if (this.element.localName == 'input') {
            (<HTMLInputElement>this.element).value = disp;
        }
        else
            this.element.innerHTML = disp;
    }
}