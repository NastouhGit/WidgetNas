class WNConfig implements IWNConfig {
    nativeDigit: boolean=true;
    calendar: IWNCalendar;
    locale: Intl.Locale;
    dateTimeFormat: Intl.DateTimeFormat;
    numberFormat: Intl.NumberFormat;
    private _cultureInfo: IWNCultureInfo;
    get cultureInfo(): IWNCultureInfo { return this._cultureInfo; }
    set cultureInfo(value: IWNCultureInfo) {
        this._cultureInfo = value;
        this.language = WNLanguage[this._cultureInfo.twoLetterISOLanguageName];
        this.locale = new Intl.Locale(this._cultureInfo.TextInfo.cultureName);
        this.dateTimeFormat = Intl.DateTimeFormat(this.locale.baseName);
        this.numberFormat = Intl.NumberFormat(this.locale.baseName);
    }
    hijriAdjustment: number = 0;
    language: {};
    authorizationToken: string = '';
    private _baseFetchUri: string = '';
    get baseFetchUri() { return this._baseFetchUri; }
    set baseFetchUri(value) {
        this._baseFetchUri = value.trim().toLowerCase();
        if (!this._baseFetchUri.endsWith('/'))
            this._baseFetchUri += '/';
    }
    constructor() {
        if (document.documentElement.lang.includes('fa') || window.navigator.languages.includes('fa')) {
            this.calendar = new WNPersianCalendar();
            this.cultureInfo = new WNCultureInfo_fa_IR();
        }
        else {
            this.calendar = new WNGregorianCalendar();
            this.cultureInfo = new WNCultureInfo_en_US();
        }

    }
}

