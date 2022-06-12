import {
    SIGN_IN,
    SIGN_OUT,
    MODAL_VISIBILITY,
    UPDTAE_BOOKMARK_INFO,
} from './types';

export const signInAction = (userPhoto, userId) => {
    return {
        type: SIGN_IN,
        payload: {
            userPhoto,
            userId,
        },
    };
};

export const signOutAction = () => {
    return {
        type: SIGN_OUT,
    };
};

export const modalVisibilityAction = (
    modalVisibility,
    modalType,
    websiteName,
    websiteURL
) => {
    return {
        type: MODAL_VISIBILITY,
        payload: {
            modalVisibility,
            modalType,
            websiteName,
            websiteURL,
        },
    };
};

export const updateBookmarkInfoAction = (updatedBookmarkId) => {
    return {
        type: UPDTAE_BOOKMARK_INFO,
        payload: {
            updatedBookmarkId,
        },
    };
};
