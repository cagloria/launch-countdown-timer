import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./Themes";
import Count from "./Count";
import Footer from "./Footer";

const CountdownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    margin: 0 auto;
`;

const Heading = styled.h1`
    margin-bottom: 57px;
`;

export default function App() {
    const [launchDate, setLaunchDate] = useState(
        new Date("June 27, 2021 13:00:00")
    );
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState(8);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [currentDate]);

    return (
        <>
            <GlobalStyles />
            <main>
                <Heading>We're launching soon</Heading>

                <CountdownContainer>
                    <Count value={days} label="Days" />
                    <Count value="23" label="Hours" />
                    <Count value="55" label="Minutes" />
                    <Count value="41" label="Seconds" />
                </CountdownContainer>
            </main>
            <Footer />
        </>
    );
}
