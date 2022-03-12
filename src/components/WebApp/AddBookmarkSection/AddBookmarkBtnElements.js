import styled from 'styled-components';

export const Btn = styled.h1`
    padding: 20px;
    background: ${props => props.theme.addBkmBtnBg};
    color: ${props => props.theme.addBkmBtnTxtColor};
    border-radius: 7px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    width: fit-content;
    margin: 90px auto 30px;
    user-select: none;

    &:hover {
        background: ${props => props.theme.addBkmBtnHoverBg};
    }

    @media screen and (max-width: 800px) {
        margin: 140px auto 0;
    }

    @media screen and (max-width: 350px) {
        font-size: 27px;
        width: 80%;
    }
`;