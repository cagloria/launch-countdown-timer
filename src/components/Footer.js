import styled from "styled-components";
import { primary } from "./Themes";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Container = styled.footer`
    position: absolute;
    bottom: 7px;
    transform: translateX(50%);
    right: 50%;

    @media only screen and (min-width: 769px) {
        bottom: 2px;
    }

    @media only screen and (min-width: 2000px) {
        bottom: 70px;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    column-gap: 32px;
    justify-content: center;
`;

const Attribution = styled.p`
    color: ${primary.gray};
    text-align: center;
    font-size: clamp(0.5em, 1vw, 1em);
    letter-spacing: 0.15em;
    max-width: 40ch;
`;

export default function Footer() {
    return (
        <Container>
            <LinksContainer>
            {/* TODO: Add hover/active icon link state */}
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.pinterest.com/">
                    <img src={pinterest} alt="Pinterest" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram" />
                </a>
            </LinksContainer>
            <Attribution>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/cagloria">C.A. Gloria</a>
                .
            </Attribution>
        </Container>
    );
}
