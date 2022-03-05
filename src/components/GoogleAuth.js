import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../firebase/firebase-config';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

import history from '../history';
import { signInAction, signOutAction } from '../actions';
import { StartUsingGoogleBtn } from './LandingPage/StartUsingSection/StartUsingElements';
import { NavBtnLink, NavContentWrap } from './LandingPage/Navbar/NavbarElements';
import { MobileNavBtnLink } from './LandingPage/Navbar/MobileNavbarElements';

const GoogleAuth = ({ location }) => {
    
    const isSignedIn = useSelector((state) => 
        state.auth.isSignedIn
    );

    const dispatch = useDispatch();

    onAuthStateChanged(auth, (user) => {
        if(user){
            dispatch(signInAction(user.photoURL, user.uid));
            history.push("/app");
        }else{
            dispatch(signOutAction());
        }
    });

    function signInWithGoogle(){
        signInWithPopup(auth, provider)
        .then(() =>{
            history.push("/app");
        }).catch((error) => {
            console.log(error);
            alert("Oops there was some problem! with authentication. Please try again after some time");
        })
    }

    function renderButton(){
        console.log("from google auth", isSignedIn);
        if(location === "nav"){
            return(
                <NavBtnLink>
                    <NavContentWrap>
                        <FcGoogle 
                            size={27}
                        /> &nbsp; Log In
                    </NavContentWrap>
                </NavBtnLink>
            );
        }else if(location === "mobileNav"){
            return(
                <MobileNavBtnLink>
                    <FcGoogle 
                        size={33}
                    /> &nbsp; Log In
                </MobileNavBtnLink>
            );
        }else{
            return(
                <StartUsingGoogleBtn>
                    <FcGoogle size={25}/>
                    &nbsp; Continue with Google
                </StartUsingGoogleBtn>
            );
        }
    }

    return (
        <div onClick={signInWithGoogle}>
            {renderButton()}
        </div>
    );
}

export default GoogleAuth;
