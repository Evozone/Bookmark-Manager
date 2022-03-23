import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { modalVisibilityAction } from '../../../actions';
import AddBookmarkModal from '../AddBookmarkModal/AddBookmarkModal';
import { Btn } from './AddBookmarkBtnElements';

const AddBookmarkBtn = ({ onSubmit, onUpdate }) => {

  const dispatch = useDispatch();

  const modalVisibility = useSelector((state) => 
    state.modal.modalVisibility
  );
  
  const toggleModalVisibility = () => {
    dispatch(modalVisibilityAction(!modalVisibility, "addBookmark"));
  }

  return (
    <React.Fragment>
      <Btn onClick={toggleModalVisibility}>+</Btn>
      { 
        modalVisibility && 
        <AddBookmarkModal
          onSubmit={onSubmit}
          onUpdate={onUpdate}
        />
      }
    </React.Fragment>

  )
}

export default AddBookmarkBtn;
