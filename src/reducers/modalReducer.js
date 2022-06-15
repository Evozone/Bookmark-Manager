import { MODAL_VISIBILITY } from '../actions/types';

const INITIAL_STATE = {
    modalVisibility: false,
    modalType: '',
    websiteName: '',
    websiteURL: '',
};

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_VISIBILITY:
            return {
                ...state,
                modalVisibility: action.payload.modalVisibility,
                modalType: action.payload.modalType,
                websiteName: action.payload.websiteName,
                websiteURL: action.payload.websiteURL,
            };

        default:
            return state;
    }
};

export default modalReducer;
