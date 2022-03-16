import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { db } from '../../firebase/firebase-config';
import { 
    doc,
    setDoc,
    // getDocs
    collection, 
    onSnapshot, 
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

    // useEffect(() => {
    //     const getBookmarks = async() => {
    //         if(userId){
    //             const tempArray = [];
    //             const bookmarksCollection = collection(db, userId);
    //             const data = await getDocs(bookmarksCollection);
    //             data.forEach((doc) => {
    //                 tempArray.push(doc.data());
    //             })                
    //             // console.log("tempArray", tempArray);
    //             setBookmarks(tempArray)
    //             // console.log("bookmarks", bookmarks);
    //         }
    //     }
    //     getBookmarks();
    // },[userId])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(localTheme){
            setTheme(localTheme);
        }

        if(userId){
            // const tempArray = [];
            onSnapshot(collection(db, userId),(snapshot) => {
                // snapshot.docChanges().forEach((change) => {
                //     if (change.type === "added") {
                //         // console.log("Added bookmark ",change.doc.data());
                //         tempArray.push(change.doc.data());
                //     }
                //     if (change.type === "removed") {
                //         console.log("Removed bookmark ",change.doc.data());
                //         tempArray.pop(change.doc.data());
                //     }                          
                // })
                // console.log("Above setstate ", tempArray);
                // console.log([...bookmarks, ...tempArray]);
                // setBookmarks(tempArray);
                // setTimeout(() => {
                //     console.log("Below setstate ", bookmarks);
                // }, 6000)
                // console.log("below set state bookmarks ", bookmarks);
                // snapshot.docs.map(doc => console.log(doc.data()));
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
