import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';

import { db } from '../../../firebase/firebase-config';
import { 
    Item, 
    ItemContent, 
    CustomTrashIcon,
    ContentWrapper,
    WebsiteName,
    WebsiteFavicon
} from './IndividualBookmarkElements';

const IndividualBookmark = ({ websiteName, websiteURL, id }) => {
    const userId = useSelector((state) => 
        state.auth.userId
    );

    const deleteBookmark = async(e) => {
        let bookmarkId = e.target.getAttribute("data-id");
        if(userId){
            await deleteDoc(doc(db, userId, bookmarkId));
        }
    }

    const faviconLink = `https://s2.googleusercontent.com/s2/favicons?domain=${websiteURL}`;

    return (
        <Item className="item" id={id}>
            <ItemContent className="item-content">
                <CustomTrashIcon deleteBookmark={deleteBookmark} dataId={id} />
                <ContentWrapper>
                    <WebsiteFavicon src={faviconLink} alt="Logo" />
                    <WebsiteName target="_blank" href={websiteURL}>{websiteName}</WebsiteName>
                </ContentWrapper>
            </ItemContent>
        </Item>
    );
};

export default IndividualBookmark;
