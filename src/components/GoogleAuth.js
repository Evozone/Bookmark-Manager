import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../firebase/firebase-config';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

import history from '../history';
import { signInAction, signOutAction } from '../actions';
import { StartUsingGoogleBtn } from './LandingPage/StartUsingSection/StartUsingElements';
import { NavBtnLink, NavContentWrap } from './LandingPage/Navbar/NavbarElements';
import { MobileNavBtnLink } from './LandingPage/Navbar/MobileNavbarElements';

class GoogleAuth extends Component {
    
    componentDidMount(){
        onAuthStateChanged(auth, (user) => {
            if(user){
                this.props.signInAction(user.photoURL, user.uid);
                history.push("/app");
            }else{
                this.props.signOutAction();
            }
        });
    }

    signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(() =>{
            history.push("/app");
        }).catch((error) => {
            console.log(error);
            alert("Oops there was some problem! with authentication. Please try again after some time");
        })
    }

    renderButton = () => {
        console.log("from google auth", this.props.isSignedIn);
        if(this.props.location === "nav"){
            return(
                <NavBtnLink>
                    <NavContentWrap>
                        <FcGoogle 
                            size={27}
                        /> &nbsp; Log In
                    </NavContentWrap>
                </NavBtnLink>
            );
        }else if(this.props.location === "mobileNav"){
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

    render() {
        return (
            <div onClick={this.signInWithGoogle}>
                {this.renderButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {
    signInAction, signOutAction
})(GoogleAuth);
