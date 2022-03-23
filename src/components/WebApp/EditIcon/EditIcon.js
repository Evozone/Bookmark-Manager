import React from 'react';

const TrashIcon = ({ className, dataId, updateBookmark }) => {
    return (
        <svg onClick={updateBookmark} xmlns="http://www.w3.org/2000/svg" data-id={dataId} className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
            <path data-id={dataId} d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
    );
}

export default TrashIcon;
