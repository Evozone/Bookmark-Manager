import { SIGN_IN, SIGN_OUT } from './types';

export const signInAction = (userPhoto, userId) => {
    return {
        type: SIGN_IN,
        payload: {
            userPhoto,
            userId
        }
    };
};

export const signOutAction = () => {
    return {
        type: SIGN_OUT
    };
};