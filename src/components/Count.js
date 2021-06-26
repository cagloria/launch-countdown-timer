import styled from "styled-components";
import { primary, neutral } from "./Themes";

const Value = styled.div`
    font-size: 2.1em;
    width: fit-content;
    width: 69px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${primary.red};
    position: relative;
    text-align: center;
    box-shadow: 0px 6px 4px ${neutral.black};
`;

const TopBox = styled.div`
    background-color: #2a2d46;
    /* TODO: There is a shadow over this portion that overshadows the text */
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    border-radius: 5px;
`;

const BottomBox = styled.div`
    background-color: ${neutral.gray};
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    z-index: -1;
    border-radius: 5px;
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
            <Value>
                {value}
                <TopBox />
                <BottomBox />
            </Value>
            <Label>{label}</Label>
        </div>
    );
}
