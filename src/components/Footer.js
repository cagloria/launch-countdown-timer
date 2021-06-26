import styled, { createGlobalStyle } from "styled-components";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Container = styled.footer`
    position: absolute;
    bottom: 7px;
    transform: translateX(50%);
    right: 50%;
`;

const LinksContainer = styled.div`
    display: flex;
    column-gap: 32px;
    justify-content: center;
`;

const Attribution = styled.p`
    text-align: center;
    font-size: 0.5em;
    letter-spacing: 0.15em;
`;

export default function Footer() {
    return (
        <Container>
            <LinksContainer>
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
