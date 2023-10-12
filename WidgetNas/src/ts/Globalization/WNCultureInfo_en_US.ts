class WNCultureInfo_en_US implements IWNCultureInfo  {
    readonly displayName = 'English';
    readonly englishName = 'English';
    readonly threeLetterISOLanguageName = 'eng';
    readonly twoLetterISOLanguageName = 'en';
    readonly DateTimeFormat = {
        amDesignator: 'AM',
        abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        abbreviatedMonthNames: {
            "gregory": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
            "julian": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
            "persian": ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf", ""],
            "islamic": ["Muh", "Saf", "RAw", "RTh", "JAw", "JTh", "Raj", "Sha", "Ram", "Shw", "ZQa", "ZHi", ""],
        },
        dateSeparator: '-',
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        firstDayOfWeek: 0,
        fullDateTimePattern: 'dddd, MMMM d, yyyy h:mm:ss tt',
        longDatePattern: 'dddd, MMMM d, yyyy',
        longTimePattern: 'h:mm:ss tt',
        monthDayPattern: 'MMMM d',
        monthNames: {
            "gregory": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            "julian": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            "persian": ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand", ""],
            "islamic": ["al-Muharram", "Safar", "Rabi al-Awwal", "Rabi ath-Thani", "Jumada al-Awwal", "Jumada ath-Thaniyah", "Rajab", "Shaban", "Ramadan", "Shawwal", "Zu al-Qadah", "Zu al-Hijjah", ""],
        },
        pmDesignator: 'PM',
        shortDatePattern: "M-d-yyyy",
        shortTimePattern: "h:mm tt",
        shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        timeSeparator: ':',
        yearMonthPattern: 'MMMM yyyy',
        holiday: 0
    };
    readonly NumberFormat = {
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyGroupSizes: [3],
        currencyNegativePattern: 0,
        currencyPositivePattern: 0,
        currencySymbol: "$",
        nanSymbol: "NaN",
        nativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        negativeInfinitySymbol: "-∞",
        negativeSign: "-",
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberGroupSizes: [3],
        numberNegativePattern: 1,
        perMilleSymbol: "‰",
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentGroupSizes: [3],
        percentNegativePattern: 1,
        percentPositivePattern: 1,
        percentSymbol: "%",
        positiveInfinitySymbol: "∞",
        positiveSign: "+"
    };
    readonly TextInfo = {
        ansiCodePage: 1252,
        cultureName: "en-US",
        ebcdicCodePage: 37,
        isRightToLeft: false,
        lcid: 1033,
        listSeparator: ",",
        macCodePage: 10000,
        oemCodePage: 437
    };
}