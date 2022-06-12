import { combineReducers } from 'redux';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import updateBookmarkReducer from './updateBookmarkReducer';

export default combineReducers({
    auth: authReducer,
    modal: modalReducer,
    updateBookmarkInfo: updateBookmarkReducer,
});
