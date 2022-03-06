import React, { useState } from 'react';

import AddBookmarkModal from '../AddBookmarkModal/AddBookmarkModal';
import { Btn } from './AddBookmarkBtnElements';

const AddBookmarkBtn = ({ onSubmit }) => {

  const [modalVisibility, setModalVisibility] = useState(false);
  
  const toggleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  }

  return (
    <React.Fragment>
      <Btn onClick={toggleModalVisibility}>Add Bookmark</Btn>
      {modalVisibility && 
        <AddBookmarkModal 
          onSubmit={onSubmit} 
          setModalVisibility={setModalVisibility} 
        />}
    </React.Fragment>

  )
}

export default AddBookmarkBtn;
