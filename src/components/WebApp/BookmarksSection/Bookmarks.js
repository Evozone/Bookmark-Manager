import React, { useCallback } from 'react';
import { MuuriComponent } from 'muuri-react';

import './Bookmarks.css';
import IndividualBookmark from './IndividualBookmark';
import { BookmarksContainer } from './BookmarksElements';

const Bookmarks = ({ bookmarks, searchTerm }) => {
  
    const children = bookmarks.map((bookmark) => (
        <IndividualBookmark  
            id={bookmark.id} 
            text={bookmark.websiteName} 
            key={bookmark.id} 
            {...bookmark} 
        />
    ));

    const filterFunction = useCallback(
        ({websiteName}) => {
            return websiteName.indexOf(searchTerm) > -1;
        },
        [searchTerm]
    );
  
    return (
        <BookmarksContainer>
            <MuuriComponent 
                dragEnabled
                sort={ 
                    window.localStorage.getItem('layout') && window.localStorage.getItem('layout').split(",")
                }
                propsToData={({id, websiteName}) => ({id, websiteName})}
                filter={filterFunction}
                onDragEnd={function (item) {
                    const grid = item.getGrid();
                    const items = grid.getItems();
                    const keys = items.map((item) => item.getKey());        
                    window.localStorage.setItem('layout', keys)
                }}
            >
                {children}
            </MuuriComponent>
        </BookmarksContainer>
    );
};

export default Bookmarks;
