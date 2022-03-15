import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { db } from '../../firebase/firebase-config';
import { 
    getDocs, 
    collection, 
    onSnapshot, 
    query,
    doc
} from 'firebase/firestore';

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

    useEffect(() => {
        const getBookmarks = async() => {
            if(userId){
                const tempArray = [];
                const bookmarksCollection = collection(db, userId);
                const data = await getDocs(bookmarksCollection);
                data.forEach((doc) => {
                    tempArray.push(doc.data());
                })                
                // console.log("tempArray", tempArray);
                setBookmarks(tempArray)
                // console.log("bookmarks", bookmarks);
            }
        }
        getBookmarks();
    },[userId])

    // const getBookmarks = useCallback(
    //     async() => {
    //         if(userId){
    //             const bookmarksCollection = collection(db, userId);
    //             const data = await getDocs(bookmarksCollection);
    //             setBookmarks(data.docs.map((doc) => ({ ...doc.data() })));
    //         }
    //     },[userId]
    // );

    // useEffect(() => {
    //     const listen = () => {
    //         if(userId){
    //             const q = query(collection(db, userId));
    //             onSnapshot(q, (snapshot) => {
    //                 let changes = snapshot.docChanges();  
    //                 getBookmarks();
    //                 setBookmarks(
    //                     changes.map((change) => {
    //                         if(change.type === "added"){
    //                             return change.doc.data()
    //                         }else if(change.type === "removed"){
                                
    //                         }
    //                     }) 
    //                 )
    //             });
    //         }
    //     }
    //     listen();
    // },[userId, getBookmarks])

    // if(userId){
    //     onSnapshot(collection(db, userId),(snapshot) => {
    //         setBookmarks(snapshot.docs.map(doc => doc.data()))
    //     },[userId, bookmarks]);
    // }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme){
            setTheme(localTheme);
        }

        if(userId){
            onSnapshot(collection(db, userId),(snapshot) => {
                setBookmarks(snapshot.docs.map(doc => doc.data()))
            },[userId, bookmarks]);
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
                    <AddBookmarkBtn />
                    { bookmarks && <Bookmarks searchTerm={searchTerm} bookmarks={bookmarks} /> }
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
