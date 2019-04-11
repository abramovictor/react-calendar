const DAYS_IN_WEEK = 7;
const WEEK_IN_MONTH = 6;

export function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export function getDayOfWeek(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}

export function isEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const monthStartOn = getDayOfWeek(date);
    const daysInMonth = getDaysInMonth(year, month);

    let currentMonthDay = 1;
    let prevMonthDay = (daysInMonth - monthStartOn) + 1;

    for (let cellWeek = 0; cellWeek < WEEK_IN_MONTH; cellWeek++) {
        result[cellWeek] = [];
        
        for (let cellDay = 0; cellDay < DAYS_IN_WEEK; cellDay++) {
            if (cellWeek === 0 && cellDay < monthStartOn) {
                result[cellWeek][cellDay] = new Date(year, month - 1, prevMonthDay++);
            }
            else {
                result[cellWeek][cellDay] = new Date(year, month, currentMonthDay++);
            }
        }
    }

    return result;
}