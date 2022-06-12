import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { modalVisibilityAction } from '../../../actions';
import './AddBookmarkModalElements.js';
import {
    ModalContainer,
    Modal,
    ModalHeader,
    CloseIcon,
    H3,
    ModalContent,
    FormGroup,
    FormLabel,
    FormInput,
    SaveBookmarkBtn,
} from './AddBookmarkModalElements';

const AddBookmarkModal = ({ onSubmit, onUpdate }) => {
    const dispatch = useDispatch();

    const modalVisibility = useSelector((state) => state.modal.modalVisibility);
    const modalType = useSelector((state) => state.modal.modalType);
    const websiteNameInitialValue = useSelector(
        (state) => state.modal.websiteName
    );
    const websiteURLInitialValue = useSelector(
        (state) => state.modal.websiteURL
    );
    const [websiteName, setWebsiteName] = useState(websiteNameInitialValue);
    const [websiteURL, setWebsiteURL] = useState(websiteURLInitialValue);

    const handleNameChange = (e) => {
        setWebsiteName(e.target.value.toLowerCase());
    };

    const handleURLChange = (e) => {
        setWebsiteURL(e.target.value);
    };

    const saveBookmark = (e) => {
        e.preventDefault();
        if (!websiteName || !websiteURL) {
            alert('Please Submit values for both fields.');
            return false;
        }
        if (
            websiteName === websiteNameInitialValue &&
            websiteURL === websiteURLInitialValue
        ) {
            alert('Please make a change to update the bookmark');
            return false;
        }
        modalType === 'addBookmark'
            ? onSubmit(websiteName, websiteURL)
            : onUpdate(websiteName, websiteURL);
        toggleModalVisibility();
        setWebsiteName('');
        setWebsiteURL('');
    };

    const toggleModalVisibility = () => {
        dispatch(modalVisibilityAction(!modalVisibility));
    };

    return ReactDOM.createPortal(
        <ModalContainer onClick={toggleModalVisibility}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={toggleModalVisibility} />
                <ModalHeader>
                    <H3>
                        {modalType === 'addBookmark' ? 'Add' : 'Update'}{' '}
                        Boookmark
                    </H3>
                </ModalHeader>
                <ModalContent>
                    <form onSubmit={saveBookmark}>
                        <FormGroup>
                            <FormLabel>Website Name</FormLabel>
                            <FormInput
                                autoFocus
                                value={websiteName}
                                onChange={handleNameChange}
                                type='text'
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Website URL</FormLabel>
                            <FormInput
                                type='url'
                                value={websiteURL}
                                onChange={handleURLChange}
                            />
                        </FormGroup>
                        <SaveBookmarkBtn onClick={saveBookmark}>
                            Save
                        </SaveBookmarkBtn>
                    </form>
                </ModalContent>
            </Modal>
        </ModalContainer>,
        document.querySelector('#addBookmarkModal')
    );
};

export default AddBookmarkModal;
