const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

/**
 * Returns the remaining days, hours, minutes, and seconds from the start date
 * to the end date.
 * @param {Date} start  Start date and time
 * @param {Date} end    End date and time
 * @returns An object of the remaining days, hours, minutes, and seconds
 */
export function findTimeDifference(start, end) {
    let days = undefined;
    let hours = undefined;
    let minutes = undefined;
    let seconds = undefined;
    let difference = (end - start) / 1000; // Total seconds from start to end

    // Sets remaining time to 0 if the start time has passed the end time
    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Find total days in the difference
    days = Math.floor(difference / secondsInDay);

    // Subtract duration of days from difference and continue to find total
    // hours in the remaining difference
    difference -= days * secondsInDay;
    hours = Math.floor(difference / secondsInHour);

    // Subtract duration of hours from difference and continue to find total
    // minutes in the remaining difference
    difference -= hours * secondsInHour;
    minutes = Math.floor(difference / secondsInMinute);

    // Subtract duration of minutes from difference and continue to find total
    // seconds in the remaining difference
    difference -= minutes * secondsInMinute;
    seconds = Math.floor(difference);

    return { days, hours, minutes, seconds };
}
