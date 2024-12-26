declare function wnabout(): string;
declare var WNLanguage: {
    [id: string]: any;
};
declare var wnConfig: IWNConfig;
declare class WNCultureInfo_ar_SA implements IWNCultureInfo {
    readonly displayName = "\u0627\u0644\u0639\u0631\u0628\u064A\u0629";
    readonly englishName = "Arabic";
    readonly threeLetterISOLanguageName = "ara";
    readonly twoLetterISOLanguageName = "ar";
    readonly DateTimeFormat: {
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthNames: {
            persian: string[];
            gregory: string[];
            julian: string[];
            islamic: string[];
        };
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: number;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthNames: {
            persian: string[];
            gregory: string[];
            julian: string[];
            islamic: string[];
        };
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        timeSeparator: string;
        yearMonthPattern: string;
        holiday: number;
    };
    readonly NumberFormat: {
        currencyDecimalDigits: number;
        currencyDecimalSeparator: string;
        currencyGroupSeparator: string;
        currencyGroupSizes: number[];
        currencyNegativePattern: number;
        currencyPositivePattern: number;
        currencySymbol: string;
        nanSymbol: string;
        nativeDigits: string[];
        negativeInfinitySymbol: string;
        negativeSign: string;
        numberDecimalDigits: number;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
        numberGroupSizes: number[];
        numberNegativePattern: number;
        perMilleSymbol: string;
        percentDecimalDigits: number;
        percentDecimalSeparator: string;
        percentGroupSeparator: string;
        percentGroupSizes: number[];
        percentNegativePattern: number;
        percentPositivePattern: number;
        percentSymbol: string;
        positiveInfinitySymbol: string;
        positiveSign: string;
    };
    readonly TextInfo: {
        ansiCodePage: number;
        cultureName: string;
        ebcdicCodePage: number;
        isRightToLeft: boolean;
        lcid: number;
        listSeparator: string;
        macCodePage: number;
        oemCodePage: number;
    };
}
declare class WNCultureInfo_en_US implements IWNCultureInfo {
    readonly displayName = "English";
    readonly englishName = "English";
    readonly threeLetterISOLanguageName = "eng";
    readonly twoLetterISOLanguageName = "en";
    readonly DateTimeFormat: {
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthNames: {
            gregory: string[];
            julian: string[];
            persian: string[];
            islamic: string[];
        };
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: number;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthNames: {
            gregory: string[];
            julian: string[];
            persian: string[];
            islamic: string[];
        };
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        timeSeparator: string;
        yearMonthPattern: string;
        holiday: number;
    };
    readonly NumberFormat: {
        currencyDecimalDigits: number;
        currencyDecimalSeparator: string;
        currencyGroupSeparator: string;
        currencyGroupSizes: number[];
        currencyNegativePattern: number;
        currencyPositivePattern: number;
        currencySymbol: string;
        nanSymbol: string;
        nativeDigits: string[];
        negativeInfinitySymbol: string;
        negativeSign: string;
        numberDecimalDigits: number;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
        numberGroupSizes: number[];
        numberNegativePattern: number;
        perMilleSymbol: string;
        percentDecimalDigits: number;
        percentDecimalSeparator: string;
        percentGroupSeparator: string;
        percentGroupSizes: number[];
        percentNegativePattern: number;
        percentPositivePattern: number;
        percentSymbol: string;
        positiveInfinitySymbol: string;
        positiveSign: string;
    };
    readonly TextInfo: {
        ansiCodePage: number;
        cultureName: string;
        ebcdicCodePage: number;
        isRightToLeft: boolean;
        lcid: number;
        listSeparator: string;
        macCodePage: number;
        oemCodePage: number;
    };
}
declare class WNCultureInfo_fa_IR implements IWNCultureInfo {
    readonly displayName = "\u067E\u0627\u0631\u0633\u06CC";
    readonly englishName = "Persian";
    readonly threeLetterISOLanguageName = "fas";
    readonly twoLetterISOLanguageName = "fa";
    readonly DateTimeFormat: {
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthNames: {
            persian: string[];
            gregory: string[];
            julian: string[];
            islamic: string[];
        };
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: number;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthNames: {
            persian: string[];
            gregory: string[];
            julian: string[];
            islamic: string[];
        };
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        timeSeparator: string;
        yearMonthPattern: string;
        holiday: number;
    };
    readonly NumberFormat: {
        currencyDecimalDigits: number;
        currencyDecimalSeparator: string;
        currencyGroupSeparator: string;
        currencyGroupSizes: number[];
        currencyNegativePattern: number;
        currencyPositivePattern: number;
        currencySymbol: string;
        nanSymbol: string;
        nativeDigits: string[];
        negativeInfinitySymbol: string;
        negativeSign: string;
        numberDecimalDigits: number;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
        numberGroupSizes: number[];
        numberNegativePattern: number;
        perMilleSymbol: string;
        percentDecimalDigits: number;
        percentDecimalSeparator: string;
        percentGroupSeparator: string;
        percentGroupSizes: number[];
        percentNegativePattern: number;
        percentPositivePattern: number;
        percentSymbol: string;
        positiveInfinitySymbol: string;
        positiveSign: string;
    };
    readonly TextInfo: {
        ansiCodePage: number;
        cultureName: string;
        ebcdicCodePage: number;
        isRightToLeft: boolean;
        lcid: number;
        listSeparator: string;
        macCodePage: number;
        oemCodePage: number;
    };
}
declare class WNDate implements IWNDate {
    private _Year;
    private _Month;
    private _Day;
    private _Hour;
    private _Minute;
    private _Second;
    private _Millisecond;
    private _DayOfWeek;
    dateChanged: (t: IWNDate) => {};
    private GregorianCalnedar;
    cultureInfo: IWNCultureInfo;
    calendar: IWNCalendar;
    constructor(lCultureInfo?: IWNCultureInfo | IWNDate, lCalendar?: IWNCalendar, lDate?: Date);
    addDays(value: number): void;
    addHours(value: number): void;
    addMilliseconds(value: number): void;
    addMinutes(value: number): void;
    addMonths(value: number): void;
    addSeconds(value: number): void;
    addYears(value: number): void;
    addWeeks(value: number): void;
    set year(value: number);
    get year(): number;
    set month(value: number);
    get month(): number;
    set day(value: number);
    get day(): number;
    set hour(value: number);
    get hour(): number;
    set minute(value: number);
    get minute(): number;
    set second(value: number);
    get second(): number;
    set milliseconds(value: number);
    get milliseconds(): number;
    get dayOfWeek(): number;
    get dayOfYear(): number;
    get daysInMonth(): number;
    get daysInYear(): number;
    get isLeapYear(): boolean;
    get leapMonth(): number;
    get monthsInYear(): number;
    get isLeapMonth(): boolean;
    get isLeapDay(): boolean;
    get weekOfYear(): number;
    setDate(date: Date): void;
    setUTCDate(date: any): void;
    setDateYMD(Year: number, Month: number, Day: number, Hour?: number, Minute?: number, Second?: number, Millisecond?: number): void;
    setYMD(Year: number, Month: number, Day: number, Hour?: number, Minute?: number, Second?: number, Millisecond?: number): void;
    setDateNumber(jd: number): void;
    setDateString(s: string): void;
    set(value: IWNDate): void;
    set value(value: any);
    get value(): any;
    toDateTime(): Date;
    toNumber(): number;
    toNumberDate(): number;
    toNumberYMD(Year: number, Month: number, Day: number): number;
    toString(format?: string, nativeDigit?: boolean): string;
    toLongDateString(nativeDigit?: boolean): string;
    toShortDateString(nativeDigit?: boolean): string;
    toLongTimeString(nativeDigit?: boolean): string;
    toShortTimeString(nativeDigit?: boolean): string;
    convert(value: any, format?: string, nativeDigit?: boolean): string;
    private fixedDate;
    private limitToRange;
    lessThan(rhs: IWNDate): boolean;
    lessThanEqual(rhs: IWNDate): boolean;
    greaterThan(rhs: IWNDate): boolean;
    greaterThanEqual(rhs: IWNDate): boolean;
    equal(rhs: IWNDate): boolean;
    notEqual(rhs: IWNDate): boolean;
    lessThanExact(rhs: IWNDate): boolean;
    lessThanEqualExact(rhs: IWNDate): boolean;
    greaterThanExact(rhs: IWNDate): boolean;
    greaterThanEqualExact(rhs: IWNDate): boolean;
    equalExact(rhs: IWNDate): boolean;
    notEqualExact(rhs: IWNDate): boolean;
}
declare class WNGregorianCalendar implements IWNCalendar {
    readonly leapMonth: number;
    readonly monthsInYear: number;
    readonly localeName: string;
    private GREGORIAN_EPOCH;
    ["constructor"](): IWNCalendar;
    getDayOfWeek(Year: number, Month: number, Day: number): number;
    getDayOfYear(Year: number, Month: number, Day: number): number;
    getDaysInMonth(Year: number, Month: number): number;
    getDaysInYear(Year: number): number;
    getWeekOfYear(Year: number, Month: number, Day: number): number;
    isLeapDay(Year: number, Month: number, Day: number): boolean;
    isLeapMonth(Year: number, Month: number): boolean;
    isLeapYear(Year: number): boolean;
    getMonthsDays(mLeapYear: boolean): number[];
    getDaysFromBase(Year: number, Month: number, Day: number): number;
    getYearMonthDayFromDays(jd: number): {
        year: number;
        month: number;
        day: number;
    };
}
declare class WNHijriCalendar implements IWNCalendar {
    readonly localeName: string;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    readonly hijriAdjustment: number;
    private ISLAMIC_EPOCH;
    ["constructor"](): IWNCalendar;
    constructor();
    getDayOfWeek(Year: number, Month: number, Day: number): number;
    getDayOfYear(Year: number, Month: number, Day: number): number;
    getDaysInMonth(Year: number, Month: number): number;
    getDaysInYear(Year: number): number;
    getWeekOfYear(Year: number, Month: number, Day: number): number;
    isLeapDay(Year: number, Month: number, Day: number): boolean;
    isLeapMonth(Year: number, Month: number): boolean;
    isLeapYear(Year: number): boolean;
    getDaysFromBase(Year: number, Month: number, Day: number): number;
    getYearMonthDayFromDays(jd: number): {
        year: number;
        month: number;
        day: number;
    };
    getMonthsDays(mLeapYear: boolean): number[];
}
declare class WNJulianCalendar implements IWNCalendar {
    readonly localeName: string;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    ["constructor"](): IWNCalendar;
    getDayOfWeek(Year: number, Month: number, Day: number): number;
    getDayOfYear(Year: number, Month: number, Day: number): number;
    getDaysInMonth(Year: number, Month: number): number;
    getDaysInYear(Year: number): number;
    getWeekOfYear(Year: number, Month: number, Day: number): number;
    isLeapDay(Year: number, Month: number, Day: number): boolean;
    isLeapMonth(Year: number, Month: number): boolean;
    isLeapYear(Year: number): boolean;
    getMonthsDays(mLeapYear: boolean): number[];
    getDaysFromBase(Year: number, Month: number, Day: number): number;
    getYearMonthDayFromDays(jd: number): {
        year: number;
        month: number;
        day: number;
    };
}
declare class WNPersianCalendar implements IWNCalendar {
    readonly localeName: string;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    private PERSIAN_EPOCH;
    getDayOfWeek(Year: number, Month: number, Day: number): number;
    getDayOfYear(Year: number, Month: number, Day: number): number;
    getDaysInMonth(Year: number, Month: number): number;
    getDaysInYear(Year: number): number;
    getWeekOfYear(Year: number, Month: number, Day: number): number;
    isLeapDay(Year: number, Month: number, Day: number): boolean;
    isLeapMonth(Year: number, Month: number): boolean;
    isLeapYear(Year: number): boolean;
    getDaysFromBase(Year: number, Month: number, Day: number): number;
    getYearMonthDayFromDays(jd: number): {
        year: number;
        month: number;
        day: number;
    };
    getMonthsDays(mLeapYear: boolean): number[];
}
declare function getFormData(Form: HTMLFormElement): string;
declare function getRequestInit(): any;
declare function getRequestFormInit(): any;
declare function getPostUrl(postUrl: string): string;
declare function Post(data: any, postUrl: string, init?: any): Promise<any>;
declare function Get(data: any, postUrl: string, init?: any): Promise<any>;
declare function getText(postUrl: string, init?: any): Promise<any>;
declare function getFile(path: any, postUrl: string, init?: any): Promise<any>;
declare function upload(files: any, destination: string, postUrl: string, init?: any): Promise<any>;
declare var WNElements: {
    [id: string]: WNElement;
};
declare class WNElement {
    wn: any | IWNComponent | IWNValidator | IWNSticky;
    element: any;
    get htmlElement(): HTMLElement;
    get document(): Document;
    get fieldSetElement(): HTMLFieldSetElement;
    get embedElement(): HTMLEmbedElement;
    get formElement(): HTMLFormElement;
    get hrElement(): HTMLHRElement;
    get headElement(): HTMLHeadElement;
    get headingElement(): HTMLHeadingElement;
    get linkElement(): HTMLLinkElement;
    get iFrameElement(): HTMLIFrameElement;
    get imageElement(): HTMLImageElement;
    get inputElement(): HTMLInputElement;
    get liElement(): HTMLLIElement;
    get labelElement(): HTMLLabelElement;
    get legendElement(): HTMLLegendElement;
    get mapElement(): HTMLMapElement;
    get mediaElement(): HTMLMediaElement;
    get menuElement(): HTMLMenuElement;
    get metaElement(): HTMLMetaElement;
    get meterElement(): HTMLMeterElement;
    get oListElement(): HTMLOListElement;
    get objectElement(): HTMLObjectElement;
    get optGroupElement(): HTMLOptGroupElement;
    get optionElement(): HTMLOptionElement;
    get outputElement(): HTMLOutputElement;
    get paragraphElement(): HTMLParagraphElement;
    get pictureElement(): HTMLPictureElement;
    get preElement(): HTMLPreElement;
    get progressElement(): HTMLProgressElement;
    get quoteElement(): HTMLQuoteElement;
    get scriptElement(): HTMLScriptElement;
    get selectElement(): HTMLSelectElement;
    get sourceElement(): HTMLSourceElement;
    get spanElement(): HTMLSpanElement;
    get tableCaptionElement(): HTMLTableCaptionElement;
    get tableCellElement(): HTMLTableCellElement;
    get tableColElement(): HTMLTableColElement;
    get tableElement(): HTMLTableElement;
    get tableRowElement(): HTMLTableRowElement;
    get tableSectionElement(): HTMLTableSectionElement;
    get templateElement(): HTMLTemplateElement;
    get textAreaElement(): HTMLTextAreaElement;
    get timeElement(): HTMLTimeElement;
    get titleElement(): HTMLTitleElement;
    get trackElement(): HTMLTrackElement;
    get uListElement(): HTMLUListElement;
    get videoElement(): HTMLVideoElement;
    ready(callBack: any, options?: boolean): void;
    click(callBack: any): void;
    change(callBack: any): void;
    input(callBack: any): void;
    focus(callBack: any): void;
    focusIn(callBack: any): void;
    focusOut(callBack: any): void;
    resize(callBack: any): void;
    scroll(callBack: any): void;
    select(callBack: any): void;
    contextMenu(callBack: any): void;
    copy(callBack: any): void;
    cut(callBack: any): void;
    paste(callBack: any): void;
    dblClick(callBack: any): void;
    drag(callBack: any): void;
    dragend(callBack: any): void;
    dragEnter(callBack: any): void;
    dragLeave(callBack: any): void;
    dragOver(callBack: any): void;
    dragStart(callBack: any): void;
    drop(callBack: any): void;
    keyDown(callBack: any): void;
    keyPress(callBack: any): void;
    keyUp(callBack: any): void;
    mouseDown(callBack: any): void;
    mouseEnter(callBack: any): void;
    mouseLeave(callBack: any): void;
    mouseMove(callBack: any): void;
    mouseOver(callBack: any): void;
    mouseOut(callBack: any): void;
    mouseUp(callBack: any): void;
    touchCancel(callBack: any): void;
    touchEnd(callBack: any): void;
    touchMove(callBack: any): void;
    touchStart(callBack: any): void;
    wheel(callBack: any): void;
    constructor(element: Document | HTMLElement);
}
declare function WNReset(): void;
declare function WN(element: HTMLElement | Document | string): WNElement;
type PositionParameters = {
    fit: boolean;
    direction: string;
};
declare function WNSetElementPosition(source: HTMLElement, base: HTMLElement, param: PositionParameters): void;
declare function WNmod(a: number, b: number): number;
declare function WNparseBoolean(value: any, Default?: boolean): boolean;
declare function WNparseNumber(value: any, Default?: number, culture?: IWNCultureInfo): number;
declare function WNparseFloat(value: any, Default?: number, culture?: IWNCultureInfo): number;
declare function WNparseString(value: any, Default?: string): string;
declare function WNTrim(value: string, trimstr?: string): string;
declare function WNTrimStart(value: string, trimstr?: string): string;
declare function WNTrimEnd(value: string, trimstr?: string): string;
declare function WNLimitRange(value: number, min: number, max: number): number;
declare function WNnativeDigit(number: number | string, culture: IWNCultureInfo, convert: boolean): string;
declare function WNDenativeDigit(value: string, culture?: IWNCultureInfo): string;
declare function WNGetNodesList(list: string, parent?: any, thiselemnt?: HTMLElement): HTMLElement[];
declare function WNParentHaveClass(child: HTMLElement, parentClassName: string): boolean;
declare function WNCalcValue(value1: string, value2: string, sign: string, elem?: HTMLElement, min?: number, max?: number): string;
declare function WNContainElement(elem: HTMLElement, findin: HTMLElement): boolean;
declare function WNHtmlToEscape(src: string): string;
declare function WNHtmlToText(src: string): string;
declare function WNValueUnit(value: string): {
    value: number;
    unit: string;
};
declare function WNGetCookie(cname: string): string;
declare function WNSetCookie(cname: string, cvalue: string, exdays: number, samesite?: string, secure?: boolean, HTTPOnly?: boolean): void;
declare function WNGetStorage(key: string): string;
declare function WNSetStorage(key: string, value: string, localstorage: boolean): boolean;
declare function WNSleep(ms: number): Promise<unknown>;
declare function WNAddClassList(elem: HTMLElement, classes: string): void;
declare function WNRemoveClassList(elem: HTMLElement, classes: string): void;
declare function WNCalendarFunction(name: string): IWNCalendar;
declare function WNCultureInfoFunction(name: string): IWNCultureInfo;
declare function WNGenerateFunction(body: string, params?: string): any;
declare function WNToDictionary(value: string): WNDictionary;
declare function WNStringToObject(value: string): any;
declare function WNAddStringQuote(value: string): string;
declare function WNisJson(item: any): boolean;
declare function WNJSONparse(item: any): any;
declare function WNtoTitleCase(text: string): string;
declare function WNNumberToString(num: number, culture?: IWNCultureInfo): string;
declare function WNStringFormat(text: string | number, format: string, culture?: IWNCultureInfo): string;
declare function WNToggleClass(elem: string | HTMLElement, setclass: string, classes: string[]): void;
declare function WNSetViewSize(): any;
declare function WNGetWNType(elem: HTMLElement): string;
declare function WNGetParentsElementsTag(elem: HTMLElement, untilTag: string, untilClass: string): string[];
declare function WNFindParentsTag(elem: HTMLElement, untilTag: string): HTMLElement;
declare function WNRGB2HEX(rgb: string): string;
declare function WNFindTreeArray(source: any, fieldName1: string, fieldName2: string, value: string, contain: boolean, ignoreCase: boolean, childsFieldName: string): any[];
declare function WNChangeFieldTreeArray(source: any, childsFieldName: string, parent: any, call: Function): void;
declare function WNFileToString(input: HTMLInputElement): Promise<string>;
declare function WNSetImageBase(input: HTMLInputElement, img: HTMLImageElement | string): Promise<void>;
declare function WNCheckReadOnlyDisabled(element: HTMLElement, readOnly?: boolean, disabled?: boolean): boolean;
declare function WNQueryString(key: string): string;
declare function WNToBase64String(str: string): string;
declare function WNFromBase64String(str: string): string;
declare class WNConfig implements IWNConfig {
    nativeDigit: boolean;
    calendar: IWNCalendar;
    locale: Intl.Locale;
    dateTimeFormat: Intl.DateTimeFormat;
    numberFormat: Intl.NumberFormat;
    private _cultureInfo;
    get cultureInfo(): IWNCultureInfo;
    set cultureInfo(value: IWNCultureInfo);
    hijriAdjustment: number;
    language: {};
    authorizationToken: string;
    private _baseFetchUri;
    get baseFetchUri(): string;
    set baseFetchUri(value: string);
    constructor();
}
declare function initComponents(): void;
declare function CheckBrowserCompatibility(): void;
declare function InitWNBlock(elem?: HTMLElement | Document): void;
declare function InitWN(masterelem?: HTMLElement | Document): void;
declare function SetComponentCompatibility(elem?: HTMLElement | Document): void;
declare class WNAccordion implements IWNAccordion {
    readonly nameType: string;
    element: HTMLElement;
    mode: AccordionMode;
    items: {
        head: HTMLElement;
        body: HTMLElement;
    }[];
    get selectedItem(): {
        head: HTMLElement;
        body: HTMLElement;
    };
    set selectedItem(value: {
        head: HTMLElement;
        body: HTMLElement;
    });
    private _selectedIndex;
    get selectedIndex(): number;
    set selectedIndex(value: number);
    beforeCollapse: (t: IWNAccordion, index: number) => boolean;
    afterCollapse: (t: any, index: any) => void;
    beforeExpand: (t: IWNAccordion, index: number) => boolean;
    afterExpand: (t: any, index: any) => void;
    constructor(elem: HTMLElement);
    private init;
    addItem(head: HTMLButtonElement, body: HTMLDivElement, collapsed?: boolean): void;
    addItemByHtmlText(caption: string, body: string, collapsed?: boolean): void;
    private setCollapse;
    clear(): void;
}
declare class WNCaptcha implements IWNCaptcha {
    readonly nameType: string;
    element: HTMLElement;
    private image;
    private refreshButton;
    private input;
    private url;
    private key;
    constructor(elem: HTMLElement);
    get value(): {
        key: string;
        value: string;
    };
    private init;
    refresh(): Promise<void>;
    validate(): Promise<boolean>;
}
declare class WNCarousel implements IWNCarousel {
    readonly nameType: string;
    element: HTMLElement;
    interval: number;
    autoPlay: boolean;
    private _playState;
    private _hoverPause;
    get hoverPause(): boolean;
    set hoverPause(value: boolean);
    private _items;
    private _indicators;
    private _oldindex;
    private _index;
    private _transitionDelay;
    private _durationHandle;
    private _effectHandle;
    private _touch_x;
    private nextButton;
    private previousButton;
    constructor(elem: HTMLElement);
    private init;
    private play;
    private show;
    private clear;
    private next;
    private previous;
    private addIndex;
    private showSlide;
}
declare class WNCloseButton implements IWNCloseButton {
    readonly nameType: string;
    element: HTMLElement;
    constructor(elem: HTMLElement);
    private render;
}
declare class WNCollapse implements IWNCollapse {
    readonly nameType: string;
    element: HTMLFormElement;
    target: string;
    remove: string;
    targetMode: targetModeEnum;
    beforecollapse: (t: any) => boolean;
    aftercollapse: (t: any) => void;
    constructor(elem: HTMLElement);
    private init;
    collapse(): void;
    private HideControls;
}
declare class WNConfirm implements IWNConfirm {
    readonly nameType: string;
    title: string;
    body: string | HTMLElement;
    buttons: {
        id?: string;
        caption?: string;
        class?: string;
        click?: (t: IWNConfirm) => Promise<boolean>;
    }[];
    modalClass: string;
    headClass: string;
    bodyClass: string;
    footerClass: string;
    showClass: string;
    customModal: string;
    closeButton: boolean;
    values: {
        [id: string]: any;
    };
    parentElement: HTMLElement;
    element: HTMLElement;
    private modal;
    constructor();
    show(): Promise<void>;
}
declare class WNCounter implements IWNCounter {
    readonly nameType: string;
    element: HTMLElement;
    countTo: number;
    countNum: number;
    countStep: number;
    duration: number;
    constructor(elem: HTMLElement);
    private render;
    private start;
}
declare class WNDropdown implements IWNDropdown {
    readonly nameType: string;
    static WNWindowClickHandled: boolean;
    static WNLastDropdownOpened: HTMLElement[];
    element: HTMLElement;
    dropdown: HTMLElement;
    checkOnlyDropDown: boolean;
    beforeShow: (t: any) => {};
    afterShow: (t: any) => {};
    beforeHide: (t: any) => {};
    afterHide: (t: any) => {};
    constructor(elem: HTMLElement);
    private render;
    private windowClick;
    toggle(): void;
    hide(): void;
    show(): void;
    setPosition(): void;
    hideAllDropDowns(): void;
}
declare class WNEditor implements IWNEditor {
    readonly nameType: string;
    element: HTMLFormElement;
    change: (t: any) => void;
    defaultFonts: string;
    defaultFontsize: string;
    defaultTags: string;
    dfaultcolorPicker: string[];
    paragraphSeparator: string;
    private FontList;
    private FontSize;
    private TagList;
    private valueElement;
    private OldHtml;
    private _content;
    private _editorType;
    private _editortoolbar;
    private _toolbar;
    private _colorPicker;
    private _colorPickerInput;
    private _insertLink;
    private _insertLinkUrl;
    private _insertLinkTarget;
    private _insertLinkTitle;
    private _insertImage;
    private _insertImageUrl;
    private _insertImageAlt;
    private _insertImageWidth;
    private _insertImageHeight;
    private _insertImageBorderWidth;
    private _insertImageBorderStyle;
    private _insertImageClass;
    private _insertMedia;
    private _insertMediaType;
    private _insertMediaUrl;
    private _insertMediaWidth;
    private _insertMediaHeight;
    private _insertMediaControls;
    private _insertMediaMute;
    private _insertMediaautoPlay;
    private _insertMediaBorderWidth;
    private _insertMediaBorderStyle;
    private _insertMediaClass;
    private _insertIFrame;
    private _insertIFrameUrl;
    private _insertIFrameTitle;
    private _insertIFrameWidth;
    private _insertIFrameHeight;
    private _insertIFrameBorderWidth;
    private _insertIFrameBorderStyle;
    private _insertIFrameClass;
    private _editor_undo;
    private _editor_redo;
    private _editor_bold;
    private _editor_italic;
    private _editor_underline;
    private _editor_strikethrough;
    private _editor_font;
    private _editor_fontsize;
    private _editor_subscript;
    private _editor_superscript;
    private _editor_elementtag;
    private _editor_alignleft;
    private _editor_aligncenter;
    private _editor_alignright;
    private _editor_alignjustify;
    private _editor_ltr;
    private _editor_rtl;
    private _editor_indent;
    private _editor_outdent;
    private _editor_numberlist;
    private _editor_buletlist;
    private _editor_textcolor;
    private _editor_background;
    private _editor_fill;
    private _editor_eraseformat;
    private _editor_link;
    private _editor_unlink;
    private _editor_image;
    private _editor_media;
    private _editor_iframe;
    private _editor_hr;
    private _editor_source;
    private _editor_source_textarea;
    private _editor_source_mode;
    private _dark_mode;
    private _fullscreen;
    private _lang;
    constructor(elem: HTMLElement);
    private Init;
    private addToolBar;
    private addContent;
    private setLanguage;
    private createElement;
    private assignEvents;
    private recheckToolbar;
    private isSelectionInTag;
    private execCommand;
    private getCurrentStyle;
    private getParentTagSelection;
    private setSelectionStyle;
    private setSelectionTag;
    private saveSelection;
    private restoreSelection;
    private cleanWordPaste;
    private isMarkUp;
    private colorPicker;
    private _colorPickerStyle;
    private _colorPickerselectTag;
    private _colorPickerDropDown;
    private _oldSelection;
    private createcolorPickerObject;
    private _insertLinkDropDown;
    private insertLink;
    private createLinkObject;
    private _insertImageDropDown;
    private _insertImageSelected;
    private insertImage;
    private createImageObject;
    private _insertMediaDropDown;
    private _insertMediaSelected;
    private insertMedia;
    private createMediaObject;
    private _insertIFrameDropDown;
    private _insertIFrameSelected;
    private insertIFrame;
    private createIFrameObject;
    get html(): string;
    set html(value: string);
    get text(): string;
    showSource(): void;
    switchDarkMode(): void;
    switchFullScreen(): void;
}
declare class WNFileList implements IWNFilelist {
    readonly nameType: string;
    element: HTMLElement;
    mode: string;
    url: string;
    multiSelect: boolean;
    selectionChanged: (t: IWNFilelist) => {};
    dblClick: (t: IWNFilelist) => {};
    private basepath;
    private _head;
    private _foldersAddress;
    private _body;
    private _divfolders;
    private _divfiles;
    private _folders;
    private _files;
    private _dragdrop;
    private _preLoader;
    private _toastdiv;
    private _toastbody;
    private _foldertree;
    private _toast;
    private _lang;
    private _date;
    static _clipboard: string[];
    static _classExt: {
        className: string;
        ext: string[];
    }[];
    constructor(elem: HTMLElement);
    private init;
    private addHead;
    private addBody;
    private getFolders;
    private getFiles;
    private newFolder;
    private rename;
    private delete;
    private paste;
    private uploadFile;
    private download;
    private compress;
    private decompress;
    private showMessage;
    private WaitpreLoad;
    private preLoad;
    get selectedItems(): {
        path: any;
        files: any;
    };
    get selectedFiles(): string[];
    set selectedFiles(value: string[]);
    set selectedFolder(value: string);
    get selectedFolder(): string;
}
declare class WNFilter implements IWNFilter {
    readonly nameType: string;
    element: HTMLElement;
    private buttons;
    constructor(elem: HTMLElement);
    private init;
    private CheckBoxFilter;
    private setActive;
    static filter(selectors: string | NodeListOf<Element>, filterby: string): void;
}
declare class WNImageEditor implements IWNImageEditor {
    readonly nameType: string;
    element: HTMLCanvasElement;
    private _Image;
    private tmpImage;
    private tmpContext;
    private isDown;
    private startX;
    private startY;
    private offsetX;
    private offsetY;
    private canScale;
    private canPan;
    private _scale;
    private _rotate;
    private _flip;
    private _filter;
    private _mask;
    private _anchor;
    private _anchorRec;
    private _anchorBoxSize;
    private _anchorBox;
    private _anchorSizeMode;
    private _anchorIsDown;
    private isActive;
    x: number;
    y: number;
    constructor(elem: HTMLElement);
    private Init;
    checkPan(x: number, y: number): void;
    private checkAnchor;
    private translateMouse;
    load(src: string): Promise<void>;
    private mouseup;
    get scale(): number;
    set scale(value: number);
    get rotate(): number;
    set rotate(value: number);
    get flip(): number;
    set flip(value: number);
    get filter(): string;
    set filter(value: string);
    get mask(): string;
    set mask(value: string);
    private refresh;
    anchorStart(): void;
    anchorStop(): void;
    private anchorStartMouse;
    private anchorSetSizeMode;
    crop(): void;
    private _divCamera;
    private _videoCamera;
    private createCameraArea;
    private _cameraDeviceId;
    private _cameraOldId;
    stopCamera(): Promise<void>;
    startCamera(id?: string): Promise<void>;
    private _saveImage;
    save(): string;
}
declare class WNLightbox implements IWNLightbox {
    readonly nameType: string;
    element: HTMLElement;
    loop: boolean;
    close: boolean;
    modalClose: boolean;
    autoPlay: boolean;
    private buttons;
    private lightbox;
    private media;
    private mediain;
    private content;
    private buttonprevious;
    private buttonnext;
    private closeButton;
    private SlideList;
    private SlideListElem;
    private TouchStart;
    private timeout;
    constructor(elem: HTMLElement);
    private init;
    private showLightBox;
    private play;
    private closeModal;
    private checkTouch;
}
declare class WNList implements IWNList {
    readonly nameType: string;
    element: HTMLElement;
    dataSource: WNListNode[];
    checkbox: boolean;
    checkboxclass: string;
    beforeClick: (t: IWNList, node: WNListNode, e: MouseEvent) => boolean;
    afterClick: (t: IWNList, node: WNListNode, e: MouseEvent) => void;
    dblClick: (t: IWNList, node: WNListNode, e: MouseEvent) => void;
    selectionChanged: (t: IWNList, node: WNListNode) => void;
    checkChanged: (t: IWNList, node: WNListNode) => void;
    constructor(elem: HTMLElement);
    private init;
    private initDataSource;
    private initItem;
    private initItems;
    private lastNodeClick;
    private lastNodeTime;
    private click;
    private dblclick;
    private _selectedItem;
    get selectedItem(): WNListNode;
    set selectedItem(value: WNListNode);
    get selectedValue(): string;
    set selectedValue(value: string);
    get selectedIndex(): number;
    set selectedIndex(value: number);
    get checkedItems(): WNListNode[];
    set checkedItems(value: WNListNode[]);
    get checkedValues(): string[];
    set checkedValues(value: string[]);
    select(node: WNListNode): void;
    findByText(text: string, contains?: boolean, select?: boolean): WNListNode[];
    findByValue(value: string, select?: boolean): WNListNode;
    findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNListNode[];
    filterByText(text: string, contains?: boolean): void;
    addToDataSource(text: string, link: string, value: string, image: string): WNListNode;
    private nodeToHtmlElement;
    removeFromDataSource(node: WNListNode): boolean;
    updateNodeElement(node: WNListNode): void;
    setDataSourceByItem(dataSource: any[], displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSource(dataSource: WNListNode[], append?: boolean): void;
    private clearDataSource;
    orderDataSourceByText(desc?: boolean): void;
    orderDataSourceByValue(desc?: boolean): void;
    private redraw;
    private reindex;
    checkedClear(): void;
    checkedAll(): void;
    checkedInvert(): void;
}
declare class WNModal implements IWNModal {
    readonly nameType: string;
    element: HTMLElement;
    backClose: boolean;
    showClass: string;
    hideClass: string;
    beforeShow: (t: any) => {};
    afterShow: (t: any) => {};
    beforeHide: (t: any) => {};
    afterHide: (t: any) => {};
    values: WNDictionary;
    private modalDialog;
    private _fadeIn;
    private _fadeOut;
    constructor(elem: HTMLElement);
    private init;
    show(): Promise<void>;
    toggle(): void;
    hide(): Promise<void>;
}
declare class WNMonthCalendar implements IWNMonthCalendar {
    readonly nameType: string;
    element: HTMLElement;
    nativeDigit: boolean;
    date: IWNDate;
    secondDate: IWNDate;
    dateRange: boolean;
    onlyMonthYear: boolean;
    allowComment: boolean;
    allowDateHoliday: boolean;
    autoClosePopup: boolean;
    comment: WNDictionary;
    noCommonComment: boolean;
    displayFormat: string;
    selectionChanged: (t: IWNMonthCalendar) => void;
    private displayElement;
    private secondDisplayElement;
    private valueElement;
    private secondValueElement;
    private dropdownElement;
    private _ToDayDate;
    private _CurrentDate;
    private _SecondDate;
    private _ThirdDate;
    private _calendarname;
    private _monthyearcaption;
    private _selectmonthyear;
    private _selectyear;
    private _body;
    private _lang;
    private _rangestate;
    private _onTextInput;
    private _viewCount;
    get viewCount(): number;
    set viewCount(value: number);
    get value(): Date;
    set value(value: Date);
    constructor(elem: HTMLElement);
    private Init;
    private findPopup;
    private previousMonths;
    private nextMonths;
    private now;
    private selectDate;
    private setMonth;
    private setYear;
    private showMonthYear;
    private addHead;
    private addSelectMonthYear;
    private addMonthView;
    private refresh;
    private getAllowComment;
    private renderDisplay;
    private setValueFromDisplay;
    private setElementValue;
    private getElementValue;
    private setDateValue;
}
declare class WNMultiInput implements IWNMultiInput {
    readonly nameType: string;
    element: HTMLElement;
    inputs: HTMLElement[];
    private detail;
    private labels;
    constructor(elem: HTMLElement);
    private init;
    private getLables;
    private toggle;
    get values(): WNDictionary;
    set values(value: WNDictionary | string);
    private createInput;
}
declare class WNMultiInputPhone implements IWNMultiInputPhone {
    readonly nameType: string;
    element: HTMLElement;
    itemClick: (t: IWNMultiInputPhone, node: WNPhoneNode) => void;
    max: number;
    private dropDownPopup;
    private dropdown;
    private list;
    private inpCaption;
    private inpCountry;
    private inpArea;
    private inpNumber;
    private inpExt;
    private cCaption;
    private cCountry;
    private cArea;
    private cNumber;
    private cExt;
    private hiddenElemet;
    constructor(elem: HTMLElement);
    private init;
    private add;
    private createLinkNode;
    private refreshAllLinkNode;
    private _value;
    get value(): string[];
    set value(value: string[]);
    private makeFullNumber;
    private addButton;
    private saveButton;
    private deleteButton;
    private fixedInput;
    private listChange;
    private changeOrder;
}
declare class WNMultiSelect implements IWNMultiSelect {
    readonly nameType: string;
    element: HTMLElement;
    selectionChanged: (t: IWNMultiSelect, node: WNTreeNode | WNListNode) => void;
    beforeDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => Promise<boolean> | boolean;
    afterDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => void;
    beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;
    max: number;
    search: IWNSearchList;
    private searchbox;
    private selectedarea;
    private dropdownlist;
    private dropdown;
    constructor(elem: HTMLElement);
    private init;
    private WaitToInitList;
    private selectionchange;
    private add;
    private remove;
    private _selectedItems;
    get selectedItems(): WNGeneralNode[];
    set selectedItems(value: WNGeneralNode[]);
    get selectedValue(): string[];
    set selectedValue(value: string[]);
    private clearAll;
    clearSearch(): void;
}
declare class WNProgress implements IWNProgress {
    readonly nameType: string;
    element: HTMLElement;
    private _bar;
    private _caption;
    private _min;
    private _max;
    private _value;
    constructor(elem: HTMLElement);
    private render;
    private showProgress;
    set value(value: number);
    get value(): number;
    set min(value: number);
    get min(): number;
    set max(value: number);
    get max(): number;
}
declare class WNScroll implements IWNScroll {
    readonly nameType: string;
    element: HTMLElement;
    value: number;
    addClass: string;
    removeClass: string;
    toggleClass: string;
    constructor(elem: HTMLElement);
    private render;
    private start;
}
declare class WNSearchList implements IWNSearchList {
    readonly nameType: string;
    element: HTMLElement;
    listElement: HTMLElement;
    list: IWNList | IWNTree;
    beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;
    afterFilterChanged: (t: IWNSearchList, text: string) => void;
    selectionChanged: (t: IWNTree | IWNList, node: WNTreeNode | WNListNode) => void;
    minLength: number;
    displayElement: HTMLElement;
    valueElement: HTMLElement;
    private searchbox;
    constructor(elem: HTMLElement);
    private init;
    private waitToInitList;
    private selectionchanged;
}
declare class WNSlicker implements IWNSlicker {
    readonly nameType: string;
    element: HTMLElement;
    interval: number;
    autoPlay: boolean;
    private _playState;
    private _hoverPause;
    get hoverPause(): boolean;
    set hoverPause(value: boolean);
    private _slidewidth;
    get slidewidth(): string;
    set slidewidth(value: string);
    itemshow: number;
    private _itemalign;
    get itemalign(): string;
    set itemalign(value: string);
    loop: boolean;
    private _slidesHolder;
    private _slides;
    private _slidesWidth;
    private _indicators;
    private _itemsCount;
    private _totalWidth;
    private _index;
    private _touch_pos;
    private _width;
    private _position;
    private _oldposition;
    private nextButton;
    private previousButton;
    constructor(elem: HTMLElement);
    private init;
    private resize;
    private calcSlidesWidth;
    private getPosition;
    private PanStart;
    private PanMove;
    private PanEnd;
    private AnimateSlide;
    private ShowActiveIndicator;
    private next;
    private previous;
    private goto;
}
declare class WNSticky implements IWNSticky {
    readonly nameType: string;
    element: HTMLElement;
    private _top;
    private _bottom;
    private _isWindow;
    private _parent;
    constructor(elem: HTMLElement);
    private Init;
    private CheckSticky;
}
declare class WNTab implements IWNTab {
    readonly nameType: string;
    element: HTMLElement;
    private items;
    beforeSelected: (t: any, index: any) => boolean;
    selectionChanged: (t: any) => void;
    private _selectedIndex;
    get selectedIndex(): number;
    set selectedIndex(value: number);
    constructor(elem: HTMLElement);
    private init;
    private setCollapse;
}
declare class WNTable implements IWNTable {
    readonly nameType: string;
    element: HTMLTableElement;
    cols: WNTableCol[];
    private _dataSource;
    private _renderData;
    get dataSource(): WNTableNode[];
    set dataSource(value: WNTableNode[]);
    private _currentPage;
    get currentPage(): number;
    set currentPage(value: number);
    private date;
    private pageSize;
    beforeFilter: (t: IWNTable) => boolean;
    afterFilter: (t: IWNTable) => void;
    beforeSort: (t: IWNTable) => boolean;
    afterSort: (t: IWNTable) => void;
    beforeSelected: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => boolean;
    selectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
    beforePageChange: (t: IWNTable, oldPage: number, newPage: number) => boolean;
    afterPageChange: (t: IWNTable, oldPage: number, newPage: number) => void;
    command: (t: IWNTable, command: string, node: WNTableNode) => void;
    private _selectedItem;
    get selectedItem(): WNTableNode;
    set selectedItem(value: WNTableNode);
    private _groups;
    get groups(): string[];
    set groups(value: string[]);
    private _totalPages;
    private _paginationElement;
    private _paginationButtons;
    private headTable;
    private bodyTable;
    private _pageAddedd;
    private _rowAddedd;
    private _lastBodyTable;
    constructor(elem: HTMLElement);
    private init;
    private FindHeader;
    private FilterHeaderRow;
    private initDataSource;
    addToDataSource(r: any): WNTableNode;
    removeFromDataSource(r: WNTableNode): boolean;
    updateNodeElement(r: WNTableNode): void;
    setDataSource(dataSource: any, append?: boolean): void;
    private _sortby;
    private resort;
    private sort;
    private pagination;
    private setPaginationElements;
    private fixedData;
    private _fieldGroup;
    private refresh;
    private addTableRows;
    private hideByParent;
    private addAggregateRow;
    filterByText(text: string): void;
    private setFilter;
    private filter;
    findValueInDatasource(fieldName: string, value: any): WNTableNode;
}
declare class WNTime implements IWNTime {
    readonly nameType: string;
    element: HTMLFormElement;
    date: IWNDate;
    nativeDigit: boolean;
    displayFormat: string;
    valueElement: HTMLElement;
    inputFormat: string;
    hourLongStep: number;
    minuteLongStep: number;
    private displayElement;
    private ontextinput;
    private _selectlabel;
    private _inputhour;
    private _inputminute;
    private _inputsecond;
    constructor(elem: HTMLElement);
    private init;
    get value(): Date;
    set value(value: Date);
    setHour(value: number): void;
    setMinute(value: number): void;
    setSecond(value: number): void;
    private addObjects;
    private addSection;
    private refresh;
    private renderDisplay;
    private setValueFromDisplay;
    private setElementValue;
    private getElementValue;
    private setDateValue;
}
declare class WNToast implements IWNToast {
    readonly nameType: string;
    element: HTMLElement;
    timeout: number;
    private _timeouthandle;
    beforeHide: (t: IWNToast) => boolean | Promise<boolean>;
    constructor(elem: HTMLElement);
    private Init;
    show(): void;
    toggle(): void;
    hide(): void;
}
declare class WNTooltip implements IWNTooltip {
    readonly nameType: string;
    element: HTMLElement;
    delay: number;
    hideAfter: number;
    tooltipClass: string;
    target: HTMLElement;
    private _events;
    get events(): string;
    set events(value: string);
    private _lostEvents;
    get lostEvents(): string;
    set lostEvents(value: string);
    private _delayHandle;
    private _hideAfterhandle;
    constructor(elem: HTMLElement);
    private init;
    private createtarget;
    private setEvents;
    autoShow(): void;
    show(): void;
    hide(): void;
}
declare function WNTooltipAssign(elem: HTMLElement): void;
declare class WNTree implements IWNTree {
    readonly nameType: string;
    element: HTMLUListElement;
    dataSource: WNTreeNode[];
    selectedItem: WNTreeNode;
    checkbox: boolean;
    checkboxclass: string;
    checkboxautochild: boolean;
    beforeClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    afterClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    beforeCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    afterCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    beforeExpand: (t: IWNTree, node: WNTreeNode) => void;
    afterExpand: (t: IWNTree, node: WNTreeNode) => void;
    beforeToggle: (t: IWNTree, node: WNTreeNode) => void;
    afterToggle: (t: IWNTree, node: WNTreeNode) => void;
    checkChanged: (t: IWNTree, node: WNTreeNode) => void;
    constructor(elem: HTMLElement);
    private Init;
    private initDataSource;
    private initItem;
    private initItems;
    private lastNodeClick;
    private lastNodeTime;
    private click;
    private dblclick;
    select(node: WNTreeNode): void;
    toggle(node: WNTreeNode): void;
    collapse(node: WNTreeNode): void;
    collapseWithChild(node: WNTreeNode): void;
    collapsedAll(): void;
    expand(node: WNTreeNode): void;
    expandToParent(node: WNTreeNode): void;
    expandChilds(node: WNTreeNode): void;
    expandAll(): void;
    findByText(text: string, contains?: boolean, select?: boolean): WNTreeNode[];
    private findBy;
    findByValue(value: string, select?: boolean): WNTreeNode;
    findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNTreeNode[];
    filterByText(text: string, contains?: boolean): void;
    addToDataSource(parent: WNTreeNode, text: string, link: string, value: string, image: string): WNTreeNode;
    private treeNodeToHtmlElement;
    removeFromDataSource(node: WNTreeNode): boolean;
    updateNodeElement(node: WNTreeNode): void;
    setDataSourceByParentId(parentNode: WNTreeNode, dataSource: any[], idFieldName: string, parentFieldName: string, parentRootValue: any, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    private convertParentId;
    setDataSourceByItem(parentNode: WNTreeNode, dataSource: any[], itemFieldName: string, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    private convertByItem;
    setDataSource(parentNode: WNTreeNode, dataSource: WNTreeNode[], append?: boolean): void;
    private clearChilds;
    private convertDataSource;
    get checkedItems(): WNTreeNode[];
    set checkedItems(value: WNTreeNode[]);
    get checkedValues(): string[];
    set checkedValues(value: string[]);
    get checkedAllValues(): string[];
    set checkedAllValues(value: string[]);
    checkedClear(): void;
    checkedAll(): void;
    checkedInvert(): void;
    checkedHide(value: string[]): void;
    checkedChild(checked: boolean, node: WNTreeNode): any;
}
declare class WNTreeTable implements IWNTreeTable {
    readonly nameType: string;
    element: HTMLUListElement;
    tree: IWNTree;
    table: IWNTable;
    selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    tableSelectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
    constructor(elem: HTMLElement);
    private Init;
}
declare class WNValidator implements IWNValidator {
    readonly nameType: string;
    element: HTMLFormElement;
    constructor(element: HTMLElement);
    private init;
    private validate;
    isValid(): boolean;
    reset(): void;
}
declare function wnValidator_onvalidationcheck(children: HTMLCollection, event: Event): Promise<void>;
declare var _AnimationOnScroll: any;
declare function WNAnimationSetup(): void;
declare function WNGetOffset(el: any): {
    top: number;
    left: number;
};
declare function WNAnimationStart(): void;
declare var WNPreLoaderDelayStart: number;
declare var WNPreLoaderTimeout: number;
declare var WNPreLoderId: string;
declare var _PreLoaderWaitCount: number;
declare var _WNPreLoaderTimeoutTimer: any;
declare function wnStopPreLoaderTimeout(): void;
declare function wnShowPreLoaderTimeout(show: boolean, _WNPreLoaderTimeout?: number, _WNPreLoaderDelayStart?: number, _WNPreLoderId?: string): void;
declare function showPreLoaderDelay(show: boolean, _WNPreLoaderDelayStart?: number, _WNPreLoaderTimeout?: number, _WNPreLoderId?: string): void;
declare function wnShowPreLoader(show: boolean, _WNPreLoderId?: string, _WNPreLoaderDelayStart?: number, _WNPreLoaderTimeout?: number): void;
declare function wnHideAllPreLoader(_WNPreLoderId?: string): void;
declare class WNDateShow implements IWNDateShow {
    readonly nameType: string;
    element: HTMLElement;
    format: string;
    today: boolean;
    date: IWNDate;
    private _value;
    constructor(elem: HTMLElement);
    private init;
    get value(): Date;
    set value(value: Date);
    refresh(): void;
}
interface IWNConfig {
    nativeDigit: boolean;
    calendar: IWNCalendar;
    cultureInfo: IWNCultureInfo;
    locale: Intl.Locale;
    dateTimeFormat: Intl.DateTimeFormat;
    numberFormat: Intl.NumberFormat;
    hijriAdjustment: number;
    language: {};
    authorizationToken: string;
    baseFetchUri: string;
}
interface IWNAccordion extends IWNComponent {
    items: {
        head: HTMLElement;
        body: HTMLElement;
    }[];
    selectedItem: {
        head: HTMLElement;
        body: HTMLElement;
    };
    selectedIndex: number;
    mode: AccordionMode;
    beforeCollapse: (t: any, index: any) => boolean;
    afterCollapse: (t: any, index: any) => void;
    beforeExpand: (t: any, index: any) => boolean;
    afterExpand: (t: any, index: any) => void;
    addItem(head: HTMLButtonElement, body: HTMLDivElement, collapsed: boolean): void;
    addItemByHtmlText(caption: string, body: string, collapsed: boolean): void;
    clear(): any;
}
declare enum AccordionMode {
    single = "single",
    multiple = "multiple"
}
interface IWNCaptcha extends IWNComponent {
    readonly value: {
        key: string;
        value: string;
    };
    refresh(): Promise<void> | void;
    validate(): Promise<boolean> | boolean;
}
interface IWNCarousel extends IWNComponent {
    interval: number;
    autoPlay: boolean;
    hoverPause: boolean;
}
interface IWNCloseButton extends IWNComponent {
}
interface IWNCollapse extends IWNComponent {
    element: HTMLElement;
    target: string;
    remove: string;
    targetMode: targetModeEnum;
    beforecollapse: (t: any) => boolean;
    aftercollapse: (t: any) => void;
    collapse(): void;
}
type targetModeEnum = "toggle" | "show" | "hide";
interface IWNComponent {
    readonly nameType: string;
    element: HTMLElement;
}
interface IWNConfirm extends IWNComponent {
    title: string;
    body: string | HTMLElement;
    buttons: {
        id?: string;
        caption?: string;
        class?: string;
        click?: (t: IWNConfirm) => Promise<boolean>;
    }[];
    modalClass: string;
    headClass: string;
    bodyClass: string;
    footerClass: string;
    showClass: string;
    closeButton: boolean;
    values: {
        [id: string]: any;
    };
    parentElement: HTMLElement;
    customModal: string;
    show(): void;
}
interface IWNCounter extends IWNComponent {
    countTo: number;
    countNum: number;
    countStep: number;
    duration: number;
}
interface IWNDateShow extends IWNComponent {
    element: HTMLElement;
    format: string;
    today: boolean;
    date: IWNDate;
    value: Date;
    refresh(): void;
}
interface IWNDropdown extends IWNComponent {
    element: HTMLElement;
    dropdown: HTMLElement;
    checkOnlyDropDown: boolean;
    beforeShow: (t: any) => {};
    afterShow: (t: any) => {};
    beforeHide: (t: any) => {};
    afterHide: (t: any) => {};
    toggle(): void;
    hide(): void;
    show(): void;
    setPosition(): void;
    hideAllDropDowns(): void;
}
interface IWNEditor extends IWNComponent {
    change: (t: any) => void;
    defaultFonts: string;
    defaultFontsize: string;
    defaultTags: string;
    dfaultcolorPicker: string[];
    paragraphSeparator: string;
    html: string;
    readonly text: string;
    showSource(): any;
    switchDarkMode(): any;
    switchFullScreen(): any;
}
interface IWNFilelist extends IWNComponent {
    mode: string;
    url: string;
    multiSelect: boolean;
    selectionChanged: (t: IWNFilelist) => {};
    dblClick: (t: IWNFilelist) => {};
    selectedItems: {
        path: any;
        files: any;
    };
    selectedFiles: string[];
    selectedFolder: string;
}
interface IWNFilter extends IWNComponent {
}
interface IWNImageEditor extends IWNComponent {
    scale: number;
    rotate: number;
    flip: number;
    filter: string;
    mask: string;
    x: number;
    y: number;
    load(src: string): void;
    anchorStart(): void;
    anchorStop(): void;
    crop(): void;
    stopCamera(): void;
    startCamera(id?: string): void;
    save(): string;
}
interface IWNLightbox extends IWNComponent {
    loop: boolean;
    close: boolean;
    modalClose: boolean;
    autoPlay: boolean;
}
interface IWNList extends IWNComponent {
    dataSource: WNListNode[];
    selectedItem: WNListNode;
    selectedIndex: number;
    selectedValue: string;
    checkedItems: WNListNode[];
    checkedValues: string[];
    checkbox: boolean;
    checkboxclass: string;
    beforeClick: (t: IWNList, node: WNListNode, e: MouseEvent) => boolean;
    afterClick: (t: IWNList, node: WNListNode, e: MouseEvent) => void;
    selectionChanged: (t: IWNList, node: WNListNode) => void;
    checkChanged: (t: IWNList, node: WNListNode) => void;
    select(node: WNListNode): void;
    findByText(text: string, contains?: boolean, select?: boolean): WNListNode[];
    findByValue(value: string, select?: boolean): WNListNode;
    findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNListNode[];
    filterByText(text: string, contains?: boolean): void;
    addToDataSource(text: string, link: string, value: string, image: string): WNListNode;
    removeFromDataSource(node: WNListNode): boolean;
    updateNodeElement(node: WNListNode): void;
    setDataSourceByItem(dataSource: any[], displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSource(dataSource: WNListNode[], append?: boolean): void;
    orderDataSourceByText(desc?: boolean): void;
    orderDataSourceByValue(desc?: boolean): void;
    checkedClear(): void;
    checkedAll(): void;
    checkedInvert(): void;
}
type WNListNode = {
    id: number;
    index: number;
    text: string;
    html: string;
    link: string;
    value: string;
    image: string;
    element: HTMLElement;
};
interface IWNModal extends IWNComponent {
    element: HTMLElement;
    backClose: boolean;
    showClass: string;
    hideClass: string;
    values: WNDictionary;
    beforeShow: (t: any) => {};
    afterShow: (t: any) => {};
    beforeHide: (t: any) => {};
    afterHide: (t: any) => {};
    show(): void;
    toggle(): void;
    hide(): void;
}
interface IWNMonthCalendar extends IWNComponent {
    element: HTMLElement;
    nativeDigit: boolean;
    date: IWNDate;
    secondDate: IWNDate;
    dateRange: boolean;
    onlyMonthYear: boolean;
    allowComment: boolean;
    allowDateHoliday: boolean;
    comment: WNDictionary;
    noCommonComment: boolean;
    autoClosePopup: boolean;
    viewCount: number;
    displayFormat: string;
    selectionChanged: (t: IWNMonthCalendar) => void;
}
type WNDictionary = {
    [id: string]: any;
};
interface IWNMultiInput extends IWNComponent {
    inputs: HTMLElement[];
    values: WNDictionary | string;
}
interface IWNMultiInputPhone extends IWNComponent {
    value: string[];
    itemClick: (t: IWNMultiInputPhone, node: WNPhoneNode) => void;
    max: number;
}
type WNPhoneNode = {
    caption: string;
    country: string;
    area: string;
    number: string;
    extension: string;
    fullNumber: string;
};
interface IWNMultiSelect extends IWNComponent {
    selectedItems: WNGeneralNode[];
    selectedValue: string[];
    selectionChanged: (t: IWNMultiSelect, node: WNTreeNode | WNListNode) => void;
    beforeDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => Promise<boolean> | boolean;
    afterDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => void;
    beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;
    max: number;
    search: IWNSearchList;
    clearSearch(): void;
}
type WNGeneralNode = {
    id?: number;
    index?: number;
    text: string;
    value: string;
    element?: HTMLElement;
};
interface IWNProgress extends IWNComponent {
    value: number;
    min: number;
    max: number;
}
interface IWNScroll extends IWNComponent {
    value: number;
    addClass: string;
    removeClass: string;
    toggleClass: string;
}
interface IWNSearchList extends IWNComponent {
    beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;
    afterFilterChanged: (t: IWNSearchList, text: string) => void;
    selectionChanged: (t: IWNTree | IWNList, node: WNTreeNode | WNListNode) => void;
    listElement: HTMLElement;
    list: IWNList | IWNTree;
    minLength: number;
    displayElement: HTMLElement;
    valueElement: HTMLElement;
}
interface IWNSlicker extends IWNComponent {
    interval: number;
    autoPlay: boolean;
    hoverPause: boolean;
    slidewidth: string;
    itemshow: number;
    itemalign: string;
    loop: boolean;
}
interface IWNSticky extends IWNComponent {
}
interface IWNTab extends IWNComponent {
    selectedIndex: number;
    beforeSelected: (t: any, index: any) => boolean;
    selectionChanged: (t: any) => void;
}
interface IWNTable extends IWNComponent {
    element: HTMLTableElement;
    cols: WNTableCol[];
    dataSource: WNTableNode[];
    currentPage: number;
    beforeFilter: (t: IWNTable) => boolean;
    afterFilter: (t: IWNTable) => void;
    beforeSort: (t: IWNTable) => boolean;
    afterSort: (t: IWNTable) => void;
    beforeSelected: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => boolean;
    selectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
    beforePageChange: (t: IWNTable, oldpage: number, newpage: number) => boolean;
    afterPageChange: (t: IWNTable, oldpage: number, newpage: number) => void;
    command: (t: IWNTable, command: string, node: WNTableNode) => void;
    selectedItem: WNTableNode;
    groups: string[];
    addToDataSource(r: any): WNTableNode;
    removeFromDataSource(r: WNTableNode): boolean;
    updateNodeElement(r: WNTableNode): void;
    setDataSource(dataSource: any, append?: boolean): void;
    filterByText(text: string): void;
    findValueInDatasource(fieldName: string, value: any): WNTableNode;
}
type WNTableNode = {
    privateId: number;
    rowElement: HTMLTableRowElement;
    fields: {
        [id: string]: WNTableFieldValue;
    };
};
type WNTableCol = {
    index: number;
    caption: string;
    field: string;
    datatype: string;
    sortable: WNTableTextValue;
    filterable: WNTableTextValue;
    format: string;
    class: string;
    elementInHeader: HTMLTableCellElement;
    elementFilter: HTMLInputElement;
    commandElement: HTMLButtonElement[];
    condition: (t: HTMLTableCellElement, node: WNTableNode, value: any, text: string) => void;
    aggregate: string;
};
declare enum WNTableTextValue {
    none = "",
    text = "text",
    value = "value"
}
type WNTableFieldValue = {
    text: string;
    value: any;
};
interface IWNTime extends IWNComponent {
    date: IWNDate;
    nativeDigit: boolean;
    displayFormat: string;
    valueElement: HTMLElement;
    inputFormat: string;
    hourLongStep: number;
    minuteLongStep: number;
    value: Date;
    setHour(value: number): void;
    setMinute(value: number): void;
    setSecond(value: number): void;
}
interface IWNToast extends IWNComponent {
    timeout: number;
    beforeHide: (t: IWNToast) => boolean | Promise<boolean>;
    show(): void;
    toggle(): void;
    hide(): void;
}
interface IWNTooltip extends IWNComponent {
    target: HTMLElement;
    delay: number;
    hideAfter: number;
    tooltipClass: string;
    events: string;
    lostEvents: string;
    autoShow(): void;
    show(): void;
    hide(): void;
}
interface IWNTree extends IWNComponent {
    dataSource: WNTreeNode[];
    selectedItem: WNTreeNode;
    checkedItems: WNTreeNode[];
    checkedValues: string[];
    checkedAllValues: string[];
    checkbox: boolean;
    checkboxclass: string;
    checkboxautochild: boolean;
    beforeClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    afterClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    beforeCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    afterCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    beforeExpand: (t: IWNTree, node: WNTreeNode) => void;
    afterExpand: (t: IWNTree, node: WNTreeNode) => void;
    beforeToggle: (t: IWNTree, node: WNTreeNode) => void;
    afterToggle: (t: IWNTree, node: WNTreeNode) => void;
    checkChanged: (t: IWNTree, node: WNTreeNode) => void;
    select(node: WNTreeNode): void;
    toggle(node: WNTreeNode): void;
    collapse(node: WNTreeNode): void;
    collapseWithChild(node: WNTreeNode): void;
    collapsedAll(): void;
    expand(node: WNTreeNode): void;
    expandToParent(node: WNTreeNode): void;
    expandChilds(node: WNTreeNode): void;
    expandAll(): void;
    findByText(text: string, contains?: boolean, select?: boolean): WNTreeNode[];
    findByValue(value: string, select?: boolean): WNTreeNode;
    findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNTreeNode[];
    filterByText(text: string, contains?: boolean): void;
    addToDataSource(parent: WNTreeNode, text: string, link: string, value: string, image: string): WNTreeNode;
    removeFromDataSource(node: WNTreeNode): boolean;
    updateNodeElement(node: WNTreeNode): void;
    setDataSourceByParentId(parentNode: WNTreeNode, dataSource: any[], idFieldName: string, parentFieldName: string, parentRootValue: any, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSourceByItem(parentNode: WNTreeNode, dataSource: any[], itemFieldName: string, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSource(parentNode: WNTreeNode, dataSource: WNTreeNode[], append?: boolean): void;
    checkedClear(): void;
    checkedAll(): void;
    checkedInvert(): void;
    checkedHide(value: string[]): void;
}
type WNTreeNode = {
    id: number;
    text: string;
    html: string;
    link: string;
    value: string;
    image: string;
    liElement: HTMLLIElement;
    element: HTMLElement;
    parentNode: WNTreeNode;
    children: WNTreeNode[];
};
interface IWNTreeTable extends IWNComponent {
    tree: IWNTree;
    table: IWNTable;
    selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    tableSelectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
}
interface IWNValidator extends IWNComponent {
    isValid(): boolean;
    reset(): void;
}
interface IWNCalendar {
    readonly localeName: string;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    getDayOfWeek(Year: number, Month: number, Day: number): number;
    getDayOfYear(Year: number, Month: number, Day: number): number;
    getDaysInMonth(Year: number, Month: number): number;
    getDaysInYear(Year: number): number;
    getWeekOfYear(Year: number, Month: number, Day: number): number;
    getDaysFromBase(Year: number, Month: number, Day: number): number;
    getYearMonthDayFromDays(mNum: number): {
        year: number;
        month: number;
        day: number;
    };
    isLeapDay(Year: number, Month: number, Day: number): boolean;
    isLeapMonth(Year: number, Month: number): boolean;
    isLeapYear(Year: number): boolean;
}
interface IWNCultureInfo {
    readonly displayName: string;
    readonly englishName: string;
    readonly threeLetterISOLanguageName: string;
    readonly twoLetterISOLanguageName: string;
    readonly DateTimeFormat: {
        readonly amDesignator: string;
        readonly abbreviatedDayNames: string[];
        readonly abbreviatedMonthNames: {
            [Calendar: string]: string[];
        };
        readonly dateSeparator: string;
        readonly dayNames: string[];
        readonly firstDayOfWeek: number;
        readonly fullDateTimePattern: string;
        readonly longDatePattern: string;
        readonly longTimePattern: string;
        readonly monthDayPattern: string;
        readonly monthNames: {
            [Calendar: string]: string[];
        };
        readonly pmDesignator: string;
        readonly shortDatePattern: string;
        readonly shortTimePattern: string;
        readonly shortestDayNames: string[];
        readonly timeSeparator: string;
        readonly yearMonthPattern: string;
        readonly holiday: number;
    };
    readonly NumberFormat: {
        readonly currencyDecimalDigits: number;
        readonly currencyDecimalSeparator: string;
        readonly currencyGroupSeparator: string;
        readonly currencyGroupSizes: number[];
        readonly currencyNegativePattern: number;
        readonly currencyPositivePattern: number;
        readonly currencySymbol: string;
        readonly nanSymbol: string;
        readonly nativeDigits: string[];
        readonly negativeInfinitySymbol: string;
        readonly negativeSign: string;
        readonly numberDecimalDigits: number;
        readonly numberDecimalSeparator: string;
        readonly numberGroupSeparator: string;
        readonly numberGroupSizes: number[];
        readonly numberNegativePattern: number;
        readonly perMilleSymbol: string;
        readonly percentDecimalDigits: number;
        readonly percentDecimalSeparator: string;
        readonly percentGroupSeparator: string;
        readonly percentGroupSizes: number[];
        readonly percentNegativePattern: number;
        readonly percentPositivePattern: number;
        readonly percentSymbol: string;
        readonly positiveInfinitySymbol: string;
        readonly positiveSign: string;
    };
    readonly TextInfo: {
        readonly ansiCodePage: number;
        readonly cultureName: string;
        readonly ebcdicCodePage: number;
        readonly isRightToLeft: boolean;
        readonly lcid: number;
        readonly listSeparator: string;
        readonly macCodePage: number;
        readonly oemCodePage: number;
    };
}
interface IWNDate {
    dateChanged: (t?: IWNDate) => void;
    cultureInfo: IWNCultureInfo;
    calendar: IWNCalendar;
    addDays(value: number): void;
    addHours(value: number): void;
    addMilliseconds(value: number): void;
    addMinutes(value: number): void;
    addMonths(value: number): void;
    addSeconds(value: number): void;
    addYears(value: number): void;
    addWeeks(value: number): void;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    milliseconds: number;
    readonly dayOfWeek: number;
    readonly dayOfYear: number;
    readonly daysInMonth: number;
    readonly daysInYear: number;
    readonly isLeapYear: boolean;
    readonly leapMonth: number;
    readonly monthsInYear: number;
    readonly isLeapMonth: boolean;
    readonly isLeapDay: boolean;
    readonly weekOfYear: number;
    setDate(date: Date): void;
    setUTCDate(date: any): void;
    setDateYMD(Year: number, Month: number, Day: number, Hour: number, Minute: number, Second: number, Millisecond: number): void;
    setYMD(Year: number, Month: number, Day: number, Hour: number, Minute: number, Second: number, Millisecond: number): void;
    setDateNumber(jd: number): void;
    setDateString(s: string): void;
    set(value: IWNDate): void;
    value(value: any): number;
    toDateTime(): Date;
    toNumber(): number;
    toNumberDate(): number;
    toNumberYMD(Year: number, Month: number, Day: number): number;
    toString(format?: string, nativeDigit?: boolean): any;
    toLongDateString(nativeDigit?: boolean): string;
    toShortDateString(nativeDigit?: boolean): string;
    toLongTimeString(nativeDigit?: boolean): string;
    toShortTimeString(nativeDigit?: boolean): string;
    convert(value: any, format?: string, nativeDigit?: boolean): string;
    lessThan(rhs: IWNDate): boolean;
    lessThanEqual(rhs: IWNDate): boolean;
    greaterThan(rhs: IWNDate): boolean;
    greaterThanEqual(rhs: IWNDate): boolean;
    equal(rhs: IWNDate): boolean;
    notEqual(rhs: IWNDate): boolean;
    lessThanExact(rhs: IWNDate): boolean;
    lessThanEqualExact(rhs: IWNDate): boolean;
    greaterThanExact(rhs: IWNDate): boolean;
    greaterThanEqualExact(rhs: IWNDate): boolean;
    equalExact(rhs: IWNDate): boolean;
    notEqualExact(rhs: IWNDate): boolean;
}
