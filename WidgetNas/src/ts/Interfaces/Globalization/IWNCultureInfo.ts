interface IWNCultureInfo  {
    readonly displayName: string;
    readonly englishName: string;
    readonly threeLetterISOLanguageName: string;
    readonly twoLetterISOLanguageName: string;
    readonly DateTimeFormat: {
        readonly amDesignator: string;
        readonly abbreviatedDayNames: string[];
        readonly abbreviatedMonthNames: { [Calendar: string]: string[] };
        readonly dateSeparator: string;
        readonly dayNames: string[];
        readonly firstDayOfWeek: number
        readonly fullDateTimePattern: string;
        readonly longDatePattern: string;
        readonly longTimePattern: string;
        readonly monthDayPattern: string;
        readonly monthNames: { [Calendar: string]: string[] };
        readonly pmDesignator: string;
        readonly shortDatePattern: string;
        readonly shortTimePattern: string;
        readonly shortestDayNames: string[];
        readonly timeSeparator: string;
        readonly yearMonthPattern: string;
        readonly holiday: number;
    },
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
    },
    readonly TextInfo: {
        readonly ansiCodePage: number;
        readonly cultureName: string;
        readonly ebcdicCodePage: number;
        readonly isRightToLeft: boolean;
        readonly lcid: number;
        readonly listSeparator: string;
        readonly macCodePage: number;
        readonly oemCodePage: number;
    }
}