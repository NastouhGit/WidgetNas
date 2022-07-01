declare class WNElement {
    Element: HTMLElement | HTMLDocument | any;
    Ready(callBack: any, options?: boolean);
    Click(callBack: any);
    Change(callBack: any);
    Input(callBack: any);
    Focus(callBack: any);
    FocusIn(callBack: any);
    FocusOut(callBack: any);
    Resize(callBack: any);
    Scroll(callBack: any);
    Select(callBack: any);
    ContextMenu(callBack: any);
    Copy(callBack: any);
    Cut(callBack: any);
    Paste(callBack: any);
    DBLClick(callBack: any);
    Drag(callBack: any);
    Dragend(callBack: any);
    Dragenter(callBack: any);
    Dragleave(callBack: any);
    Dragover(callBack: any);
    Dragstart(callBack: any);
    Drop(callBack: any);
    Keydown(callBack: any);
    Keypress(callBack: any);
    Keyup(callBack: any);
    Mousedown(callBack: any);
    Mouseenter(callBack: any);
    Mouseleave(callBack: any);
    Mousemove(callBack: any);
    Mouseover(callBack: any);
    Mouseout(callBack: any);
    Mouseup(callBack: any);
    Touchcancel(callBack: any);
    Touchend(callBack: any);
    Touchmove(callBack: any);
    Touchstart(callBack: any);
    Wheel(callBack: any);
}
declare interface wnCultureInfo {
    DisplayName: string;
    EnglishName: string;
    ThreeLetterISOLanguageName: string;
    TwoLetterISOLanguageName: string;
    DateTimeFormat: {
        AMDesignator: string;
        AbbreviatedDayNames: string[];
        AbbreviatedMonthNames: { [Calendar: string]: string[] };
        DateSeparator: string;
        DayNames: string[];
        FirstDayOfWeek: number
        FullDateTimePattern: string;
        LongDatePattern: string;
        LongTimePattern: string;
        MonthDayPattern: string;
        MonthNames: { [Calendar: string]: string[] };
        PMDesignator: string;
        ShortDatePattern: string;
        ShortTimePattern: string;
        ShortestDayNames: string[];
        TimeSeparator: string;
        YearMonthPattern: string;
        Holiday: number;
    },
    NumberFormat: {
        CurrencyDecimalDigits: number;
        CurrencyDecimalSeparator: string;
        CurrencyGroupSeparator: string;
        CurrencyGroupSizes: number[];
        CurrencyNegativePattern: number;
        CurrencyPositivePattern: number;
        CurrencySymbol: string;
        NaNSymbol: string;
        NativeDigits: string[];
        NegativeInfinitySymbol: string;
        NegativeSign: string;
        NumberDecimalDigits: number;
        NumberDecimalSeparator: string;
        NumberGroupSeparator: string;
        NumberGroupSizes: number[];
        NumberNegativePattern: number;
        PerMilleSymbol: string;
        PercentDecimalDigits: number;
        PercentDecimalSeparator: string;
        PercentGroupSeparator: string;
        PercentGroupSizes: number[];
        PercentNegativePattern: number;
        PercentPositivePattern: number;
        PercentSymbol: string;
        PositiveInfinitySymbol: string;
        PositiveSign: string;
    },
    TextInfo: {
        ANSICodePage: number;
        CultureName: string;
        EBCDICCodePage: number;
        IsRightToLeft: boolean;
        LCID: number;
        ListSeparator: string;
        MacCodePage: number;
        OEMCodePage: number;
    }
}
declare interface wnCalendar {
    LeapMonth: number;
    MonthsInYear: number;
    GetDayOfWeek(Year: number, Month: number, Day: number): number;
    GetDayOfYear(Year: number, Month: number, Day: number): number;
    GetDaysInMonth(Year: number, Month: number): number;
    GetDaysInYear(Year: number): number;
    GetWeekOfYear(Year: number, Month: number, Day: number): number;
    IsLeapDay(Year: number, Month: number, Day: number): boolean;
    IsLeapMonth(Year: number, Month: number): boolean;
    IsLeapYear(Year: number): boolean;
    GetDaysFromBase(Year: number, Month: number, Day: number): number;
    GetYearMontDayFromDays(mNum: number): { Year: number, Month: number, Day: number };
}

declare var WNDefaultNaitveDigit: boolean;
declare var WNDefaultCalendar: wnCalendar;
declare var WNDefaultCultureInfo: wnCultureInfo;
declare var WNDefaultHijriAdjustment: number;
declare var WNDefaultLanguage;
declare var WNlang: { [id: string]: any; };
declare var WN: { [id: string]: any; };

declare function WNmod(a: number, b: number);
declare function WNparseBoolean(value: any, Default?: boolean): boolean;
declare function WNparseNumber(value: any, Default?: number, culture?: wnCultureInfo): number;
declare function WNparseString(value: any, Default?: string): string;
declare function WNTrim(value: string, trimstr?: string);
declare function WNLimitRange(value: number, min: number, max: number);
declare function WNNaitveDigit(number: number | string, culture?: wnCultureInfo, convert?: boolean): string;
declare function WNDeNaitveDigit(value: string, culture?: wnCultureInfo): string;
declare function WNGetNodesList(list: string, parent: any, thiselemnt?: HTMLElement): HTMLElement[];
declare function WNParentHaveClass(child: HTMLElement, parentClassName: string);
declare function WNCalcValue(value1: string, value2: string, sign: string, elem?: HTMLElement, min?: number, max?: number): string;
declare function WNContainElement(elem: HTMLElement, findin: HTMLElement): boolean;
declare function WNHtmlToEscape(src: string): string;
declare function WNValueUnit(value: string): { value: number, unit: string };
declare function WNGetCookie(cname: string): string;
declare function WNSetCookie(cname: string, cvalue: string, exdays: number): void;
declare function WNGetStorage(key: string): string;
declare function WNSetStorage(key: string, value: string, localstorage: boolean): boolean;
declare function WNSleep(ms: number);
declare function WNWaitToLoad(e: HTMLElement, timeout?: number);
declare function WNAddClassList(elem: HTMLElement, classes: string);
declare function WNRemoveClassList(elem: HTMLElement, classes: string);
declare function WNGenerateFunction(body: string, params?: string): any;
declare function WNAddStringQuote(value: string);
declare function WNisJson(item);

declare function WNE(element: HTMLElement | HTMLDocument | string): WNElement;
declare function InitWNBlock(element: HTMLElement | HTMLDocument);
declare var WNBaseFetchUri: string;
declare function Post(data: any, postUrl: string): Promise<any>;
declare function Get(data: any, postUrl: string): Promise<any>;
declare function GetText(postUrl: string): Promise<any>;
declare function GetFile(path: any, postUrl: string): Promise<any>;
declare function Upload(files: any, destination: string, postUrl: string): Promise<any>;
declare function GetFormData(Form: HTMLFormElement): any;


declare var wnconfirm: any;
declare var wncollapse: any;