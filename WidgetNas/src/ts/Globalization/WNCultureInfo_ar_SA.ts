class WNCultureInfo_ar_SA implements IWNCultureInfo {
    readonly displayName = 'العربية';
    readonly englishName = 'Arabic';
    readonly threeLetterISOLanguageName = 'ara';
    readonly twoLetterISOLanguageName = 'ar';
    readonly DateTimeFormat = {
        amDesignator: 'ص',
        abbreviatedDayNames: ["أحد", "اثنين", "ثلاثا", "أربعا", "خميس", "جمعة", "سبت"],
        abbreviatedMonthNames: {
            "persian": ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف", ""],
            "gregory": ["ينا", "فبر", "مارس", "أبريل", "مايو", "يوني", "يولي", "أغسطس", "سبتم", "أكتو", "نوفم", "ديسم", ""],
            "julian": ["ينا", "فبر", "مارس", "أبريل", "مايو", "يوني", "يولي", "أغسطس", "سبتم", "أكتو", "نوفم", "ديسم", ""],
            "islamic": ["محر", "صفر", "راول", "رثانی", "جاول", "جثانی", "رجب", "شعب", "رمض", "شوا", "ذقعده", "ذحجه", ""],
        },
        dateSeparator: '/',
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        firstDayOfWeek: 6,
        fullDateTimePattern: 'dddd، d MMMM yyyy h:mm:ss tt',
        longDatePattern: 'dddd، d MMMM yyyy',
        longTimePattern: 'h:mm:ss tt',
        monthDayPattern: 'd MMMM',
        monthNames: {
            "persian": ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
            "gregory": ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيه", "يوليه", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
            "julian": ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيه", "يوليه", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", ""],
            "islamic": ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة", ""],
        },
        pmDesignator: 'م',
        shortDatePattern: "d/M‏/yyyy",
        shortTimePattern: "h:mm tt",
        shortestDayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        timeSeparator: ':',
        yearMonthPattern: 'MMMM yyyy',
        holiday: 5
    };
    readonly NumberFormat = {
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: "٫",
        currencyGroupSeparator: ",",
        currencyGroupSizes: [3],
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        currencySymbol: "ر.س.",
        nanSymbol: "ليس رقم",
        nativeDigits: ["۰", "۱", "۲", "۳", "٤", "٥", "٦", "۷", "۸", "۹"],
        negativeInfinitySymbol: "-∞",
        negativeSign: "-",
        numberDecimalDigits: 3,
        numberDecimalSeparator: "٫",
        numberGroupSeparator: ",",
        numberGroupSizes: [3],
        numberNegativePattern: 1,
        perMilleSymbol: "‰",
        percentDecimalDigits: 3,
        percentDecimalSeparator: "٫",
        percentGroupSeparator: ",",
        percentGroupSizes: [3],
        percentNegativePattern: 1,
        percentPositivePattern: 1,
        percentSymbol: "؜",
        positiveInfinitySymbol: "∞",
        positiveSign: "+"
    };
    readonly TextInfo = {
        ansiCodePage: 1025,
        cultureName: "ar-SA",
        ebcdicCodePage: 20420,
        isRightToLeft: true,
        lcid: 1025,
        listSeparator: ";",
        macCodePage: 10004,
        oemCodePage: 720
    };
}
