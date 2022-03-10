import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.bgColor};
        background-image: ${props => props.theme.bgImg};
        transition: all 0.5s linear;
    }
`;