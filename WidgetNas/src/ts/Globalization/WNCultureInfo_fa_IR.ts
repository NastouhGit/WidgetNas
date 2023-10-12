class WNCultureInfo_fa_IR implements IWNCultureInfo {
    readonly displayName = 'پارسی';
    readonly englishName = 'Persian';
    readonly threeLetterISOLanguageName = 'fas';
    readonly twoLetterISOLanguageName = 'fa';
    readonly DateTimeFormat = {
        amDesignator: 'ق.ظ',
        abbreviatedDayNames: ["يكش", "دوش", "س.ش", "چ.ش", "پنج", "جمع", "شنب"],
        abbreviatedMonthNames: {
            "persian": ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف", ""],
            "gregory": ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "آگو", "سپت", "اکت", "نوا", "دسا", ""],
            "julian": ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "آگو", "سپت", "اکت", "نوا", "دسا", ""],
            "islamic": ["محر", "صفر", "راول", "رثانی", "جاول", "جثانی", "رجب", "شعب", "رمض", "شوا", "ذقعده", "ذحجه", ""],
        },
        dateSeparator: '/',
        dayNames: ["يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
        firstDayOfWeek: 6,
        fullDateTimePattern: 'dddd, d MMMM yyyy hh:mm:ss tt',
        longDatePattern: 'dddd, d MMMM yyyy',
        longTimePattern: 'h:mm:ss tt',
        monthDayPattern: 'd MMMM',
        monthNames: {
            "persian": ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
            "gregory": ["ژانویه", "فوریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر", ""],
            "julian": ["ژانویه", "فوریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر", ""],
            "islamic": ["محرم", "صفر", "ربیع الاول", "ربیع الثانی", "جمادی الاول", "جمادی الثانی", "رجب", "شعبان", "رمضان", "شوال", "ذوالقعده", "ذوالحجه", ""],
        },
        pmDesignator: 'ب.ظ',
        shortDatePattern: "yyyy/MM/dd",
        shortTimePattern: "hh:mm tt",
        shortestDayNames: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        timeSeparator: ':',
        yearMonthPattern: 'MMMM, yyyy',
        holiday: 5
    };
    readonly NumberFormat = {
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: "/",
        currencyGroupSeparator: ",",
        currencyGroupSizes: [3],
        currencyNegativePattern: 6,
        currencyPositivePattern: 1,
        currencySymbol: "ريال",
        nanSymbol: "ناعدد",
        nativeDigits: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        negativeInfinitySymbol: "-∞",
        negativeSign: "-",
        numberDecimalDigits: 2,
        numberDecimalSeparator: "/",
        numberGroupSeparator: ",",
        numberGroupSizes: [3],
        numberNegativePattern: 1,
        perMilleSymbol: "‰",
        percentDecimalDigits: 2,
        percentDecimalSeparator: "/",
        percentGroupSeparator: ",",
        percentGroupSizes: [3],
        percentNegativePattern: 1,
        percentPositivePattern: 1,
        percentSymbol: "%",
        positiveInfinitySymbol: "∞",
        positiveSign: "+"
    };
    readonly TextInfo = {
        ansiCodePage: 1256,
        cultureName: "fa-IR",
        ebcdicCodePage: 20420,
        isRightToLeft: true,
        lcid: 1065,
        listSeparator: "؛",
        macCodePage: 10004,
        oemCodePage: 720
    };
}
