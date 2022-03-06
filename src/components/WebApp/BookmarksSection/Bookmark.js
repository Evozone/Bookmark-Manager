import React from 'react';

const Bookmark = ({ text, id }) => {

    return (
        <div  id={id}  className="item">
            <div className="item-content">
                {text}
            </div>
        </div>
    );
};

export default Bookmark;