import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        background: rgb(0, 0, 0);
        background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.5284488795518207) 0%,
            rgba(0, 0, 0, 0.676908263305322) 38%,
            rgba(0, 0, 0, 0.923406862745098) 100%
        );
        z-index: 2;
    }
`;

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const BgImg = styled.img`
    position: absolute;
    top: 25%;
    left: 0;
    height: 100vh;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
    transform: rotateY(-10deg) rotateX(20deg) scale(1.3);
    filter: blur(2px);
    -webkit-filter: blur(2px);

    @media screen and (max-width: 760px) {
        top: 90px;
        transform: rotateY(1deg) rotateX(0deg) scale(1);
    }
`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.h1`
    color: #fff;
    font-size: 68px;
    text-align: center;
    margin-bottom: 15px;
    user-select: none;

    @media screen and (max-width: 760px) {
        font-size: 58px;
    }
`;

export const HomeP = styled.p`
    user-select: none;
    color: #7bfff6;
    margin-top: 0;
    font-size: 24px;
    text-align: center;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid #7bfff6; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.17em; /* Adjust as needed */
    animation: typing 3.5s steps(28, end), blink-caret 0.5s step-end infinite;

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 22.5em;
        }
    }
    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: #7bfff6;
        }
    }

    @media screen and (max-width: 760px) {
        font-size: 14px;
    }
`;

export const ScrollDown = styled.p`
    z-index: 5;
    color: #fff;
    font-weight: 600;
    max-width: fit-content;
    position: absolute;
    bottom: 7%;
    animation: float 3s ease-in-out infinite;
    display: none;

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        60% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @media all and (display-mode: standalone) {
        display: block;
    }
`;

export const InstallPWA = styled.button`
    cursor: pointer;
    border-radius: 50px;
    background: #7bfff6;
    padding: 16px 16px;
    color: #000;
    font-size: 1.4rem;
    outline: none;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    z-index: 5;
    position: absolute;
    bottom: 7%;
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0377fc;
        color: #fff;
    }

    @media all and (display-mode: standalone) {
        display: none;
    }
`;
