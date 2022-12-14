"use strict";
exports.__esModule = true;
exports.NextDayCalculator = void 0;
var NextDayCalculator = /** @class */ (function () {
    function NextDayCalculator() {
    }
    NextDayCalculator.isLeapYear = function (year) {
        var leapYear = year % 4 == 0;
        if (leapYear)
            return true;
        else
            return false;
    };
    NextDayCalculator.isLastDayOfMonth = function (day, month, year) {
        var lastDayOfNotLeapYearFeb = 28;
        var lastDayOfLeapYearFeb = 29;
        var lastDayOf31DaysMonth = 31;
        var lastDayOf30DaysMonth = 30;
        var Jan = 1;
        var Feb = 2;
        var Mar = 3;
        var Apr = 4;
        var May = 5;
        var Jun = 6;
        var Jul = 7;
        var Aug = 8;
        var Sept = 9;
        var Oct = 10;
        var Nov = 11;
        var Dec = 12;
        switch (month) {
            case Jan:
            case Mar:
            case May:
            case Jul:
            case Aug:
            case Oct:
            case Dec:
                if (day == lastDayOf31DaysMonth)
                    return true;
                else
                    return false;
            case Apr:
            case Jun:
            case Sept:
            case Nov:
                if (day == lastDayOf30DaysMonth)
                    return true;
                else
                    return false;
            case Feb:
                if (this.isLeapYear(year)) {
                    console.log(day);
                    if (day == lastDayOfLeapYearFeb)
                        return 123;
                    else
                        return 234;
                }
                else {
                    if (day == lastDayOfNotLeapYearFeb)
                        return 456;
                    else
                        return 789;
                }
        }
    };
    NextDayCalculator.isLastMonthOfYear = function (month) {
        if (month == 12)
            return true;
        else
            return false;
    };
    NextDayCalculator.nextDayCalculate = function (day, month, year) {
        var nextDayFirstOfMonth = 1;
        var nextDay = day + 1;
        var nextMonthFirstOfYear = 1;
        var nextMonth = month + 1;
        var nextYear = year + 1;
        if (NextDayCalculator.isLastDayOfMonth(day, month, year)) {
            if (NextDayCalculator.isLastMonthOfYear(month)) {
                return [nextDayFirstOfMonth, nextMonthFirstOfYear, nextYear,];
            }
            else {
                return [nextDayFirstOfMonth, nextMonth, year];
            }
        }
        else {
            return [nextDay, month, year];
        }
    };
    return NextDayCalculator;
}());
exports.NextDayCalculator = NextDayCalculator;
