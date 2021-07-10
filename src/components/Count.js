import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { primary, neutral } from "./Themes";

const Value = styled.div`
    font-size: 2.1em;
    padding: 11px 0;
    width: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${primary.red};
    position: relative;
    text-align: center;
    box-shadow: 0px 6px 4px ${neutral.black};

    @media only screen and (max-width: 320px) {
        font-size: 1.7em;
        width: 60px;
    }

    @media only screen and (min-width: 769px) {
        padding: 16px 0;
        font-size: 3.5em;
        width: 103px;
    }

    @media only screen and (min-width: 1025px) {
        font-size: 5.2em;
        width: 150px;
    }
`;

const TopBox = styled.div`
    background-color: ${neutral.gray};
    top: 0;
    z-index: -1;
    border-radius: 5px;
`;

const BottomBox = styled.div`
    background-color: ${neutral.gray};
    bottom: 0;
    z-index: -1;
`;

const Shadow = styled.div`
    background-color: #2a2d4657;
    top: 0;
    z-index: 9;
`;

const CountStyles = createGlobalStyle`
    .box {
        position: absolute;
        width: 100%;
        height: 50%;
        border-radius: 5px;
    }

    /* When a value has three or more digits, the box's width is increased */
    .large-value {
        width: 93px;

        @media only screen and (max-width: 320px) {
            width: 75px;
        }

        @media screen and (min-width: 769px) {
            width: 150px;
        }

        @media only screen and (min-width: 1025px) {
            width: 205px;
        }
    }

    /* When a value has four or more digits, the value changes to "999+" */
    .plus {
        font-size: 0.5em;
    }
`;

const Label = styled.p`
    text-transform: uppercase;
    color: ${primary.gray};
    font-size: clamp(0.46em, 1vw, 0.76em);
    letter-spacing: 0.4em;
    margin: 13px 0 0;
    text-align: center;

    @media only screen and (min-width: 769px) {
        letter-spacing: 0.6em;
        margin-top: 26px;
    }
`;

/**
 * Formats a value to fit in the Count component.
 * @param {Number} value    Value to convert
 * @returns                 A React fragment of the formatted value
 */
export function formatValue(value) {
    value = `${value}`;

    // Changes single-digit values to two-digit
    if (value.length < 2) {
        value = `0${value}`;
    }

    // Accommodates values over 999 to show as "999+"
    if (value.length > 3) {
        return (
            <>
                999<span className="plus">+</span>
            </>
        );
    }

    return <>{value}</>;
}

export default function Count({ value, label, largeValue }) {
    value = formatValue(value);

    return (
        <div>
            <CountStyles />
            <Value className={largeValue ? "large-value" : null}>
                {value}
                <TopBox className="box" />
                <BottomBox className="box" />
                <Shadow className="box" />
            </Value>
            <Label>{label}</Label>
        </div>
    );
}
