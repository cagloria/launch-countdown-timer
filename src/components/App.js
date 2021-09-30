import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { findTimeDifference } from "../utilities/time";
import { randomInteger } from "../utilities/math";
import { GlobalStyles, primary } from "./Themes";
import Count from "./Count";
import Footer from "./Footer";

const CountdownContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 350px;
    margin: 0 auto;

    @media only screen and (min-width: 769px) {
        max-width: 723px;
        width: 60%;
    }
`;

const Heading = styled.h1`
    margin-bottom: 57px;

    @media only screen and (min-width: 769px) {
        margin-bottom: 102px;
    }

    @media only screen and (max-height: 450px) {
        margin-bottom: 45px;
    }
`;

const ArrivingMessage = styled.p`
    color: ${primary.red};
    font-size: clamp(1.5em, 2.5vw, 2em);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
`;

/**
 * Creates a random date within 1 to 99 days away from current date.
 * @returns A randomized date
 */
function getRandomDate() {
    let date = new Date();
    let day = randomInteger(1, 99);

    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + day,
        randomInteger(0, 23),
        randomInteger(0, 59),
        randomInteger(0, 59)
    );
}

export default function App() {
    const [daysRemaining, setDaysRemaining] = useState(0);
    const [hoursRemaining, setHoursRemaining] = useState(0);
    const [minutesRemaining, setMinutesRemaining] = useState(0);
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    const [launched, setLaunched] = useState(false);
    const [launchDate] = useState(
        getLaunchDateFromStorage()
            ? getLaunchDateFromStorage()
            : randomizeLaunchDate()
    );

    useEffect(() => {
        if (!launched) {
            updateRemainingTime();
        }
    });

    useEffect(() => {
        if (!launched) {
            const interval = setInterval(() => {
                updateRemainingTime();
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    /**
     * Randomizes a launch date and sets it in local storage
     * @returns Randomized launch date
     */
    function randomizeLaunchDate() {
        let newDate = getRandomDate();
        localStorage.setItem("launchDate", newDate);
        return newDate;
    }

    /**
     * Retrieves launch date from local storage
     * @returns Launch date from local storage
     */
    function getLaunchDateFromStorage() {
        return localStorage.getItem("launchDate");
    }

    /**
     * Checks to see if the remaining time is above zero. If so, sets app to
     * launched state, or else, sets state for remaining days, hours, minutes,
     * and seconds.
     */
    function updateRemainingTime() {
        const { days, hours, minutes, seconds } = findTimeDifference(
            new Date(),
            new Date(launchDate)
        );

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            setLaunched(true);
        } else {
            setDaysRemaining(days);
            setHoursRemaining(hours);
            setMinutesRemaining(minutes);
            setSecondsRemaining(seconds);
        }
    }

    return (
        <>
            <GlobalStyles />
            <main>
                <Heading>We're launching soon</Heading>

                <CountdownContainer>
                    {launched ? (
                        <ArrivingMessage>Arriving now</ArrivingMessage>
                    ) : daysRemaining >= 100 ? (
                        <>
                            <Count
                                value={daysRemaining}
                                label="Days"
                                largeValue={daysRemaining >= 100}
                            />
                        </>
                    ) : (
                        <>
                            <Count
                                value={daysRemaining}
                                label="Days"
                                largeValue={daysRemaining >= 100}
                            />
                            <Count value={hoursRemaining} label="Hours" />
                            <Count value={minutesRemaining} label="Minutes" />
                            <Count value={secondsRemaining} label="Seconds" />
                        </>
                    )}
                </CountdownContainer>
            </main>
            <Footer />
        </>
    );
}
