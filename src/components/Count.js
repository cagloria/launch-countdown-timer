import styled, { createGlobalStyle } from "styled-components";
import { primary, neutral } from "./Themes";

const CountStyles = createGlobalStyle`
    .box {
        position: absolute;
        width: 100%;
        height: 50%;
        border-radius: 5px;
    }
`;

const Value = styled.div`
    font-size: 2.1em;
    padding: 11px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${primary.red};
    position: relative;
    text-align: center;
    box-shadow: 0px 6px 4px ${neutral.black};
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

const Label = styled.p`
    text-transform: uppercase;
    color: ${primary.gray};
    font-size: 0.46em;
    letter-spacing: 0.3em;
    margin: 14px 0 0;
    text-align: center;
`;

export default function Count({ value, label }) {
    if (`${value}`.length < 2) {
        value = `0${value}`;
    }

    return (
        <div>
            <CountStyles />
            <Value>
                {value}
                <TopBox className="box" />
                <BottomBox className="box" />
                <Shadow className="box" />
            </Value>
            <Label>{label}</Label>
        </div>
    );
}
