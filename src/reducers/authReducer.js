import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userPhoto: null,
    userId: null
};

const authReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
            return { ...state, 
                        isSignedIn: true, 
                        userPhoto: action.payload.userPhoto, 
                        userId: action.payload.userId 
                    };

        case SIGN_OUT:
            return { ...state, 
                        isSignedIn: false, 
                        userPhoto: null, 
                        userId: null
                    };

        default:
            return state;
    }
};

export default authReducer;
