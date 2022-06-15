import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { useRefresh } from 'muuri-react';

import {
    modalVisibilityAction,
    updateBookmarkInfoAction,
} from '../../../actions';
import { db } from '../../../firebase/firebase-config';
import {
    Item,
    ItemContent,
    CustomTrashIcon,
    CustomEditIcon,
    ContentWrapper,
    WebsiteName,
    WebsiteFavicon,
} from './IndividualBookmarkElements';

const IndividualBookmark = ({ websiteName, websiteURL, id }) => {
    const dispatch = useDispatch();

    const userId = useSelector((state) => state.auth.userId);
    const modalVisibility = useSelector((state) => state.modal.modalVisibility);

    useRefresh([websiteName]);

    const toggleModalVisibility = () => {
        dispatch(
            modalVisibilityAction(
                !modalVisibility,
                'updateBookmark',
                websiteName,
                websiteURL
            )
        );
    };

    const deleteBookmark = async (e) => {
        let bookmarkId = e.target.getAttribute('data-id');
        if (userId) {
            await deleteDoc(doc(db, userId, bookmarkId));
        }
    };

    const idForUpdateBookmark = (e) => {
        let bookmarkId = e.target.getAttribute('data-id');
        dispatch(updateBookmarkInfoAction(bookmarkId));
        toggleModalVisibility();
    };

    const faviconLink = `https://s2.googleusercontent.com/s2/favicons?domain=${websiteURL}`;

    return (
        <Item className='item' id={id}>
            <ItemContent className='item-content'>
                <CustomEditIcon
                    updateBookmark={idForUpdateBookmark}
                    dataId={id}
                />
                <CustomTrashIcon deleteBookmark={deleteBookmark} dataId={id} />
                <ContentWrapper>
                    <WebsiteFavicon src={faviconLink} alt='Logo' />
                    <WebsiteName target='_blank' href={websiteURL}>
                        {websiteName}
                    </WebsiteName>
                </ContentWrapper>
            </ItemContent>
        </Item>
    );
};

export default IndividualBookmark;
