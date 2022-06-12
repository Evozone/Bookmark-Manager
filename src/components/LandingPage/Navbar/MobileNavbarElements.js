import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll/modules';

export const MobileNavBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    user-select: none;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.9rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    user-select: none;
`;

export const MobileNavBarWrapper = styled.div`
    color: #fff;
`;

export const MobileNavBarMenu = styled.ul`
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    user-select: none;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80);
    }
`;

export const MobileNavItem = styled.li`
    height: 34px;
`;

export const MobileNavBarLink = styled(LinkScroll)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #7bfff6;
        transition: 0.2s ease-in-out;
    }
`;

export const MobileNavBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileNavBtnLink = styled.div`
    cursor: pointer;
    border-radius: 50px;
    background: #7bfff6;
    white-space: nowrap;
    padding: 16px 24px;
    color: #000;
    font-size: 1.5rem;
    outline: none;
    border: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;
`;
