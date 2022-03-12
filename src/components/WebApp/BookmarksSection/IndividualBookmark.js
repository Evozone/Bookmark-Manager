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

    const faviconLink = `https://s2.googleusercontent.com/s2/favicons?domain=${websiteURL}`;

    return (
        <Item className="item" id={id}>
            <ItemContent className="item-content">
                <TrashIcon />
                <ContentWrapper>
                    <WebsiteFavicon src={faviconLink} alt="Logo" />
                    <WebsiteName href={websiteURL}>{websiteName}</WebsiteName>
                </ContentWrapper>
            </ItemContent>
        </Item>
    );
};

export default IndividualBookmark;