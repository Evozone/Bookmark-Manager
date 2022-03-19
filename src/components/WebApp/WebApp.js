import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { 
    doc,
    setDoc,
    collection, 
    onSnapshot, 
} from 'firebase/firestore';

import { db } from '../../firebase/firebase-config';
import { GlobalStyles } from './WebAppGlobalStyle';
import { lightTheme, darkTheme} from './Theme';
import Toolbar from './ToolbarSection/Toolbar';
import AddBookmarkBtn from './AddBookmarkSection/AddBookmarkBtn';
import Bookmarks from './BookmarksSection/Bookmarks';

const WebApp = () => {

    const isSignedIn = useSelector((state) => 
        state.auth.isSignedIn
    );

    const userId = useSelector((state) => 
        state.auth.userId
    );

    const [bookmarks, setBookmarks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [theme, setTheme] = useState('dark');

    const addBookmark= async(websiteName, websiteURL) => {
        let id = new Date().getTime();
        if(userId){ 
            await setDoc(doc(db, userId, `_${id}`), 
                { 
                    id: `_${id}`, 
                    websiteName: websiteName, 
                    websiteURL: websiteURL 
                }
            );        
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme){
            setTheme(localTheme);
        }

        if(userId){
            onSnapshot(collection(db, userId),(snapshot) => {
                setBookmarks(snapshot.docs.map(doc => doc.data()))
            },[]);
        }
    },[userId]);

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
                    {   
                        bookmarks && 
                        <Bookmarks searchTerm={searchTerm} bookmarks={bookmarks} /> 
                    }
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
