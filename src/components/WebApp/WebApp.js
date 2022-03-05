import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';
import { Redirect } from 'react-router-dom';

import history from '../../history';
import Home from './Home';

const WebApp = () => {

    const isSignedIn = useSelector((state) => 
        state.auth.isSignedIn
    );

    const userPhoto = useSelector((state) => 
        state.auth.userPhoto
    );

    const userId = useSelector((state) => 
        state.auth.userId
    );

    function signOutGoogle(){
        signOut(auth).then(() => {
            alert("Successfully logged out, buh byee! See you later :)");
            history.push("/");
        }).catch((error) => {
            alert("error");
        });
    }

    function renderContent(){
        console.log("from webapp ", isSignedIn);
        if(isSignedIn){
            return(
                <div>
                    <img src={`${userPhoto}`} alt="user profile" style={{width: "70px", height:"70px"}}></img>
                    <button onClick={signOutGoogle}>Sign Out</button>
                    <p>{userId}</p>
                    <Home/>
                </div>
            );
        }else{
            return(
                <Redirect to="/"/>
            );
        }
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
}
  
export default WebApp;