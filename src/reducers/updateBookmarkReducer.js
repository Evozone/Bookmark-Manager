import { UPDTAE_BOOKMARK_INFO } from '../actions/types';

const INITIAL_STATE = {
    updatedBookmarkId: null,
};

const updateBookmarkReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDTAE_BOOKMARK_INFO:
            return {
                ...state,
                updatedBookmarkId: action.payload.updatedBookmarkId,
            };

        default:
            return state;
    }
};

export default updateBookmarkReducer;
