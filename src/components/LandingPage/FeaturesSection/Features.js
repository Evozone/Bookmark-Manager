import React from 'react';

import {
    FeaturesContainer,
    FeaturesWrapper,
    FeaturesRow,
    CloumnOne,
    CloumnTwo,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
} from './FeaturesElements.js';

const Features = ({ imgStart, heading, description, img, alt }) => {
    return (
        <FeaturesContainer>
            <FeaturesWrapper>
                <FeaturesRow imgStart={imgStart}>
                    <CloumnOne>
                        <TextWrapper>
                            <Heading>{heading}</Heading>
                            <Subtitle>{description}</Subtitle>
                        </TextWrapper>
                    </CloumnOne>
                    <CloumnTwo>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </CloumnTwo>
                </FeaturesRow>
            </FeaturesWrapper>
        </FeaturesContainer>
    );
};

export default Features;
