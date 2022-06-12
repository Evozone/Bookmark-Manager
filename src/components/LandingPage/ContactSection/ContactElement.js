import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: #141414;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 90px 190px 10px;

    @media screen and (max-width: 1300px) {
        padding: 90px 70px 10px;
    }

    @media screen and (max-width: 700px) {
        padding: 90px 45px 30px;
    }
`;

export const ContactWrap = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    align-items: left;
    justify-content: space-around;
    padding: 20px auto;
    @media screen and (max-width: 1080px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const LeftContent = styled.div`
    padding-right: 60px;
    max-width: 33.3%;
    @media screen and (max-width: 1080px) {
        padding-left: 50px;
        max-width: 80%;
    }
    @media screen and (max-width: 700px) {
        padding: 10px;
        max-width: 100%;
    }
`;

export const MiddleContent = styled.div`
    max-width: 33.3%;
    @media screen and (max-width: 1080px) {
        padding-left: 50px;
        max-width: 80%;
    }
    @media screen and (max-width: 700px) {
        padding: 10px;
        max-width: 100%;
    }
`;

export const RightContent = styled.div`
    padding-left: 60px;
    max-width: 33.3%;
    @media screen and (max-width: 1080px) {
        padding-left: 50px;
        max-width: 80%;
    }
    @media screen and (max-width: 700px) {
        padding: 10px;
        max-width: 100%;
    }
`;

export const ContentH = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #7bfff6;
`;

export const Content = styled.div`
    margin-bottom: 30px;
    font-size: 19px;
    user-select: none;
`;

export const ContactBtn = styled.div`
    margin: 20px 0;
    border-radius: 50px;
    max-width: fit-content;
    background: #7bfff6;
    white-space: nowrap;
    padding: 10px 19px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.04);
        transition: 0.3s ease-in;
        text-decoration: underline;
        background: #0377fc;
        color: #fff;
        box-shadow: 0 1px 5px rgba(25, 255, 255, 0.7);
    }
`;
