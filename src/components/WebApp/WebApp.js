import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Toolbar from './ToolbarSection/Toolbar';
import AddBookmarkBtn from './AddBookmarkSection/AddBookmarkBtn';
import Bookmarks from './BookmarksSection/Bookmarks';

const WebApp = () => {

    const isSignedIn = useSelector((state) => 
        state.auth.isSignedIn
    );

    const [bookmarks, setBookmarks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (localStorage.getItem('bookmarks')) {
            var localBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            setBookmarks(localBookmarks);
        }
    },[]);

    const addBookmark = (bookmark) => {
      const newBookmarks = [...bookmarks, bookmark];
      setBookmarks(newBookmarks);
      window.localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    };

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const renderContent = () =>{
        console.log("from webapp ", isSignedIn);
        if(isSignedIn){
            return(
                <React.Fragment>
                    <Toolbar searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
                    <AddBookmarkBtn onSubmit={addBookmark} />
                    <Bookmarks searchTerm={searchTerm} bookmarks={bookmarks} />
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