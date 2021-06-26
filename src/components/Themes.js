import { createGlobalStyle } from "styled-components";
import bgStars from "../assets/bg-stars.svg";
import bgHills from "../assets/pattern-hills.svg";

export const primary = {
    gray: "hsl(237, 18%, 59%)",
    red: "hsl(345, 95%, 68%)",
};

export const neutral = {
    black: "hsl(234, 17%, 12%)",
    dark: "hsl(235, 16%, 14%)",
    gray: "hsl(236, 21%, 26%)",
    white: "hsl(0, 0%, 100%)",
};

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: "Red Hat Text", sans-serif;
        color: ${neutral.white};
    }

    body {
        margin: 0;
        padding: 130px 20px 0;
        background-color: ${neutral.black};
        background-image: 
            url(${bgHills}),
            url(${bgStars}),
            linear-gradient(180deg, ${neutral.black} 0%, ${neutral.dark} 100%);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: bottom, center, center;
        background-attachment: fixed, fixed, fixed;
        background-size: contain, auto, auto;
    }

    a {
        color: ${primary.red};
        text-decoration: none;
    }

    h1 {
        text-transform: uppercase;
        text-align: center;
        font-size: 1.16em;
        letter-spacing: 0.31em;
        line-height: 126%;
    }
`;
