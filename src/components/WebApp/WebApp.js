import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';
import { Redirect } from 'react-router-dom';

import history from '../../history';
import AddBookmarkBtn from './AddBookmarkSection/AddBookmarkBtn';
import Bookmarks from './BookmarksSection/Bookmarks';

const WebApp = () => {

    const isSignedIn = useSelector((state) => 
        state.auth.isSignedIn
    );

    const userPhoto = useSelector((state) => 
        state.auth.userPhoto
    );

    // const userId = useSelector((state) => 
    //     state.auth.userId
    // );

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('bookmarks')) {
            var localBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            setBookmarks(localBookmarks);
        }
    },[]);

    const addBookmark = bookmark => {
      const newBookmarks = [...bookmarks, bookmark];
  
      setBookmarks(newBookmarks);
      window.localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    };

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
                <React.Fragment>
                    <div className="toolbar">
                        <img src={`${userPhoto}`} alt="user profile" style={{width: "70px", height:"70px"}}></img>
                        <button onClick={signOutGoogle}>Sign Out</button>
                    </div>
                    <AddBookmarkBtn onSubmit={addBookmark} />
                    <Bookmarks bookmarks={bookmarks} />
                </React.Fragment>
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