import styled from "styled-components";
import { primary } from "./Themes";
import facebook from "../assets/icon-facebook.svg";
import facebookHover from "../assets/icon-facebook-hover.svg";
import facebookActive from "../assets/icon-facebook-active.svg";
import pinterest from "../assets/icon-pinterest.svg";
import pinterestHover from "../assets/icon-pinterest-hover.svg";
import pinterestActive from "../assets/icon-pinterest-active.svg";
import instagram from "../assets/icon-instagram.svg";
import instagramHover from "../assets/icon-instagram-hover.svg";
import instagramActive from "../assets/icon-instagram-active.svg";

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

const IconLink = styled.a`
    width: 24px;
    height: 24px;
    display: block;
    background-position: center;
    transition: background-image 0.3s ease-out;
    background-image: url(${(props) => props.bg});
    &:hover {
        background-image: url(${(props) => props.bgHover});
    }
    &:active {
        background-image: url(${(props) => props.bgActive});
    }
`;

export default function Footer() {
    return (
        <Container>
            <LinksContainer>
                <IconLink
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    bg={facebook}
                    bgHover={facebookHover}
                    bgActive={facebookActive}
                ></IconLink>
                <IconLink
                    href="https://www.pinterest.com/"
                    aria-label="Pinterest"
                    bg={pinterest}
                    bgHover={pinterestHover}
                    bgActive={pinterestActive}
                ></IconLink>
                <IconLink
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    bg={instagram}
                    bgHover={instagramHover}
                    bgActive={instagramActive}
                ></IconLink>
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
