import React from 'react';
import { MuuriComponent } from 'muuri-react';

import Bookmark from './Bookmark';
import './Bookmarks.css';

const Bookmarks = ({ bookmarks }) => {
  
    const children = bookmarks.map((bookmark) => (
      <Bookmark key={bookmark.id} {...bookmark} />
    ));
  
    return (
        <div className="bookmarksContainer">
            <MuuriComponent dragEnabled>{children}</MuuriComponent>
        </div>
    );
};

export default Bookmarks;