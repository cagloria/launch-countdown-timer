import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { findTimeDifference } from "../utilities/time";
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

const LAUNCH = (() => {
    const launchDate = new Date("August 21, 2021 00:00:00");
    return { launchDate };
})();

export default function App() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [launched, setLaunched] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
            const { days, hours, minutes, seconds } = findTimeDifference(
                new Date(),
                LAUNCH.launchDate
            );

            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                setLaunched(true);
            }

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
        return () => clearInterval(interval);
    }, [currentDate]);

    return (
        <>
            <GlobalStyles />
            <main>
                <Heading>We're launching soon</Heading>

                <CountdownContainer>
                    {launched ? (
                        <ArrivingMessage>Arriving now</ArrivingMessage>
                    ) : days >= 100 ? (
                        <>
                            <Count
                                value={days}
                                label="Days"
                                largeValue={days >= 100}
                            />
                        </>
                    ) : (
                        <>
                            <Count
                                value={days}
                                label="Days"
                                largeValue={days >= 100}
                            />
                            <Count value={hours} label="Hours" />
                            <Count value={minutes} label="Minutes" />
                            <Count value={seconds} label="Seconds" />
                        </>
                    )}
                </CountdownContainer>
            </main>
            <Footer />
        </>
    );
}
