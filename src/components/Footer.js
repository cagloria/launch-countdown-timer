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

    span {
        display: block;
        width: 100%;
        height: 100%;
        background-position: center;
        transition: background-image 0.3s ease-out;
    }

    .facebook {
        background-image: url(${facebook});
        &:hover {
            background-image: url(${facebookHover});
        }
        &:active {
            background-image: url(${facebookActive});
        }
    }

    .pinterest {
        background-image: url(${pinterest});
        &:hover {
            background-image: url(${pinterestHover});
        }
        &:active {
            background-image: url(${pinterestActive});
        }
    }

    .instagram {
        background-image: url(${instagram});
        &:hover {
            background-image: url(${instagramHover});
        }
        &:active {
            background-image: url(${instagramActive});
        }
    }
`;

export default function Footer() {
    return (
        <Container>
            <LinksContainer>
                <IconLink href="https://www.facebook.com/">
                    <span aria-label="Facebook" className="facebook"></span>
                </IconLink>
                <IconLink href="https://www.pinterest.com/">
                    <span aria-label="Pinterest" className="pinterest"></span>
                </IconLink>
                <IconLink href="https://www.instagram.com/">
                    <span aria-label="Instagram" className="instagram"></span>
                </IconLink>
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
