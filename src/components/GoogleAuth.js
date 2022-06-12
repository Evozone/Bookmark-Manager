import React from 'react';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../firebase/firebase-config';
import { signInWithPopup } from 'firebase/auth';

import { MobileNavBtnLink } from './LandingPage/Navbar/MobileNavbarElements';
import {
    NavBtnLink,
    NavContentWrap,
} from './LandingPage/Navbar/NavbarElements';
import { signInAction } from '../actions';
import { StartUsingGoogleBtn } from './LandingPage/StartUsingSection/StartUsingElements';

const GoogleAuth = ({ location }) => {
    const dispatch = useDispatch();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(signInAction(user.photoURL, user.uid));
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
                alert(
                    'Oops there was some problem! with authentication. Please try again after some time'
                );
            });
    };

    const renderButton = () => {
        if (location === 'nav') {
            return (
                <NavBtnLink>
                    <NavContentWrap>
                        <FcGoogle size={27} /> &nbsp; Sign In
                    </NavContentWrap>
                </NavBtnLink>
            );
        } else if (location === 'mobileNav') {
            return (
                <MobileNavBtnLink>
                    <FcGoogle size={33} /> &nbsp; Sign In
                </MobileNavBtnLink>
            );
        } else {
            return (
                <StartUsingGoogleBtn>
                    <FcGoogle size={25} />
                    &nbsp; Continue with Google
                </StartUsingGoogleBtn>
            );
        }
    };

    return <div onClick={signInWithGoogle}>{renderButton()}</div>;
};

export default GoogleAuth;
