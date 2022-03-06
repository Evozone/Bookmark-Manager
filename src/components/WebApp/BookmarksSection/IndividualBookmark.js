import React from 'react';

const IndividualBookmark = ({ websiteName, websiteURL, id }) => {

    return (
        <div  id={id}  className="item">
            <div className="item-content">
                <a href={websiteURL}>{websiteName}</a>
            </div>
        </div>
    );
};

export default IndividualBookmark;