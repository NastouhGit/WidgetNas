interface wnCalendar {
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