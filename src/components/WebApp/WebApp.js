import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
    doc,
    setDoc,
    updateDoc,
    collection,
    onSnapshot,
} from 'firebase/firestore';

import { db } from '../../firebase/firebase-config';
import { GlobalStyles } from './WebAppGlobalStyle';
import { lightTheme, darkTheme } from './Theme';
import Toolbar from './ToolbarSection/Toolbar';
import AddBookmarkBtn from './AddBookmarkSection/AddBookmarkBtn';
import Bookmarks from './BookmarksSection/Bookmarks';

const WebApp = () => {
    const userId = useSelector((state) => state.auth.userId);

    const idForUpdateBookmark = useSelector(
        (state) => state.updateBookmarkInfo.updatedBookmarkId
    );

    const [bookmarks, setBookmarks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [theme, setTheme] = useState('dark');

    const addBookmark = async (websiteName, websiteURL) => {
        let id = new Date().getTime();
        if (userId) {
            await setDoc(doc(db, userId, `_${id}`), {
                id: `_${id}`,
                websiteName: websiteName,
                websiteURL: websiteURL,
            });
        }
    };

    const updateBookmark = async (websiteName, websiteURL) => {
        const updatedData = {
            websiteName: websiteName,
            websiteURL: websiteURL,
        };
        await updateDoc(doc(db, userId, idForUpdateBookmark), updatedData);
        renderContent();
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }

        if (userId) {
            onSnapshot(
                collection(db, userId),
                (snapshot) => {
                    setBookmarks(snapshot.docs.map((doc) => doc.data()));
                },
                []
            );
        }
    }, [userId]);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    const renderContent = () => {
        return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Toolbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    searchTerm={searchTerm}
                    handleSearchTerm={handleSearchTerm}
                />
                <AddBookmarkBtn
                    onUpdate={updateBookmark}
                    onSubmit={addBookmark}
                />
                {bookmarks && (
                    <Bookmarks searchTerm={searchTerm} bookmarks={bookmarks} />
                )}
            </ThemeProvider>
        );
    };

    return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default WebApp;
