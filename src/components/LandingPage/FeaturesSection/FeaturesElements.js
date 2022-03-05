import styled from 'styled-components';

export const FeaturesContainer =styled.div`
    padding-top: 90px;
    background: #141414;
`;

export const FeaturesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    max-width: 1080px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
`
export const FeaturesRow = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 30px;
    grid-auto-columns: fit-content(100%);
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 960px) {
        grid-template-areas: 'col2' 'col1';
        grid-auto-rows: fit-content(100%);
    }
`;

export const CloumnOne = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const CloumnTwo = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #7bfff6;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;