import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: #0c0c0c;
    color: #fff;
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
        background: linear-gradient(
                0, 
                rgba(0,0,0,0.6) 0%, 
                rgba(0,0,0,1) 100%
            ),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
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

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
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
    @media screen and (max-width: 760px) {
        font-size: 58px;
    }
`;

export const HomeP = styled.p`
    color: #7bfff6;
    margin-top: 0;
    font-size: 24px;
    text-align: center;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid #7bfff6; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .17em; /* Adjust as needed */
    animation: 
        typing 3.5s steps(28, end),
        blink-caret .5s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 22.5em }
    }
    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #7bfff6 }
    }

    @media screen and (max-width: 760px) {
        font-size: 14px;
    }
`;