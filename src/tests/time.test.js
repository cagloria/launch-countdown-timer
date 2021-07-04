import { findTimeDifference } from "../utilities/time";

describe("findTimeDifference", () => {
    test("returns remaining time if less than a minute", () => {
        const result = findTimeDifference(
            new Date("June 20, 2021 11:00:00"),
            new Date("June 20, 2021 11:00:34")
        );
        expect(result).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 34 });
    });
    test("returns remaining time if less than an hour", () => {
        const result = findTimeDifference(
            new Date("June 20, 2021 11:00:00"),
            new Date("June 20, 2021 11:58:34")
        );
        expect(result).toEqual({ days: 0, hours: 0, minutes: 58, seconds: 34 });
    });
    test("returns remaining time if less than a day", () => {
        const result = findTimeDifference(
            new Date("June 20, 2021 11:00:00"),
            new Date("June 21, 2021 10:58:34")
        );
        expect(result).toEqual({
            days: 0,
            hours: 23,
            minutes: 58,
            seconds: 34,
        });
    });
    test("returns remaining time if more than a day", () => {
        const result = findTimeDifference(
            new Date("June 20, 2021 11:00:00"),
            new Date("June 21, 2021 13:58:34")
        );
        expect(result).toEqual({
            days: 1,
            hours: 2,
            minutes: 58,
            seconds: 34,
        });
    });
    test("returns remaining time if multiple days", () => {
        const result = findTimeDifference(
            new Date("June 20, 2021 11:00:00"),
            new Date("July 8, 2021 13:58:34")
        );
        expect(result).toEqual({
            days: 18,
            hours: 2,
            minutes: 58,
            seconds: 34,
        });
    });
    test("returns zero if the start time has passed the end time", () => {
        const result = findTimeDifference(
            new Date("July 8, 2021 13:58:34"),
            new Date("June 20, 2021 11:00:00")
        );
        expect(result).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
    });
});
