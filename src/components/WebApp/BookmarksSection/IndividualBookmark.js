import React from 'react';

import { 
    Item, 
    ItemContent, 
    TrashIcon, 
    ContentWrapper,
    WebsiteName,
    WebsiteFavicon
} from './IndividualBookmarkElements';

const IndividualBookmark = ({ websiteName, websiteURL, id }) => {

    return (
        <Item className="item" id={id}>
            <ItemContent className="item-content">
                <TrashIcon />
                <ContentWrapper>
                    <WebsiteFavicon src="https://s2.googleusercontent.com/s2/favicons?domain=https://www.google.com/search?q=askew&amp;ei=sKb_YZnnMPPe2roPm_C6qAo&amp;ved=0ahUKEwiZ__zp8ur1AhVzr1YBHRu4DqUQ4dUDCA4&amp;uact=5&amp;oq=askew&amp;gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBwgAELEDEEMyBwgAELEDEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIICC4QgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgAOgwILhDIAxCwAxBDGAFKBAhBGABKBAhGGAFQsQdYsQdguQloAXACeACAAeIBiAHiAZIBAzItMZgBAKABAcgBEcABAdoBBggAEAEYCdoBBggBEAEYCA&amp;sclient=gws-wiz" alt="Logo" />
                    <WebsiteName href={websiteURL}>{websiteName}</WebsiteName>
                </ContentWrapper>
            </ItemContent>
        </Item>
    );
};

export default IndividualBookmark;