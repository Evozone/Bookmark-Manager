import React, { useState, useEffect } from 'react';
/* Muuri react */
import { MuuriComponent } from 'muuri-react';

import Bookmark from './Bookmark';
import AddBookmark from './AddBookmark';
import './Home.css';

const Home = () => {

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
  
    const children = bookmarks.map((bookmark) => (
      <Bookmark key={bookmark.id} {...bookmark} />
    ));
  
    return (
        <div className="mainContainer">
            <AddBookmark onSubmit={addBookmark} />
            <div>
                <MuuriComponent dragEnabled>{children}</MuuriComponent>
            </div>
        </div>
    );
};

export default Home;