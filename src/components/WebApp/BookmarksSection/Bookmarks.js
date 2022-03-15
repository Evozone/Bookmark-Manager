import React, { useCallback } from 'react';
import { MuuriComponent } from 'muuri-react';

import IndividualBookmark from './IndividualBookmark';
import './Bookmarks.css';
import { BookmarksContainer } from './BookmarksElements';

const Bookmarks = ({ bookmarks, searchTerm }) => {
  
    const children = bookmarks.map((bookmark) => (
      <IndividualBookmark key={bookmark.id} {...bookmark} />
    ));

    const filterFunction = useCallback(
        ({websiteName}) => {
          // Return if the input is contained in the text data.
          return websiteName.indexOf(searchTerm) > -1;
        },
        [searchTerm]
    );
  
    return (
        <BookmarksContainer>
            <MuuriComponent 
                dragEnabled
                propsToData={({websiteName}) => ({websiteName})}
                filter={filterFunction}
            >
                {children}
            </MuuriComponent>
        </BookmarksContainer>
    );
};

export default Bookmarks;
