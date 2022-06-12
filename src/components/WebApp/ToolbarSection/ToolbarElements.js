import styled from 'styled-components';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';

export const ToolbarContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #00072e;
    box-shadow: 0 3px 6px 0 rgb(0, 0, 0);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
`;

export const ToggleThemeBtn = styled(WiMoonAltThirdQuarter)`
    position: absolute;
    font-size: 35px;
    color: white;
    cursor: pointer;
    top: 17px;
    left: 45px;
    transition: all 0.5s linear;
    transform: ${({ theme }) => (theme === 'light' ? '' : 'scaleX(-1)')};
    user-select: none;

    @media screen and (max-width: 850px) {
        left: 20px;
    }

    @media screen and (max-width: 800px) {
        left: 16px;
    }
`;

export const SearchInput = styled.input`
    padding-left: 20px;
    margin: 15px;
    height: 35px;
    width: 450px;
    border-radius: 30px;
    border: solid 1px black;
    outline: none;

    @media screen and (max-width: 800px) {
        margin-top: 70px;
    }
`;

export const SignOutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px 0 5px;
    position: absolute;
    top: 12.3px;
    right: 45px;
    height: 45px;
    border-radius: 25px;
    cursor: pointer;
    background: #7bfff6;
    color: rgb(0, 0, 0);
    user-select: none;

    &:hover {
        background: red;
        color: white;
    }

    @media screen and (max-width: 850px) {
        right: 20px;
    }

    @media screen and (max-width: 800px) {
        right: 16px;
    }
`;

export const UserProfileImg = styled.img`
    border-radius: 50%;
    border: 2px solid black;
    height: 37px;
    width: 37px;
    margin: 0 5px 0 0;
`;

export const SignOutTxt = styled.p`
    font-weight: 500;
`;
