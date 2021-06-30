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
        padding: 130px 6.2vw 0;
        background-color: ${neutral.black};
        background-image: 
            url(${bgHills}),
            url(${bgStars}),
            linear-gradient(180deg, ${neutral.black} 0%, ${neutral.dark} 100%);
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: 84% bottom, center, center;
        background-attachment: fixed, fixed, fixed;
        background-size: 275% 25%, auto, auto;
        
        @media only screen and (min-width: 769px) {
            padding-top: 121px;
            background-size: 100% 25%, auto, auto;
            background-position: center bottom, center, center;
        }

        @media only screen and (max-height: 450px) {
            padding-top: 20px;
        }
    }

    a {
        color: ${primary.gray};
        transition: color 0.3s ease-out;

        &:hover {
            color: ${primary.red};
        }

        &:active {
            color: ${neutral.white};
        }
    }

    h1 {
        text-transform: uppercase;
        text-align: center;
        font-size: clamp(1.16em, 2.5vw, 1.42em);
        letter-spacing: 0.31em;
        line-height: 126%;
    }
`;
