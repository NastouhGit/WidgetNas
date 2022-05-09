interface wnCultureInfo {
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