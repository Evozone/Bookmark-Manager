import styled from 'styled-components';

export const StartUsingContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
`;

export const StartUsingWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 150px;
    padding: 0 50px;
    margin-bottom: 40px;

    @media screen and (max-width: 958px) {
        grid-gap: 30px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
        padding: 0;
        margin: 0 40px 40px 40px;
    }
`;

export const StartUsingCard = styled.div`
    background: #7bfff6;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: 0.3s ease-in;
    }
`;

export const StartUsingIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const StartUsingHeading = styled.div`
    font-size: 2.5rem;
    color: #7bfff6;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const StartUsingLocalBtn = styled.div`
    border-radius: 50px;
    background: red;
    color: #fff;
    white-space: nowrap;
    padding: 10px 19px;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    &:hover{
        transform: scale(1.03);
        transition: 0.3s ease-in;
        box-shadow: 0 1px 5px rgba(0,0,0,0.9);
    }
`;

export const StartUsingGoogleBtn = styled.div`
    border-radius: 50px;
    background: #00105d;
    color: #fff;
    white-space: nowrap;
    padding: 10px 19px;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    &:hover{
        transform: scale(1.03);
        transition: 0.3s ease-in;
        box-shadow: 0 1px 5px rgba(0,0,0,0.9);
    }
`;

export const ContentP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const ContentPRed = styled.h3`
    font-weight: 500 !important;
    color: red;
    font-size: 1rem;
    text-align: center;
`;
