import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './WebAppGlobalStyle';
import { lightTheme, darkTheme} from './Theme';
import Toolbar from './ToolbarSection/Toolbar';
import AddBookmarkBtn from './AddBookmarkSection/AddBookmarkBtn';
import Bookmarks from './BookmarksSection/Bookmarks';

const WebApp = () => {

    const isSignedIn = useSelector((state) => 
        state.auth.isSignedIn
    );

    const [bookmarks, setBookmarks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (localStorage.getItem('bookmarks')) {
            var localBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            setBookmarks(localBookmarks);
        }

        const localTheme = window.localStorage.getItem('theme');
        if(localTheme){
            setTheme(localTheme);
        }
    },[]);

    const addBookmark = (bookmark) => {
      const newBookmarks = [...bookmarks, bookmark];
      setBookmarks(newBookmarks);
      window.localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    }

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const renderContent = () =>{
        console.log("from webapp ", isSignedIn);
        if(isSignedIn){
            return(
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <GlobalStyles />
                    <Toolbar 
                        theme={theme} 
                        toggleTheme={toggleTheme} 
                        searchTerm={searchTerm} 
                        handleSearchTerm={handleSearchTerm} 
                    />
                    <AddBookmarkBtn onSubmit={addBookmark} />
                    <Bookmarks searchTerm={searchTerm} bookmarks={bookmarks} />
                </ThemeProvider>
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
