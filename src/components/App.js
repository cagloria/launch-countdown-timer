import React, { useState, useEffect } from "react";
import Count from "./Count";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

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
            <main>
                <h1>We're launching soon</h1>

                <div>
                    <Count value={days} label="Days" />
                    <Count value="23" label="Hours" />
                    <Count value="55" label="Minutes" />
                    <Count value="41" label="Seconds" />
                </div>
            </main>
            <footer>
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
            </footer>
        </>
    );
}
