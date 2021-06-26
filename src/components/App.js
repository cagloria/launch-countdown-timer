import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./Themes";
import Count from "./Count";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const CountdownContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 17px;
`;

const Heading = styled.h1`
    margin-bottom: 57px;
`;

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
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
            <Footer>
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.pinterest.com/">
                    <img src={pinterest} alt="Pinterest" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram" />
                </a>
                <p>
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{" "}
                    <a href="https://github.com/cagloria">C.A. Gloria</a>.
                </p>
            </Footer>
        </>
    );
}
