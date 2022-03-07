import React from 'react';
import { IoMdTrash } from 'react-icons/io';

const IndividualBookmark = ({ websiteName, websiteURL, id }) => {

    return (
        <div  id={id}  className="item">
            <div className="item-content">
                <IoMdTrash className="trashIcon"/>
                <div className="websiteName">
                    <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://www.google.com/search?q=askew&amp;ei=sKb_YZnnMPPe2roPm_C6qAo&amp;ved=0ahUKEwiZ__zp8ur1AhVzr1YBHRu4DqUQ4dUDCA4&amp;uact=5&amp;oq=askew&amp;gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBwgAELEDEEMyBwgAELEDEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIICC4QgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgAOgwILhDIAxCwAxBDGAFKBAhBGABKBAhGGAFQsQdYsQdguQloAXACeACAAeIBiAHiAZIBAzItMZgBAKABAcgBEcABAdoBBggAEAEYCdoBBggBEAEYCA&amp;sclient=gws-wiz" alt="Logo" />
                    <a href={websiteURL}>{websiteName}</a>
                </div>
            </div>
        </div>
    );
};

export default IndividualBookmark;