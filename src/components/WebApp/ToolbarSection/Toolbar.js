import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../../firebase/firebase-config';
import { signOut } from 'firebase/auth';

import history from '../../../history';
import './ToolbarElements.css';

const Toolbar = ({ handleSearchTerm, searchTerm }) => {
    
    const userPhoto = useSelector((state) => 
        state.auth.userPhoto
    );

    // const userId = useSelector((state) => 
    //     state.auth.userId
    // );

    const signOutGoogle = () =>{
        signOut(auth).then(() => {
            alert("Successfully logged out, buh byee! See you later :)");
            history.push("/");
        }).catch((error) => {
            alert("error");
        });
    }

    return (
        <div className="toolbar">
            <button>Theme</button>
            <input placeholder='🔎    Search for a bookmark...' value={searchTerm} onChange={handleSearchTerm} type="text" />
            <div onClick={signOutGoogle} className="signOutWrapper">
                <img src={`${userPhoto}`} alt="user profile" style={{width: "70px", height:"70px"}}></img>
                <p>Sign Out</p>
            </div>
        </div>
    );
}

export default Toolbar;