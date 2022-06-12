import styled from 'styled-components';

export const Btn = styled.button`
    font-size: 50px;
    padding: 0px 15px 0 15px;
    background-color: ${(props) => props.theme.addBkmBtnBg};
    color: ${(props) => props.theme.addBkmIconColor};
    border-radius: 50%;
    cursor: pointer;
    border: none;
    position: fixed;
    bottom: 20px;
    right: 50px;
    z-index: 99;
    margin: 0;

    @media screen and (max-width: 600px) {
        font-size: 49px;
        padding: 0px 13px 0 13px;
        right: 20px;
    }
`;
